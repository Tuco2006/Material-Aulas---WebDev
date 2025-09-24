import { ListaUsu } from "@/components/ListaUsu";

export default function Usuarios() {
  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold">Usuários</h1>
      <ListaUsu />
    </div>
  );
}
