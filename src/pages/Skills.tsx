import Navigation from "@/components/Navigation";
import SkillsSection from "@/components/SkillsSection";

const Skills = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <SkillsSection />
      </main>
    </div>
  );
};

export default Skills;