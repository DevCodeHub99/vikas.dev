import { motion, AnimatePresence } from "framer-motion";

interface FormErrorProps {
  message?: string;
  id?: string;
}

export function FormError({ message, id }: FormErrorProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.p
          id={id}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          className="text-red-500 text-sm mt-1 flex items-center gap-1"
        >
          <span className="text-lg">⚠️</span> {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}
