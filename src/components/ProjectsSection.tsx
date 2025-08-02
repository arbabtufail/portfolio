import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

const ProjectsSection = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const handleCardFlip = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const projects = [
    {
      title: "Knowlej - Education Management Platform",
      shortDescription: "AI-powered education platform with smart attendance and student engagement features.",
      fullDescription: "Knowlej is an AI-powered education platform that changes learning through technology and innovation. It makes attendance management and student engagement easier, all in one platform. The platform makes education more enjoyable by offering students rewards like concerts, sports events, and other real-world rewards. It also offers personalized learning, easy access to resources, and progress tracking for student success. As a result, Knowlej is reshaping the future of education with engaging learning experiences.",
      image: "/projects/project_knowlej_banner.webp",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "OpenAI", "TypeScript", "Tailwind CSS", "Prisma"],
      live: "https://www.knowlej.io/",
      featured: true,
    },
    {
      title: "Critiqle - Content Feedback Platform",
      shortDescription: "Platform connecting creators with verified influencers for expert content feedback.",
      fullDescription: "Get Expert Feedback from Verified Influencers. Critiqle is a platform where creator can submit their content and get expert feedback from verified Influencers(Critiquers). The platform features secure user authentication, file upload system, and comprehensive feedback management system.",
      image: "/projects/project_critiqle.png",
      technologies: ["Next.js", "Firebase Authentication", "Firebase Storage", "React", "TypeScript"],
      live: "https://critiqle.com",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      shortDescription: "Beautiful weather dashboard with location-based forecasts and interactive charts.",
      fullDescription: "A comprehensive weather dashboard featuring real-time weather data, location-based forecasts, interactive charts showing weather trends, and responsive design. Built with modern React components and integrated with reliable weather APIs for accurate data.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Chart.js", "Weather API", "CSS3", "REST API"],
      live: "https://example.com",
      featured: false,
    },
    {
      title: "Portfolio Website",
      shortDescription: "Responsive portfolio website with dark mode, animations, and contact form.",
      fullDescription: "A modern and responsive portfolio website featuring dark/light mode toggle, smooth animations, interactive contact form with validation, project showcase, and optimized performance. Built with latest web technologies and best practices.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "React Hook Form"],
      live: "https://example.com",
      featured: false,
    },
    {
      title: "Blog Platform",
      shortDescription: "Modern blog platform with markdown support, SEO optimization, and comment system.",
      fullDescription: "A full-featured blog platform with markdown support for content creation, SEO optimization for better search rankings, commenting system for user engagement, admin dashboard, and content management features.",
      image: "/placeholder.svg",
      technologies: ["Gatsby", "GraphQL", "Contentful", "Netlify", "React", "SEO"],
      live: "https://example.com",
      featured: false,
    },
    {
      title: "Mobile Fitness App",
      shortDescription: "Cross-platform fitness tracking app with workout plans and progress analytics.",
      fullDescription: "A comprehensive fitness tracking application with personalized workout plans, progress analytics with detailed charts, exercise library, nutrition tracking, and social features. Built for both iOS and Android platforms.",
      image: "/placeholder.svg",
      technologies: ["React Native", "Firebase", "Redux", "Charts", "Expo", "AsyncStorage"],
      live: "https://example.com",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const notableProjects = projects.filter((project) => !project.featured);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my best work, demonstrating technical skills and
            creative problem-solving.
          </p>
        </div>

        {/* Featured Projects Carousel */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-center">Featured Projects</h3>
          <Carousel className="w-full max-w-7xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {featuredProjects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card 
                    className="h-full bg-card-gradient border-border hover:shadow-card transition-all duration-300 group cursor-pointer"
                    onClick={() => handleCardFlip(index)}
                  >
                    <div className="relative h-full">
                      {/* Front of card */}
                      <div className={`absolute inset-0 backface-hidden transition-transform duration-700 ${flippedCards.includes(index) ? 'rotate-y-180' : ''}`}>
                        <CardHeader className="pb-4">
                          <div className="aspect-video bg-secondary rounded-lg mb-4 overflow-hidden">
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-sm line-clamp-3">
                            {project.shortDescription}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-1 mb-4">
                            {project.technologies.slice(0, 4).map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                            {project.technologies.length > 4 && (
                              <Badge variant="outline" className="text-xs">
                                +{project.technologies.length - 4}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground">Click to see more details</p>
                        </CardContent>
                      </div>

                      {/* Back of card */}
                      <div className={`absolute inset-0 backface-hidden rotate-y-180 transition-transform duration-700 ${flippedCards.includes(index) ? 'rotate-y-0' : ''}`}>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="h-full flex flex-col">
                          <div className="flex-1 overflow-y-auto mb-4 max-h-32">
                            <p className="text-sm text-muted-foreground">{project.fullDescription}</p>
                          </div>
                          <div className="flex flex-wrap gap-1 mb-4">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <Button size="sm" asChild>
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink className="h-3 w-3 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Notable Projects Carousel */}
        <div>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-center">Notable Projects</h3>
          <Carousel className="w-full max-w-7xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {notableProjects.map((project, index) => (
                <CarouselItem key={index + featuredProjects.length} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card 
                    className="h-full bg-card-gradient border-border hover:shadow-card transition-all duration-300 group cursor-pointer"
                    onClick={() => handleCardFlip(index + featuredProjects.length)}
                  >
                    <div className="relative h-full">
                      {/* Front of card */}
                      <div className={`absolute inset-0 backface-hidden transition-transform duration-700 ${flippedCards.includes(index + featuredProjects.length) ? 'rotate-y-180' : ''}`}>
                        <CardHeader className="pb-4">
                          <div className="aspect-video bg-secondary rounded-lg mb-4 overflow-hidden">
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-sm line-clamp-3">
                            {project.shortDescription}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-1 mb-4">
                            {project.technologies.slice(0, 4).map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                            {project.technologies.length > 4 && (
                              <Badge variant="outline" className="text-xs">
                                +{project.technologies.length - 4}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground">Click to see more details</p>
                        </CardContent>
                      </div>

                      {/* Back of card */}
                      <div className={`absolute inset-0 backface-hidden rotate-y-180 transition-transform duration-700 ${flippedCards.includes(index + featuredProjects.length) ? 'rotate-y-0' : ''}`}>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="h-full flex flex-col">
                          <div className="flex-1 overflow-y-auto mb-4 max-h-32">
                            <p className="text-sm text-muted-foreground">{project.fullDescription}</p>
                          </div>
                          <div className="flex flex-wrap gap-1 mb-4">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <Button size="sm" asChild>
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink className="h-3 w-3 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
