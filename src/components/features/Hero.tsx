import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/ui/social-links";
import { heroContent, socialLinks } from "@/config/site";
import { ArrowRight } from "@/lib/icons";

// Get data from config
const { codeLines, terminalSequence, codeBlockHeader } = heroContent;

function TypeWriter({ text, onComplete, speed = 50 }: { text: string; onComplete?: () => void; speed?: number }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (displayed.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [displayed, text, speed, onComplete]);

  return <span>{displayed}</span>;
}

function InteractiveTerminal() {
  const [step, setStep] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const [loadingDots, setLoadingDots] = useState("");

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => setShowCursor(c => !c), 530);
    return () => clearInterval(interval);
  }, []);

  // Loading dots animation
  useEffect(() => {
    if (terminalSequence[step]?.type === "loading") {
      const interval = setInterval(() => {
        setLoadingDots(d => d.length >= 3 ? "" : d + ".");
      }, 400);
      return () => clearInterval(interval);
    }
  }, [step]);

  // Auto-advance steps
  useEffect(() => {
    if (!isTyping && step < terminalSequence.length - 1) {
      const delay = terminalSequence[step]?.delay || 600;
      const timeout = setTimeout(() => {
        setStep(s => s + 1);
        setIsTyping(true);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [isTyping, step]);

  const handleTypingComplete = () => setIsTyping(false);

  const restartAnimation = () => {
    setStep(0);
    setIsTyping(true);
  };

  return (
    <motion.div
      className="mx-4 md:mx-5 mb-4 md:mb-5 p-3 rounded-lg bg-background border border-border cursor-pointer group"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      onClick={restartAnimation}
      title="Click to replay"
    >
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-mono text-muted-foreground">zsh</span>
        </div>
        <span className="text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
          click to replay
        </span>
      </div>

      <div className="space-y-1.5 font-mono text-[11px] md:text-xs min-h-[80px]">
        <AnimatePresence mode="popLayout">
          {terminalSequence.slice(0, step + 1).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-2"
            >
              {line.type === "command" && (
                <>
                  <span className="text-green-500 select-none">❯</span>
                  <span className="text-foreground">
                    {i === step && isTyping ? (
                      <>
                        <TypeWriter
                          text={line.text}
                          onComplete={handleTypingComplete}
                          speed={40}
                        />
                        {showCursor && <span className="bg-foreground text-background ml-0.5">▋</span>}
                      </>
                    ) : (
                      line.text
                    )}
                  </span>
                </>
              )}

              {line.type === "output" && (
                <span className="text-muted-foreground italic pl-4">
                  {i === step && isTyping ? (
                    <TypeWriter text={line.text} onComplete={handleTypingComplete} speed={30} />
                  ) : (
                    line.text
                  )}
                </span>
              )}

              {line.type === "loading" && (
                <span className="text-yellow-500 pl-4">
                  ⠋ {line.text}{loadingDots}
                </span>
              )}

              {line.type === "success" && (
                <span className="text-green-500">
                  ✓ {i === step && isTyping ? (
                    <TypeWriter text={line.text} onComplete={handleTypingComplete} speed={25} />
                  ) : (
                    line.text
                  )}
                </span>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function CodeBlock() {
  return (
    <motion.div
      className="relative w-full max-w-[480px] mx-auto mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      {/* Shadow layers */}
      <div className="absolute inset-0 rounded-2xl bg-foreground/5 transform translate-x-4 translate-y-4 blur-sm" />
      <div className="absolute inset-0 rounded-2xl bg-foreground/10 transform translate-x-2 translate-y-2" />

      {/* Main card */}
      <div className="relative rounded-2xl bg-card border border-border shadow-2xl shadow-foreground/10 overflow-hidden">
        {/* Window Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: codeBlockHeader.colors.red }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: codeBlockHeader.colors.yellow }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: codeBlockHeader.colors.green }} />
          </div>
          <span className="text-xs text-muted-foreground ml-2 font-mono">{codeBlockHeader.title}</span>
        </div>

        {/* Code Content */}
        <div className="p-5 md:p-6 font-mono text-sm md:text-base">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.08 }}
              className={`${line.color} leading-relaxed`}
            >
              {line.text}
            </motion.div>
          ))}
        </div>

        <InteractiveTerminal />
      </div>
    </motion.div>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative flex items-center justify-center z-0"
    >
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-40"
        style={{
          background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 50%, var(--color-accent) 100%)",
        }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <CodeBlock />
    </motion.div>
  );
}

export function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            {heroContent.badge}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            {heroContent.headline} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {heroContent.headlineHighlight}
            </span>{" "}
            {heroContent.headlineSuffix}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            {heroContent.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="rounded-full text-base font-semibold px-8 h-12 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:-translate-y-1 transition-all"
              onClick={() => scrollTo("projects")}
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base font-semibold px-8 h-12 border-2 hover:bg-accent hover:text-accent-foreground"
              onClick={() => scrollTo("contact")}
            >
              Contact Me
            </Button>
          </div>

          <SocialLinks links={socialLinks} className="mt-12" />
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}
