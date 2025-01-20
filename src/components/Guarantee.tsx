import { GraduationCap, Languages, Brain, Award, Shield } from "lucide-react";

export const Guarantee = () => {
  return (
    <section className="py-20 bg-blue-800">
    <div className="container mx-auto max-w-6xl px-4 text-center">
      <div className="animate-slideUp">
        <Shield className="w-16 h-16 text-yellow-200 mx-auto mb-6" />
        <h2 className="text-4xl font-bold text-white mb-6">
          Garanta seu <span className="text-yellow-200">Bônus</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
          {[
            {
              title: "30 Dias de Garantia",
              description: "Devolução total do investimento se não ficar satisfeito"
            },
            {
              title: "Garantia de Fluência",
              description: "Atingir nível B2 em até 90 dias ou seu dinheiro de volta"
            },
            {
              title: "Suporte Vitalício",
              description: "Acesso ao material e atualizações para sempre"
            }
          ].map((item, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg animate-on-scroll">
              <h3 className="text-xl font-bold text-yellow-300 mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};