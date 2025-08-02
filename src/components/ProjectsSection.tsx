import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "A unified platform for efficient education management",
      description:
        "Knowlej is an AI-powered education platform that changes learning through technology and innovation. It makes attendance management and student engagement easier, all in one platform. The platform makes education more enjoyable by offering students rewards like concerts, sports events, and other real-world rewards. It also offers personalized learning, easy access to resources, and progress tracking for student success. As a result, Knowlej is reshaping the future of education with engaging learning experiences.",
      image: "/projects/project_knowlej_banner.webp",
      technologies: ["Nextjs", "Node.js", "PostgreSQL", "OpenAI"],
      github: "https://github.com",
      live: "https://www.knowlej.io/",
      featured: true,
    },
    {
      title: "Experios Immersive Escape Rooms Platform",
      description:
        "Experios brings people together by creating fun experiences that last.Collaborated on online escape room development and added new games with React/SCSS frontend and Node.js/Express backend to enhance game features.",
      image: "/projects/virtail_escape.webp",
      technologies: ["React", "SCSS", "Node.js", "MongoDB"],
      github: "https://github.com",
      live: "https://virtualescape.com.au/",
      featured: true,
    },

    {
      title: "Content Submission Platform",
      description:
        "Get Expert Feedback from Verified Influencers. Critiqle is a platform where creator can submit their content and get expert feedback from verified Iinfluencers(Critiquers).",
      image: "/projects/project_critiqle.png",
      technologies: ["Nextjs", "Firebase Authentication", "Firebase Bucket"],
      github: "https://github.com",
      live: "https://critiqle.com",
      featured: true,
    },
    {
      title: "JammNation: Mobile App to Connect Artists and Fans",
      description:
        "JammNation is a magical music platform that tears down barriers between artists and fans, bringing them closer to the music that matters. Fans stream tracks, access exclusive content, and engage directly with artists. Our role was to design a user-friendly website and mobile app for both iOS and Android, enabling fans to access the fandom and artists seamlessly.",
      image: "/projects/case_study_jamm_nation.webp",
      technologies: ["React Native", "GraphQl", "GetStream", "PostgressSQL"],
      github: "https://github.com",
      live: "https://jammnation.com/",
      featured: true,
    },
    {
      title: "OneSpace: Mobile App for Student Wellbeing with an AI-Powered.",
      description:
        "OneSpace is a wellbeing solution for students facing mental health, neurodiversity, and disability challenges. It provides a safe space for students to share their challenges, connect with support, and seek help early. OCloud Solutions built this cross-platform app with real-time chat and document storage, using AI to help students access support anytime, anywhere.",
      image: "/projects/case_study_one_space_banner.webp",
      technologies: [
        "React Native",
        "Expo Manged Workflow",
        "AWS Amplify",
        "AWS Cognito",
        "AWS AppSync",
        "AWS DynamoDB",
        "Rasa Chatbot",
      ],
      github: "https://github.com",
      live: "https://theonespace.co.uk/",
      featured: true,
    },
    {
      title: "Employee HR Policy Chatbot",
      description:
        "Built AI-powered HR chatbot with Firestore integration and automation deployed on Heroku.",
      image: "/projects/employ_policy.png",
      technologies: ["React", "Firebase", "N8N"],
      github: "https://github.com",
      live: "https://employee-policy-document.web.app/",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather dashboard with location-based forecasts and interactive charts.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Chart.js", "Weather API"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio website with dark mode, animations, and contact form.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },
    {
      title: "Blog Platform",
      description:
        "Modern blog platform with markdown support, SEO optimization, and comment system.",
      image: "/placeholder.svg",
      technologies: ["Gatsby", "GraphQL", "Contentful", "Netlify"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },
    {
      title: "Mobile Fitness App",
      description:
        "Cross-platform fitness tracking app with workout plans and progress analytics.",
      image: "/placeholder.svg",
      technologies: ["React Native", "Firebase", "Redux", "Charts"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my best work, demonstrating technical skills and
            creative problem-solving.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-card-gradient border-border hover:shadow-card transition-all duration-300 group"
            >
              <CardHeader>
                <div className="aspect-video bg-secondary rounded-lg mb-4 flex items-center justify-center">
                  <img src={project.image} alt={project.title} />
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="default" size="sm" asChild>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  {/* <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        {/* <div>
          <h3 className="text-2xl font-bold mb-8 text-center">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-card-gradient border-border hover:shadow-card transition-all duration-300 group"
              >
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
