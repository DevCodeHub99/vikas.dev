import { Moon, Sun } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative rounded-full overflow-hidden group hover:bg-transparent"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Animated ring on hover */}
      <motion.div
        className="absolute inset-0 rounded-full border-2"
        initial={{ borderColor: "transparent", scale: 0.8, opacity: 0 }}
        whileHover={{ 
          borderColor: isDark ? "rgba(251, 191, 36, 0.5)" : "rgba(139, 92, 246, 0.5)",
          scale: 1,
          opacity: 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Subtle glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-full blur-md"
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          backgroundColor: isDark ? "rgba(251, 191, 36, 0.4)" : "rgba(139, 92, 246, 0.4)",
        }}
      />

      {/* Icon container with smooth transition */}
      <div className="relative z-10">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="sun"
              initial={{ scale: 0, rotate: -90, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              whileHover={{ scale: 1.2, rotate: 45 }}
            >
              <Sun className="h-5 w-5 text-amber-500" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ scale: 0, rotate: 90, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: -90, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              whileHover={{ scale: 1.2, rotate: -15 }}
            >
              <Moon className="h-5 w-5 text-violet-500" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Ripple effect on click */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 2.5, opacity: [0.5, 0] }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundColor: isDark ? "rgba(251, 191, 36, 0.4)" : "rgba(139, 92, 246, 0.4)",
        }}
      />
    </Button>
  );
}
