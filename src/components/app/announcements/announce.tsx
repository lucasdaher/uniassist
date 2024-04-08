import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import announce from "../../../assets/coins.svg";
import { Link } from "react-router-dom";

const Announce = () => {
  return (
    <>
      <div className="w-full mx-auto bg-blue-50 border border-blue-500/30 p-4 rounded-md mt-12 flex flex-col md:flex-row justify-center items-start md:items-center gap-4 md:gap-12">
        <img
          src={announce}
          alt="Announcement Image"
          className="w-full md:w-44"
        />

        <div className="">
          <h1 className="text-blue-500 font-bold font-sora text-2xl">
            Melhore sua produtividade com o Premium!
          </h1>
          <p className="text-black/70 font-sora font-normal text-md mt-1 max-w-96">
            Gostaria de saber mais sobre os benefícios de ser Premium em nossa
            plataforma?
          </p>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="bg-blue-500 text-white font-sora font-medium px-8 py-3 rounded-md hover:bg-blue-700 mt-6">
                Conhecer benefícios
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-blue-500">
                  Você será redirecionado para outra página
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Você deseja ser redirecionado(a) até outra página para saber
                  mais sobre os benefícios de ser Premium?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Não</AlertDialogCancel>
                <Link to={`/app/benefits`} className="no-underline">
                  <AlertDialogAction>Sim, continuar</AlertDialogAction>
                </Link>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </>
  );
};

export default Announce;
