import { Header } from "@/components/Header";
import { PostCard } from "@/components/PostCard";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Mock data com categorias e tempo de leitura
const posts = [
  {
    title: "Getting Started with Modern Web Development",
    titlePt: "Começando com Desenvolvimento Web Moderno",
    excerpt: "Learn the essential tools and practices for modern web development. From setting up your development environment to deploying your first application.",
    excerptPt: "Aprenda as ferramentas e práticas essenciais para o desenvolvimento web moderno. Desde a configuração do ambiente até a implantação do seu primeiro aplicativo.",
    date: "2024-03-10",
    slug: "getting-started-modern-web-development",
    category: "Development",
    readingTime: "10 min"
  },
  {
    title: "The Future of Frontend Development",
    titlePt: "O Futuro do Desenvolvimento Frontend",
    excerpt: "Explore the latest trends and technologies shaping the future of frontend development. From Web Components to AI-assisted coding.",
    excerptPt: "Explore as últimas tendências e tecnologias que moldam o futuro do desenvolvimento frontend. De Web Components à codificação assistida por IA.",
    date: "2024-03-09",
    slug: "future-frontend-development",
    category: "Technology",
    readingTime: "8 min"
  },
  {
    title: "Mastering TypeScript in 2024",
    titlePt: "Dominando TypeScript em 2024",
    excerpt: "A comprehensive guide to TypeScript best practices, advanced features, and how to leverage its type system for better code quality.",
    excerptPt: "Um guia completo sobre as melhores práticas do TypeScript, recursos avançados e como aproveitar seu sistema de tipos para melhor qualidade de código.",
    date: "2024-03-08",
    slug: "mastering-typescript-2024",
    category: "Development",
    readingTime: "15 min"
  }
];

const categories = ["All", "Development", "Technology", "Design"];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const filteredPosts = selectedCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const handleCategoryClick = (category: string) => {
    if (category === "All") {
      setSelectedCategory(category);
    } else {
      navigate(`/category/${category}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blog-light to-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-blog-dark mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blog-primary to-blog-secondary">
            {t('blogTitle')}
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('blogSubtitle')}
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
              onClick={() => handleCategoryClick(category)}
            >
              {t(category.toLowerCase())}
            </Badge>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <PostCard
              key={post.slug}
              title={i18n.language === 'pt' ? post.titlePt : post.title}
              excerpt={i18n.language === 'pt' ? post.excerptPt : post.excerpt}
              date={post.date}
              slug={post.slug}
              category={t(post.category.toLowerCase())}
              readingTime={post.readingTime}
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;