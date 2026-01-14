import { lazy, Suspense } from "react";
import { Navbar, Footer } from "@/components/layout";
import { Hero } from "@/components/features";

// Lazy load below-the-fold sections
const About = lazy(() => import("@/components/features/About").then(m => ({ default: m.About })));
const Skills = lazy(() => import("@/components/features/Skills").then(m => ({ default: m.Skills })));
const Projects = lazy(() => import("@/components/features/Projects").then(m => ({ default: m.Projects })));
const Blog = lazy(() => import("@/components/features/Blog").then(m => ({ default: m.Blog })));
const Testimonials = lazy(() => import("@/components/features/Testimonials").then(m => ({ default: m.Testimonials })));
const Contact = lazy(() => import("@/components/features/Contact").then(m => ({ default: m.Contact })));

function SectionLoader() {
  return (
    <div className="py-20 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to main content
      </a>
      
      <Navbar />
      
      <main id="main-content">
        <Hero />
        
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Blog />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
}
