import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Menu, X, Terminal, Download } from "lucide-react";
import { navLinks, siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  }, []);

  const scrollToTop = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-lg border-b border-border/40 py-4 shadow-lg shadow-black/5" 
          : "bg-transparent py-6"
      }`}
      role="banner"
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="/"
          onClick={scrollToTop}
          className="flex items-center gap-2 group cursor-pointer"
          aria-label="Go to homepage"
        >
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
            <Terminal className="w-5 h-5 text-primary" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 group-hover:from-primary group-hover:to-secondary transition-all duration-300">
            {siteConfig.name.split(" ")[0]}<span className="text-primary">.</span>{siteConfig.name.split(" ")[1]}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6" role="navigation" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
            >
              {link.label}
            </a>
          ))}
          
          <div className="flex items-center gap-3 ml-2">
            <ThemeToggle />
            
            {/* Resume Button - with download animation */}
            <a 
              href={siteConfig.resumeUrl} 
              download 
              aria-label="Download resume"
              className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-foreground/20 text-sm font-medium text-foreground overflow-hidden transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/10"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                Resume
              </span>
              {/* Hover fill effect */}
              <span className="absolute inset-0 bg-primary/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
            
            {/* Hire Me Button - with shine effect */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="group relative inline-flex items-center px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Hire Me</span>
              {/* Shine sweep effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            </a>
          </div>
        </nav>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 text-foreground hover:bg-accent rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-lg font-medium text-foreground/80 hover:text-primary py-2 border-b border-border/50 focus:outline-none focus-visible:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={siteConfig.resumeUrl}
                download
                className="flex items-center gap-2 text-lg font-medium text-foreground/80 hover:text-primary py-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
