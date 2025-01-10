import { Link } from "react-router-dom";

interface PostCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

export const PostCard = ({ title, excerpt, date, slug }: PostCardProps) => {
  return (
    <Link 
      to={`/post/${slug}`}
      className="block group animate-fade-up"
    >
      <article className="p-6 bg-white rounded-lg border border-gray-200 hover:border-blog-primary transition-colors">
        <time className="text-sm text-gray-500">{date}</time>
        <h2 className="mt-2 text-xl font-heading font-semibold text-gray-900 group-hover:text-blog-primary transition-colors">
          {title}
        </h2>
        <p className="mt-3 text-gray-600 line-clamp-3">
          {excerpt}
        </p>
        <span className="inline-flex items-center mt-4 text-blog-primary font-medium">
          Read more
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </article>
    </Link>
  );
};