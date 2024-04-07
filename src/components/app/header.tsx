import { Link } from "react-router-dom";
import uniAssistLogo from "../../assets/uniassistlogo.svg";

const Header = () => {
  return (
    <header className="bg-black w-full py-1">
      <div className="max-w-[1440px] mx-auto flex justify-center items-center gap-12">
        <Link
          to={`/app`}
          className="hover:scale-105 transition-all duration-300"
        >
          <img src={uniAssistLogo} alt="UniAssist Logo" className="w-40" />
        </Link>

        <ul className="flex justify-center items-center gap-8">
          <li className="text-white font-sora font-normal text-sm hover:text-blue-500 transition-all duration-200">
            <Link to={`/app/tools`}>Ferramentas</Link>
          </li>
          <li className="text-white font-sora font-normal text-sm flex justify-center items-center gap-2">
            <Link
              to={`/app/tools/ia`}
              className="hover:text-blue-500 transition-all duration-200 no-underline"
            >
              Inteligência Artificial
            </Link>
            <span className="animate-rotate bg-blue-500 text-white font-bold text-xs px-1 rounded-md">
              NOVO
            </span>
          </li>
          <li className="text-white font-sora font-normal text-sm hover:text-blue-500 transition-all duration-200">
            <Link to={`/app/tools/tasks`}>Tarefas</Link>
          </li>
          <li className="text-white font-sora font-normal text-sm hover:text-blue-500 transition-all duration-200">
            <Link to={`/app/groups`}>Grupos</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
