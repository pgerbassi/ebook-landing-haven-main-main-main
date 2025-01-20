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
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-indigo-600 to-blue-800 opacity-100" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 mt-6">
          <div className="relative lg:w-1/2 text-yellow-400 justify-items-center lg:justify-items-start">
          <div className="absolute inset-100 bg-cover bg-no-repeat bg-center bg-[url('/public/worldled.png')] opacity-50"></div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slideUp drop-shadow-xl bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-400 inline-block text-transparent bg-clip-text text-center lg:text-start">
              {content.title}
            </h1>
            <p className="text-xl mb-8 text-orange-100 animate-slideUp [animation-delay:200ms]">
              {content.subtitle}
            </p>
            <div className="relative inline-flex group">
              <div className="
              absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#fff23e] via-[#ff9100] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt mb-6">
              </div>
            <Button 
              size="xg" 
              className="text-2xl text-blue-800  hover:text-orange-700 transform transition-all duration-3000 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 mb-6"
            >
              {content.button_text} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </div>
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