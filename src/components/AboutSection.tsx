import { GraduationCap, Languages, Brain, Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface AboutContent {
  title: string;
  description: string;
  quote: string;
  stats: {
    students: string;
    languages: string;
    method: string;
    recognition: string;
  };
}

interface AboutSectionProps {
  content: AboutContent;
}

export const AboutSection = ({ content }: AboutSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-100 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-500">
                {content.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {content.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-yellow-400/5">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Languages className="h-6 w-6 text-yellow-400" />
                    <div className="text-sm font-medium">{content.stats.languages}</div>
                  </CardContent>
                </Card>
                <Card className="bg-yellow-400/5">
                  <CardContent className="p-4 flex items-center gap-3">
                    <GraduationCap className="h-6 w-6 text-yellow-400" />
                    <div className="text-sm font-medium">{content.stats.students}</div>
                  </CardContent>
                </Card>
                <Card className="bg-yellow-400/5">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Brain className="h-6 w-6 text-yellow-400" />
                    <div className="text-sm font-medium">{content.stats.method}</div>
                  </CardContent>
                </Card>
                <Card className="bg-yellow-400/5">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Award className="h-6 w-6 text-yellow-400" />
                    <div className="text-sm font-medium">{content.stats.recognition}</div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-400/20 to-yellow-400/10 flex items-center justify-center">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="/vitorPoliglota.jpeg" 
                  alt="Our Team"
                  className="w-full h-full object-cover"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};