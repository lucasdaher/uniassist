import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="bg-blue-600 w-full p-8 mt-44">
      <div className="max-w-[1440px] mx-auto">
        <div className="">
          <h1 className="text-white font-sora font-bold text-3xl">
            Sobre o projeto
          </h1>
          <p className="text-blue-50 font-medium text-md mt-1">
            O UniAssist é uma plataforma especialmente criada para auxiliar os
            universitários. Nosso principal objetivo é aperfeiçoar a organização
            dos estudantes, assegurando o cumprimento de suas atividades e
            reunindo todas as ferramentas essenciais em um único lugar.
          </p>
          <Link to={`/request-access`} className="no-underline">
            <button
              type="button"
              className="font-semibold text-md text-white bg-blue-900 rounded-md px-4 py-2 mt-6 hover:bg-blue-800 hover:transform hover:translate-y-[-4%] transition-all duration-200"
            >
              Solicitar meu acesso
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
