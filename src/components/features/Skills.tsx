import { motion } from "framer-motion";
import { Section } from "@/components/layout";
import { useSkills } from "@/hooks/use-portfolio";
import { skillCategories } from "@/config/site";
import { iconMap } from "@/lib/icons";
import type { SkillCategory, Skill } from "@/types";
import type { IconType } from "react-icons";

const categoryIcons: Record<SkillCategory, IconType> = {
  frontend: iconMap.Layout,
  backend: iconMap.Database,
  tools: iconMap.Terminal,
  engineering: iconMap.Lightbulb,
};

const categoryColors: Record<SkillCategory, string> = {
  frontend: "text-primary",
  backend: "text-secondary",
  tools: "text-foreground",
  engineering: "text-accent",
};

function SkillSkeleton() {
  return (
    <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 animate-pulse">
      <div className="w-10 h-10 rounded-lg bg-muted" />
      <div className="h-4 bg-muted rounded w-20" />
    </div>
  );
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const Icon = skill.icon ? (iconMap[skill.icon] || iconMap.Code) : iconMap.Code;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-border hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Glow effect on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"
        style={{ backgroundColor: skill.color }}
      />
      
      {/* Icon with brand color */}
      <div 
        className="relative w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${skill.color}15` }}
      >
        <span style={{ color: skill.color }}>
          <Icon className="w-5 h-5" />
        </span>
      </div>
      
      {/* Name */}
      <span className="font-medium text-sm text-foreground/80 group-hover:text-foreground transition-colors">
        {skill.name}
      </span>
      
      {/* Shine effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </motion.div>
  );
}

export function Skills() {
  const { data: skills, isLoading } = useSkills();

  return (
    <Section id="skills" subtitle="My Arsenal" title="Technologies I work with." dark>
      <div className="grid gap-12">
        {(Object.entries(skillCategories) as [SkillCategory, string][]).map(
          ([key, label], index) => {
            const categorySkills = skills?.filter((s) => s.category === key) || [];
            const CategoryIcon = categoryIcons[key];

            if (!isLoading && categorySkills.length === 0) return null;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <CategoryIcon className={`w-5 h-5 ${categoryColors[key]}`} />
                  {label}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {isLoading
                    ? Array.from({ length: 5 }).map((_, i) => <SkillSkeleton key={i} />)
                    : categorySkills.map((skill, i) => (
                        <SkillCard key={skill.id} skill={skill} index={i} />
                      ))}
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </Section>
  );
}
