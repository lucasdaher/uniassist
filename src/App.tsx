import { useEffect } from "react";
import Announce from "./components/app/announcements/announce";
import Header from "./components/app/header";

import { useNavigate } from "react-router-dom";
// import LastTasks from "./components/app/task/lastTasks";

import { HiMiniBellAlert } from "react-icons/hi2";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("access") !== "access") {
      navigate("/request-access");
    }
  }, []);
  return (
    <>
      <div>
        <Header />

        <main className="max-w-[1440px] mx-auto px-4">
          <Announce />

          <section className="border-t border-gray/50 mt-6 pt-6">
            <div className="w-full border border-yellow-500/50 bg-yellow-100 rounded-md py-4 px-8 flex justify-start items-center gap-3">
              <HiMiniBellAlert className="text-yellow-900 text-xl hidden md:inline" />
              <h1 className="font-sora font-normal text-sm text-yellow-900 text-center md:text-left">
                Você está na versão de acesso antecipado da plataforma.
                Problemas podem ser encontrados.
              </h1>
            </div>
          </section>

          <section className="mt-8">
            <div className="rounded-md border border-blue-500/30 bg-blue-50 p-4">
              <h1 className="text-3xl font-sora font-bold text-blue-500">
                Tarefa Rápida
              </h1>
              <p className="text-base font-sora font-normal mt-2 text-black/70 border-b border-gray/60 pb-2 mb-4">
                Crie uma tarefa rapidamente sem precisar acessar o menu de
                ferramentas.
              </p>

              <form>
                <div className="form-group flex flex-col justify-center items-start gap-1">
                  <label className="text-lg text-blue-500 font-sora font-medium">
                    Tarefa:
                  </label>
                  <input
                    type="text"
                    placeholder="Digite qual é a sua tarefa..."
                    className="text-sm px-4 py-2 rounded-md w-full outline-none border border-blue-500/50"
                  />
                </div>

                <button
                  className="bg-blue-500 text-white font-sora font-medium text-sm w-full py-3 rounded-md mt-6 hover:bg-blue-700 transition-all duration-200"
                  type="button"
                  title="Criar uma tarefa rapidamente."
                  onClick={(e) => {
                    e.preventDefault();
                    window.alert(
                      "Esta funcionalidade ainda está em desenvolvimento..."
                    );
                  }}
                >
                  Criar tarefa
                </button>
              </form>
            </div>
          </section>

          <section className="mt-8">
            <div className="rounded-md border border-blue-500/30 bg-blue-50 p-4">
              <h1 className="text-3xl font-sora font-bold text-blue-500">
                Tarefas Fixadas
              </h1>
              <p className="text-base font-sora font-normal mt-2 text-black/70 border-b border-gray/60 pb-2 mb-4">
                As tarefas que forem fixadas por você estarão presentes nesta
                seção.
              </p>

              <span className="text-black/70 text-sm italic font-sora font-normal">
                Não encontramos tarefas fixadas por você...
              </span>
            </div>
          </section>

          <section className=""></section>

          <section className="mt-8 mb-8">
            <h1 className="text-xs text-black/30 font-normal">
              Versão alpha 1.0
            </h1>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
