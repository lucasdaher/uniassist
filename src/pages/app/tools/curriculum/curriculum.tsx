import Header from "@/components/app/header";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
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
  linkedin: z
    .string()
    .nonempty({ message: "Você precisa digitar um link válido." }),
  github: z
    .string()
    .nonempty({ message: "Você precisa digitar um link válido." }),
  about: z
    .string()
    .nonempty({ message: "Você precisa digitar um resumo sobre você." }),
  number: z
    .number()
    .min(14, { message: "O número deve ter pelo menos 14 digitos." })
    .max(15, { message: "O número deve ter no máximo 15 digitos." })
    .nonnegative({ message: "Você precisa digitar um resumo sobre você." }),
  skills: z
    .string()
    .nonempty({ message: "Você precisa digitar suas habilidades." }),
  exp: z
    .string()
    .nonempty({ message: "Você precisa digitar suas experiências." }),
  acad: z
    .string()
    .nonempty({ message: "Você precisa digitar suas formações." }),
  lang: z.string().nonempty({ message: "Você precisa digitar seus idiomas." }),
});

const formatPhoneNumber = (number: number) => {
  let cleaned = ("" + number).replace(/\D/g, "");
  let match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }

  match = cleaned.match(/^(\d{2})(\d{5})(\d{1,3})$/);
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }

  match = cleaned.match(/^(\d{2})(\d{1,5})$/);
  if (match) {
    return "(" + match[1] + ") " + match[2];
  }

  match = cleaned.match(/^(\d{1,2})$/);
  if (match) {
    return "(" + match[1];
  }
  return number;
};

const handleKeyPress = (e: React.KeyboardEvent) => {
  if (isNaN(Number(e.key))) {
    e.preventDefault();
  }
};

type FormData = z.infer<typeof schema>;

const Curriculum = () => {
  const [selected, setSelected] = useState<string>("edit");

  const {
    handleSubmit,
    register,
    watch,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const formName = watch("name");
  const formEmail = watch("email");
  const formLinkedin = watch("linkedin");
  const formGithub = watch("github");
  const formAbout = watch("about");
  const formSkills = watch("skills");
  const formNumber = watch("number");
  const formExp = watch("exp");
  const formAcad = watch("acad");
  const formLang = watch("lang");

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          Está com dificuldades em construir o seu currículo? Está aqui uma
          ferramenta que te ajudará.
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
              } px-4 py-1 rounded-s-md flex justify-center items-center transition-all duration-300`}
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
              } px-4 py-1 rounded-e-md flex justify-center items-center transition-all duration-300`}
              onClick={() => setSelected("preview")}
            >
              <span className="text-sm font-sora font-normal">Prévia</span>
            </button>
          </div>
        </div>

        <div className="container bg-gray/20 border border-gray rounded-md px-4 py-4 mt-2 transition-all duration-300 h-auto mb-12">
          {(selected === "edit" && (
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
                  Nome Completo:
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
                  placeholder="Digite seu e-mail"
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

              {/* Linkedin */}
              <div className="form-group flex flex-col justify-center items-start w-full">
                <label className="font-sora font-semibold text-md text-blue-500">
                  LinkedIn:
                </label>
                <input
                  type="text"
                  placeholder="Digite o link do seu LinkedIn"
                  className={`px-4 py-2 w-full rounded-md border text-md ${
                    errors?.linkedin
                      ? "border-red-500 focus:border-red-500 focus:border"
                      : "border-gray"
                  }  outline-none`}
                  {...register("linkedin")}
                />
                {errors?.linkedin && (
                  <div className="flex justify-start items-end gap-1 mt-1">
                    <GoAlertFill className="text-red-500 text-sm leading-none" />
                    <span className="text-xs text-red-500 font-sora font-normal leading-none">
                      {errors?.linkedin?.message}
                    </span>
                  </div>
                )}
              </div>

              {/* GitHub */}
              <div className="form-group flex flex-col justify-center items-start w-full">
                <label className="font-sora font-semibold text-md text-blue-500">
                  GitHub:
                </label>
                <input
                  type="text"
                  placeholder="Digite o link do seu GitHub"
                  className={`px-4 py-2 w-full rounded-md border text-md ${
                    errors?.github
                      ? "border-red-500 focus:border-red-500 focus:border"
                      : "border-gray"
                  }  outline-none`}
                  {...register("github")}
                />
                {errors?.github && (
                  <div className="flex justify-start items-end gap-1 mt-1">
                    <GoAlertFill className="text-red-500 text-sm leading-none" />
                    <span className="text-xs text-red-500 font-sora font-normal leading-none">
                      {errors?.github?.message}
                    </span>
                  </div>
                )}
              </div>

              {/* Número de Telefone */}
              <div className="form-group flex flex-col justify-center items-start w-full">
                <label className="font-sora font-semibold text-md text-blue-500">
                  Número de Telefone:
                </label>
                <Controller
                  name="number"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      maxLength={15}
                      placeholder="Digite o número de telefone"
                      value={formatPhoneNumber(field.value)}
                      onKeyPress={handleKeyPress}
                      className={`px-4 py-2 w-full rounded-md border text-md ${
                        errors?.about
                          ? "border-red-500 focus:border-red-500 focus:border"
                          : "border-gray"
                      }  outline-none`}
                    />
                  )}
                />
                {errors?.number && (
                  <div className="flex justify-start items-end gap-1 mt-1">
                    <GoAlertFill className="text-red-500 text-sm leading-none" />
                    <span className="text-xs text-red-500 font-sora font-normal leading-none">
                      {errors?.number?.message}
                    </span>
                  </div>
                )}
              </div>

              {/* Sobre você */}
              <div className="form-group flex flex-col justify-center items-start w-full">
                <label className="font-sora font-semibold text-md text-blue-500">
                  Conte Sobre Você:
                </label>
                <textarea
                  placeholder="Digite um pequeno resumo sobre você"
                  className={`px-4 py-2 w-full rounded-md border text-md min-h-16 max-h-[600px] ${
                    errors?.about
                      ? "border-red-500 focus:border-red-500 focus:border"
                      : "border-gray"
                  }  outline-none`}
                  {...register("about")}
                />
                {errors?.about && (
                  <div className="flex justify-start items-end gap-1 mt-1">
                    <GoAlertFill className="text-red-500 text-sm leading-none" />
                    <span className="text-xs text-red-500 font-sora font-normal leading-none">
                      {errors?.about?.message}
                    </span>
                  </div>
                )}
              </div>

              {/* Habilidades */}
              <div className="form-group flex flex-col justify-center items-start w-full">
                <label className="font-sora font-semibold text-md text-blue-500">
                  Suas Habilidades:
                </label>
                <textarea
                  placeholder="Digite suas habilidades"
                  className={`px-4 py-2 w-full rounded-md border text-md min-h-16 max-h-[600px] ${
                    errors?.skills
                      ? "border-red-500 focus:border-red-500 focus:border"
                      : "border-gray"
                  }  outline-none`}
                  {...register("skills")}
                />
                {errors?.skills && (
                  <div className="flex justify-start items-end gap-1 mt-1">
                    <GoAlertFill className="text-red-500 text-sm leading-none" />
                    <span className="text-xs text-red-500 font-sora font-normal leading-none">
                      {errors?.skills?.message}
                    </span>
                  </div>
                )}
              </div>

              {/* Experiências */}
              <div className="form-group flex flex-col justify-center items-start w-full">
                <label className="font-sora font-semibold text-md text-blue-500">
                  Suas Experiências:
                </label>
                <textarea
                  placeholder="Digite suas experiências"
                  className={`px-4 py-2 w-full rounded-md border text-md min-h-16 max-h-[600px] ${
                    errors?.exp
                      ? "border-red-500 focus:border-red-500 focus:border"
                      : "border-gray"
                  }  outline-none`}
                  {...register("exp")}
                />
                {errors?.exp && (
                  <div className="flex justify-start items-end gap-1 mt-1">
                    <GoAlertFill className="text-red-500 text-sm leading-none" />
                    <span className="text-xs text-red-500 font-sora font-normal leading-none">
                      {errors?.exp?.message}
                    </span>
                  </div>
                )}
              </div>

              {/* Formação */}
              <div className="form-group flex flex-col justify-center items-start w-full">
                <label className="font-sora font-semibold text-md text-blue-500">
                  Suas Formações:
                </label>
                <textarea
                  placeholder="Digite suas formações, cursos, graduações, etc"
                  className={`px-4 py-2 w-full rounded-md border text-md min-h-16 max-h-[600px] ${
                    errors?.acad
                      ? "border-red-500 focus:border-red-500 focus:border"
                      : "border-gray"
                  }  outline-none`}
                  {...register("acad")}
                />
                {errors?.acad && (
                  <div className="flex justify-start items-end gap-1 mt-1">
                    <GoAlertFill className="text-red-500 text-sm leading-none" />
                    <span className="text-xs text-red-500 font-sora font-normal leading-none">
                      {errors?.acad?.message}
                    </span>
                  </div>
                )}
              </div>

              {/* Idiomas */}
              <div className="form-group flex flex-col justify-center items-start w-full">
                <label className="font-sora font-semibold text-md text-blue-500">
                  Idiomas:
                </label>
                <input
                  type="text"
                  placeholder="Digite os idiomas que você fala"
                  className={`px-4 py-2 w-full rounded-md border text-md ${
                    errors?.lang
                      ? "border-red-500 focus:border-red-500 focus:border"
                      : "border-gray"
                  }  outline-none`}
                  {...register("lang")}
                />
                {errors?.lang && (
                  <div className="flex justify-start items-end gap-1 mt-1">
                    <GoAlertFill className="text-red-500 text-sm leading-none" />
                    <span className="text-xs text-red-500 font-sora font-normal leading-none">
                      {errors?.lang?.message}
                    </span>
                  </div>
                )}
              </div>

              {/* Botão de Geração do Currículo */}
              <button
                className="text-white font-sora font-medium text-md bg-blue-500 rounded-md px-6 py-3 mt-4 w-full"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  window.alert(
                    "Essa funcionalidade ainda está em desenvolvimento..."
                  );
                }}
              >
                Baixar currículo
              </button>
            </form>
          )) ||
            (selected === "preview" && (
              <div className="flex flex-col justify-center items-start gap-4">
                {/* Name */}
                <div className="group">
                  <h1 className="font-sora font-semibold text-md text-blue-500">
                    Nome Completo:
                  </h1>
                  <p
                    className={`font-sora font-normal text-md ${
                      formName === "" ? "text-black/30 italic" : "text-black/70"
                    }`}
                  >
                    {formName === ""
                      ? "Preencha este campo na aba de edição."
                      : formName}
                  </p>
                </div>

                {/* Email */}
                <div className="group">
                  <h1 className="font-sora font-semibold text-md text-blue-500">
                    E-mail:
                  </h1>
                  <p
                    className={`font-sora font-normal text-md ${
                      formEmail === ""
                        ? "text-black/30 italic"
                        : "text-black/70"
                    }`}
                  >
                    {formEmail === ""
                      ? "Preencha este campo na aba de edição."
                      : formEmail}
                  </p>
                </div>

                {/* LinkedIn */}
                <div className="group">
                  <h1 className="font-sora font-semibold text-md text-blue-500">
                    LinkedIn:
                  </h1>
                  <p
                    className={`font-sora font-normal text-md ${
                      formLinkedin === ""
                        ? "text-black/30 italic"
                        : "text-black/70"
                    }`}
                  >
                    {formLinkedin === ""
                      ? "Preencha este campo na aba de edição."
                      : formLinkedin}
                  </p>
                </div>

                {/* GitHub */}
                <div className="group">
                  <h1 className="font-sora font-semibold text-md text-blue-500">
                    GitHub:
                  </h1>
                  <p
                    className={`font-sora font-normal text-md ${
                      formGithub === ""
                        ? "text-black/30 italic"
                        : "text-black/70"
                    }`}
                  >
                    {formGithub === ""
                      ? "Preencha este campo na aba de edição."
                      : formGithub}
                  </p>
                </div>

                {/* Number */}
                <div className="group">
                  <h1 className="font-sora font-semibold text-md text-blue-500">
                    Número de Telefone:
                  </h1>
                  <p
                    className={`font-sora font-normal text-md ${
                      !formNumber ? "text-black/30 italic" : "text-black/70"
                    }`}
                  >
                    {!formNumber
                      ? "Preencha este campo na aba de edição."
                      : formNumber}
                  </p>
                </div>

                {/* About */}
                <div className="group">
                  <h1 className="font-sora font-semibold text-md text-blue-500">
                    Sobre Mim:
                  </h1>
                  <p
                    className={`font-sora font-normal text-md ${
                      formAbout === ""
                        ? "text-black/30 italic"
                        : "text-black/70"
                    }`}
                  >
                    {formAbout === ""
                      ? "Preencha este campo na aba de edição."
                      : formAbout}
                  </p>
                </div>

                {/* Skills */}
                <div className="group">
                  <h1 className="font-sora font-semibold text-md text-blue-500">
                    Habilidades:
                  </h1>
                  <p
                    className={`font-sora font-normal text-md ${
                      formSkills === ""
                        ? "text-black/30 italic"
                        : "text-black/70"
                    }`}
                  >
                    {formSkills === ""
                      ? "Preencha este campo na aba de edição."
                      : formSkills}
                  </p>
                </div>

                {/* Exp */}
                <div className="group">
                  <h1 className="font-sora font-semibold text-md text-blue-500">
                    Experiências:
                  </h1>
                  <p
                    className={`font-sora font-normal text-md ${
                      formExp === "" ? "text-black/30 italic" : "text-black/70"
                    }`}
                  >
                    {formExp === ""
                      ? "Preencha este campo na aba de edição."
                      : formExp}
                  </p>
                </div>

                {/* Formação Academica */}
                <div className="group">
                  <h1 className="font-sora font-semibold text-md text-blue-500">
                    Formação Acadêmica:
                  </h1>
                  <p
                    className={`font-sora font-normal text-md ${
                      formAcad === "" ? "text-black/30 italic" : "text-black/70"
                    }`}
                  >
                    {formAcad === ""
                      ? "Preencha este campo na aba de edição."
                      : formAcad}
                  </p>
                </div>

                {/* Idiomas */}
                <div className="group">
                  <h1 className="font-sora font-semibold text-md text-blue-500">
                    Idiomas:
                  </h1>
                  <p
                    className={`font-sora font-normal text-md ${
                      formLang === "" ? "text-black/30 italic" : "text-black/70"
                    }`}
                  >
                    {formLang === ""
                      ? "Preencha este campo na aba de edição."
                      : formLang}
                  </p>
                </div>

                {/* Baixar Curriculo */}
                <button
                  className="text-white font-sora font-medium text-md bg-blue-500 rounded-md px-6 py-3 mt-4 w-full"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    window.alert(
                      "Essa funcionalidade ainda está em desenvolvimento..."
                    );
                  }}
                >
                  Baixar currículo
                </button>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
};

export default Curriculum;
