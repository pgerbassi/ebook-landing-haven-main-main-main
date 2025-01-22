/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

type TableNames = "about_content" | "faq_content" | "features_content" | "hero_content" | "pricing_content" | "testimonials_content" | "global_settings";

interface ContentFormProps {
  section: TableNames;
  fields: {
    name: string;
    type: "text" | "textarea" | "json" | "array";
    label: string;
  }[];
}

export const ContentForm = ({ section, fields }: ContentFormProps) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState<Record<string, any>>({});

  const { data, isLoading } = useQuery({
    queryKey: [section],
    queryFn: async () => {
      // For testimonials, faq, features, and global settings we want to get all rows
      if (section === "testimonials_content" || section === "faq_content" || section === "features_content" || section === "global_settings") {
        const { data, error } = await supabase
          .from(section)
          .select("*")
          .order('created_at');
        
        if (error) throw error;
        // Use the first item's data to populate the form
        if (data && data.length > 0) {
          setFormData(data[0]);
          return data;
        }
        return null;
      }

      // For other content types, we still use single()
      const { data, error } = await supabase
        .from(section)
        .select("*")
        .single();
      
      if (error) throw error;
      setFormData(data);
      return data;
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (newData: typeof formData) => {
      if (section === "testimonials_content" || section === "faq_content" || section === "features_content" || section === "global_settings") {
        // For testimonials, faq, features, and global settings we update the specific record
        const { error } = await supabase
          .from(section)
          .update(newData)
          .eq('id', formData.id);
        
        if (error) throw error;
      } else {
        // For other content types, update as before
        const { error } = await supabase
          .from(section)
          .update(newData)
          .eq('id', (data as any).id);
        
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [section] });
      toast({
        title: "Success",
        description: "Content updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData);
  };

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {fields.map((field) => (
        <div key={field.name} className="space-y-2">
          <Label htmlFor={field.name}>{field.label}</Label>
          {field.type === "textarea" ? (
            <Textarea
              id={field.name}
              value={formData[field.name] || ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="min-h-[100px]"
            />
          ) : field.type === "json" ? (
            <Textarea
              id={field.name}
              value={JSON.stringify(formData[field.name] || {}, null, 2)}
              onChange={(e) => {
                try {
                  const parsed = JSON.parse(e.target.value);
                  handleChange(field.name, parsed);
                } catch (error) {
                  // Allow invalid JSON while typing
                }
              }}
              className="font-mono text-sm min-h-[200px]"
            />
          ) : field.type === "array" ? (
            <Textarea
              id={field.name}
              value={(formData[field.name] || []).join("\n")}
              onChange={(e) => handleChange(field.name, e.target.value.split("\n").filter(Boolean))}
              className="min-h-[150px]"
            />
          ) : (
            <Input
              id={field.name}
              value={formData[field.name] || ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
            />
          )}
        </div>
      ))}
      <Button type="submit" disabled={isPending}>
        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Save Changes
      </Button>
    </form>
  );
};