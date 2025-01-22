import { Button } from "@/components/ui/button";
import { ArrowRight, Award, BadgePlus, Brain, GraduationCap, Languages } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useIsMobile } from "@/hooks/use-mobile";


export const PlataformSection = () => {
  const isMobile = useIsMobile();
  // Convert YouTube URL to embed URL
  const videoId = "H-t7IdF7r08";
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-black opacity-100" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="absolute inset-0 bg-cover bg-no-repeat bg-center bg-[url('/worldpoint.png')] opacity-30"></div>

        <div className={`${isMobile ? 'w-screen -mx-4 mt-8' : 'lg:w-1/2'}`}>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl animate-float">
              <iframe
                src={embedUrl}
                title="CURSO HIPERPOLIGLOTA"
                className="relative inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div className="relative lg:w-1/2 text-white">
          <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 animate-slideUp drop-shadow-xl text-center">
              POR DENTRO <br></br> DA PLATAFORMA!
            </h1>
            <p className="text-xl mb-8 text-yellow-100 animate-slideUp [animation-delay:200ms]">
            <div className="grid grid-flow-3 gap-4">
                <Card className="bg-blue-400/5">
                  <CardContent className="p-4 flex items-center gap-3">
                    <BadgePlus className="h-6 w-6 text-yellow-400" />
                    <div className="text-xl font-medium">3 meses <p className=" text-sm mb-2 text-yellow-100 animate-slideUp [animation-delay:200ms]">Atingir o nível conversacional </p></div>
                  </CardContent>
                </Card>
                <Card className="bg-blue-400/10">
                  <CardContent className="p-4 flex items-center gap-3">
                    <BadgePlus className="h-6 w-6 text-yellow-400" />
                    <div className="text-xl font-medium">6 meses <p className=" text-sm mb-2 text-yellow-100 animate-slideUp [animation-delay:200ms]">Atingir o nível avançado</p></div>
                  </CardContent>
                </Card>
                <Card className="bg-blue-400/20">
                  <CardContent className="p-4 flex items-center gap-3">
                    <BadgePlus className="h-6 w-6 text-yellow-400" />
                    <div className="text-xl font-medium">1 ano <p className=" text-sm mb-2 text-yellow-100 animate-slideUp [animation-delay:200ms]">Fluência Absoluta</p></div>
                  </CardContent>
                </Card>
              </div>
            </p>
            <Button 
              size="xg" 
              className="text-2xl font-poppins font-bold bg-white text-blue-900  hover:scale-105 transform transition-all duration-1100 bg-gradient-to-r from-white via-yellow-200 to-white bg-[length:400%_100%] animate-shine mb-6"
            >
              Comece Agora <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </div>
        </div>
      </div>
    </div>
  );
};