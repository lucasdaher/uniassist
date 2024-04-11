import { Link } from "react-router-dom";
import presentation from "../../assets/presentation/presentation.svg";

const Presentation = () => {
  return (
    <>
      <div className="w-full h-full bg-blue-500 p-4">
        <header className="max-w-[1440px] mx-auto flex flex-col justify-center items-center">
          <img
            src={presentation}
            alt="Presentation Img"
            className="w-80 mb-6"
          />
          <h1 className="font-sora font-bold text-2xl text-white text-center">
            Apresentação do Projeto
          </h1>
          <p className="text-white/90 font-sora font-normal text-center text-sm mt-2 w-full">
            Bem-vindos! Esta é uma rápida apresentação do meu projeto UniAssist.
          </p>
        </header>

        <main className="max-w-[1440px] mx-auto mt-8">
          <div className="flex flex-col justify-center items-center gap-4">
            <section className="bg-blue-50 border border-blue-500 rounded-md p-4">
              <h1 className="text-lg font-sora font-bold text-blue-500 text-left">
                01. Introdução
              </h1>
              <p className="text-black/70 font-sora font-normal text-left text-sm mt-2 leading-6">
                A apresentação será extremamente resumida. Caso tenha
                curiosidade de conhecer em detalhes a plataforma, solicite o seu
                acesso no menu principal e utilize o seu e-mail institucional
                para entrar.
              </p>
            </section>

            <section className="bg-blue-50 border border-blue-500 rounded-md p-4">
              <h1 className="text-lg font-sora font-bold text-blue-500 text-left">
                02. Solicitar o seu acesso
              </h1>
              <p className="text-black/70 font-sora font-normal text-left text-sm mt-2 leading-6">
                A plataforma está restrita exclusivamente aos estudantes da{" "}
                <strong>Universidade Católica de Brasília</strong>. Para
                garantir o seu acesso, utilize o seu e-mail institucional na aba
                de acesso.
              </p>
            </section>

            <section className="bg-blue-50 border border-blue-500 rounded-md p-4">
              <h1 className="text-lg font-sora font-bold text-blue-500 text-left">
                03. Objetivo da plataforma
              </h1>
              <p className="text-black/70 font-sora font-normal text-left text-sm mt-2 leading-6">
                O intuito do nosso projeto é fornecer ferramentas que irão
                auxiliar e facilitar a sua vida universitária, desde criar o seu
                primeiro currículo até realizar pesquisas com assistência de uma
                inteligência artificial.
              </p>
            </section>

            <section className="bg-blue-50 border border-blue-500 rounded-md p-4">
              <h1 className="text-lg font-sora font-bold text-blue-500 text-left">
                04. Principal ferramenta
              </h1>
              <p className="text-black/70 font-sora font-normal text-left text-sm mt-2 leading-6">
                Nossa principal ferramenta atualmente é o{" "}
                <strong>Criador de Currículos</strong>, que auxilia estudantes
                que, mesmo com todos os modelos disponíveis na internet, ainda
                enfrentam dificuldades ao criar um currículo pela primeira vez.
              </p>
            </section>

            <section className="bg-blue-50 border border-blue-500 rounded-md p-4">
              <h1 className="text-lg font-sora font-bold text-blue-500 text-left">
                05. Benefícios
              </h1>
              <p className="text-black/70 font-sora font-normal text-left text-sm mt-2 leading-6">
                Para os estudantes que enfrentam dificuldades em organização e
                conclusão de trabalhos acadêmicos, nossa plataforma oferece duas
                ferramentas valiosas:
              </p>
              <ul className="ml-4">
                <li className="list-disc text-black/70 font-sora font-normal text-left text-sm mt-6 leading-6">
                  <strong className="text-blue-500 font-sora">
                    Inteligência Artificial:{" "}
                  </strong>
                  A IA está aqui para auxiliar, fornecendo orientações e
                  sugestões personalizadas para aprimorar seus projetos e
                  tarefas.
                </li>
              </ul>
              <ul className="ml-4">
                <li className="list-disc text-black/70 font-sora font-normal text-left text-sm mt-4 leading-6">
                  <strong className="text-blue-500 font-sora">
                    Agenda de Tarefas:{" "}
                  </strong>
                  Mantenha-se no caminho certo com nossa agenda integrada, que
                  permite planejar, acompanhar e gerenciar suas atividades
                  acadêmicas de forma eficiente.
                </li>
              </ul>
            </section>

            <section className="bg-blue-50 border border-blue-500 rounded-md p-4 mb-6">
              <h1 className="text-lg font-sora font-bold text-blue-500 text-left">
                06. Principal ferramenta
              </h1>
              <p className="text-black/70 font-sora font-normal text-left text-sm mt-2 leading-6">
                Nossa principal ferramenta atualmente é o{" "}
                <strong>Criador de Currículos</strong>, que auxilia estudantes
                que, mesmo com todos os modelos disponíveis na internet, ainda
                enfrentam dificuldades ao criar um currículo pela primeira vez.
              </p>
            </section>

            <Link to={`/request-access`} className="no-underline outline-none">
              <button
                type="button"
                title="Clique para ir até a aba de acesso."
                className="font-sora font-medium rounded-md w-full mb-12 bg-white text-blue-500 py-4 px-6 hover:bg-blue-50 transition-all duration-200"
              >
                Solicitar o meu acesso
              </button>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default Presentation;
