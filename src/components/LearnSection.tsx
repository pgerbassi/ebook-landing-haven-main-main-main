//import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";


export const LearnSection = () => {
  return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12 animate-slideUp">
            O Que Você Vai Aprender
          </h2>
          <div className="grid md:grid-cols-2 gap-6 animate-slideUp">
            {[
              "Como pensar diretamente no idioma sem traduzir",
              "Técnicas de imersão mesmo morando no Brasil",
              "Como desenvolver pronúncia nativa desde o início",
              "Método de aquisição natural de gramática",
              "Estratégias para manter a motivação e consistência",
              "Como estudar múltiplos idiomas simultaneamente",
              "Técnicas de memorização natural de vocabulário",
              "Como criar rotinas de estudo eficientes"
            ].map((item, index) => (
              <div key={index} className={`flex items-center p-4 bg-white rounded-lg shadow-sm fade-in-${index % 2 === 0 ? 'left' : 'right'} stagger-delay-${(index % 3) + 1}`}>
                <Check className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};