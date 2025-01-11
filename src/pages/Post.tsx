import { Header } from "@/components/Header";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Post = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [readingProgress, setReadingProgress] = useState(0);
  const { t, i18n } = useTranslation();
  
  // Mock data - em uma versão futura podemos integrar com uma API real
  const posts = {
    "getting-started-modern-web-development": {
      en: {
        title: "Getting Started with Modern Web Development",
        content: `
          Modern web development has evolved significantly over the past few years. With the introduction of new tools, frameworks, and best practices, it's more important than ever to stay up to date with the latest trends.

          In this comprehensive guide, we'll explore the essential aspects of modern web development and how you can get started on your journey to becoming a proficient web developer.

          We'll cover everything from setting up your development environment to deploying your first application, with practical examples and hands-on exercises along the way.

          Modern web development frameworks like React have revolutionized how we build user interfaces. They provide a component-based architecture that makes it easier to manage complex UIs and maintain code quality.

          Version control systems like Git have become an essential part of the development workflow. They help teams collaborate effectively and maintain a history of changes to the codebase.

          Build tools and bundlers optimize our applications for production, ensuring fast load times and efficient delivery to end users.

          Testing is another crucial aspect of modern web development. Unit tests, integration tests, and end-to-end tests help ensure our applications work as expected.

          Finally, we'll look at deployment strategies and how to get your application into the hands of users. Modern hosting platforms make it easier than ever to deploy and scale web applications.
        `
      },
      pt: {
        title: "Começando com Desenvolvimento Web Moderno",
        content: `
          O desenvolvimento web moderno evoluiu significativamente nos últimos anos. Com a introdução de novas ferramentas, frameworks e melhores práticas, é mais importante do que nunca se manter atualizado com as últimas tendências.

          Neste guia abrangente, exploraremos os aspectos essenciais do desenvolvimento web moderno e como você pode começar sua jornada para se tornar um desenvolvedor web proficiente.

          Vamos cobrir tudo, desde a configuração do seu ambiente de desenvolvimento até a implantação do seu primeiro aplicativo, com exemplos práticos e exercícios práticos ao longo do caminho.

          Frameworks de desenvolvimento web modernos como React revolucionaram a forma como construímos interfaces de usuário. Eles fornecem uma arquitetura baseada em componentes que facilita o gerenciamento de UIs complexas e mantém a qualidade do código.

          Sistemas de controle de versão como Git tornaram-se uma parte essencial do fluxo de trabalho de desenvolvimento. Eles ajudam as equipes a colaborar efetivamente e manter um histórico de alterações no código.

          Ferramentas de build e bundlers otimizam nossas aplicações para produção, garantindo tempos de carregamento rápidos e entrega eficiente aos usuários finais.

          Testes são outro aspecto crucial do desenvolvimento web moderno. Testes unitários, testes de integração e testes end-to-end ajudam a garantir que nossas aplicações funcionem como esperado.

          Por fim, veremos estratégias de implantação e como disponibilizar seu aplicativo para os usuários. Plataformas de hospedagem modernas tornam mais fácil do que nunca implantar e escalar aplicações web.
        `
      }
    }
  };

  const post = posts[slug as keyof typeof posts]?.[i18n.language as 'en' | 'pt'];

  useEffect(() => {
    const updateReadingProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', updateReadingProgress);
    return () => window.removeEventListener('scroll', updateReadingProgress);
  }, []);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="fixed top-[64px] left-0 w-full z-40 bg-white/80 backdrop-blur-sm">
        <Progress value={readingProgress} className="rounded-none" />
      </div>
      <main className="container mx-auto px-4 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-8 hover:bg-blog-primary/10"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {t('back')}
        </Button>
        <article className="max-w-2xl mx-auto bg-white rounded-lg p-8 shadow-sm">
          <h1 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-gray-900">
            {post.title}
          </h1>
          <div className="mt-8 prose prose-lg">
            {post.content.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
};

export default Post;