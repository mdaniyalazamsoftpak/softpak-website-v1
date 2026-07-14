import Link from "next/link";
import Image from "next/image";
import { Albert_Sans } from "next/font/google";

const albertSans = Albert_Sans({ subsets: ["latin"], weight: ["400", "500"] });

const posts = [
  {
    category: "Portfolio Management",
    title: "Responsible AI in Finance",
    excerpt:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "Naaz Scheik",
    date: "20 Feb 2026",
    image: "/images/image-9.png",
    avatar: "/images/avatar-2.png",
  },
  {
    category: "Marketing",
    title: "The Flywheel of Revenue",
    excerpt:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    author: "Erica Landry",
    date: "29 Jan 2026",
    image: "/images/image-10.png",
    avatar: "/images/avatar-1.png",
  },
  {
    category: "Investments",
    title: "The Flywheel of Revenue",
    excerpt:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    author: "Christopher Stewart",
    date: "10 Jan 2026",
    image: "/images/image-11.png",
    avatar: "/images/avatar-0.png",
  },
];

function BlogCard({ post }: { post: (typeof posts)[number] }) {
  return (
    <article
      className="flex flex-col items-start px-[24px] pt-[24px] pb-[32px] gap-[32px] w-[386.67px] h-[580px] bg-white rounded-[24px] flex-none flex-grow"
      style={{
        boxShadow:
          "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
      }}
    >
      <div className="relative w-[338.67px] h-[220px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover rounded-[12px]"
        />
      </div>
      <div className="flex flex-col flex-1 w-[338.67px] h-[252px] justify-between opacity-100">
        <div className="w-[338.67px] h-[148px] opacity-100 flex flex-col gap-[12px]">
          <div
            className={`${albertSans.className} w-[338.67px] h-[20px] font-semibold text-[14px] leading-[20px] text-[#F05A24] flex-none self-stretch flex-grow-0`}
          >
            {post.category}
          </div>
          <div className="w-[338.67px] h-[116px] opacity-100 flex flex-col gap-[12px]">
            <div className="w-[338.67px] h-[32px] opacity-100 flex gap-[16px]">
              <h3
                className={`${albertSans.className} w-[298.67px] h-[32px] font-semibold text-[24px] leading-[32px] text-[#101828] flex-none flex-grow`}
              >
                {post.title}
              </h3>
              <div className="w-[24px] h-[28px] opacity-100 pt-[4px]">
                <div className="w-[24px] h-[24px] opacity-100 flex items-center justify-center">
                  <Image
                    src="/icons/arrow-icon.svg"
                    alt="icon"
                    width={10}
                    height={10}
                  />
                </div>
              </div>
            </div>
          </div>
          <p
            className={`${albertSans.className} w-[338.67px] h-[72px] font-normal text-[16px] leading-[24px] text-[#6A6A6A] flex-none self-stretch flex-grow-0`}
          >
            {post.excerpt}
          </p>
        </div>
        <div className="flex flex-row items-center p-0 gap-[12px] w-[136px] h-[40px] flex-none flex-grow-0">
          <div className="relative w-[40px] h-[40px] opacity-100 rounded-[200px] overflow-hidden flex-none">
            <Image
              src={post.avatar}
              alt={post.author}
              fill
              className="object-cover"
              sizes="32px"
            />
          </div>
          <div className="w-[84px] h-[40px] opacity-100">
            <div
              className={`${albertSans.className} w-[134px] h-[20px] font-medium text-[14px] leading-[20px] text-[#101828] flex-none flex-grow-0`}
            >
              {post.author}
            </div>
            <div
              className={`${albertSans.className} w-[84px] h-[20px] font-normal text-[14px] leading-[20px] text-[#667085] flex-none flex-grow-0`}
            >
              {post.date}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ExpertPerspective() {
  return (
    <section className="absolute w-full h-[1064px] top-[5151px] bg-[#F2F2F2] left-1/2 -translate-x-1/2">
      <div className="relative mx-auto w-[1440px] h-[1064px]">
        <div className="absolute w-[494px] h-[48px] top-[188px] left-[473px]">
          <h2
            className={`${albertSans.className} font-medium text-[48px] leading-[48px] tracking-[-1.1px] text-center text-[#0F0F0F]`}
          >
            Our Expert Perspective
          </h2>
        </div>
        <div className="absolute w-[567px] h-[50px] top-[252px] left-[449px]">
          <p
            className={`${albertSans.className} font-normal text-[18px] leading-[25px] tracking-[-0.44px] text-center text-[#0F0F0F]/60`}
          >
            Our solutions speak volume. We have been privileged to serve a range
            of organizations and professionals in managing their portfolios.
          </p>
        </div>
        <div className="absolute w-[1240px] h-[580px] left-1/2 -translate-x-1/2 top-[353px] flex flex-row justify-center items-start gap-[40px]">
          {posts.map((p, i) => (
            <BlogCard key={i} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
