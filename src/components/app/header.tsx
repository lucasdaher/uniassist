import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import uniAssistLogo from "../../assets/uniassistlogo.svg";

import { TbUser } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

import { Avatar, AvatarFallback } from "../ui/avatar";
import { IoMdClose } from "react-icons/io";

import { MdMenu } from "react-icons/md";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Sidebar from "./sidebar/sidebar";

import { RiVipCrown2Fill } from "react-icons/ri";
import { FaToolbox } from "react-icons/fa";

interface HeaderProps {
  selected?: string;
}

const Header = ({ selected = "" }: HeaderProps) => {
  const [storedEmail, setStoredEmail] = useState<string | null>(null);

  useEffect(() => {
    const emailStorage = localStorage.getItem("emailAccess");
    if (emailStorage) {
      const parsedData = JSON.parse(emailStorage);
      setStoredEmail(parsedData);
    }
  }, []);

  const [sbOpen, setSbOpen] = useState<boolean>(true);

  const handleSidebar = () => {
    setSbOpen(!sbOpen);
  };

  return (
    <>
      <Sidebar open={sbOpen} handle={handleSidebar} />
      <header
        className={`${
          sbOpen ? "" : "fixed top-0 left-0 z-10"
        } bg-black w-full py-1`}
      >
        <div className="px-8 max-w-[1440px] mx-auto flex justify-between items-center gap-12">
          <div className="flex justify-center items-center gap-12">
            <Link
              to={`/app`}
              className="hover:scale-105 transition-all duration-300"
            >
              <img src={uniAssistLogo} alt="UniAssist Logo" className="w-40" />
            </Link>

            <ul className="hidden md:flex justify-center items-center gap-8">
              <li className="text-white font-sora font-normal text-sm hover:text-blue-500 transition-all duration-200">
                <Link
                  to={`/app/tools`}
                  className={`hover:text-blue-500 transition-all duration-200 ${
                    selected === "tools"
                      ? "text-blue-200"
                      : "no-underline text-white"
                  }`}
                >
                  Ferramentas
                </Link>
              </li>
              <li className="text-white font-sora font-normal text-sm flex justify-center items-center gap-2">
                <a
                  href="https://uniassist-chatbot.vercel.app"
                  className={`${
                    selected === "tools/ia"
                      ? "text-blue-200"
                      : "no-underline text-white"
                  } hover:text-blue-500 transition-all duration-200`}
                >
                  Assistente
                </a>
                <span className="animate-rotate bg-blue-500 text-white leading-none font-bold text-xs p-1 rounded-md">
                  NOVO
                </span>
              </li>
              <li className="text-white font-sora font-normal text-sm hover:text-blue-500 transition-all duration-200">
                <Link
                  to={`/app/tools/tasks`}
                  className={`hover:text-blue-500 transition-all duration-200 ${
                    selected === "tools/tasks"
                      ? "text-blue-200"
                      : "no-underline text-white"
                  }`}
                >
                  Universidades
                </Link>
              </li>
              <li className="text-white font-sora font-normal text-sm flex justify-center items-center gap-2">
                <Link
                  to={`/app/benefits`}
                  className={`${
                    selected === "benefits"
                      ? "text-blue-200"
                      : "no-underline text-white"
                  } hover:text-blue-500 transition-all duration-200`}
                >
                  Premium
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex justify-center items-center gap-4">
            <button className="outline-none border-none">
              {sbOpen ? (
                <MdMenu
                  className="md:hidden text-white text-3xl"
                  onClick={() => handleSidebar()}
                />
              ) : (
                <IoMdClose
                  className="md:hidden text-white text-3xl"
                  onClick={() => handleSidebar()}
                />
              )}
            </button>

            <div className="hidden md:flex">
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
                    <Link to={`/app/profile`}>
                      <DropdownMenuItem>
                        <TbUser className="mr-2 h-4 w-4" />
                        <span>Meu perfil</span>
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem>
                      <IoSettingsOutline className="mr-2 h-4 w-4" />
                      <span>Configurações</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <Link to={`/app/tools`}>
                      <DropdownMenuItem>
                        <FaToolbox className="mr-2 h-4 w-4" />
                        <span>Ferramentas</span>
                        <span className="ml-2 text-white bg-blue-500 rounded-md font-sora font-bold text-xs px-1 animate-rotate">
                          NOVO
                        </span>
                      </DropdownMenuItem>
                    </Link>
                    <Link to={`/app/benefits`}>
                      <DropdownMenuItem>
                        <RiVipCrown2Fill className="mr-2 h-4 w-4" />
                        <span>Premium</span>
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
