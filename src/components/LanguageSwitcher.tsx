import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = {
    en: { flag: '🇺🇸', label: 'EN' },
    pt: { flag: '🇧🇷', label: 'PT' },
    es: { flag: '🇪🇸', label: 'ES' },
    it: { flag: '🇮🇹', label: 'IT' },
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const currentLang = languages[i18n.language as keyof typeof languages] || languages.en;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="text-gray-600 hover:text-blog-primary transition-colors"
        >
          {currentLang.flag} {currentLang.label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languages).map(([code, { flag, label }]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => changeLanguage(code)}
            className="cursor-pointer"
          >
            {flag} {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};