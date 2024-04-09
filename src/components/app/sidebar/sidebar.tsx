import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { IoIosSettings } from "react-icons/io";

interface SidebarProps {
  open?: boolean;
  set?: boolean;
  handle?: () => void;
}

const Sidebar = ({ open, handle }: SidebarProps) => {
  const [storedEmail, setStoredEmail] = useState<string | null>(null);

  useEffect(() => {
    const emailStorage = localStorage.getItem("emailAccess");
    if (emailStorage) {
      const parsedData = JSON.parse(emailStorage);
      setStoredEmail(parsedData);
    }
  }, []);
  return (
    <aside
      className={`fixed lg:hidden xl:hidden border-t border-white/30 bg-black w-full h-full transition-all duration-300 ${
        open ? "top-[63px] -right-[100%]" : "top-[63px] right-0"
      } z-20`}
    >
      <ul className="flex flex-col justify-center items-start gap-4 z-10 px-12 py-12">
        <li className="flex justify-start items-center gap-4 mt-2 pb-5 border-b border-gray/30 w-full">
          <Link
            to={`/app/profile`}
            className={`flex justify-center items-center gap-3 hover:text-blue-500 transition-all duration-200`}
          >
            <>
              <Avatar className="outline-none">
                <AvatarFallback className="text-white bg-blue-500">
                  {storedEmail ? storedEmail.charAt(0).toUpperCase() : "U"}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-center items-start">
                <span className="text-white font-sora font-normal text-md">
                  Visualizar Perfil
                </span>
                <span className="text-white/60 font-sora font-normal text-xs">
                  {storedEmail}
                </span>
              </div>
            </>
          </Link>
        </li>
        <li className="text-white font-sora font-normal text-lg hover:text-blue-500 transition-all duration-200 w-full">
          <Link
            to={`/app/tools`}
            className={`text-white hover:text-blue-500 transition-all duration-200`}
            onClick={() => handle}
          >
            Ferramentas
          </Link>
        </li>
        <li className="text-white font-sora font-normal text-lg flex justify-start items-center gap-2 w-full">
          <Link
            to={`/app/tools/ia`}
            className={`text-white hover:text-blue-500 transition-all duration-200`}
          >
            Inteligência Artificial
          </Link>
          <span className="animate-rotate bg-blue-500 text-white leading-none font-bold text-xs p-1 rounded-md">
            NOVO
          </span>
        </li>
        <li className="text-white font-sora font-normal text-lg hover:text-blue-500 transition-all duration-200 w-full">
          <Link
            to={`/app/tools/tasks`}
            className={`hover:text-blue-500 transition-all duration-200`}
          >
            Tarefas
          </Link>
        </li>
        <li className="text-white font-sora font-normal text-lg flex justify-start items-center gap-2 w-full">
          <Link
            to={`/app/benefits`}
            className={` hover:text-blue-500 transition-all duration-200`}
          >
            Premium
          </Link>
          <span className="animate-rotate bg-blue-500 text-white leading-none font-bold text-xs p-1 rounded-md">
            50% OFF
          </span>
        </li>
        <li className=" hover:text-blue-500 transition-all duration-200 w-full mt-12">
          <Link
            to={`/app/settings`}
            className={`flex justify-start items-center gap-2 hover:text-blue-500 transition-all duration-200`}
          >
            <IoIosSettings className="text-blue-300 text-xl" />
            <span className="text-blue-300 font-sora font-normal text-lg">
              Configurações
            </span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
