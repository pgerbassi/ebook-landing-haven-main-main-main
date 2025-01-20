import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroContent {
  title: string;
  subtitle: string;
  button_text: string;
}

interface HeroSectionProps {
  content: HeroContent;
}

export const HeroSection = ({content}:  HeroSectionProps) => {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-blue-400 opacity-100" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="relative lg:w-1/2 text-yellow-400">
          <div className="absolute inset-0 bg-cover bg-no-repeat bg-center bg-[url('/public/worldled.png')] opacity-50"></div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slideUp drop-shadow-xl">
              {content.title}
            </h1>
            <p className="text-xl mb-8 text-orange-100 animate-slideUp [animation-delay:200ms]">
              {content.subtitle}
            </p>
            <Button 
              size="xg" 
              className="text-2xl bg-white text-blue-900  hover:scale-105 transform transition-all duration-1100 bg-gradient-to-r from-white via-yellow-200 to-white bg-[length:400%_100%] animate-bounce"
            >
              {content.button_text} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </div>
          <div className="lg:w-1/2">
            <div className="relative animate-float">
              <img
                src="/placeholder.svg"
                alt="Prévia do Ebook"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};