import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
const paymentLink = "https://pay.hotmart.com/D96966130K?bid=1735330800536";

interface HeroContent {
  title: string;
  title_m: string;
  title_e: string;
  subtitle: string;
  button_text: string;
  background_image_url: string;
}

interface HeroSectionProps {
  content: HeroContent;
}

export const HeroSection = ({content}:  HeroSectionProps) => {
    const isMobile = useIsMobile();
    // Convert YouTube URL to embed URL
    //const videoId = "YsC4J0c9PmA";
    const embedUrl = `https://www.youtube.com/embed/YsC4J0c9PmA`;

  return (
    <div className="relative min-h-[100vh] flex items-center bg-cover opacity-100 inset-0 bg-center bg-no-repeat bg-[url('/worlddraft.png')]">
      <div 
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: `url(${content.background_image_url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-indigo-600 to-blue-800 opacity-90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 mt-6">
          <div className="relative lg:w-1/2 text-yellow-400 justify-items-center lg:justify-items-start">
          <div className="relative flex flex-col whitespace-normal">
            <h1 className="text-4xl md:text-6xl font-poppins text-white text-center whitespace-normal lg:text-start">
              {content.title + " "}
              <h1 className="text-4xl md:text-6xl font-bold animate-slideUp drop-shadow-xl bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-400 text-transparent bg-clip-text">
              {content.title_m + " "}
            </h1>
            </h1>
            <h1 className="text-4xl text-white font-poppins md:text-6xl animate-slideUp inline-block text-center lg:text-start mb-6">
              {content.title_e}
            </h1>


            <p className="text-xl mb-8 font-poppins text-orange-100 animate-slideUp [animation-delay:200ms] text-center lg:text-start">
              {content.subtitle}
            </p>
            </div>
            <div className="relative inline-flex group">
              <div className="
              absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#fff23e] via-[#ff9100] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt mb-6">
              </div>
            <a href= {paymentLink}
                target="_blank"
                  rel="noopener noreferrer">
            <Button 
              size="xg" 
              className="text-2xl font-bold font-poppins bg-white text-blue-900  hover:scale-105 transform transition-all duration-1100 bg-gradient-to-r from-white via-yellow-200 to-white bg-[length:400%_100%] animate-shine mb-6"
            >
              {content.button_text} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </a>
            </div>
            </div>
          <div className={`${isMobile ? 'w-screen -mx-4' : 'lg:w-1/2'}`}>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl animate-float">
              <iframe
                src={embedUrl}
                title=""
                className="relative inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};