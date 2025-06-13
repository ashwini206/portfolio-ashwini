
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Mytab – Real-Time Restaurant Dashboard",
        description:
            "Developed a live order tracking system and flexible menu management platform for restaurants. Added ad campaign tools and discount modules, increasing venue efficiency by 30% and customer engagement by 35%.",
        tags: ["React", "TypeScript", "NextJs", "Socket.IO"],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
        github: "#",
        live: "https://mytabinfo.com/"
    },
    {
        title: "Movegistics – CRM Solution for Service Industries",
        description:
            "Integrated CRM API using React, calendar-based scheduling, and payment systems like Stripe and Authorize.net. Improved user engagement by 22% and revenue by 15%.",
        tags: ["React", "Material UI", "WebSockets", "AWS S3", "Stripe API"],
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
        github: "#",
        live: "https://movegistics.com/"
    },
    {
        title: "TalentAts – Recruiting Platform with Dashboar",
        description:
            "Designed a configurable dashboard for interview scheduling and role assignment. Enhanced search/filter features, improving engagement by 30% and reducing bugs by 25%.",
        tags: ["React", "Node.js", "Typescript", "RESTful API", "Next"],
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
        github: "#",
        live: "https://admin.talent-ats.com/dashboard"
    },
    {
        title: "HAWAK – B2B Ordering Application",
        description:
            "Built a microservices-based B2B ordering app. Improved data sync by 23% and increased order size by 40%. Used Git for clean code and modular architecture.",
        tags: ["Microservices", "Git", "MongoDB", "WebRTC", "Mongoose"],
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
        github: "#",
        live: "https://hawak.io/"
    },
];

const Projects = () => {
    return (
        <section id="projects" className="section-padding">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">
                    <span className="text-gradient">Featured Projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <Card key={idx} className="overflow-hidden bg-darkCard border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(74,222,128,0.15)]">
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                                <p className="text-foreground/70 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIdx) => (
                                        <Badge key={tagIdx} variant="secondary" className="text-xs bg-accent/10 text-accent">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="px-6 pb-6 pt-0 flex gap-4">
                                {/* <Button variant="outline" size="sm" className="gap-2">
                                    <Github className="h-4 w-4" /> Code
                                </Button> */}
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button size="sm" className="gap-2">
                                        <ExternalLink className="h-4 w-4" /> Live Demo
                                    </Button>
                                </a>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
