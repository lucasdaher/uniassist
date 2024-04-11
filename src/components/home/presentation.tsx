import { Link } from "react-router-dom";

const Presentation = () => {
  return (
    <>
      <section className="max-w-[1440px] mx-auto px-4">
        <div className="flex flex-col justify-center items-center">
          <h5 className="text-white bg-black px-3 rounded-md font-medium text-sm mt-24 font-sora animate-rotate text-center">
            GRATUITO PARA ESTUDANTES
          </h5>
          <h1 className="text-white text-3xl md:text-5xl max-w-[700px] text-center font-bold font-sora mt-6 leading-[2.4rem] md:leading-[3.3rem]">
            Tarefas Simplificadas, Resultados Amplificados
          </h1>
          <p className="text-white font-sora text-base mt-4 text-center lg:text-left">
            Facilite a sua vida universitária e eleve seu desempenho a outro
            nível.
          </p>
          <Link to={`/project-presentation`}>
            <button
              type="button"
              className="bg-dark-500 text-white text-base font-medium font-sora px-8 py-4 rounded-md mt-10 hover:bg-black/70 
            transition-all duration-200 hover:translate-y-[-4%]"
            >
              Abrir apresentação do projeto
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Presentation;
