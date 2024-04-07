import { Link } from "react-router-dom";
import uniAssistLogoBlack from "../assets/uniassistlogo.svg";

const Header = () => {
  return (
    <header>
      <div className="px-4 py-2 w-full bg-dark-500 flex justify-between items-center">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-xs text-white font-medium">Acesso antecipado</h1>
        </div>
      </div>

      <div className="px-16 py-4 w-full bg-blue-500">
        <div className="max-w-[1440px] mx-auto flex justify-center items-center gap-12">
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
              <Link to={`/student`}>Estudante</Link>
            </li>
            <li className="text-white font-normal text-sm hover:text-blue-700 hover:underline">
              <Link to={`/presentation`}>Apresentação</Link>
            </li>
            <li className="text-white font-normal text-sm hover:text-blue-700 hover:underline">
              <Link to={`/help`}>Ajuda</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
