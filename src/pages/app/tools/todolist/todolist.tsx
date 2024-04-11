import Header from "@/components/app/header";

import dev from "../../../../assets/dev.svg";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Todolist = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />

      <main className="max-w-[1440px] mx-auto p-4 flex flex-col justify-center items-center mt-12">
        <img src={dev} alt="Development" className="w-64 mb-4" />
        <h1 className="text-blue-500 font-sora font-bold text-2xl mt-4 text-center">
          Em desenvolvimento...
        </h1>
        <h1 className="text-black/70 font-sora font-normal text-base text-center mt-1">
          Esta página ainda está sendo desenvolvida, volte outro dia!
        </h1>
        <Link to={`/app`}>
          <button
            className="bg-blue-500 text-white text-md font-sora font-medium px-8 py-3 rounded-md mt-10 hover:bg-blue-700 transition-all duration-200"
            type="button"
          >
            Voltar ao início
          </button>
        </Link>
      </main>
    </div>
  );
};

export default Todolist;
