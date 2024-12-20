import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Upload, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_FILE_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

const formSchema = z.object({
  fullName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(8, "Numéro de téléphone invalide"),
  motivation: z.string().min(50, "La lettre de motivation doit contenir au moins 50 caractères"),
  cv: z
    .instanceof(FileList)
    .refine((files) => files?.length === 1, "Le CV est requis")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      "La taille maximale du fichier est de 5MB"
    )
    .refine(
      (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
      "Format de fichier accepté : PDF, DOC, DOCX"
    ),
});

export const ApplicationForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      motivation: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    
    try {
      // Convert CV to base64 for sending via Zapier
      const file = values.cv[0];
      const reader = new FileReader();
      
      reader.onload = async () => {
        const base64CV = reader.result?.toString().split(',')[1];
        
        await fetch("https://hooks.zapier.com/hooks/catch/YOUR_ZAPIER_WEBHOOK_ID/", {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: values.fullName,
            email: values.email,
            phone: values.phone,
            motivation: values.motivation,
            cv: {
              name: file.name,
              type: file.type,
              content: base64CV
            },
            type: "application",
            to_email: "balleyajoyephraim@gmail.com"
          }),
        });

        toast({
          title: "Candidature envoyée !",
          description: "Nous vous contacterons bientôt.",
        });
        
        form.reset();
      };

      reader.readAsDataURL(file);
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de votre candidature.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            className="text-white hover:text-white/80"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour
          </Button>
        </div>
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Postulez chez Strat Market</h1>
        <div className="bg-[#1e293b] p-8 rounded-lg shadow-xl border border-[#334155]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Nom complet</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} className="bg-[#0f172a] border-[#334155] text-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" {...field} className="bg-[#0f172a] border-[#334155] text-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Téléphone</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="+242 XX XXX XXXX" {...field} className="bg-[#0f172a] border-[#334155] text-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cv"
                render={({ field: { onChange, value, ...field } }) => (
                  <FormItem>
                    <FormLabel className="text-white">CV (PDF, DOC, DOCX - Max 5MB)</FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-2">
                        <Input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => {
                            onChange(e.target.files);
                          }}
                          className="bg-[#0f172a] border-[#334155] text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#334155] file:text-white hover:file:bg-[#475569]"
                          {...field}
                        />
                        <Upload className="text-white" size={20} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="motivation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Lettre de motivation</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Expliquez-nous pourquoi vous souhaitez rejoindre Strat Market..."
                        className="min-h-[150px] bg-[#0f172a] border-[#334155] text-white"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white"
                disabled={isLoading}
              >
                {isLoading ? "Envoi en cours..." : "Envoyer ma candidature"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
