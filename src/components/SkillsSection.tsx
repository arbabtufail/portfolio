import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SkillsSection = () => {
  const frontendSkills = [
    { name: "React/Next.js", level: 95, color: "bg-blue-500" },
    { name: "TypeScript", level: 90, color: "bg-blue-600" },
    { name: "JavaScript", level: 95, color: "bg-yellow-500" },
    { name: "CSS/Tailwind", level: 90, color: "bg-cyan-500" },
    { name: "React Native", level: 80, color: "bg-orange-500" },

    { name: " Bubble.io", level: 70, color: "bg-pink-500" },
  ];

  const backendSkills = [
    { name: "Node.js", level: 85, color: "bg-green-600" },
    { name: "Nest.js", level: 85, color: "bg-green-600" },
    { name: "Express.js", level: 80, color: "bg-gray-600" },
    { name: "PostgreSQL", level: 85, color: "bg-blue-700" },
    { name: "MongoDB", level: 75, color: "bg-green-700" },
    { name: "API Design", level: 90, color: "bg-purple-600" },
    { name: "AWS", level: 70, color: "bg-orange-600" },
    { name: "N8N", level: 70, color: "bg-green-500" },
  ];

  const additionalSkills = [
    "Responsive Design",
    "RESTful APIs",
    "GraphQL",
    "Redux",
    "Agile/Scrum",
    "Performance Optimization",
    "Accessibility",
    "Mobile Development",
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills &{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency
            levels.
          </p>
        </div>

        {/* Skills Tabs */}
        <Tabs defaultValue="frontend" className="mb-16">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
          </TabsList>

          <TabsContent value="frontend">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {frontendSkills.map((skill, index) => (
                <Card
                  key={index}
                  className="bg-card-gradient border-border hover:shadow-card transition-all duration-300 group"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 ${skill.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-white font-bold text-lg">
                        {skill.level}%
                      </span>
                    </div>
                    <h3 className="font-semibold text-sm mb-2">{skill.name}</h3>
                    <Progress value={skill.level} className="h-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="backend">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {backendSkills.map((skill, index) => (
                <Card
                  key={index}
                  className="bg-card-gradient border-border hover:shadow-card transition-all duration-300 group"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 ${skill.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-white font-bold text-lg">
                        {skill.level}%
                      </span>
                    </div>
                    <h3 className="font-semibold text-sm mb-2">{skill.name}</h3>
                    <Progress value={skill.level} className="h-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Additional Skills */}
        <Card className="bg-card-gradient border-border">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Additional Skills & Technologies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {additionalSkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-sm py-2 px-4"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              3+
            </div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              10+
            </div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              20+
            </div>
            <div className="text-muted-foreground">Technologies Mastered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
