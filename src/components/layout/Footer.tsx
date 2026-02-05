import { siteConfig, footerContent } from "@/config/site";
import { Heart } from "@/lib/icons";

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-border/50 bg-muted/30">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Main copyright text */}
          <div className="text-center">
            <p className="text-foreground/90 font-medium mb-2">
              &copy; {new Date().getFullYear()} {siteConfig.name}
            </p>
            <p className="text-foreground/70 text-sm leading-relaxed">
              {footerContent.copyright}
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-border/50" />
            <Heart className="w-4 h-4 text-primary/60 animate-pulse" />
            <div className="h-px w-16 bg-border/50" />
          </div>

          {/* Secondary info */}
          <div className="space-y-3 text-center">
            <p className="text-muted-foreground text-sm">
              {footerContent.formspreeCredit}
            </p>
            <p className="text-muted-foreground/80 text-xs italic max-w-2xl mx-auto">
              {footerContent.devHumor}
            </p>
          </div>

          {/* Tagline */}
          <div className="pt-4 border-t border-border/30">
            <p className="text-center text-muted-foreground/60 text-xs font-medium tracking-wide">
              {footerContent.tagline}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
