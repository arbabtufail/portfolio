import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/arbabtufail",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/arbab-tufail/",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:arbabtufail2022@gmail.com",
    },
  ];

  return (
    <footer className="bg-card-gradient border-t border-border">
      <div className="container mx-auto max-w-6xl px-4 py-12 pb-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-text-gradient bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-muted-foreground">
              Software Engineer | Building Scalable Web && Mobile Apps
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="/experience"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Experience
              </a>
              <a
                href="/projects"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="/skills"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a
                href="/contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Button key={link.name} variant="ghost" size="icon" asChild>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-4 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Arbab Tufail. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
