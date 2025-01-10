import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface PostCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  category: string;
  style?: React.CSSProperties;
}

export const PostCard = ({ title, excerpt, date, slug, category, style }: PostCardProps) => {
  return (
    <Link 
      to={`/post/${slug}`}
      className="block group animate-fade-up"
      style={style}
    >
      <article className="p-6 bg-white rounded-xl border border-gray-100 hover:border-blog-primary transition-all duration-300 hover:shadow-lg hover:shadow-blog-primary/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blog-primary to-blog-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        
        <div className="flex justify-between items-start mb-4">
          <Badge variant="secondary" className="bg-blog-light text-blog-primary">
            {category}
          </Badge>
          <time className="text-sm text-gray-500">{date}</time>
        </div>

        <h2 className="text-xl font-heading font-semibold text-gray-900 group-hover:text-blog-primary transition-colors mb-3 line-clamp-2">
          {title}
        </h2>
        
        <p className="text-gray-600 line-clamp-3 mb-4">
          {excerpt}
        </p>

        <div className="flex items-center text-blog-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
          Read more
          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </article>
    </Link>
  );
};