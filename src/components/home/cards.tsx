import controleDeTarefas from "../../assets/task.svg";
import ia from "../../assets/ia.svg";
import gratuito from "../../assets/free2.svg";

import { MdKeyboardArrowRight } from "react-icons/md";

const Cards = () => {
  const data = [
    {
      id: 1,
      img: controleDeTarefas,
      name: "Controle de Tarefas",
      desc: "Com o UniAssist, sua vida acadêmica fica mais organizada e colaborativa! Compartilhe tarefas, defina lembretes e alcance o sucesso universitário de forma inteligente.",
      buttonText: "Saber mais",
    },
    {
      id: 2,
      img: ia,
      name: "Inteligência Artificial",
      desc: "No nosso ambiente, você não precisa mais alternar entre sites para fazer consultas no ChatGPT. Integramos tudo em um só lugar para tornar sua vida mais fácil.",
      buttonText: "Saber mais",
    },
    {
      id: 3,
      img: gratuito,
      name: "Gratuito para Estudantes",
      desc: "Por enquanto, a nossa plataforma é gratuita apenas para estudantes matriculados na Universidade Católica de Brasília.",
      buttonText: "Saber mais",
    },
  ];
  return (
    <section
      className="max-w-[1440px] mx-auto grid justify-center place-content-center 
      gap-x-6 gap-y-8 grid-cols-1 sm:grid-cols-2 
    md:grid-cols-2 lg:grid-cols-3 mt-32"
    >
      {data.map((card) => (
        <div
          className="bg-white hover:bg-blue-50 py-6 px-8 w-full rounded-md max-w-[600px] hover:scale-105 transition-all duration-300"
          key={card.id}
        >
          <img src={card.img} alt="Illustration Img" className="w-72" />
          <h1 className="text-blue-500 font-bold text-2xl mt-4 w-full">
            {card.name}
          </h1>
          <p className="text-dark-500/70 text-md mt-2 w-full h-[96px]">
            {card.desc}
          </p>
          <button className="flex justify-center items-center gap-1 text-blue-500 font-normal text-md mt-6 hover:text-blue-700 transition-all duration-200">
            {card.buttonText}{" "}
            <MdKeyboardArrowRight className="text-xl leading-none" />
          </button>
        </div>
      ))}
    </section>
  );
};

export default Cards;
