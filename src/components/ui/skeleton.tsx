import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "circle" | "text" | "card";
}

export function Skeleton({ className, variant = "default", ...props }: SkeletonProps) {
  const baseClasses = "animate-pulse bg-muted";
  
  const variantClasses = {
    default: "h-12 rounded-md",
    circle: "h-12 w-12 rounded-full",
    text: "h-4 rounded",
    card: "rounded-lg",
  };

  return (
    <div
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    />
  );
}

// Testimonial Skeleton
export function TestimonialSkeleton() {
  return (
    <div className="bg-card border border-border/50 rounded-2xl p-6 space-y-4">
      <Skeleton className="h-20 w-full" />
      <div className="flex items-center gap-4">
        <Skeleton variant="circle" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-48" />
        </div>
      </div>
    </div>
  );
}

// About Stats Skeleton
export function StatSkeleton() {
  return (
    <div className="glass-card p-6 rounded-2xl space-y-3">
      <Skeleton className="h-10 w-20" />
      <Skeleton className="h-4 w-32" />
    </div>
  );
}

// Contact Form Skeleton
export function ContactFormSkeleton() {
  return (
    <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-12 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-12 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-32 w-full" />
      </div>
      <Skeleton className="h-12 w-full" />
    </div>
  );
}

// Navbar Skeleton
export function NavbarSkeleton() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40 py-4">
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Skeleton className="h-10 w-32" />
        <div className="hidden lg:flex gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-20" />
          ))}
        </div>
        <Skeleton className="h-10 w-10 lg:hidden" />
      </div>
    </header>
  );
}

// Section Skeleton (for lazy-loaded sections)
export function SectionSkeleton() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto space-y-8">
        {/* Section header */}
        <div className="text-center space-y-3 mb-12">
          <Skeleton className="h-4 w-24 mx-auto" />
          <Skeleton className="h-10 w-64 mx-auto" />
        </div>
        
        {/* Content grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-64 rounded-2xl" />
          ))}
        </div>
      </div>
    </section>
  );
}
