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
    image: "/images/blog-0.png",
    avatar: "/images/image-9.png",
  },
  {
    category: "Marketing",
    title: "The Flywheel of Revenue",
    excerpt:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    author: "Erica Landry",
    date: "29 Jan 2026",
    image: "/images/blog-1.png",
    avatar: "/images/image-10.png",
  },
  {
    category: "Investments",
    title: "The Flywheel of Revenue",
    excerpt:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    author: "Christopher Stewart",
    date: "10 Jan 2026",
    image: "/images/blog-2.png",
    avatar: "/images/image-11.png",
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
      <div className="relative h-[220px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="420px"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="text-[12px] font-semibold uppercase tracking-wide text-brand-orange mb-3">
          {post.category}
        </div>
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-[22px] font-bold text-brand-dark leading-tight">
            {post.title}
          </h3>
          <Link
            href="#"
            aria-label="Read article"
            className="shrink-0 w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-brand-orange hover:bg-brand-peachLight transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M7 17L17 7M17 7H8M17 7v9" />
            </svg>
          </Link>
        </div>
        <p className="mt-4 text-[14px] text-brand-bodyText leading-relaxed flex-1">
          {post.excerpt}
        </p>
        <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden bg-neutral-200">
            <Image
              src={post.avatar}
              alt={post.author}
              fill
              className="object-cover"
              sizes="32px"
            />
          </div>
          <div>
            <div className="text-[13px] font-medium text-brand-dark">
              {post.author}
            </div>
            <div className="text-[12px] text-brand-bodyText">{post.date}</div>
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
        <div className="absolute w-[493px] h-[48px] top-[188px] left-[473px]">
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
