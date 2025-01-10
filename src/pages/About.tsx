import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blog-light to-white">
      <Header />
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
          Voltar
        </Button>

        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-heading font-bold text-blog-dark mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blog-primary to-blog-secondary">
            Sobre Nós
          </h1>
          <div className="prose prose-lg">
            <p className="text-gray-600 leading-relaxed mb-6">
              ModernBlog é uma plataforma dedicada a compartilhar conhecimento e insights sobre tecnologia, desenvolvimento e inovação. Nossa missão é tornar o conhecimento técnico acessível e envolvente para todos.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Com um time de especialistas apaixonados por tecnologia, buscamos trazer conteúdo relevante e atualizado sobre as últimas tendências e melhores práticas no mundo do desenvolvimento.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Junte-se a nós nessa jornada de aprendizado e descoberta!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;