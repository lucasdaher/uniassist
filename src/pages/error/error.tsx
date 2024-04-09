import { Link } from "react-router-dom";
import ErrorImg from "../../assets/404.svg";
import Header from "@/components/app/header";

const Error = () => {
  return (
    <>
      <Header />

      <main className="max-w-[1440px] mx-auto mt-8 md:mt-16 flex flex-col justify-center items-center gap-8 p-4">
        <img src={ErrorImg} alt="Not Found Img" className="w-96" />
        <div className="">
          <h1 className="text-2xl md:text-4xl font-sora font-bold text-blue-500 md:mt-8 text-center">
            Página não encontrada
          </h1>
          <p className="text-black/70 text-md md:text-lg font-sora font-normal max-w-[700px] text-center mt-2">
            Desculpe, infelizmente não encontramos a página que você está
            procurando. Talvez ela esteja em desenvolvimento ou realmente não
            exista...
          </p>
        </div>
        <Link to={`/app`}>
          <button
            className="bg-blue-500 text-white text-md font-sora font-medium px-8 py-3 rounded-md mt-10 hover:bg-blue-700 transition-all duration-200"
            type="button"
          >
            Voltar ao início
          </button>
        </Link>
      </main>
    </>
  );
};

export default Error;
