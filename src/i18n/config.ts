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
  },
  es: {
    translation: {
      // Header
      home: "Inicio",
      about: "Sobre",
      contact: "Contacto",
      
      // Index page
      blogTitle: "ModernBlog",
      blogSubtitle: "Explora el futuro de la tecnología y el desarrollo a través de nuestros artículos seleccionados",
      readMore: "Leer más",
      readingTime: "{{time}} de lectura",
      
      // Categories
      allCategories: "Todos",
      development: "Desarrollo",
      technology: "Tecnología",
      design: "Diseño",
      
      // About page
      aboutUs: "Sobre Nosotros",
      aboutDescription: "ModernBlog es una plataforma dedicada a compartir conocimientos y perspectivas sobre tecnología, desarrollo e innovación. Nuestra misión es hacer que el conocimiento técnico sea accesible y atractivo para todos.",
      aboutTeam: "Con un equipo de entusiastas de la tecnología, buscamos traer contenido relevante y actualizado sobre las últimas tendencias y mejores prácticas en el mundo del desarrollo.",
      joinUs: "¡Únete a nosotros en este viaje de aprendizaje y descubrimiento!",
      
      // Contact page
      contactUs: "Contáctanos",
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      sendMessage: "Enviar Mensaje",
      messageSent: "¡Mensaje enviado!",
      messageSuccess: "Gracias por tu contacto. Te responderemos pronto.",
      
      // Common
      back: "Volver",
    }
  },
  it: {
    translation: {
      // Header
      home: "Home",
      about: "Chi Siamo",
      contact: "Contatti",
      
      // Index page
      blogTitle: "ModernBlog",
      blogSubtitle: "Esplora il futuro della tecnologia e dello sviluppo attraverso i nostri articoli selezionati",
      readMore: "Leggi di più",
      readingTime: "{{time}} di lettura",
      
      // Categories
      allCategories: "Tutti",
      development: "Sviluppo",
      technology: "Tecnologia",
      design: "Design",
      
      // About page
      aboutUs: "Chi Siamo",
      aboutDescription: "ModernBlog è una piattaforma dedicata alla condivisione di conoscenze e approfondimenti su tecnologia, sviluppo e innovazione. La nostra missione è rendere la conoscenza tecnica accessibile e coinvolgente per tutti.",
      aboutTeam: "Con un team di appassionati di tecnologia, cerchiamo di portare contenuti rilevanti e aggiornati sulle ultime tendenze e le migliori pratiche nel mondo dello sviluppo.",
      joinUs: "Unisciti a noi in questo viaggio di apprendimento e scoperta!",
      
      // Contact page
      contactUs: "Contattaci",
      name: "Nome",
      email: "Email",
      message: "Messaggio",
      sendMessage: "Invia Messaggio",
      messageSent: "Messaggio inviato!",
      messageSuccess: "Grazie per il tuo contatto. Ti risponderemo presto.",
      
      // Common
      back: "Indietro",
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