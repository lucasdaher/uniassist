import Header from "@/components/app/header";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { GoAlertFill } from "react-icons/go";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z
    .string()
    .nonempty({ message: "Você precisa digitar o seu nome completo. " }),
  email: z
    .string()
    .email({ message: "Você precisa digitar um e-mail válido." }),
});

type FormData = z.infer<typeof schema>;

const Curriculum = () => {
  const [selected, setSelected] = useState<string>("edit");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));
  };

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-[1440px] mx-auto px-4">
        <Breadcrumb className="mt-6">
          <BreadcrumbList className="text-md font-sora">
            <BreadcrumbItem>
              <Link to={`/app`}>Início</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link to={`/app/tools`}>Ferramentas</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Criador de Currículo</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-3xl font-sora font-bold text-blue-500 mt-6 leading-normal">
          Criador de Currículo
        </h1>
        <p className="text-md font-sora font-normal text-black/70 mt-1">
          Está com dificuldades em construir o seu currículo? Está aqui a sua
          solução.
        </p>

        {/* Selectors */}
        <div className="mt-8">
          <div className="flex justify-start items-center">
            <button
              type="button"
              className={`${
                selected === "edit"
                  ? "bg-blue-100 border border-blue-500/50 text-blue-500"
                  : "bg-gray/50 border border-gray text-black/70"
              } px-4 py-1 rounded-s-md flex justify-center items-center transition-all duration-500`}
              onClick={() => setSelected("edit")}
            >
              <span className="text-sm font-sora font-normal">Editar</span>
            </button>
            <button
              type="button"
              className={`${
                selected === "preview"
                  ? "bg-blue-100 border border-blue-500/50 text-blue-500"
                  : "bg-gray/50 border border-gray text-black/70"
              } px-4 py-1 rounded-e-md flex justify-center items-center transition-all duration-500`}
              onClick={() => setSelected("preview")}
            >
              <span className="text-sm font-sora font-normal">Prévia</span>
            </button>
          </div>
        </div>

        <div className="container bg-gray/50 border border-gray rounded-md px-4 py-4 mt-2">
          <form
            className="flex flex-col justify-center items-start gap-5 w-full"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(onSubmit)();
            }}
          >
            {/* Nome Completo */}
            <div className="form-group flex flex-col justify-center items-start w-full">
              <label className="font-sora font-semibold text-md text-blue-500">
                Nome completo:
              </label>
              <input
                type="text"
                placeholder="Digite seu nome completo"
                className={`px-4 py-2 w-full rounded-md border text-md ${
                  errors?.name
                    ? "border-red-500 focus:border-red-500 focus:border"
                    : "border-gray"
                }  outline-none`}
                {...register("name")}
              />
              {errors?.name && (
                <div className="flex justify-start items-end gap-1 mt-1">
                  <GoAlertFill className="text-red-500 text-sm leading-none" />
                  <span className="text-xs text-red-500 font-sora font-normal leading-none">
                    {errors?.name?.message}
                  </span>
                </div>
              )}
            </div>

            {/* E-mail */}
            <div className="form-group flex flex-col justify-center items-start w-full">
              <label className="font-sora font-semibold text-md text-blue-500">
                E-mail:
              </label>
              <input
                type="text"
                placeholder="Digite seu nome completo"
                className={`px-4 py-2 w-full rounded-md border text-md ${
                  errors?.email
                    ? "border-red-500 focus:border-red-500 focus:border"
                    : "border-gray"
                }  outline-none`}
                {...register("email")}
              />
              {errors?.email && (
                <div className="flex justify-start items-end gap-1 mt-1">
                  <GoAlertFill className="text-red-500 text-sm leading-none" />
                  <span className="text-xs text-red-500 font-sora font-normal leading-none">
                    {errors?.email?.message}
                  </span>
                </div>
              )}
            </div>

            <button
              className="text-white font-sora font-medium text-md bg-blue-500 rounded-md px-6 py-2"
              type="submit"
            >
              Gerar currículo
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Curriculum;
