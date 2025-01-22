import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const FontLoader = () => {
  const { data: settings } = useQuery({
    queryKey: ['global_settings'],
    queryFn: async () => {
      const { data } = await supabase
        .from('global_settings')
        .select('*')
        .single();
      return data;
    },
  });

  useEffect(() => {
    if (settings?.font_url) {
      const fontLink = document.getElementById('custom-font') as HTMLLinkElement;
      if (fontLink) {
        fontLink.href = settings.font_url;
      }
      // Apply the font family directly to the body
      document.body.style.fontFamily = `'${settings.font_family}', sans-serif`;
      
      // Also apply it to the root element for better coverage
      const root = document.documentElement;
      root.style.setProperty('--font-family', `'${settings.font_family}', sans-serif`);
    }
  }, [settings]);

  return null;
};