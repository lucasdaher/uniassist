import { Link } from "react-router-dom";
import uniAssistLogoBlack from "../assets/uniassistlogo.svg";

interface HeaderProps {
  accessBtn?: boolean;
}

const Header = ({ accessBtn = false }: HeaderProps) => {
  return (
    <header>
      <div className="px-4 py-2 w-full bg-dark-500 flex justify-between items-center">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-xs text-white font-medium">Acesso antecipado</h1>
        </div>
      </div>

      <div className="px-2 md:px-16 py-4 w-full bg-blue-500">
        <div className="max-w-[1440px] mx-auto flex justify-between md:justify-center items-center gap-12">
          <Link
            to={`/`}
            className="outline-none border-none hover:transform hover:scale-105 transition-all duration-200"
          >
            <img
              src={uniAssistLogoBlack}
              alt="UniAssist Logo"
              className="w-44"
            />
          </Link>

          <ul className="hidden lg:flex justify-center items-center gap-8">
            <li className="text-white font-normal text-sm hover:text-blue-700 hover:underline">
              <Link to={`/`}>Início</Link>
            </li>
            <li className="text-white font-normal text-sm hover:text-blue-700 hover:underline">
              <Link to={`/project-presentation`}>Apresentação</Link>
            </li>
            <li
              className="text-white font-normal text-sm hover:text-blue-700 hover:underline cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                window.alert("A central de ajuda está em desenvolvimento...");
              }}
            >
              Ajuda
              {/* <Link to={`/help`}>Ajuda</Link> */}
            </li>
          </ul>

          {accessBtn ? (
            <Link to={`/request-access`}>
              <button
                type="button"
                title="Entrar em sua conta UniAssist."
                className="font-sora font-medium bg-blue-50 text-blue-500 rounded-md px-2 md:px-6 py-1 text-sm hover:bg-blue-800 hover:text-blue-50 transition-all duration-100 mr-4"
              >
                Acessar
              </button>
            </Link>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;
