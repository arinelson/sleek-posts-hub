import { Header } from "@/components/Header";
import { PostCard } from "@/components/PostCard";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NewsletterDialog } from "@/components/NewsletterDialog";

const posts = [
  {
    title: "Como a Fé e a Ciência Podem Ajudar Você a Dormir Melhor",
    titlePt: "Como a Fé e a Ciência Podem Ajudar Você a Dormir Melhor",
    excerpt: "Discover how faith and science work together to improve your sleep quality and overall well-being.",
    excerptPt: "Descubra como a fé e a ciência trabalham juntas para melhorar sua qualidade de sono e bem-estar geral.",
    date: "2024-03-13",
    slug: "faith-science-better-sleep",
    category: "Oração",
    readingTime: "10 min"
  },
  {
    title: "The Hidden Meaning Behind Jesus' Parables",
    titlePt: "O Significado Oculto das Parábolas de Jesus",
    excerpt: "A deep dive into the profound teachings hidden within Jesus' most famous parables.",
    excerptPt: "Um mergulho profundo nos ensinamentos profundos escondidos nas parábolas mais famosas de Jesus.",
    date: "2024-03-12",
    slug: "hidden-meaning-parables",
    category: "Ensinamentos de Jesus",
    readingTime: "12 min"
  },
  {
    title: "10 Fascinating Facts About King David",
    titlePt: "10 Fatos Fascinantes Sobre o Rei Davi",
    excerpt: "Explore interesting and lesser-known facts about one of the Bible's most important figures.",
    excerptPt: "Explore fatos interessantes e pouco conhecidos sobre uma das figuras mais importantes da Bíblia.",
    date: "2024-03-11",
    slug: "facts-about-king-david",
    category: "Curiosidades Bíblicas",
    readingTime: "8 min"
  },
  {
    title: "Test Your Bible Knowledge",
    titlePt: "Teste Seu Conhecimento Bíblico",
    excerpt: "Challenge yourself with this interactive quiz about biblical stories and teachings.",
    excerptPt: "Desafie-se com este quiz interativo sobre histórias e ensinamentos bíblicos.",
    date: "2024-03-10",
    slug: "bible-knowledge-quiz",
    category: "Quiz",
    readingTime: "15 min"
  }
];

const categories = ["All", "Curiosidades Bíblicas", "Oração", "Ensinamentos de Jesus", "Quiz"];

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
      <NewsletterDialog />
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
