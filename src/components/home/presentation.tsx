const Presentation = () => {
  return (
    <>
      <section className="max-w-[1440px] mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h5 className="text-blue-100 font-medium text-sm mt-24 font-sora animate-rotate">
            ACESSO PARA ESTUDANTES
          </h5>
          <h1 className="text-blue-50 text-5xl max-w-[700px] text-center font-bold font-sora mt-6 leading-[3.3rem]">
            Tarefas Simplificadas, Resultados Amplificados
          </h1>
          <p className="text-white font-sora text-sm mt-4">
            Adicione suas tarefas universitárias e eleve sua organização a outro
            nível.
          </p>
          <button
            type="button"
            className="bg-dark-500 text-white text-md font-medium px-12 py-3 rounded-md mt-10 hover:bg-dark-500/60 
            transition-all duration-200 hover:translate-y-[-4%]"
          >
            Quero me juntar ao UniAssist
          </button>
        </div>
      </section>
    </>
  );
};

export default Presentation;
