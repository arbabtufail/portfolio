import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <AboutSection />
      </main>
    </div>
  );
};

export default About;