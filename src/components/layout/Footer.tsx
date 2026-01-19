import { siteConfig, footerContent } from "@/config/site";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center text-muted-foreground text-sm space-y-2">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. {footerContent.copyright}
          </p>
          <p className="text-xs opacity-75">{footerContent.formspreeCredit}</p>
          <p className="text-xs opacity-60 italic">{footerContent.devHumor}</p>
        </div>
      </div>
    </footer>
  );
}
