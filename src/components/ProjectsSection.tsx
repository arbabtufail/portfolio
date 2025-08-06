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
import type { CarouselApi } from "@/components/ui/carousel";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// Component for individual project card with flip functionality
const ProjectCard = ({ project }: { project: any }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const visibleTechnologies = project.technologies.slice(0, 4);
  const remainingCount = project.technologies.length - 4;

  return (
    <div
      className="relative h-96 w-full cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 ${
          isFlipped ? "transform" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side */}
        <Card
          className="absolute inset-0 w-full h-full bg-card border-border hover:shadow-lg transition-all duration-300"
          style={{ backfaceVisibility: "hidden" }}
        >
          <CardHeader className="p-4">
            <div className="h-40 bg-muted rounded-lg mb-3 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardTitle className="text-lg leading-tight mb-2 line-clamp-2">
              {project.title}
            </CardTitle>
            <CardDescription className="text-sm line-clamp-3">
              {project.description.substring(0, 120)}...
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="flex flex-wrap gap-1">
              {visibleTechnologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {remainingCount > 0 && (
                <Badge variant="outline" className="text-xs bg-primary/10">
                  +{remainingCount}
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Back Side */}
        <Card
          className="absolute inset-0 w-full h-full bg-card border-border"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-lg">{project.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0 flex flex-col h-full">
            {/* Description - Half height with scrolling */}
            <div className="h-40 overflow-y-auto mb-3 custom-scrollbar">
              <CardDescription className="text-sm leading-relaxed">
                {project.description}
              </CardDescription>
            </div>

            {/* All Technology Badges */}
            <div className="flex flex-wrap gap-1 mb-3 mt-4">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Live Demo Button */}
            <Button variant="default" size="sm" asChild className="mt-3">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Knowlej - AI-Powered Education Platform",
      description:
        "Knowlej is an AI-powered education platform that transforms learning through technology and innovation. It streamlines attendance management and student engagement in one unified platform. The platform enhances education by offering students real-world rewards like concert tickets, sports events, and exclusive experiences. Features include personalized learning paths, seamless resource access, comprehensive progress tracking, and gamified learning experiences that boost student motivation and success rates.",
      image: "/projects/project_knowlej_banner.webp",
      technologies: [
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "OpenAI",
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],
      github: "https://github.com",
      live: "https://www.knowlej.io/",
      featured: true,
    },
    {
      title: "Experios - Immersive Virtual Escape Rooms",
      description:
        "Experios creates unforgettable virtual experiences that bring people together through interactive escape rooms. This platform features real-time multiplayer gameplay, immersive storytelling, and challenging puzzles. Built with cutting-edge technology to deliver seamless user experiences across devices. The platform includes voice chat integration, progress tracking, team management tools, and customizable room themes for different difficulty levels.",
      image: "/projects/virtail_escape.webp",
      technologies: [
        "React",
        "SCSS",
        "Node.js",
        "MongoDB",
        "Express",
        "Socket.io",
        "WebRTC",
      ],
      github: "https://github.com",
      live: "https://virtualescape.com.au/",
      featured: true,
    },
    {
      title: "Critiqle - Content Feedback Platform",
      description:
        "Critiqle is a revolutionary platform connecting content creators with verified industry influencers for expert feedback. Creators can submit their content and receive detailed, professional critiques from established influencers in their niche. The platform features secure file upload, real-time messaging, review tracking, payment processing, and a sophisticated matching algorithm that pairs creators with the most relevant experts in their field.",
      image: "/projects/project_critiqle.png",
      technologies: [
        "Next.js",
        "Firebase Auth",
        "Firebase Storage",
        "React",
        "TypeScript",
        "Stripe",
      ],
      github: "https://github.com",
      live: "https://critiqle.com",
      featured: true,
    },
    {
      title: "JammNation - Artist-Fan Connection App",
      description:
        "JammNation bridges the gap between artists and fans through a comprehensive music platform. Fans can stream exclusive tracks, access behind-the-scenes content, and interact directly with their favorite artists. The platform includes live streaming capabilities, fan engagement tools, merchandise integration, concert notifications, and social features that create meaningful connections between artists and their communities.",
      image: "/projects/case_study_jamm_nation.webp",
      technologies: [
        "React Native",
        "GraphQL",
        "GetStream",
        "PostgreSQL",
        "Apollo",
        "Expo",
      ],
      github: "https://github.com",
      live: "https://jammnation.com/",
      featured: true,
    },
    {
      title: "OneSpace - AI-Powered Student Wellbeing",
      description:
        "OneSpace provides comprehensive wellbeing support for students facing mental health, neurodiversity, and disability challenges. The platform creates a safe environment for students to share experiences, connect with peer support, and access professional help. Features include AI-powered chatbot assistance, secure document storage, real-time crisis intervention, progress tracking, and seamless integration with educational institutions.",
      image: "/projects/case_study_one_space_banner.webp",
      technologies: [
        "React Native",
        "Expo",
        "AWS Amplify",
        "AWS Cognito",
        "AWS AppSync",
        "DynamoDB",
        "Rasa AI",
        "GraphQL",
      ],
      github: "https://github.com",
      live: "https://theonespace.co.uk/",
      featured: true,
    },
    {
      title: "HR Policy Chatbot - Smart Employee Assistant",
      description:
        "An intelligent HR chatbot that revolutionizes employee policy queries and workplace assistance. Built with advanced NLP capabilities, this system provides instant answers to policy questions, automates common HR processes, and integrates seamlessly with existing HR systems. Features include multi-language support, document search, escalation workflows, and comprehensive analytics for HR teams to track common employee concerns and improve policies.",
      image: "/projects/employ_policy.png",
      technologies: [
        "React",
        "Firebase",
        "N8N",
        "NLP",
        "Firestore",
        "Cloud Functions",
      ],
      github: "https://github.com",
      live: "https://employee-policy-document.web.app/",
      featured: true,
    },
    {
      title: "Weather Analytics Dashboard",
      description:
        "A comprehensive weather dashboard featuring real-time forecasts, historical data analysis, and interactive visualizations. The platform provides location-based weather insights with advanced charting capabilities and predictive analytics for weather patterns.",
      image: "/placeholder.svg",
      technologies: [
        "React",
        "TypeScript",
        "Chart.js",
        "Weather API",
        "D3.js",
        "Material-UI",
      ],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },
    {
      title: "Dynamic Portfolio Website",
      description:
        "A modern, responsive portfolio website featuring dark mode toggle, smooth animations, and an integrated contact system. Built with performance optimization and SEO best practices in mind.",
      image: "/placeholder.svg",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "TypeScript",
        "Vercel",
      ],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },
    {
      title: "Blog CMS Platform",
      description:
        "A modern content management system for bloggers featuring markdown support, SEO optimization, comment moderation, and analytics dashboard. Includes real-time collaboration and publishing workflows.",
      image: "/placeholder.svg",
      technologies: [
        "Gatsby",
        "GraphQL",
        "Contentful",
        "Netlify",
        "React",
        "Styled Components",
      ],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },
    {
      title: "FitTrack - Mobile Fitness Companion",
      description:
        "A cross-platform fitness application featuring personalized workout plans, progress analytics, social challenges, and nutrition tracking. Includes wearable device integration and AI-powered recommendations.",
      image: "/placeholder.svg",
      technologies: [
        "React Native",
        "Firebase",
        "Redux",
        "Chart.js",
        "Apple HealthKit",
        "Google Fit",
      ],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my best work, demonstrating technical skills and
            creative problem-solving.
          </p>
        </div>

        {/* Featured Projects Carousel */}
        <div className="mb-16">
          <div className="relative">
            <div className="flex justify-end mb-4">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10"
                  onClick={() => {
                    const prevButton = document.querySelector(
                      '[data-carousel="featured"] [data-direction="prev"]'
                    ) as HTMLButtonElement;
                    prevButton?.click();
                  }}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10"
                  onClick={() => {
                    const nextButton = document.querySelector(
                      '[data-carousel="featured"] [data-direction="next"]'
                    ) as HTMLButtonElement;
                    nextButton?.click();
                  }}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Carousel
              className="w-full"
              data-carousel="featured"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {featuredProjects.map((project, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <ProjectCard project={project} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden" data-direction="prev" />
              <CarouselNext className="hidden" data-direction="next" />
            </Carousel>
          </div>
        </div>

        {/* Notable Projects Carousel */}
        {/* <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Notable{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Projects
              </span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Additional projects showcasing diverse technical capabilities.
            </p>
          </div>
          
          <div className="relative">
            <div className="flex justify-end mb-4">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10"
                  onClick={() => {
                    const prevButton = document.querySelector('[data-carousel="notable"] [data-direction="prev"]') as HTMLButtonElement;
                    prevButton?.click();
                  }}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10"
                  onClick={() => {
                    const nextButton = document.querySelector('[data-carousel="notable"] [data-direction="next"]') as HTMLButtonElement;
                    nextButton?.click();
                  }}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <Carousel 
              className="w-full" 
              data-carousel="notable"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {otherProjects.map((project, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <ProjectCard project={project} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden" data-direction="prev" />
              <CarouselNext className="hidden" data-direction="next" />
            </Carousel>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
