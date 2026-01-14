import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export function Section({ id, children, className, title, subtitle, dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-32 relative overflow-hidden",
        dark ? "bg-accent/5" : "bg-transparent",
        className
      )}
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-24 max-w-2xl"
          >
            {subtitle && (
              <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                {title}
              </h2>
            )}
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mt-6 rounded-full" />
          </motion.div>
        )}
        {children}
      </div>
      
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] opacity-30 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] opacity-30 -translate-x-1/2 translate-y-1/2" />
    </section>
  );
}
