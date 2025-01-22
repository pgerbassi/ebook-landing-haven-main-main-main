import { Target, Globe, Brain, Rocket } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const objectives = [
  {
    icon: Globe,
    title: "Dominar Múltiplos Idiomas",
    description: "Quebre barreiras linguísticas e comunique-se com confiança em vários idiomas, abrindo portas para novas culturas e oportunidades.",
  },
  {
    icon: Brain,
    title: "Aprender de forma Acelerada",
    description: "Aprenda idiomas até 3x mais rápido com nossa metodologia poliglota comprovada e técnicas de aprimoramento cognitivo.",
  },
  {
    icon: Target,
    title: "Crescer Profissionalmente",
    description: "Aumente seu valor profissional e acesse mercados de trabalho internacionais com proficiência em múltiplos idiomas.",
  },
  {
    icon: Rocket,
    title: "Realização Pessoal",
    description: "Experimente a satisfação de dominar vários idiomas e juntar-se ao grupo de elite de poliglotas globais.",
  },
];

export const ObjectivesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
            A formação Hiperpoliglota é para você que quer…
          </h2>
          <p className="text-lg text-gray-600">
          Desbloquer todo seu potencial e alcançar seus objetivos de aprendizado de idiomas com nosso método Dual Flow
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {objectives.map((objective) => (
            <Card key={objective.title} className="group hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <objective.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-600">
                      {objective.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {objective.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};