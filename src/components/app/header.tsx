import { Link } from "react-router-dom";
import uniAssistLogo from "../../assets/uniassistlogo.svg";
import { Avatar, AvatarFallback } from "../ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useEffect, useState } from "react";

import { TbUser } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

const Header = () => {
  const [storedEmail, setStoredEmail] = useState<string | null>(null);

  useEffect(() => {
    const emailStorage = localStorage.getItem("emailAccess");
    if (emailStorage) {
      const parsedData = JSON.parse(emailStorage);
      setStoredEmail(parsedData);
    }
  }, []);

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
            <span className="animate-rotate bg-blue-500 text-white leading-none font-bold text-xs p-1 rounded-md">
              NOVO
            </span>
          </li>
          <li className="text-white font-sora font-normal text-sm hover:text-blue-500 transition-all duration-200">
            <Link to={`/app/tools/tasks`}>Tarefas</Link>
          </li>
          <li className="text-white font-sora font-normal text-sm flex justify-center items-center gap-2">
            <Link
              to={`/app/benefits`}
              className="hover:text-blue-500 transition-all duration-200 no-underline"
            >
              Premium
            </Link>
            <span className="animate-rotate bg-blue-500 text-white leading-none font-bold text-xs p-1 rounded-md">
              50% OFF
            </span>
          </li>
        </ul>

        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <Avatar className="outline-none">
              <AvatarFallback>
                {storedEmail ? storedEmail.charAt(0).toUpperCase() : "U"}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel className="text-blue-500">
              {storedEmail}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <TbUser className="mr-2 h-4 w-4" />
                <span>Meu perfil</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IoSettingsOutline className="mr-2 h4 w-4" />
                {/* <Settings className="mr-2 h-4 w-4" /> */}
                <span>Configurações</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
