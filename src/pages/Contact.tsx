import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <ContactSection />
      </main>
    </div>
  );
};

export default Contact;