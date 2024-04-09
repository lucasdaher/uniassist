import announce from "../../../assets/coins.svg";
import { Link } from "react-router-dom";

const Announce = () => {
  return (
    <>
      <div className="w-full mx-auto bg-blue-50 border border-blue-500/30 p-4 rounded-md mt-12 flex flex-col md:flex-row justify-center items-start md:items-center gap-4 md:gap-12">
        <img
          src={announce}
          alt="Announcement Image"
          className="w-full md:w-44 max-w-[364px]"
        />

        <div className="">
          <h1 className="text-blue-500 font-bold font-sora text-2xl">
            Melhore sua produtividade com o Premium!
          </h1>
          <p className="text-black/70 font-sora font-normal text-md mt-1 max-w-96">
            Gostaria de saber mais sobre os benefícios de ser Premium em nossa
            plataforma?
          </p>

          <Link to={`/app/benefits`}>
            <button className="bg-blue-500 text-white text-md font-sora font-medium px-8 py-3 rounded-md hover:bg-blue-700 mt-6">
              Conhecer benefícios
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Announce;
