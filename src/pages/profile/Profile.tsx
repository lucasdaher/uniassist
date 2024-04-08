import DelAccount from "@/components/app/alert-dialog/delAccount";
import Header from "@/components/app/header";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

import rocket from "../../assets/rocket.svg";

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
        <h1 className="text-3xl font-sora font-bold text-black mt-6 leading-normal">
          Seu perfil
        </h1>
        <p className="text-md font-sora font-normal text-black/70 mt-1">
          Algumas alterações em seu perfil estão sujeitas a revisão e aprovação
          pela nossa equipe.
        </p>

        <section className="mt-8">
          <div className="flex justify-center items-start gap-4 border border-blue-500/30 bg-blue-50 rounded-md px-4 py-8">
            <div className="flex flex-col justify-center items-center">
              <Avatar className="w-32 h-32 text-6xl text-white mb-4">
                <AvatarFallback className="bg-blue-500">
                  {storedEmail ? storedEmail.charAt(0).toUpperCase() : "U"}
                </AvatarFallback>
              </Avatar>
              <h1 className="font-sora font-bold text-black/70 text-xl mt-2">
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
        </section>

        <section className="mt-8">
          <div className="flex flex-col justify-center items-start gap-2 border border-blue-500/30 bg-blue-50 rounded-md p-4">
            <img src={rocket} alt="Rocket business" className="w-64" />
            <h1 className="font-sora font-bold text-blue-500 text-xl mt-2">
              Premium
            </h1>
            <p className="text-md font-sora font-normal text-black/70">
              Vimos que você não possui o Premium do{" "}
              <strong className="text-blue-500">UniAssist</strong>. Que tal dar
              uma olhada em nossa promoção e garantir benefícios em nossa
              plataforma?
            </p>
            <button
              className="bg-blue-500 text-white font-sora font-semibold px-4 py-3 rounded-md text-sm mt-4"
              type="button"
            >
              Quero me tornar Premium
            </button>
          </div>
        </section>

        <section className="mt-6">
          <div className="flex flex-col justify-center items-start gap-2 border border-red-500/30 bg-red-50 rounded-md p-4">
            <h1 className="font-sora font-bold text-red-500 text-xl mt-2">
              Zona de perigo
            </h1>
            <p className="text-md font-sora font-normal text-red-600">
              Você pode excluir a sua conta a qualquer momento clicando no botão
              abaixo.{" "}
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
      </main>
    </>
  );
};

export default Profile;
