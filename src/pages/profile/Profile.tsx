import DelAccount from "@/components/app/alert-dialog/delAccount";
import Header from "@/components/app/header";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import rocket from "../../assets/rocket.svg";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const Profile = () => {
  const [storedEmail, setStoredEmail] = useState<string | null>(null);

  useEffect(() => {
    const emailStorage = localStorage.getItem("emailAccess");
    if (emailStorage) {
      const parsedData = JSON.parse(emailStorage);
      setStoredEmail(parsedData);
    }
  }, []);
  return (
    <>
      <Header />
      <main className="max-w-[1440px] mx-auto mt-4 p-4">
        <Link to={`/app`} className="no-underline">
          <FaArrowLeft className="text-blue-500 hover:text-blue-700 transition-all duration-300 text-2xl" />
        </Link>
        <Breadcrumb className="mt-8">
          <BreadcrumbList className="text-md font-sora">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Início</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Meu Perfil</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-3xl font-sora font-bold text-blue-500 mt-6 leading-normal">
          Visualizando Perfil
        </h1>
        <p className="text-md font-sora font-normal text-black/70 mt-1">
          Algumas alterações em seu perfil estão sujeitas a revisão e aprovação
          pela nossa equipe.
        </p>

        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <section className="w-full mt-8">
            {/* Perfil do usuário */}
            <div className="flex justify-center items-center gap-4 border border-blue-500/30 bg-blue-50 rounded-md p-4 w-full">
              <div className="flex flex-col justify-center items-center gap-6">
                <Avatar className="w-32 h-32 text-6xl text-white leading-none">
                  <AvatarFallback className="bg-blue-500">
                    {storedEmail ? storedEmail.charAt(0).toUpperCase() : "U"}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="font-sora font-bold text-black/70 text-xl">
                    {storedEmail}
                  </h1>
                  <h1 className="font-sora font-medium text-black/70 text-sm mb-3">
                    Universidade Católica de Brasília
                  </h1>
                  <div className="group hover:text-blue-700 transition-all duration-200">
                    <button
                      className="outline-none border-none flex justify-center items-center gap-1"
                      type="button"
                    >
                      <FaEdit className="text-blue-500 text-xl leading-none group-hover:text-blue-700 transition-all duration-200" />
                      <span className="text-sm font-sora text-blue-500 font-medium leading-none group-hover:text-blue-700 transition-all duration-200">
                        Editar e-mail institucional
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Anúncio Premium */}
          <section className="w-full">
            <div className="flex flex-col md:flex-row justify-start items-center gap-4 border border-blue-500/30 bg-blue-50 rounded-md p-4">
              <img src={rocket} alt="Rocket business" className="w-64" />
              <div className="">
                <h1 className="font-sora font-bold text-blue-500 text-xl mt-2">
                  Premium
                </h1>
                <p className="text-md font-sora font-normal text-black/70 max-w-[500px] mt-2">
                  Você ainda não adquiriu os benefícios de ser um usuário
                  Premium. Que tal dar uma olhada em nossa promoção e garantir
                  muitos benefícios em nossa plataforma?
                </p>
                <button
                  className="bg-blue-500 px-4 py-3 rounded-md text-sm mt-4 flex justify-center items-center hover:bg-blue-700 transition-all duration-300"
                  type="button"
                >
                  <MdOutlineWorkspacePremium className="mr-2 h-4 w-4 text-white" />
                  <span className="text-white font-sora font-medium">
                    Quero me tornar Premium
                  </span>
                </button>
              </div>
            </div>
          </section>

          {/* Zona de Perigo */}
          <section className="w-full">
            <div className="flex flex-col justify-center items-start gap-2 border border-red-500/30 bg-red-50 rounded-md p-4 w-full">
              <h1 className="font-sora font-bold text-red-500 text-xl mt-2">
                Zona de perigo
              </h1>
              <p className="text-md font-sora font-normal text-red-600">
                Você pode excluir a sua conta a qualquer momento clicando no
                botão abaixo.{" "}
                <strong className="text-red-500">
                  Mas lembre-se que esta é uma ação irreversível
                </strong>
                .
              </p>
              <Button className="bg-red-500  hover:bg-red-700 transition-all duration-300 mt-4">
                <DelAccount />
              </Button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Profile;
