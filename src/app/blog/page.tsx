import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog - LabReNew",
  description: "News and resources from LabReNew",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-lr-blue-accent mb-2">
              News &amp; Resources
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-lr-blue">
              Blog
            </h1>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
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
                  <p className="text-sm text-lr-text-muted mt-1">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h2 className="font-heading text-lg font-bold text-lr-dark mt-2 group-hover:text-lr-blue transition-colors">
                    {post.title}
                  </h2>
                  <span className="inline-block mt-4 text-[15px] font-semibold text-lr-blue">
                    Read more &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
