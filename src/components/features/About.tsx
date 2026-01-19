import { Section } from "@/components/layout";
import { aboutContent, stats } from "@/config/site";
import { StatSkeleton, Skeleton } from "@/components/ui/skeleton";

interface AboutProps {
  isLoading?: boolean;
}

export function About({ isLoading = false }: AboutProps) {
  return (
    <Section id="about" subtitle={aboutContent.subtitle} title={aboutContent.title}>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="prose prose-lg dark:prose-invert text-muted-foreground">
          {isLoading ? (
            <div className="space-y-4">
              {Array.from({ length: 2 }).map((_, i) => (
                <Skeleton key={i} className="h-24 w-full" />
              ))}
            </div>
          ) : (
            aboutContent.paragraphs.map((text, i) => (
              <p key={i} className={i < aboutContent.paragraphs.length - 1 ? "mb-6" : ""}>
                {text}
              </p>
            ))
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => <StatSkeleton key={i} />)
            : stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card p-6 rounded-2xl hover:bg-card/60 transition-colors"
                >
                  <h3 className={`text-4xl font-bold mb-2 ${stat.colorClass}`}>
                    {stat.value}
                  </h3>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
        </div>
      </div>
    </Section>
  );
}
