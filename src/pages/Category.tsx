import { Header } from "@/components/Header";
import { PostCard } from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { useParams, useNavigate } from "react-router-dom";

// Mock data - em uma versão futura, isso viria de uma API
const postsByCategory = {
  Development: [
    {
      title: "Understanding TypeScript Generics",
      excerpt: "A deep dive into TypeScript generics and how they can make your code more reusable and type-safe.",
      date: "2024-03-12",
      slug: "understanding-typescript-generics",
      category: "Development",
      readingTime: "8 min"
    },
    {
      title: "Clean Code Principles in React",
      excerpt: "Learn how to write maintainable and clean React code following industry best practices and patterns.",
      date: "2024-03-11",
      slug: "clean-code-principles-react",
      category: "Development",
      readingTime: "12 min"
    }
  ],
  Technology: [
    {
      title: "The Rise of AI in Software Development",
      excerpt: "Exploring how artificial intelligence is transforming the software development landscape.",
      date: "2024-03-10",
      slug: "ai-in-software-development",
      category: "Technology",
      readingTime: "10 min"
    },
    {
      title: "Web3 and the Future of the Internet",
      excerpt: "Understanding Web3 technologies and their potential impact on the future of web development.",
      date: "2024-03-09",
      slug: "web3-future-internet",
      category: "Technology",
      readingTime: "15 min"
    }
  ],
  Design: [
    {
      title: "Mastering UI/UX Design Principles",
      excerpt: "Essential principles for creating user-friendly and aesthetically pleasing interfaces.",
      date: "2024-03-08",
      slug: "mastering-ui-ux-principles",
      category: "Design",
      readingTime: "9 min"
    },
    {
      title: "Color Theory in Modern Web Design",
      excerpt: "Understanding how to use color effectively in your web design projects.",
      date: "2024-03-07",
      slug: "color-theory-web-design",
      category: "Design",
      readingTime: "7 min"
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