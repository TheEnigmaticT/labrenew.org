import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category?: string;
  description: string;
  image: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        category: (data.category as string) || undefined,
        description: data.description as string,
        image: data.image as string,
        content: "",
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return posts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    category: (data.category as string) || undefined,
    description: data.description as string,
    image: data.image as string,
    content: contentHtml,
  };
}

export function getAllSlugs(): string[] {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
