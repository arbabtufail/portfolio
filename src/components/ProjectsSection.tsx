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
      fullDescription: "Knowlej is an AI-powered education platform that revolutionizes learning through cutting-edge technology and innovation. It streamlines attendance management and enhances student engagement in one comprehensive platform. The platform gamifies education by offering students real-world rewards like concert tickets, sports events, and exclusive experiences. Features include AI-powered personalized learning paths, seamless resource access, comprehensive progress tracking, and advanced analytics for educators. With its intuitive interface and robust backend, Knowlej is reshaping the future of education by creating more engaging and effective learning experiences for students and educators alike.",
      image: "/projects/project_knowlej_banner.webp",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "OpenAI", "TypeScript", "Tailwind CSS", "Prisma", "Redis", "AWS"],
      live: "https://www.knowlej.io/",
      featured: true,
    },
    {
      title: "Critiqle - Content Feedback Platform",
      shortDescription: "Platform connecting creators with verified influencers for expert content feedback.",
      fullDescription: "Critiqle is a revolutionary platform that bridges the gap between content creators and verified influencers, providing expert feedback and insights. Creators can submit their content across various formats including videos, images, articles, and social media posts to receive professional critiques from industry experts. The platform features a sophisticated matching algorithm that pairs creators with relevant influencers based on niche, expertise, and content type. It includes secure user authentication, advanced file upload systems, real-time messaging, comprehensive feedback management, rating systems, and detailed analytics to track improvement over time.",
      image: "/projects/project_critiqle.png",
      technologies: ["Next.js", "Firebase Authentication", "Firebase Storage", "React", "TypeScript", "Stripe", "Socket.io", "Tailwind CSS"],
      live: "https://critiqle.com",
      featured: true,
    },
    {
      title: "E-Commerce Platform",
      shortDescription: "Full-stack e-commerce solution with payment integration and inventory management.",
      fullDescription: "A comprehensive e-commerce platform built for modern businesses, featuring a complete shopping experience with advanced product catalog management, secure payment processing through multiple gateways, real-time inventory tracking, and sophisticated order management. The platform includes customer account management, wishlist functionality, advanced search and filtering, product recommendations using AI, multi-vendor support, comprehensive admin dashboard with analytics, and mobile-responsive design. Integrated with modern payment solutions and shipping APIs for seamless transactions.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express.js", "JWT", "AWS S3"],
      live: "https://example.com",
      featured: true,
    },
    {
      title: "Task Management System",
      shortDescription: "Collaborative project management tool with real-time updates and team collaboration.",
      fullDescription: "A sophisticated task management and project collaboration platform designed for modern teams. Features include real-time collaboration with live updates, advanced project timeline management, task dependencies and milestone tracking, team communication tools, file sharing and version control, time tracking with detailed reporting, customizable workflows, and comprehensive project analytics. The platform supports multiple project methodologies including Agile and Kanban, with drag-and-drop interfaces, automated notifications, and integration with popular development tools.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Node.js", "PostgreSQL", "Socket.io", "Docker", "Redis", "TypeScript", "Vuetify"],
      live: "https://example.com",
      featured: false,
    },
    {
      title: "Social Media Analytics Dashboard",
      shortDescription: "Comprehensive analytics platform for social media performance tracking.",
      fullDescription: "An advanced social media analytics platform that provides deep insights into social media performance across multiple platforms. Features include multi-platform integration (Instagram, Twitter, Facebook, LinkedIn), real-time engagement tracking, audience demographics analysis, content performance metrics, competitor analysis, automated reporting, custom dashboard creation, and AI-powered insights for content optimization. The platform includes advanced data visualization, export capabilities, white-label options, and API access for custom integrations.",
      image: "/placeholder.svg",
      technologies: ["React", "Python", "FastAPI", "PostgreSQL", "Chart.js", "Docker", "Celery", "Redis"],
      live: "https://example.com",
      featured: false,
    },
    {
      title: "Real Estate Portal",
      shortDescription: "Modern real estate platform with property listings, virtual tours, and CRM.",
      fullDescription: "A comprehensive real estate platform connecting buyers, sellers, and agents through a modern, intuitive interface. Features include advanced property search with map integration, high-resolution image galleries, 360-degree virtual tours, mortgage calculators, neighborhood insights, agent profiles and ratings, lead management CRM for agents, automated property alerts, comparative market analysis, and integrated communication tools. The platform includes mobile apps for both iOS and Android, advanced filtering options, and machine learning-powered property recommendations.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "Node.js", "MongoDB", "Google Maps API", "Cloudinary", "Stripe", "SendGrid", "React Native"],
      live: "https://example.com",
      featured: false,
    },
    {
      title: "Healthcare Management System",
      shortDescription: "Digital healthcare platform for patient management and telemedicine.",
      fullDescription: "A comprehensive healthcare management system designed to modernize medical practices and improve patient care. Features include electronic health records (EHR) management, appointment scheduling with automated reminders, telemedicine video consultations, prescription management, patient portal for accessing medical records, billing and insurance processing, medical inventory tracking, and compliance with healthcare regulations (HIPAA). The platform includes mobile applications for both patients and healthcare providers, integration with medical devices, and advanced security measures to protect sensitive medical data.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "PostgreSQL", "WebRTC", "AWS", "Docker", "HIPAA Compliance", "Socket.io"],
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
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">Featured Projects</h3>
            <div className="flex gap-2">
              <CarouselPrevious className="static translate-x-0 translate-y-0 h-8 w-8" />
              <CarouselNext className="static translate-x-0 translate-y-0 h-8 w-8" />
            </div>
          </div>
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
          </Carousel>
        </div>

        {/* Notable Projects Carousel */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">Notable Projects</h3>
            <div className="flex gap-2">
              <CarouselPrevious className="static translate-x-0 translate-y-0 h-8 w-8" />
              <CarouselNext className="static translate-x-0 translate-y-0 h-8 w-8" />
            </div>
          </div>
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
          </Carousel>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
