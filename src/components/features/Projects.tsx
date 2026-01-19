import { motion } from "framer-motion";
import { Section } from "@/components/layout";
import { useProjects } from "@/hooks/use-portfolio";
import { Github, ExternalLink, iconMap, Code2 } from "@/lib/icons";
import { techConfig } from "@/config/site";
import type { Project } from "@/types";

// Pre-resolve icons to avoid creating components during render
const techIcons = Object.fromEntries(
  Object.entries(techConfig).map(([tech, config]) => [
    tech,
    iconMap[config.icon] || Code2
  ])
);

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=800&q=80";

function ProjectSkeleton() {
  return (
    <div className="bg-card rounded-3xl overflow-hidden shadow-lg animate-pulse">
      <div className="h-56 bg-muted" />
      <div className="p-6 space-y-4">
        <div className="h-6 bg-muted rounded w-3/4" />
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded" />
          <div className="h-4 bg-muted rounded w-5/6" />
        </div>
        <div className="flex gap-2 flex-wrap">
          <div className="h-8 w-20 bg-muted rounded-full" />
          <div className="h-8 w-24 bg-muted rounded-full" />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="group bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-muted to-muted/50">
        <img
          src={project.imageUrl || FALLBACK_IMAGE}
          alt={project.title}
          loading="lazy"
          width={800}
          height={400}
          className="w-full h-full object-cover"
        />
        
        {/* Action buttons overlay */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card shadow-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:scale-110 transition-all"
              aria-label="View source code"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card shadow-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:scale-110 transition-all"
              aria-label="View live demo"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-3">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-4">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => {
            const config = techConfig[tech];
            const Icon = techIcons[tech] || Code2;
            const color = config?.color || "#64748b";
            
            return (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium bg-background"
                style={{ borderColor: `${color}40`, color }}
              >
                <Icon className="w-3.5 h-3.5" />
                {tech}
              </span>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const { data: projects, isLoading } = useProjects();

  return (
    <Section id="projects" subtitle="Portfolio" title="Featured Work">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => <ProjectSkeleton key={i} />)
          : projects?.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
      </div>
    </Section>
  );
}
