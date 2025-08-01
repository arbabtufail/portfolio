import Navigation from "@/components/Navigation";
import ProjectsSection from "@/components/ProjectsSection";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <ProjectsSection />
      </main>
    </div>
  );
};

export default Projects;