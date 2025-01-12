import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
});

export function NewsletterDialog() {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    const hasShown = localStorage.getItem("newsletter-shown");
    if (!hasShown) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Aqui você pode adicionar a lógica para salvar os dados
      console.log(values);
      localStorage.setItem("newsletter-shown", "true");
      setOpen(false);
      toast({
        title: "Inscrição realizada com sucesso!",
        description: "Em breve você receberá nossos conteúdos exclusivos.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao realizar inscrição",
        description: "Por favor, tente novamente mais tarde.",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blog-primary">
            Descubra Seu Verdadeiro Potencial Espiritual
          </DialogTitle>
          <DialogDescription className="text-base mt-2">
            Você sente que há algo mais profundo em sua jornada espiritual? 
            Junte-se a nós para receber conteúdos exclusivos que irão te ajudar a 
            despertar o brilho que existe dentro de você.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome" {...field} />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="seu@email.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-blog-primary hover:bg-blog-secondary">
              Quero Crescer Espiritualmente
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}