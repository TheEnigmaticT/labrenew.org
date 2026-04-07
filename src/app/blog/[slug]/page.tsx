import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} - LabReNew`,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <Header />
      <main className="py-16 md:py-24">
        <article className="mx-auto max-w-[800px] px-6">
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-sm font-semibold text-lr-blue hover:text-lr-blue-light transition-colors"
            >
              &larr; Back to Blog
            </Link>
          </div>

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

          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-lr-blue mt-4 mb-8">
            {post.title}
          </h1>

          <div className="aspect-[16/9] relative rounded-2xl overflow-hidden mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div
            className="prose prose-lg max-w-none
              prose-headings:font-heading prose-headings:text-lr-blue
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-lr-text-muted prose-p:leading-relaxed
              prose-a:text-lr-blue-light prose-a:no-underline hover:prose-a:underline
              prose-strong:text-lr-dark
              prose-li:text-lr-text-muted
              prose-blockquote:border-lr-green prose-blockquote:text-lr-text"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 pt-8 border-t border-border">
            <Link
              href="/blog"
              className="text-[15px] font-semibold text-lr-blue hover:text-lr-blue-light transition-colors"
            >
              &larr; Back to all posts
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
