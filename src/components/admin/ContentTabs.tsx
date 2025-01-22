import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContentForm } from "./ContentForm";

type ContentSection = {
  id: "hero_content" | "about_content" | "features_content" | "pricing_content" | "testimonials_content" | "faq_content" | "global_settings";
  label: string;
  fields: {
    name: string;
    type: "text" | "textarea" | "json" | "array";
    label: string;
  }[];
};

const contentSections: ContentSection[] = [
  {
    id: "hero_content",
    label: "Hero Section",
    fields: [
      { name: "title", type: "text", label: "Title" },
      { name: "title_m", type: "text", label: "Title Mid" },
      { name: "title_e", type: "text", label: "Title End" },
      { name: "subtitle", type: "text", label: "Subtitle" },
      { name: "button_text", type: "text", label: "Button Text" },
      { name: "background_image_url", type: "text", label: "Background Image URL" },
    ],
  },
  {
    id: "about_content",
    label: "About Section",
    fields: [
      { name: "title", type: "text", label: "Title" },
      { name: "description", type: "textarea", label: "Description" },
      { name: "quote", type: "textarea", label: "Quote" },
      { name: "stats", type: "json", label: "Stats (JSON)" },
    ],
  },
  {
    id: "features_content",
    label: "Features",
    fields: [
      { name: "title", type: "text", label: "Title" },
      { name: "description", type: "textarea", label: "Description" },
      { name: "icon_name", type: "text", label: "Icon Name" },
      { name: "display_order", type: "text", label: "Display Order" },
    ],
  },
  {
    id: "pricing_content",
    label: "Pricing",
    fields: [
      { name: "title", type: "text", label: "Title" },
      { name: "price", type: "text", label: "Price" },
      { name: "features", type: "array", label: "Features (One per line)" },
      { name: "button_text", type: "text", label: "Button Text" },
    ],
  },
  {
    id: "testimonials_content",
    label: "Testimonials",
    fields: [
      { name: "name", type: "text", label: "Name" },
      { name: "role", type: "text", label: "Role" },
      { name: "content", type: "textarea", label: "Content" },
      { name: "rating", type: "text", label: "Rating" },
    ],
  },
  {
    id: "faq_content",
    label: "FAQ",
    fields: [
      { name: "question", type: "text", label: "Question" },
      { name: "answer", type: "textarea", label: "Answer" },
      { name: "display_order", type: "text", label: "Display Order" },
    ],
  },
  {
    id: "global_settings",
    label: "Global",
    fields: [
      { name: "font_family", type: "text", label: "Font Family" },
      { name: "font_url", type: "text", label: "Font URL" },
    ],
  },
];

export const ContentTabs = () => {
  return (
    <Tabs defaultValue={contentSections[0].id} className="w-full">
      <TabsList className="grid grid-cols-3 lg:grid-cols-6 mb-8">
        {contentSections.map((section) => (
          <TabsTrigger key={section.id} value={section.id} className="text-sm">
            {section.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {contentSections.map((section) => (
        <TabsContent key={section.id} value={section.id}>
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-6">{section.label}</h2>
            <ContentForm section={section.id} fields={section.fields} />
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};