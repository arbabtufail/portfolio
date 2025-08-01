import Navigation from "@/components/Navigation";
import ExperienceSection from "@/components/ExperienceSection";

const Experience = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <ExperienceSection />
      </main>
    </div>
  );
};

export default Experience;