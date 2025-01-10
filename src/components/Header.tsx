import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-heading font-bold text-blog-primary">
          ModernBlog
        </Link>
        <nav className="space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blog-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-blog-primary transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};