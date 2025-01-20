import { BookOpen, Brain, Clock, Target } from "lucide-react";
import { Database } from "@/integrations/supabase/types";

type Feature = Database['public']['Tables']['features_content']['Row'];

interface FeaturesSectionProps {
  features: Feature[] | null;
}

const iconMap = {
  Brain,
  Clock,
  Target,
  BookOpen,
};

export const FeaturesSection = ({ features }: FeaturesSectionProps) => {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-500 animate-slideUp">
          Por Que Escolher Nosso Método?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon_name as keyof typeof iconMap];
            return (
            <div
              key={feature.id}
              className="bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Icon className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
};