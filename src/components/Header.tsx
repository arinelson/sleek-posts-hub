import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-blog-primary to-blog-secondary hover:opacity-80 transition-opacity"
          >
            Luz Crua
          </Link>
          <nav className="flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-blog-primary transition-colors relative group"
            >
              {t('home')}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blog-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
            <Link 
              to="/about" 
              className="text-gray-600 hover:text-blog-primary transition-colors relative group"
            >
              {t('about')}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blog-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-600 hover:text-blog-primary transition-colors relative group"
            >
              {t('contact')}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blog-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
            <LanguageSwitcher />
          </nav>
        </div>
      </div>
    </header>
  );
};