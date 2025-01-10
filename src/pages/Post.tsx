import { Header } from "@/components/Header";
import { useParams } from "react-router-dom";

const Post = () => {
  const { slug } = useParams();
  
  // Mock data - em uma versão futura podemos integrar com uma API real
  const post = {
    title: "Getting Started with Modern Web Development",
    content: `
      Modern web development has evolved significantly over the past few years. With the introduction of new tools, frameworks, and best practices, it's more important than ever to stay up to date with the latest trends.

      In this comprehensive guide, we'll explore the essential aspects of modern web development and how you can get started on your journey to becoming a proficient web developer.

      We'll cover everything from setting up your development environment to deploying your first application, with practical examples and hands-on exercises along the way.
    `,
    date: "2024-03-10",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-2xl mx-auto bg-white rounded-lg p-8 shadow-sm">
          <time className="text-sm text-gray-500">{post.date}</time>
          <h1 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-gray-900">
            {post.title}
          </h1>
          <div className="mt-8 prose prose-lg">
            {post.content.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
};

export default Post;