import announce from "../../../assets/curriculo.svg";
import { Link } from "react-router-dom";

const Announce = () => {
  return (
    <>
      <div className="w-full mx-auto bg-blue-50 border border-blue-500/30 p-4 rounded-md mt-12 flex flex-col md:flex-row justify-center items-start md:items-center gap-4 md:gap-12 mb-6">
        <img
          src={announce}
          alt="Announcement Image"
          className="w-full md:w-56 max-w-[364px]"
        />

        <div>
          <h1 className="text-blue-500 font-bold font-sora text-2xl mt-4 md:mt-0">
            Conheça o nosso construtor de currículos!
          </h1>
          <p className="text-black/70 font-sora font-normal text-md mt-2 max-w-96">
            Você sabia que nós desenvolvemos uma ferramenta para construção de
            currículos e é super fácil de ser usada?
          </p>

          <Link to={`/app/tools/curriculum`}>
            <button className="bg-blue-500 text-white text-md font-sora font-medium px-8 py-3 rounded-md hover:bg-blue-700 mt-6">
              Conhecer ferramenta
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Announce;
