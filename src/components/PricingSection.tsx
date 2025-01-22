import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";
const paymentLink = "https://pay.hotmart.com/D96966130K?bid=1735330800536";


interface PricingContent {
  title: string;
  price: string;
  features: string[];
  button_text: string;
}

interface PricingSectionProps {
  content: PricingContent;
}

export const PricingSection = ({content}: PricingSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-b from-yellow-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800 animate-slideUp">
          {content.title}
        </h2>
        <div className="max-w-lg mx-auto">
          <Card className="border-2 border-blue-200 animate-slideUp hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="text-center bg-gradient-to-r from-blue-700  to-blue-100 bg-[length:400%_200%] text-white py-8">
              <h3 className="text-2xl font-bold">Formação Hiperpoliglota</h3>
              <p className="text-3xl font-bold mt-4">{content.price}</p>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4 mb-6">
                {content.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href= {paymentLink}
                target="_blank"
                  rel="noopener noreferrer">
              <Button 
                className="w-full text-lg py-6 bg-blue-500 transform hover:scale-105 hover:animate-none transition-all duration-1000 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 bg-[length:400%_100%] animate-bounce" 
                size="lg"
              >
                {content.button_text}
              </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};