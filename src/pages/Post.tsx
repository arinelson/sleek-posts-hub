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
    },
    "quantum-computing-cybersecurity": {
      en: {
        title: "The Impact of Quantum Computing on Cybersecurity",
        content: `
          The emergence of quantum computing represents a paradigm shift in the field of cybersecurity. As these powerful machines become more sophisticated, they pose both opportunities and challenges for data protection.

          Quantum computers operate on fundamentally different principles than classical computers. Instead of using bits that are either 0 or 1, they use quantum bits or qubits that can exist in multiple states simultaneously through a phenomenon called superposition.

          This capability makes quantum computers particularly effective at solving certain types of problems, including those that form the basis of many current encryption methods. For example, RSA encryption, which is widely used today, relies on the difficulty of factoring large numbers – a task that quantum computers could potentially perform much faster than classical computers.

          However, the quantum threat has also spurred innovation in cryptography. Researchers are developing quantum-resistant encryption methods, also known as post-quantum cryptography. These new algorithms are designed to be secure against both quantum and classical computers.

          Organizations are already beginning to prepare for the quantum era. The National Institute of Standards and Technology (NIST) is working to standardize post-quantum cryptographic algorithms, and many companies are conducting quantum risk assessments.

          The transition to quantum-safe security will require significant planning and resources. Organizations need to inventory their cryptographic assets, understand their vulnerabilities, and develop migration strategies.

          Despite the challenges, quantum computing also offers new possibilities for cybersecurity. Quantum key distribution (QKD) could provide theoretically unbreakable encryption, and quantum random number generators could improve the quality of encryption keys.

          As we move forward, it's crucial for security professionals to stay informed about quantum computing developments and begin preparing their organizations for the post-quantum era.
        `
      },
      pt: {
        title: "O Impacto da Computação Quântica na Cibersegurança",
        content: `
          O surgimento da computação quântica representa uma mudança de paradigma no campo da cibersegurança. À medida que essas máquinas poderosas se tornam mais sofisticadas, elas apresentam tanto oportunidades quanto desafios para a proteção de dados.

          Os computadores quânticos operam em princípios fundamentalmente diferentes dos computadores clássicos. Em vez de usar bits que são 0 ou 1, eles usam bits quânticos ou qubits que podem existir em múltiplos estados simultaneamente através de um fenômeno chamado superposição.

          Essa capacidade torna os computadores quânticos particularmente eficazes na resolução de certos tipos de problemas, incluindo aqueles que formam a base de muitos métodos de criptografia atuais. Por exemplo, a criptografia RSA, amplamente utilizada hoje, depende da dificuldade de fatorar números grandes – uma tarefa que os computadores quânticos potencialmente poderiam realizar muito mais rapidamente que os computadores clássicos.

          No entanto, a ameaça quântica também estimulou a inovação na criptografia. Pesquisadores estão desenvolvendo métodos de criptografia resistentes a quantum, também conhecidos como criptografia pós-quântica. Esses novos algoritmos são projetados para serem seguros contra computadores tanto quânticos quanto clássicos.

          As organizações já estão começando a se preparar para a era quântica. O Instituto Nacional de Padrões e Tecnologia (NIST) está trabalhando para padronizar algoritmos criptográficos pós-quânticos, e muitas empresas estão realizando avaliações de risco quântico.

          A transição para a segurança à prova de quantum exigirá planejamento e recursos significativos. As organizações precisam inventariar seus ativos criptográficos, entender suas vulnerabilidades e desenvolver estratégias de migração.

          Apesar dos desafios, a computação quântica também oferece novas possibilidades para a cibersegurança. A distribuição de chaves quânticas (QKD) poderia fornecer criptografia teoricamente inquebrável, e geradores quânticos de números aleatórios poderiam melhorar a qualidade das chaves de criptografia.

          À medida que avançamos, é crucial que os profissionais de segurança se mantenham informados sobre os desenvolvimentos da computação quântica e comecem a preparar suas organizações para a era pós-quântica.
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