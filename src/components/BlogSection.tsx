import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    title: "Labs Are Driving More Carbon Than You Think. And That's the Point.",
    date: "Jan 12, 2026",
    image: "/images/blog-carbon.png",
    href: "/blog/labs-are-driving-more-carbon-than-you-think-and-thats-the-point",
  },
  {
    title: "The Procurement Mistake Costing Labs Thousands (And How to Fix It)",
    date: "Nov 19, 2025",
    category: "Articles",
    image: "/images/blog-procurement.png",
    href: "/blog/the-procurement-mistake-costing-labs-thousands-and-how-to-fix-it",
  },
];

export function BlogSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-lr-blue-accent mb-2">
            News &amp; Resources
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-lr-blue">
            Read our latest news
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {posts.map((post) => (
            <Link
              key={post.title}
              href={post.href}
              className="group block bg-lr-neutral rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                {post.category && (
                  <span className="text-xs font-semibold uppercase tracking-wider text-lr-blue-accent">
                    {post.category}
                  </span>
                )}
                <p className="text-sm text-lr-text-muted mt-1">{post.date}</p>
                <h3 className="font-heading text-xl font-bold text-lr-dark mt-2 group-hover:text-lr-blue transition-colors">
                  {post.title}
                </h3>
                <span className="inline-block mt-4 text-[15px] font-semibold text-lr-blue">
                  Read more &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center gap-4">
          <Link
            href="/donate"
            className="inline-flex items-center justify-center rounded-lg bg-lr-blue px-6 py-3 text-[15px] font-semibold text-white hover:bg-lr-blue-light transition-colors"
          >
            Donate now
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-lg border-2 border-lr-blue px-6 py-3 text-[15px] font-semibold text-lr-blue hover:bg-lr-blue hover:text-white transition-colors"
          >
            Read more news
          </Link>
        </div>
      </div>
    </section>
  );
}
