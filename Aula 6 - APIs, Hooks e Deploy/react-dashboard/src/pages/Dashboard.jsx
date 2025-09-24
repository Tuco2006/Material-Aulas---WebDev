import { GraficoBarras } from "@/components/GraficoBarras";
import { GraficoCirculo } from "@/components/GaficoCirculo";

export default function Dashboard() {
  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Bem-vindo ao Dashboard</h1>
      <div className="col-span-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <GraficoBarras />
        <GraficoCirculo />
      </div>
    </div>
  );
}
