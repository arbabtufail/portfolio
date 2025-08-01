import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Palette, Zap } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices",
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful, user-centered digital experiences",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and exceptional user experience",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with 3+ years of experience creating digital
            solutions that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image placeholder */}
          <div className="order-2 lg:order-1">
            <div className="bg-card-gradient rounded-2xl p-8 shadow-card">
              <div className="aspect-square bg-secondary rounded-xl flex items-center justify-center relative overflow-hidden">
                <img src="/arbab_img.jpg" alt="Arbab" />
              </div>

              {/* Stats outside the image */}
              <div className="flex justify-between mt-6 gap-4">
                <div className="bg-primary/10 text-primary rounded-lg px-4 py-3 text-center flex-1">
                  <div className="text-2xl font-bold">12+</div>
                  <div className="text-sm opacity-80">Projects</div>
                </div>
                <div className="bg-primary/10 text-primary rounded-lg px-4 py-3 text-center flex-1">
                  <div className="text-2xl font-bold">3+</div>
                  <div className="text-sm opacity-80">Years</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer and designer with a love
                for creating exceptional digital experiences. My journey began
                with curiosity about how things work on the web, and it has
                evolved into a career dedicated to building innovative
                solutions.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community. I believe in continuous learning and
                staying ahead of industry trends.
              </p>

              <div className="pt-4">
                <a
                  href="/Arbab-Tufail-Resume.pdf"
                  download
                  className="inline-block"
                >
                  <Button variant="default" size="lg">
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="bg-card-gradient border-border hover:shadow-card transition-all duration-300"
            >
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <highlight.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
