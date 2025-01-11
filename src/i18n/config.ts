import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Header
      home: "Home",
      about: "About",
      contact: "Contact",
      
      // Index page
      blogTitle: "ModernBlog",
      blogSubtitle: "Explore the future of technology and development through our curated articles",
      readMore: "Read more",
      readingTime: "{{time}} read",
      
      // Categories
      allCategories: "All",
      development: "Development",
      technology: "Technology",
      design: "Design",
      
      // About page
      aboutUs: "About Us",
      aboutDescription: "ModernBlog is a platform dedicated to sharing knowledge and insights about technology, development, and innovation. Our mission is to make technical knowledge accessible and engaging for everyone.",
      aboutTeam: "With a team of technology enthusiasts, we seek to bring relevant and up-to-date content about the latest trends and best practices in the development world.",
      joinUs: "Join us on this journey of learning and discovery!",
      
      // Contact page
      contactUs: "Contact Us",
      name: "Name",
      email: "Email",
      message: "Message",
      sendMessage: "Send Message",
      messageSent: "Message sent!",
      messageSuccess: "Thank you for your contact. We'll get back to you soon.",
      
      // Common
      back: "Back",
    }
  },
  pt: {
    translation: {
      // Header
      home: "Início",
      about: "Sobre",
      contact: "Contato",
      
      // Index page
      blogTitle: "ModernBlog",
      blogSubtitle: "Explore o futuro da tecnologia e desenvolvimento através de nossos artigos selecionados",
      readMore: "Leia mais",
      readingTime: "{{time}} de leitura",
      
      // Categories
      allCategories: "Todos",
      development: "Desenvolvimento",
      technology: "Tecnologia",
      design: "Design",
      
      // About page
      aboutUs: "Sobre Nós",
      aboutDescription: "ModernBlog é uma plataforma dedicada a compartilhar conhecimento e insights sobre tecnologia, desenvolvimento e inovação. Nossa missão é tornar o conhecimento técnico acessível e envolvente para todos.",
      aboutTeam: "Com um time de especialistas apaixonados por tecnologia, buscamos trazer conteúdo relevante e atualizado sobre as últimas tendências e melhores práticas no mundo do desenvolvimento.",
      joinUs: "Junte-se a nós nessa jornada de aprendizado e descoberta!",
      
      // Contact page
      contactUs: "Entre em Contato",
      name: "Nome",
      email: "Email",
      message: "Mensagem",
      sendMessage: "Enviar Mensagem",
      messageSent: "Mensagem enviada!",
      messageSuccess: "Agradecemos seu contato. Retornaremos em breve.",
      
      // Common
      back: "Voltar",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt", // idioma padrão
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;