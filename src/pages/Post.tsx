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
    },
    "faith-science-better-sleep": {
      pt: {
        title: "Como a Fé e a Ciência Podem Ajudar Você a Dormir Melhor",
        content: `
          Em um mundo cada vez mais acelerado, onde os desafios da vida cotidiana sobrecarregam nossas mentes, encontrar a paz necessária para descansar à noite tem se tornado um desafio comum. Ansiedade, preocupações financeiras e responsabilidades familiares muitas vezes impedem muitas pessoas de desfrutar de uma noite de sono tranquila. Esse ciclo de estresse constante afeta negativamente a saúde física e emocional, prejudicando a imunidade, o humor e a capacidade de enfrentar os desafios diários.

          Uma prática poderosa que pode transformar suas noites e trazer serenidade é a oração antes de dormir. Além de seu valor espiritual, a ciência moderna tem demonstrado os efeitos benéficos de práticas meditativas e devocionais, como a oração, sobre a mente e o corpo.

          O Papel da Oração na Redução do Estresse
          Diversos estudos científicos comprovam que a oração e a meditação regular têm efeitos significativos na redução do estresse e da ansiedade. Ao rezar, especialmente antes de dormir, o cérebro entra em um estado de relaxamento que ativa o sistema nervoso parassimpático, responsável por desacelerar os ritmos cardíacos e induzir o corpo a um estado de descanso. Esse processo contribui para a redução dos níveis de cortisol, o hormônio do estresse, enquanto aumenta a produção de serotonina e dopamina, neurotransmissores responsáveis por promover sentimentos de bem-estar e felicidade.

          Esse efeito neuroquímico cria um ciclo de relaxamento profundo que prepara o corpo para o sono, melhorando tanto a qualidade quanto a duração do descanso. De acordo com estudos da National Institutes of Health (NIH), práticas de mindfulness e espiritualidade, como a oração, podem reduzir significativamente a insônia e melhorar a resiliência emocional.

          A Filosofia Judaico-Cristã sobre a Oração Noturna
          Do ponto de vista espiritual, a oração noturna tem raízes profundas na tradição judaico-cristã. No Salmo 4:8, Davi escreve:

          "Em paz também me deitarei e dormirei, porque só tu, Senhor, me fazes habitar em segurança".

          Este versículo reflete a crença de que a confiança em Deus proporciona segurança e descanso, afastando o medo e as preocupações.

          Na tradição cristã, o próprio Jesus nos convida a entregar nossos fardos a Deus, como expresso em Mateus 11:28:

          "Vinde a mim todos os que estão cansados e sobrecarregados, e eu vos aliviarei".

          A oração noturna é um momento sagrado de entrega — ao permitir que o Espírito Santo acalme a mente e o coração, o fiel encontra não apenas paz espiritual, mas também alívio físico.

          Filosofia Espiritual: Conexão entre Corpo, Mente e Alma
          Na tradição judaica, o conceito de "Shalom" é muito mais do que apenas "paz". Representa a harmonia integral entre corpo, mente e espírito, e esse equilíbrio é essencial para uma vida plena e saudável. Ao orar antes de dormir, estamos buscando esse "Shalom", pedindo que Deus restaure nossas forças físicas e mentais enquanto descansamos. O sono, então, torna-se um momento de renovação espiritual, refletindo o ciclo da Criação, onde o descanso é parte fundamental do plano divino (Gênesis 2:2-3).

          Quando você faz da oração noturna uma prática diária, você não apenas expressa sua fé, mas também reforça o princípio espiritual de que o ser humano é chamado a descansar em Deus, confiando que Ele cuidará das preocupações que sobrecarregam o coração.

          O Impacto Físico e Espiritual da Oração no Sono
          A oração tem a capacidade de transformar o sono em um ato sagrado. Pesquisas também indicam que a espiritualidade ativa regiões do cérebro associadas à empatia e à auto-percepção, promovendo uma sensação de conexão com algo maior que nós mesmos. Isso nos ajuda a ver os problemas sob uma nova perspectiva, diminuindo o impacto emocional e facilitando a superação das dificuldades do dia a dia.

          Além disso, a repetição de orações cria um ritual que sinaliza ao corpo que é hora de descansar, semelhante ao efeito de outras rotinas noturnas, como ler um livro ou desligar aparelhos eletrônicos antes de dormir. Essa prática contínua reforça uma associação positiva entre a oração e a tranquilidade, o que facilita a transição para um estado de sono profundo e restaurador.

          A Oração Como Caminho para o Sono Profundo e a Paz Interior
          Em um mundo cheio de distrações e desafios, a oração noturna é uma ferramenta valiosa para alcançar a paz interior. Não apenas ela permite que você entregue suas ansiedades a Deus, como também traz benefícios tangíveis para o corpo, acalmando a mente e induzindo um estado de relaxamento profundo. Ao confiar suas preocupações ao Senhor, você experimenta uma renovação física, mental e espiritual, permitindo que o sono seja um momento de verdadeira cura e restauração.

          Faça da oração noturna uma parte essencial do seu ritual diário. A ciência e a espiritualidade concordam: essa prática simples tem o poder de transformar suas noites e, consequentemente, seus dias. Ao entregar suas preocupações e confiar em Deus, você encontrará o descanso e a paz que seu corpo e alma necessitam.
        `
      },
      en: {
        title: "How Faith and Science Can Help You Sleep Better",
        content: `
          In an increasingly fast-paced world where daily life challenges overwhelm our minds, finding the peace necessary to rest at night has become a common challenge. Anxiety, financial worries, and family responsibilities often prevent many people from enjoying a peaceful night's sleep. This cycle of constant stress negatively affects physical and emotional health, impairing immunity, mood, and the ability to face daily challenges.

          A powerful practice that can transform your nights and bring serenity is prayer before sleep. Beyond its spiritual value, modern science has demonstrated the beneficial effects of meditative and devotional practices, such as prayer, on the mind and body.

          The Role of Prayer in Stress Reduction
          Various scientific studies prove that regular prayer and meditation have significant effects on reducing stress and anxiety. When praying, especially before sleep, the brain enters a state of relaxation that activates the parasympathetic nervous system, responsible for slowing heart rhythms and inducing the body into a state of rest. This process contributes to reducing cortisol levels, the stress hormone, while increasing the production of serotonin and dopamine, neurotransmitters responsible for promoting feelings of well-being and happiness.

          This neurochemical effect creates a cycle of deep relaxation that prepares the body for sleep, improving both the quality and duration of rest. According to National Institutes of Health (NIH) studies, mindfulness and spirituality practices, such as prayer, can significantly reduce insomnia and improve emotional resilience.

          The Judeo-Christian Philosophy on Night Prayer
          From a spiritual perspective, night prayer has deep roots in the Judeo-Christian tradition. In Psalm 4:8, David writes:

          "In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety."

          This verse reflects the belief that trust in God provides security and rest, dispelling fear and worries.

          In the Christian tradition, Jesus himself invites us to bring our burdens to God, as expressed in Matthew 11:28:

          "Come to me, all you who are weary and burdened, and I will give you rest."

          Night prayer is a sacred moment of surrender — by allowing the Holy Spirit to calm the mind and heart, the faithful find not only spiritual peace but also physical relief.

          Spiritual Philosophy: Connection between Body, Mind, and Soul
          In Jewish tradition, the concept of "Shalom" is much more than just "peace." It represents the integral harmony between body, mind, and spirit, and this balance is essential for a full and healthy life. When praying before sleep, we are seeking this "Shalom," asking God to restore our physical and mental strength while we rest. Sleep then becomes a moment of spiritual renewal, reflecting the cycle of Creation, where rest is a fundamental part of the divine plan (Genesis 2:2-3).

          When you make night prayer a daily practice, you not only express your faith but also reinforce the spiritual principle that humans are called to rest in God, trusting that He will take care of the concerns that burden the heart.

          The Physical and Spiritual Impact of Prayer on Sleep
          Prayer has the ability to transform sleep into a sacred act. Research also indicates that spirituality activates brain regions associated with empathy and self-perception, promoting a sense of connection with something greater than ourselves. This helps us see problems from a new perspective, reducing emotional impact and facilitating overcoming daily difficulties.

          Additionally, the repetition of prayers creates a ritual that signals to the body that it's time to rest, similar to the effect of other nighttime routines, such as reading a book or turning off electronic devices before bed. This continuous practice reinforces a positive association between prayer and tranquility, which facilitates the transition to a state of deep and restorative sleep.

          Prayer as a Path to Deep Sleep and Inner Peace
          In a world full of distractions and challenges, night prayer is a valuable tool for achieving inner peace. Not only does it allow you to surrender your anxieties to God, but it also brings tangible benefits to the body, calming the mind and inducing a state of deep relaxation. By trusting your concerns to the Lord, you experience physical, mental, and spiritual renewal, allowing sleep to be a moment of true healing and restoration.

          Make night prayer an essential part of your daily ritual. Science and spirituality agree: this simple practice has the power to transform your nights and, consequently, your days. By surrendering your worries and trusting in God, you will find the rest and peace that your body and soul need.
        `
      },
      es: {
        title: "Cómo la Fe y la Ciencia Pueden Ayudarte a Dormir Mejor",
        content: `
          En un mundo cada vez más acelerado donde los desafíos de la vida cotidiana sobrecargan nuestras mentes, encontrar la paz necesaria para descansar por la noche se ha convertido en un desafío común. La ansiedad, las preocupaciones financieras y las responsabilidades familiares a menudo impiden que muchas personas disfruten de una noche de sueño tranquila. Este ciclo de estrés constante afecta negativamente la salud física y emocional, perjudicando la inmunidad, el estado de ánimo y la capacidad de enfrentar los desafíos diarios.

          Una práctica poderosa que puede transformar tus noches y traer serenidad es la oración antes de dormir. Más allá de su valor espiritual, la ciencia moderna ha demostrado los efectos beneficiosos de las prácticas meditativas y devocionales, como la oración, sobre la mente y el cuerpo.

          [Resto del contenido traducido al español...]
        `
      },
      it: {
        title: "Come la Fede e la Scienza Possono Aiutarti a Dormire Meglio",
        content: `
          In un mondo sempre più frenetico dove le sfide della vita quotidiana sovraccaricano le nostre menti, trovare la pace necessaria per riposare la notte è diventata una sfida comune. Ansia, preoccupazioni finanziarie e responsabilità familiari spesso impediscono a molte persone di godere di una notte di sonno tranquilla. Questo ciclo di stress costante influisce negativamente sulla salute fisica ed emotiva, compromettendo l'immunità, l'umore e la capacità di affrontare le sfide quotidiane.

          Una pratica potente che può trasformare le tue notti e portare serenità è la preghiera prima di dormire. Oltre al suo valore spirituale, la scienza moderna ha dimostrato gli effetti benefici delle pratiche meditative e devozionali, come la preghiera, sulla mente e sul corpo.

          [Resto del contenuto tradotto in italiano...]
        `
      }
    }
  };

  useEffect(() => {
    const updateReadingProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', updateReadingProgress);
    return () => window.removeEventListener('scroll', updateReadingProgress);
  }, []);

  const post = posts[slug as keyof typeof posts]?.[i18n.language as 'en' | 'pt'];

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
