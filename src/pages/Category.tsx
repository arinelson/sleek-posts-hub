import { Header } from "@/components/Header";
import { PostCard } from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { useParams, useNavigate } from "react-router-dom";

// Mock data - em uma versão futura, isso viria de uma API
const postsByCategory = {
  "Curiosidades Bíblicas": [
    {
      title: "10 Fascinating Facts About King David",
      excerpt: "Explore interesting and lesser-known facts about one of the Bible's most important figures.",
      date: "2024-03-11",
      slug: "facts-about-king-david",
      category: "Curiosidades Bíblicas",
      readingTime: "8 min"
    },
    {
      title: "The Lost Books of the Bible",
      excerpt: "Understanding the history behind the books that didn't make it into the biblical canon.",
      date: "2024-03-10",
      slug: "lost-books-bible",
      category: "Curiosidades Bíblicas",
      readingTime: "12 min"
    }
  ],
  "Oração": [
    {
      title: "Como a Fé e a Ciência Podem Ajudar Você a Dormir Melhor",
      excerpt: "Descubra como a fé e a ciência trabalham juntas para melhorar sua qualidade de sono e bem-estar geral.",
      date: "2024-03-13",
      slug: "faith-science-better-sleep",
      category: "Oração",
      readingTime: "10 min"
    },
    {
      title: "The Power of Morning Prayer",
      excerpt: "Learn how starting your day with prayer can transform your life.",
      date: "2024-03-09",
      slug: "power-morning-prayer",
      category: "Oração",
      readingTime: "7 min"
    }
  ],
  "Ensinamentos de Jesus": [
    {
      title: "The Hidden Meaning Behind Jesus' Parables",
      excerpt: "A deep dive into the profound teachings hidden within Jesus' most famous parables.",
      date: "2024-03-12",
      slug: "hidden-meaning-parables",
      category: "Ensinamentos de Jesus",
      readingTime: "12 min"
    },
    {
      title: "Jesus' Teaching on Love",
      excerpt: "Understanding the revolutionary concept of love in Jesus' teachings.",
      date: "2024-03-08",
      slug: "jesus-teaching-love",
      category: "Ensinamentos de Jesus",
      readingTime: "15 min"
    }
  ],
  "Quiz": [
    {
      title: "Test Your Bible Knowledge",
      excerpt: "Challenge yourself with this interactive quiz about biblical stories and teachings.",
      date: "2024-03-10",
      slug: "bible-knowledge-quiz",
      category: "Quiz",
      readingTime: "15 min"
    },
    {
      title: "New Testament Quiz Challenge",
      excerpt: "Test your knowledge of the New Testament with this engaging quiz.",
      date: "2024-03-07",
      slug: "new-testament-quiz",
      category: "Quiz",
      readingTime: "10 min"
    }
  ]
};

const Category = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const posts = category ? postsByCategory[category as keyof typeof postsByCategory] : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blog-light to-white">
      <Header />
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

        <h1 className="text-4xl font-heading font-bold text-blog-dark mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blog-primary to-blog-secondary">
          {category} Articles
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <PostCard
              key={post.slug}
              {...post}
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Category;