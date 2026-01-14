import { motion } from "framer-motion";
import { Section } from "@/components/layout";
import { useBlogPosts } from "@/hooks/use-portfolio";
import { siteConfig, blogContent } from "@/config/site";
import { ExternalLink, Calendar, Clock, Heart, MessageCircle } from "@/lib/icons";
import type { DevToArticle } from "@/types";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80";

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function BlogSkeleton() {
  return (
    <div className="bg-card border border-border/50 rounded-2xl overflow-hidden animate-pulse">
      <div className="h-48 bg-muted" />
      <div className="p-6 space-y-4">
        <div className="h-6 bg-muted rounded w-3/4" />
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded" />
          <div className="h-4 bg-muted rounded w-5/6" />
        </div>
        <div className="flex gap-4">
          <div className="h-4 w-20 bg-muted rounded" />
          <div className="h-4 w-16 bg-muted rounded" />
        </div>
      </div>
    </div>
  );
}

function BlogCard({ article, index }: { article: DevToArticle; index: number }) {
  const coverImage = article.cover_image || article.social_image || FALLBACK_IMAGE;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-500 flex flex-col h-full"
    >
      {/* Image */}
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative h-48 overflow-hidden bg-muted block"
      >
        <img
          src={coverImage}
          alt={article.title}
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="p-2 rounded-full bg-background/90 backdrop-blur text-foreground inline-block">
            <ExternalLink className="w-4 h-4" />
          </span>
        </div>
      </a>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {article.tag_list.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h3>
        </a>

        {/* Description */}
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-grow">
          {article.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {formatDate(article.published_at)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.reading_time_minutes} min
          </span>
          <span className="flex items-center gap-1">
            <Heart className="w-3.5 h-3.5" />
            {article.positive_reactions_count}
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle className="w-3.5 h-3.5" />
            {article.comments_count}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-12">
      <p className="text-muted-foreground mb-4">
        No articles yet. Check back soon!
      </p>
      <a
        href={`https://dev.to/${siteConfig.devToUsername}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        Follow me on Dev.to →
      </a>
    </div>
  );
}

export function Blog() {
  const { data: articles, isLoading, error } = useBlogPosts(6);

  return (
    <Section id="blog" subtitle={blogContent.subtitle} title={blogContent.title}>
      {isLoading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <BlogSkeleton key={i} />
          ))}
        </div>
      ) : error || !articles?.length ? (
        <EmptyState />
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <BlogCard key={article.id} article={article} index={index} />
            ))}
          </div>
          
          {/* View All Link */}
          <div className="text-center mt-12">
            <a
              href={`https://dev.to/${siteConfig.devToUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              View all articles on Dev.to
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </>
      )}
    </Section>
  );
}
