import Header from "@/components/app/header";

import { FaTasks, FaRegNewspaper } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { BsWechat } from "react-icons/bs";

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
    icon: <BsWechat className="text-2xl text-blue-500 leading-none" />,
    title: "Inteligência Artificial",
    desc: "Para facilitar a sua vida, nós integramos o ChatGPT dentro da nossa plataforma para que você tenha tudo em um só lugar, melhorando o seu workflow.",
  },
  {
    id: 2,
    icon: <FaTasks className="text-2xl text-blue-500 leading-none" />,
    title: "Agenda de Tarefas",
    desc: "Queremos que você seja o mais organizado possível, por isso desenvolvemos uma ferramenta para que você adicione suas tarefas e mantenha sua organização e desempenho.",
  },
  {
    id: 3,
    icon: <FaRegNewspaper className="text-2xl text-blue-500 leading-none" />,
    title: "Construtor de Currículo",
    desc: "Sabemos que para alguns a construção de um currículo pode ser complicado. Por isso, desenvolvemos uma ferramenta que te ajudará na criação do seu currículo.",
  },
];

const Tools = () => {
  return (
    <>
      <div className="">
        <Header selected="tools" />

        <main className="max-w-[1440px] mx-auto mt-6 px-4">
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
                <div className="flex justify-start items-center gap-4">
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
                  <h1 className="font-sora font-medium text-blue-500 group-hover:text-blue-700">
                    Acessar ferramenta
                  </h1>
                </button>
              </div>
            ))}
          </div>
        </main>

        <footer className="mt-24 bg-black py-2 px-6 w-full">
          <h1 className="font-sora font-medium text-white/70 text-sm">
            UniAssist.com
          </h1>
        </footer>
      </div>
    </>
  );
};

export default Tools;
