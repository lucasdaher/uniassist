import uniAssistLogo from "../assets/uniassistlogo.svg";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black w-full p-12">
      <div className="max-w-[1440px] mx-auto flex flex-col justify-center items-center gap-8 md:gap-4">
        <Link
          to={`/`}
          className="outline-none border-none hover:transform hover:scale-105 transition-all duration-200"
        >
          <img src={uniAssistLogo} alt="UniAssist Logo" className="w-44" />
        </Link>

        <ul className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-6">
          <li className="text-white font-normal text-xs md:text-sm hover:text-blue-500 hover:underline">
            <Link to={`/student`}>Universidades</Link>
          </li>
          <li className="text-white font-normal text-xs md:text-sm hover:text-blue-500 hover:underline">
            <Link to={`/project-presentation`}>Apresentação do Projeto</Link>
          </li>
        </ul>

        <p className="text-blue-100 font-semibold text-sm mt-4 text-center">
          Todos os direitos reservados para UniAssist &copy;
        </p>
      </div>
    </footer>
  );
};

export default Footer;
