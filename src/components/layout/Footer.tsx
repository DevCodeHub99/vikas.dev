import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-6 text-center text-muted-foreground text-sm">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}. Built with React, Tailwind & Love.
        </p>
      </div>
    </footer>
  );
}
