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

import { MdDelete } from "react-icons/md";

import { useNavigate } from "react-router-dom";

const DelAccount = () => {
  const navigate = useNavigate();
  const deleteAccount = () => {
    setTimeout(() => {
      localStorage.removeItem("emailAccess");
      localStorage.removeItem("access");
      navigate("/request-access");
    }, 1000);
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="flex justify-center items-center">
          <MdDelete className="mr-2 h-4 w-4 text-white" />
          <span className="text-white font-sora text-md font-medium">
            Excluir conta
          </span>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className="rounded-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-red-500">
            Você tem certeza que deseja excluir a sua conta?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Ao confirmar, você perderá acesso total e sua conta será excluida
            permanentemente sem chances de voltar atrás.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500"
            onClick={() => {
              deleteAccount();
            }}
          >
            Desejo excluir a minha conta
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DelAccount;
