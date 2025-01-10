import { Header } from "@/components/Header";
import { PostCard } from "@/components/PostCard";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

// Mock data com categorias
const posts = [
  {
    title: "Getting Started with Modern Web Development",
    excerpt: "Learn the essential tools and practices for modern web development. From setting up your development environment to deploying your first application.",
    date: "2024-03-10",
    slug: "getting-started-modern-web-development",
    category: "Development"
  },
  {
    title: "The Future of Frontend Development",
    excerpt: "Explore the latest trends and technologies shaping the future of frontend development. From Web Components to AI-assisted coding.",
    date: "2024-03-09",
    slug: "future-frontend-development",
    category: "Technology"
  },
  {
    title: "Mastering TypeScript in 2024",
    excerpt: "A comprehensive guide to TypeScript best practices, advanced features, and how to leverage its type system for better code quality.",
    date: "2024-03-08",
    slug: "mastering-typescript-2024",
    category: "Development"
  }
];

const categories = ["All", "Development", "Technology", "Design"];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blog-light to-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-blog-dark mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blog-primary to-blog-secondary">
            ModernBlog
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore the future of technology and development through our curated articles
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-12 animate-fade-up">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`px-4 py-2 text-sm cursor-pointer transition-all hover:scale-105 ${
                selectedCategory === category 
                  ? "bg-blog-primary hover:bg-blog-secondary"
                  : "hover:border-blog-primary"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <PostCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              slug={post.slug}
              category={post.category}
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;