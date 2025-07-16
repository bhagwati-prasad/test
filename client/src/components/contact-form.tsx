import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Calendar, CheckCircle } from "lucide-react";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  interestedIn: z.string().min(1, "Please select an option"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      interestedIn: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contacts", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Thank you for your interest!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to submit form. Please try again.",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center py-12"
      >
        <CheckCircle className="w-16 h-16 text-cyber-emerald mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-gray-300">We'll be in touch soon to discuss your cybersecurity needs.</p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="mt-6 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black"
        >
          Submit Another Request
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text-gradient">
        Ready to Secure Your AI?
      </h2>
      <p className="text-xl text-gray-300 mb-8 leading-relaxed">
        Transform your cybersecurity posture with AI-native defense solutions. Book a demo to see Daifend in action.
      </p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">First Name</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      className="bg-cyber-slate-800 border-cyber-slate-600 text-white placeholder-gray-400 focus:border-cyber-cyan focus:ring-cyber-cyan"
                      placeholder="John" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Last Name</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      className="bg-cyber-slate-800 border-cyber-slate-600 text-white placeholder-gray-400 focus:border-cyber-cyan focus:ring-cyber-cyan"
                      placeholder="Doe" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Company Email</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    type="email"
                    className="bg-cyber-slate-800 border-cyber-slate-600 text-white placeholder-gray-400 focus:border-cyber-cyan focus:ring-cyber-cyan"
                    placeholder="john@company.com" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Company</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    className="bg-cyber-slate-800 border-cyber-slate-600 text-white placeholder-gray-400 focus:border-cyber-cyan focus:ring-cyber-cyan"
                    placeholder="Your Company" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="interestedIn"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Interested In</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-cyber-slate-800 border-cyber-slate-600 text-white focus:border-cyber-cyan focus:ring-cyber-cyan">
                      <SelectValue placeholder="Select a solution" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-cyber-slate-800 border-cyber-slate-600">
                    <SelectItem value="ai-security-strategy">AI Security Strategy</SelectItem>
                    <SelectItem value="cybersecurity-llm">Cybersecurity LLM</SelectItem>
                    <SelectItem value="self-healing-systems">Self-Healing Systems</SelectItem>
                    <SelectItem value="llm-security">LLM Security</SelectItem>
                    <SelectItem value="ai-defense">AI Defense</SelectItem>
                    <SelectItem value="responsible-ai-assessment">Responsible AI Assessment</SelectItem>
                    <SelectItem value="full-platform-demo">Full Platform Demo</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Message</FormLabel>
                <FormControl>
                  <Textarea 
                    {...field} 
                    rows={4}
                    className="bg-cyber-slate-800 border-cyber-slate-600 text-white placeholder-gray-400 focus:border-cyber-cyan focus:ring-cyber-cyan"
                    placeholder="Tell us about your cybersecurity challenges..." 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            disabled={contactMutation.isPending}
            className="w-full bg-gradient-to-r from-cyber-cyan to-cyber-blue text-black font-semibold py-4 hover:shadow-xl hover:shadow-cyan-500/25 animate-pulse-glow"
          >
            <Calendar className="mr-2 h-5 w-5" />
            {contactMutation.isPending ? "Submitting..." : "Book Your Demo"}
          </Button>
        </form>
      </Form>
    </motion.div>
  );
}
