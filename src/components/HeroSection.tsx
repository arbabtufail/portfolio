import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Rss } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Welcome text */}
          <p className="text-primary text-lg mb-4 animate-fade-in">
            Welcome to my portfolio
          </p>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Hi, I'm{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Arbab Tufail
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up animation-delay-200">
            Full Stack Web and Mobile App Developer
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            I create exceptional digital experiences through clean code and
            beautiful design. Passionate about bringing ideas to life with
            modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-600">
            <Link to="/projects">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                View My Work
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                Get In Touch
              </Button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12 animate-fade-in-up animation-delay-800">
            <a
              href="https://github.com/arbabtufail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
              >
                <Github className="h-6 w-6" />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/arbab-tufail/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
              >
                <Linkedin className="h-6 w-6" />
              </Button>
            </a>
            <a href="mailto:arbabtufail2022@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
              >
                <Mail className="h-6 w-6" />
              </Button>
            </a>
            <Link to="/blogs">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
              >
                <Rss className="h-6 w-6" />
              </Button>
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
