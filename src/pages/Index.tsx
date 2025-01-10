import { Header } from "@/components/Header";
import { PostCard } from "@/components/PostCard";

// Mock data - em uma versão futura podemos integrar com uma API real
const posts = [
  {
    title: "Getting Started with Modern Web Development",
    excerpt: "Learn the essential tools and practices for modern web development. From setting up your development environment to deploying your first application.",
    date: "2024-03-10",
    slug: "getting-started-modern-web-development"
  },
  {
    title: "The Future of Frontend Development",
    excerpt: "Explore the latest trends and technologies shaping the future of frontend development. From Web Components to AI-assisted coding.",
    date: "2024-03-09",
    slug: "future-frontend-development"
  },
  {
    title: "Mastering TypeScript in 2024",
    excerpt: "A comprehensive guide to TypeScript best practices, advanced features, and how to leverage its type system for better code quality.",
    date: "2024-03-08",
    slug: "mastering-typescript-2024"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-blog-dark mb-12 text-center">
          Welcome to ModernBlog
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              slug={post.slug}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;