import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig, contactContent, socialLinks } from "@/config/site";
import { Mail, Send, getIcon, CheckCircle, AlertCircle } from "@/lib/icons";
import { ContactFormSkeleton } from "@/components/ui/skeleton";
import { validateContactForm } from "@/lib/validation";
import { useToast } from "@/hooks/use-toast";

// Pre-resolve GitHub icon outside component to avoid render-time creation
const githubLink = socialLinks.find(l => l.name === "GitHub");
const GithubIcon = githubLink ? getIcon(githubLink.icon) : null;

interface ContactProps {
  isLoading?: boolean;
}

export function Contact({ isLoading = false }: ContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    // Validate form data
    const validation = validateContactForm(data);
    
    if (!validation.success) {
      setErrors(validation.errors || {});
      setIsSubmitting(false);
      
      // Show error toast
      toast({
        title: "Validation Error",
        description: "Please check the form fields and try again.",
        action: <button className="text-xs">Dismiss</button>,
      });
      
      return;
    }

    try {
      // Submit to Formspree
      const response = await fetch(siteConfig.formspreeUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
      
      // Show success toast
      toast({
        title: "Message Sent! 🎉",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 4000);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to send message. Please try again.";
      setErrors({
        submit: errorMessage,
      });
      
      // Show error toast
      toast({
        title: "Submission Failed",
        description: errorMessage,
        action: <button className="text-xs">Retry</button>,
      });
    } finally {
      setIsSubmitting(false);
    }
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
        {isLoading ? (
          <ContactFormSkeleton />
        ) : (
          <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
            {/* Success Message */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-900">Message Sent Successfully!</h4>
                    <p className="text-sm text-green-700 mt-1">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Submit Error */}
              <AnimatePresence>
                {errors.submit && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-red-900">Error</h4>
                      <p className="text-sm text-red-700 mt-1">{errors.submit}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  minLength={2}
                  maxLength={100}
                  required
                  disabled={isSubmitting}
                  className={`bg-background h-12 mt-2 transition-all ${
                    errors.name ? "border-red-500 focus:ring-red-500" : ""
                  }`}
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      id="name-error"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-red-500 text-sm mt-1 flex items-center gap-1"
                    >
                      <span className="text-lg">⚠️</span> {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  disabled={isSubmitting}
                  className={`bg-background h-12 mt-2 transition-all ${
                    errors.email ? "border-red-500 focus:ring-red-500" : ""
                  }`}
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      id="email-error"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-red-500 text-sm mt-1 flex items-center gap-1"
                    >
                      <span className="text-lg">⚠️</span> {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me why you're reaching out…"
                  minLength={10}
                  maxLength={5000}
                  required
                  disabled={isSubmitting}
                  className={`bg-background min-h-[150px] resize-none mt-2 transition-all ${
                    errors.message ? "border-red-500 focus:ring-red-500" : ""
                  }`}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      id="message-error"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-red-500 text-sm mt-1 flex items-center gap-1"
                    >
                      <span className="text-lg">⚠️</span> {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={`w-full h-12 text-base font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                    isSuccess
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : isSubmitting
                      ? "bg-primary/80 cursor-not-allowed"
                      : "hover:shadow-lg hover:shadow-primary/50"
                  }`}
                >
                  {isSuccess ? (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </motion.span>
                  ) : isSubmitting ? (
                    <motion.span
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="flex items-center justify-center gap-2"
                    >
                      <span className="inline-block">⌛</span>
                      Sending...
                    </motion.span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  )}
                </Button>
              </motion.div>
            </form>
          </div>
        )}
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
