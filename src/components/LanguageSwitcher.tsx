import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      onClick={toggleLanguage}
      className="text-gray-600 hover:text-blog-primary transition-colors"
    >
      {i18n.language === 'pt' ? '🇺🇸 EN' : '🇧🇷 PT'}
    </Button>
  );
};