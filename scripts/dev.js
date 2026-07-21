const { spawn } = require("child_process");
const os = require("os");
const path = require("path");

function getLocalIpv4() {
  for (const interfaces of Object.values(os.networkInterfaces())) {
    for (const iface of interfaces ?? []) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return null;
}

const port = process.env.PORT || "3000";
const localIp = getLocalIpv4();
const nextBin = path.join(
  path.dirname(require.resolve("next/package.json")),
  "dist/bin/next"
);

const child = spawn(
  process.execPath,
  [nextBin, "dev", "--hostname", "0.0.0.0", "-p", port],
  {
    stdio: ["inherit", "pipe", "pipe"],
    env: process.env,
    cwd: process.cwd(),
  }
);

function transformOutput(text) {
  if (!localIp) return text;

  return text.replace(
    /- Network:\s+http:\/\/0\.0\.0\.0:(\d+)/g,
    `- Network:      http://${localIp}:$1`
  );
}

function relay(stream, writer) {
  stream.on("data", (chunk) => {
    writer.write(transformOutput(chunk.toString()));
  });
}

relay(child.stdout, process.stdout);
relay(child.stderr, process.stderr);

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});
