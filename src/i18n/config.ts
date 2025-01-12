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
      "curiosidades-biblicas": "Biblical Curiosities",
      "oracao": "Prayer",
      "ensinamentos-de-jesus": "Teachings of Jesus",
      "quiz": "Quiz",
      
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
      "curiosidades-biblicas": "Curiosidades Bíblicas",
      "oracao": "Oração",
      "ensinamentos-de-jesus": "Ensinamentos de Jesus",
      "quiz": "Quiz",
      
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
      "curiosidades-biblicas": "Curiosidades Bíblicas",
      "oracao": "Oración",
      "ensinamentos-de-jesus": "Enseñanzas de Jesús",
      "quiz": "Quiz",
      
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
      "curiosidades-biblicas": "Curiosità Bibliche",
      "oracao": "Preghiera",
      "ensinamentos-de-jesus": "Insegnamenti di Gesù",
      "quiz": "Quiz",
      
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
  },
  fr: {
    translation: {
      // Header
      home: "Accueil",
      about: "À propos",
      contact: "Contact",
      
      // Index page
      blogTitle: "ModernBlog",
      blogSubtitle: "Explorez l'avenir de la technologie et du développement à travers nos articles sélectionnés",
      readMore: "Lire la suite",
      readingTime: "{{time}} de lecture",
      
      // Categories
      allCategories: "Tous",
      "curiosidades-biblicas": "Curiosités Bibliques",
      "oracao": "Prière",
      "ensinamentos-de-jesus": "Enseignements de Jésus",
      "quiz": "Quiz",
      
      // About page
      aboutUs: "À Propos de Nous",
      aboutDescription: "ModernBlog est une plateforme dédiée au partage de connaissances et d'insights sur la technologie, le développement et l'innovation. Notre mission est de rendre les connaissances techniques accessibles et engageantes pour tous.",
      aboutTeam: "Avec une équipe passionnée par la technologie, nous cherchons à apporter un contenu pertinent et actualisé sur les dernières tendances et les meilleures pratiques dans le monde du développement.",
      joinUs: "Rejoignez-nous dans ce voyage d'apprentissage et de découverte !",
      
      // Contact page
      contactUs: "Contactez-nous",
      name: "Nom",
      email: "Email",
      message: "Message",
      sendMessage: "Envoyer le Message",
      messageSent: "Message envoyé !",
      messageSuccess: "Merci pour votre contact. Nous vous répondrons bientôt.",
      
      // Common
      back: "Retour",
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
