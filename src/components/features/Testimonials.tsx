import { motion } from "framer-motion";
import { Section } from "@/components/layout";
import { testimonials } from "@/config/site";
import { Quote } from "lucide-react";
import { TestimonialSkeleton } from "@/components/ui/skeleton";

interface TestimonialsProps {
  isLoading?: boolean;
}

export function Testimonials({ isLoading = false }: TestimonialsProps) {
  return (
    <Section id="testimonials" subtitle="Testimonials" title="What People Say" dark>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => <TestimonialSkeleton key={i} />)
          : testimonials.map((testimonial, index) => (
          <motion.article
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative bg-card border border-border/50 rounded-2xl p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
          >
            {/* Quote Icon */}
            <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
            
            {/* Content */}
            <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
              "{testimonial.content}"
            </p>
            
            {/* Author */}
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                loading="lazy"
                className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
              />
              <div>
                <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
