import Header from "@/components/app/header";

import { IoIosArrowForward } from "react-icons/io";

import curriculo from "../../../assets/curriculo.svg";
import tasks from "../../../assets/task.svg";
import ia from "../../../assets/ia.svg";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const cards = [
  {
    id: 1,
    img: curriculo,
    title: "Construtor de Currículo",
    desc: "Sabemos que para alguns a construção de um currículo pode ser complicado. Por isso, desenvolvemos uma ferramenta que te ajudará na criação do seu currículo.",
  },
  {
    id: 2,
    img: ia,
    title: "Inteligência Artificial",
    desc: "Para facilitar a sua vida, nós integramos o ChatGPT dentro da nossa plataforma para que você tenha tudo em um só lugar, melhorando o seu workflow.",
  },
  {
    id: 3,
    img: tasks,
    title: "Agenda de Tarefas",
    desc: "Queremos que você seja o mais organizado possível, por isso desenvolvemos uma ferramenta para que você adicione suas tarefas e mantenha sua organização e desempenho.",
  },
];

const Tools = () => {
  return (
    <>
      <div className="">
        <Header selected="tools" />

        <main className="max-w-[1440px] mx-auto mt-6 px-4 mb-12">
          <Breadcrumb className="mt-8">
            <BreadcrumbList className="text-md font-sora">
              <BreadcrumbItem>
                <Link to={`/app`}>Início</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Ferramentas</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-3xl font-sora font-bold text-blue-500 mb-1 mt-6">
            Ferramentas disponíveis
          </h1>
          <p className="text-md font-sora font-regular text-black/70 border-b border-[#ccc]/60 pb-6 mb-8">
            Confira todas as ferramentas disponíveis em nossa plataforma:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
            {cards.map((card) => (
              <div
                className="card border border-blue-500/30 bg-blue-50 rounded-md p-8"
                key={card.id}
              >
                <div className="flex flex-col justify-center items-start gap-4">
                  <img
                    src={card.img}
                    alt="Tool Illustration"
                    className="max-w-[400px] w-64 mb-4"
                  />
                  {/* <span className="leading-none">{card.icon}</span> */}
                  <h1 className="text-xl text-blue-500 leading-none font-sora font-bold w-full h-auto">
                    {card.title}
                  </h1>
                </div>
                <p className="text-md text-black/70 h-auto min-h-[96px] font-sora font-normal mt-3">
                  {card.desc}
                </p>
                <button className="text-blue-500 outline-none border-none flex justify-center items-center gap-1 mt-6 group hover:text-blue-700">
                  <IoIosArrowForward className="text-2xl text-blue-500 animate-ia group-hover:text-blue-700" />
                  <Link
                    to={`/app/tools/curriculum`}
                    className="no-underline leading-none"
                  >
                    <h1 className="font-sora font-medium text-blue-500 group-hover:text-blue-700">
                      Acessar ferramenta
                    </h1>
                  </Link>
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Tools;
