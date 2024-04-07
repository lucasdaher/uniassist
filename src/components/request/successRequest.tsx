import Header from "../header";

import milestones from "../../assets/milestones.svg";

const SuccessRequest = () => {
  return (
    <div>
      <Header />

      <main className="mt-16">
        <div className="flex flex-col justify-center items-center gap-12">
          <img src={milestones} alt="Walk to success" className="w-56" />
          <div className="flex flex-col justify-center items-center p-4">
            <h1 className="text-3xl font-bold text-blue-500 text-center">
              Verificação realizada!
            </h1>
            <p className="text-md font-medium text-black/60 mt-4 text-center max-w-[500px]">
              Realizamos a verificação da sua matrícula em sua instituição e
              você já recebeu o seu acesso a nossa plataforma.
            </p>
            <button
              className="mt-8 text-white font-semibold bg-blue-500 px-6 py-2 text-md rounded-md hover:bg-blue-700 transition-all duration-300"
              type="button"
            >
              Acessar plataforma
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SuccessRequest;
