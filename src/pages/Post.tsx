import { Header } from "@/components/Header";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const Post = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [readingProgress, setReadingProgress] = useState(0);
  
  // Mock data - em uma versão futura podemos integrar com uma API real
  const post = {
    title: "Getting Started with Modern Web Development",
    content: `
      Modern web development has evolved significantly over the past few years. With the introduction of new tools, frameworks, and best practices, it's more important than ever to stay up to date with the latest trends.

      In this comprehensive guide, we'll explore the essential aspects of modern web development and how you can get started on your journey to becoming a proficient web developer.

      We'll cover everything from setting up your development environment to deploying your first application, with practical examples and hands-on exercises along the way.

      Modern web development frameworks like React have revolutionized how we build user interfaces. They provide a component-based architecture that makes it easier to manage complex UIs and maintain code quality.

      Version control systems like Git have become an essential part of the development workflow. They help teams collaborate effectively and maintain a history of changes to the codebase.

      Build tools and bundlers optimize our applications for production, ensuring fast load times and efficient delivery to end users.

      Testing is another crucial aspect of modern web development. Unit tests, integration tests, and end-to-end tests help ensure our applications work as expected.

      Finally, we'll look at deployment strategies and how to get your application into the hands of users. Modern hosting platforms make it easier than ever to deploy and scale web applications.
    `,
    date: "2024-03-10",
  };

  useEffect(() => {
    const updateReadingProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', updateReadingProgress);
    return () => window.removeEventListener('scroll', updateReadingProgress);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="fixed top-[64px] left-0 w-full z-40 bg-white/80 backdrop-blur-sm">
        <Progress value={readingProgress} className="rounded-none" />
      </div>
      <main className="container mx-auto px-4 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-8 hover:bg-blog-primary/10"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Voltar
        </Button>
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