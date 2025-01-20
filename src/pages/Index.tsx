import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
//import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { ObjectivesSection } from "@/components/ObjectivesSection";
import { AboutSection } from "@/components/AboutSection";
import { PlataformSection } from "@/components/PlataformSection";
import { VideoTestimonialsSection } from "@/components/VideoTestimonialsSection";
import { LearnSection } from "@/components/LearnSection";
import { Guarantee } from "@/components/Guarantee";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Json } from "@/integrations/supabase/types";

// Add type guard to ensure stats has the correct shape
const isValidStats = (stats: Json): stats is {
  students: string;
  languages: string;
  method: string;
  recognition: string;
} => {
  if (typeof stats !== 'object' || stats === null) return false;
  const s = stats as Record<string, unknown>;
  return (
    typeof s.students === 'string' &&
    typeof s.languages === 'string' &&
    typeof s.method === 'string' &&
    typeof s.recognition === 'string'
  );
};

const Index = () => {
  const { data: heroContent } = useQuery({
    queryKey: ['hero_content'],
    queryFn: async () => {
      const { data } = await supabase.from('hero_content').select('*').single();
      return data;
    },
  });

  const { data: aboutContent } = useQuery({
    queryKey: ['about_content'],
    queryFn: async () => {
      const { data } = await supabase.from('about_content').select('*').single();
      if (!data) return null;
      
      // Validate stats shape
      if (!isValidStats(data.stats)) {
        console.error('Invalid stats shape in about content:', data.stats);
        return null;
      }

      return {
        ...data,
        stats: data.stats
      };
    },
  });

  const { data: featuresContent } = useQuery({
    queryKey: ['features_content'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('features_content')
        .select('*')
        .order('display_order');
      
      if (error) {
        console.error('Error fetching features:', error);
        return null;
      }
      
      return data;
    },
  });

  const { data: testimonialsContent } = useQuery({
    queryKey: ['testimonials_content'],
    queryFn: async () => {
      const { data } = await supabase.from('testimonials_content').select('*');
      return data;
    },
  });

  const { data: pricingContent } = useQuery({
    queryKey: ['pricing_content'],
    queryFn: async () => {
      const { data } = await supabase.from('pricing_content').select('*').single();
      return data;
    },
  });

  const { data: faqContent } = useQuery({
    queryKey: ['faq_content'],
    queryFn: async () => {
      const { data } = await supabase.from('faq_content').select('*').order('display_order');
      return data;
    },
  });

  return (
    <div className="min-h-screen">
      {heroContent && <HeroSection content={heroContent} />}
      <ObjectivesSection />
      {featuresContent && <FeaturesSection features={featuresContent} />}
      {aboutContent && <AboutSection content={aboutContent} />}
      <VideoTestimonialsSection/>
      <PlataformSection />
      <LearnSection/>
      <Guarantee/>
      {pricingContent && <PricingSection content={pricingContent} />}
      {faqContent && <FAQSection faqs={faqContent} />}
    </div>
  );
};

export default Index;