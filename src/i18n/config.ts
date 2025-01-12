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
      blogTitle: "Raw Light",
      blogSubtitle: "Don't lose the light within you. Raw Light is a space dedicated to deep and authentic exploration of spirituality with prayers and curious facts.",
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
      aboutDescription: "Raw Light is a platform dedicated to sharing knowledge and insights about spirituality, prayers, and curiosities. Our mission is to make spiritual knowledge accessible and engaging for everyone.",
      aboutTeam: "With a team of spirituality enthusiasts, we seek to bring relevant and up-to-date content about the latest trends and best practices in the spiritual world.",
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
      blogTitle: "Luz Crua",
      blogSubtitle: "Não perca o brilho que há dentro de você. Luz Crua é um espaço dedicado à exploração profunda e autêntica da espiritualidade com orações e fatos curiosos.",
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
      aboutDescription: "Luz Crua é uma plataforma dedicada a compartilhar conhecimento e insights sobre espiritualidade, orações e curiosidades. Nossa missão é tornar o conhecimento espiritual acessível e envolvente para todos.",
      aboutTeam: "Com um time de especialistas apaixonados por espiritualidade, buscamos trazer conteúdo relevante e atualizado sobre as últimas tendências e melhores práticas no mundo espiritual.",
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
      blogTitle: "Luz Cruda",
      blogSubtitle: "No pierdas la luz que hay dentro de ti. Luz Cruda es un espacio dedicado a la exploración profunda y auténtica de la espiritualidad con oraciones y hechos curiosos.",
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
      aboutDescription: "Luz Cruda es una plataforma dedicada a compartir conocimientos y perspectivas sobre espiritualidad, oraciones y curiosidades. Nuestra misión es hacer que el conocimiento espiritual sea accesible y atractivo para todos.",
      aboutTeam: "Con un equipo de entusiastas de la espiritualidad, buscamos traer contenido relevante y actualizado sobre las últimas tendencias y mejores prácticas en el mundo espiritual.",
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
      blogTitle: "Luce Cruda",
      blogSubtitle: "Non perdere la luce che è dentro di te. Luce Cruda è uno spazio dedicato all'esplorazione profonda e autentica della spiritualità con preghiere e fatti curiosi.",
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
      aboutDescription: "Luce Cruda è una piattaforma dedicata alla condivisione di conoscenze e approfondimenti su spiritualità, preghiere e curiosità. La nostra missione è rendere la conoscenza spirituale accessibile e coinvolgente per tutti.",
      aboutTeam: "Con un team di appassionati di spiritualità, cerchiamo di portare contenuti rilevanti e aggiornati sulle ultime tendenze e le migliori pratiche nel mondo spirituale.",
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
      blogTitle: "Lumière Crue",
      blogSubtitle: "Ne perdez pas la lumière qui est en vous. Lumière Crue est un espace dédié à l'exploration profonde et authentique de la spiritualité avec des prières et des faits curieux.",
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
      aboutDescription: "Lumière Crue est une plateforme dédiée au partage de connaissances et d'insights sur la spiritualité, les prières et les faits curieux. Notre mission est de rendre les connaissances spirituelles accessibles et engageantes pour tous.",
      aboutTeam: "Avec une équipe passionnée par la spiritualité, nous cherchons à apporter un contenu pertinent et actualisé sur les dernières tendances et les meilleures pratiques dans le monde spirituel.",
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
