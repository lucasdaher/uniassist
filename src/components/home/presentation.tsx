const Presentation = () => {
  return (
    <>
      <section className="max-w-[1440px] mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h5 className="text-white bg-black px-3 rounded-md font-medium text-sm mt-24 font-sora animate-rotate">
            GRATUITO PARA ESTUDANTES
          </h5>
          <h1 className="text-white text-5xl max-w-[700px] text-center font-bold font-sora mt-6 leading-[3.3rem]">
            Tarefas Simplificadas, Resultados Amplificados
          </h1>
          <p className="text-white font-sora text-md mt-4 text-center lg:text-left">
            Adicione suas tarefas universitárias e eleve sua organização a outro
            nível.
          </p>
          <button
            type="button"
            className="bg-dark-500 text-white text-md font-medium px-12 py-3 rounded-md mt-10 hover:bg-black/70 
            transition-all duration-200 hover:translate-y-[-4%]"
          >
            Abrir a apresentação do projeto
            {/* Quero me juntar ao UniAssist */}
          </button>
        </div>
      </section>
    </>
  );
};

export default Presentation;
