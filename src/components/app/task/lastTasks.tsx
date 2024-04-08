import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    id: 1,
    invoice: "Tarefa",
    action: "Adicionou",
    desc: "Estudar sobre Linguagem C para aula do William Malvezzi.",
    date: "07/04/2024",
  },
  {
    id: 2,
    invoice: "Tarefa",
    action: "Removeu",
    desc: "Fazer atividade de Experiência do Usuário (UX).",
    date: "05/04/2024",
  },
];

const LastTasks = () => {
  return (
    <>
      <div className="mt-16">
        <h1 className="text-3xl font-sora font-bold text-blue-500 mb-4">
          Atividades recentes
        </h1>
        <Table>
          <TableCaption>
            Essas são as suas últimas atividades na plataforma.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Atividade</TableHead>
              <TableHead>Ação</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead className="text-right">Data</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.action}</TableCell>
                <TableCell>{invoice.desc}</TableCell>
                <TableCell className="text-right">{invoice.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default LastTasks;
