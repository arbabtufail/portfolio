import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const ExperienceSection = () => {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };

  const experiences = [
    {
      title: "Software Engineer",
      company: "Ocloud Solutions",
      period: "Jan 2024 - Present",
      description:
        "Led development of scalable web applications using React, Nextjs, Nestjs Node.js, and cloud technologies AWS and Firebase. Mentored junior developers and implemented best practices.",
      technologies: [
        "React",
        "React Native",
        "Nextjs",
        "Nestjs",
        "TypeScript",
        "Node.js",
        "AWS",
        "Firebase",
        "PostgreSQL",
        "MongoDB",
      ],
      achievements: [
        "Led full-stack development, aligning front-end and back-end systems to optimize functionality and user experience",
        "Managed complete project lifecycles independently and with cross-functional teams",
        "Implemented CI/CD pipeline",
        "Built applications with low-code tools like Bubble.io and automated workflows with n8n",
      ],
    },
    {
      title: "Associate Software Engineer",
      company: "Ocloud Solutions",
      period: "Dec 2022 - Dec 2023",
      description:
        "Developed and maintained multiple client projects, focusing on modern web technologies and responsive design.",
      technologies: [
        "React",
        "Nextjs",
        "Nestjs",
        "Nodejs",
        "Express.js",
        "MongoDB",
        "Docker",
        "GraphQL",
      ],
      achievements: [
        "Built front-end applications using React.js and NextJs. And collaborated on full-stack development projects with Node.js and NestJS",
        "Reduced development time by 30%",
        "Implemented testing",
        "Boosted team efficiency through strong collaboration and delivery practices.",
      ],
    },
    {
      title: "Frontend Engineer",
      company: "Upwork",
      period: "Nov 2021 - Nov 2022",
      description:
        "Specialized in creating beautiful, interactive user interfaces.",
      technologies: ["JavaScript", "React", "CSS3", "HTML5", "Figma"],
      achievements: ["Delivered 5+ Projects"],
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through my professional career and the impact I've made
            along the way.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const isExpanded = expandedCards.has(index);
            return (
              <Card
                key={index}
                className="bg-card-gradient border-border hover:shadow-card transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">
                        {exp.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-primary">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleCard(index)}
                        className="h-8 w-8"
                      >
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                {isExpanded && (
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold mb-3">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
