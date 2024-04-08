import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import welcome from "../../assets/welcome.svg";

import { TbAlertTriangleFilled } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

interface RequestForm {
  title?: string;
}

const RequestForm = ({ title }: RequestForm) => {
  const [access, setAccess] = useState<string>(
    JSON.stringify(localStorage.getItem("access"))
  );

  const handleAccess = () => {
    setAccess(access === "noAccess" ? "access" : "noAccess");
    localStorage.setItem("access", access === null ? "access" : "access");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = (data: any) => {
    navigate("/request-success");
    localStorage.setItem("emailAccess", JSON.stringify(data.email));
    handleAccess();
  };

  const [storedEmail, setStoredEmail] = useState<string | null>(null);

  useEffect(() => {
    const emailStorage = localStorage.getItem("emailAccess");
    if (emailStorage) {
      const parsedData = JSON.parse(emailStorage);
      setStoredEmail(parsedData);
    }
  }, []);

  const [isEmailFocus, setIsEmailFocus] = useState(false);

  return (
    <>
      {(localStorage.getItem("access") === "access" && (
        <div className="register flex flex-col justify-start md:justify-start items-center bg-white md:bg-gradient-to-t md:from-blue-200 md:to-blue-500 w-full h-full pb-52 overflow-hidden md:pt-24">
          <div className="container bg-white w-full h-full md:h-auto md:w-[500px] px-6 py-12 rounded-md mx-auto mb-24 flex flex-col justify-start md:justify-center items-center">
            <img src={welcome} alt="Welcome" className="w-80" />

            <h1 className="text-4xl font-bold text-blue-500 text-center mt-2">
              Bem-vindo de volta!
            </h1>
            <p className="text-black/70 font-sora font-normal text-md mt-3 w-full text-center max-w-[452px]">
              Você já possui acesso a nossa plataforma, por tanto não precisa
              solicitar novamente.
            </p>
            <div className="flex justify-center items-center border border-gray-400 bg-gray-100 border-opacity-30 w-full py-2 px-4 rounded-md mt-6 text-center max-w-[452px]">
              <p className="text-sm text-black/70">
                Você se cadastrou utilizando o e-mail{" "}
                <span className="font-semibold text-sm text-blue-500">
                  {storedEmail}
                </span>
              </p>
            </div>
            <Link to={`/app`} className="mt-8 no-underline">
              <button
                className="text-white font-medium font-sora bg-blue-500 px-6 py-2 rounded-md hover:bg-blue-700 transition-all duration-200"
                type="button"
              >
                Acessar plataforma
              </button>
            </Link>
          </div>
        </div>
      )) ||
        (localStorage.getItem("access") !== "access" && (
          <div className="register flex flex-col justify-start md:justify-start items-center bg-white md:bg-gradient-to-t md:from-blue-200 md:to-blue-500 w-full h-screen md:h-screen overflow-hidden md:pt-24">
            <div className="container bg-white w-full h-full md:h-auto md:w-96 p-6 rounded-md mx-auto mb-24">
              <div className="flex flex-col justify-start md:justify-center items-center">
                <h1 className="text-2xl font-bold font-sora text-blue-500 text-left md:text-center w-full">
                  {title}
                </h1>
                <p className="text-sm font-regular font-sora text-black/70 text-left md:text-center leading-normal mb-6 mt-2 w-full">
                  Para receber o seu acesso, você deverá especificar o seu
                  e-mail institucional.
                </p>
              </div>

              <form
                className="w-full flex flex-col justify-center items-center gap-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(onSubmit)();
                }}
              >
                <div className="form-group relative w-full">
                  <input
                    type="text"
                    placeholder="E-mail institucional"
                    {...register("email", {
                      required: true,
                      pattern: /^[a-zA-Z0-9][a-zA-Z0-9.]*@(a|p)\.ucb\.br$/,
                    })}
                    onFocus={() => setIsEmailFocus(true)}
                    onBlur={() => setIsEmailFocus(false)}
                    className={`w-full font-sora text-sm border ${
                      errors?.email
                        ? "border-red-400 border-opacity-60 text-black"
                        : "border-black border-opacity-20 text-black"
                    } rounded-lg py-3 px-4 focus:border focus:border-opacity-100 
                focus:border-blue-500 outline-none ${
                  isEmailFocus
                    ? "placeholder:opacity-0 transition-all duration-100"
                    : "placeholder:opacity-100 transition-all duration-100"
                }`}
                  />
                  <span
                    className={`placeholder absolute ${
                      isEmailFocus
                        ? "-top-2 left-2 text-xs bg-white px-1 transition-all duration-100 transform translate-y-0 text-blue-500"
                        : "opacity-0 top-5 left-4 text-sm transition-all duration-100 transform -translate-y-2 pointer-events-none text-black/50"
                    } font-sora font-normal transition-all duration-100`}
                  >
                    E-mail institucional
                  </span>
                  <div className="">
                    {errors?.email?.type === "required" && (
                      <div className="mt-1 flex justify-start items-center gap-1">
                        <TbAlertTriangleFilled className="text-sm text-red-400" />
                        <p className="font-sora font-normal text-xs text-red-400">
                          Você precisa digitar um e-mail
                        </p>
                      </div>
                    )}
                    {errors?.email?.type === "pattern" && (
                      <div className="mt-1 flex justify-start items-center gap-1">
                        <TbAlertTriangleFilled className="text-sm text-red-400" />
                        <p className="font-sora font-normal text-xs text-red-400">
                          Você precisa digitar um e-mail válido
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="text-white text-sm font-semibold bg-blue-500 px-6 py-4 rounded-md leading-none w-full mt-2 hover:bg-blue-600 transition-all duration-200"
                >
                  Criar Conta
                </button>

                <Link to={`/`}>
                  <p className="text-blue-500 font-sora text-sm hover:underline hover:underline-offset-2">
                    Voltar
                  </p>
                </Link>
              </form>
            </div>
          </div>
        ))}
    </>
  );
};

export default RequestForm;
