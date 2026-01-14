import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useSendMessage } from "@/hooks/use-portfolio";
import { siteConfig, contactContent, socialLinks } from "@/config/site";
import { contactFormSchema, type ContactFormData } from "@/types";
import { Mail, Send, getIcon } from "@/lib/icons";

// Pre-resolve GitHub icon outside component to avoid render-time creation
const githubLink = socialLinks.find(l => l.name === "GitHub");
const GithubIcon = githubLink ? getIcon(githubLink.icon) : null;

export function Contact() {
  const { mutate: sendMessage, isPending } = useSendMessage();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (data: ContactFormData) => {
    sendMessage(data, { onSuccess: () => form.reset() });
  };

  return (
    <Section id="contact" subtitle={contactContent.subtitle} title={contactContent.title} dark>
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">{contactContent.heading}</h3>
          <p className="text-muted-foreground mb-8 text-lg">{contactContent.description}</p>

          <div className="space-y-6">
            <ContactInfo
              icon={<Mail className="w-6 h-6" />}
              label="Email me at"
              value={siteConfig.email}
              href={`mailto:${siteConfig.email}`}
              colorClass="bg-primary/10 text-primary"
            />
            {githubLink && GithubIcon && (
              <ContactInfo
                icon={<GithubIcon className="w-6 h-6" />}
                label="Check my code"
                value={githubLink.url.replace("https://", "")}
                href={githubLink.url}
                colorClass="bg-secondary/10 text-secondary"
                external
              />
            )}
          </div>
        </div>

        {/* Form */}
        <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} className="bg-background h-12" />
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
                      <Input
                        placeholder="john@example.com"
                        type="email"
                        {...field}
                        className="bg-background h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell me about your project..."
                        {...field}
                        className="bg-background min-h-[150px] resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full h-12 text-base font-semibold" disabled={isPending}>
                {isPending ? "Sending..." : (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </Section>
  );
}

function ContactInfo({
  icon,
  label,
  value,
  href,
  colorClass,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  colorClass: string;
  external?: boolean;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className={`p-3 rounded-full ${colorClass}`}>{icon}</div>
      <div>
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="text-lg font-semibold hover:text-primary transition-colors"
        >
          {value}
        </a>
      </div>
    </div>
  );
}
