
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Briefcase } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const experiences = [
    {
        id: "openxcell",
        company: "Openxcell Technolabs",
        role: "Fullstack Developer",
        period: "Jul 2022 - Present",
        duration: "Current",
        achievements: [
            "Established the initial code base for the microservice-based architecture of the backend, resulting in a 30% reduction in setup time compared to previous projects.",
            "Managed schema design based on the NoSQL database MongoDB, leading to a 25% improvement in database query performance.",
            "Mentored junior developers in front end technologies, improving team skills and project delivery speed by 40%.",
            "Developed user friendly interface with Material UI, resulting in a 22% increase in user engagement.",
            "Integrated payment systems (Stripe, Authorize.net), leading to a 15% increase in revenue.",
            "Designed a full-featured admin dashboard with secure login, analytics, CMS, and 100% CRUD coverage for all entities.Improved admin workflows and system reliability.",
            "Completed brand redesign project, resulting in a 25% increase in brand recognition and a 15% growth in customer engagement."
        ],
        // projects: [
        //   {
        //     name: "MOVEGISTICS - Lightweight CRM solution for service industries",
        //     timeline: "6 months",
        //     team: "20 members"
        //   },
        //   {
        //     name: "HAWAK - B2B ordering application for sales teams",
        //     timeline: "9 months",
        //     team: "10 members",
        //     details: [
        //       "Implemented clean code repositories with Git, ensuring a 20% improvement in code readability and collaboration efficiency.",
        //       "Optimized data synchronization processes by 23%, resulting in a 40% increase in order size.",
        //       "Set up micro-service based architecture for scalability. Enhanced data integration module, ensuring seamless data source integration."
        //     ]
        //   },
        //   {
        //     name: "TalentAts - Recruiting process revolution with a configurable dashboard",
        //     timeline: "12 months",
        //     team: "8 members",
        //     details: [
        //       "Created interview module and role assignments. Stabilized the website, resolving bugs, resulting in a 25% decrease in bug reports.",
        //       "Enhanced search and filtering capabilities, leading to a 30% increase in user engagement and a 10% revenue boost."
        //     ]
        //   },
        //   {
        //     name: "The Established - Cutting edge digital platform for discerning consumers",
        //     timeline: "5 months",
        //     team: "6 members",
        //     details: [
        //       "Leveraged Node.js for backend development, achieving a 20% improvement in server response time. Led the entire SDLC, ensuring timely delivery.",
        //       "Applied JWT authentication, resulting in a 15% decrease in unauthorized access attempts.",
        //       "Reviewed AWS S3 bucket for storage needs, achieving a 20% reduction in storage costs."
        //     ]
        //   }
        // ]
    },
    {
        id: "excellentWeb",
        company: "Excellent Web World",
        role: "Software Engineer",
        period: "Nov 2020 - Jun 2022",
        duration: "1 year 7 months",
        achievements: [
            "Upgraded on current knowledge of industry trends and emerging technologies in frontend development with React, resulting in a 20% increase in productivity and efficiency.",
            "Maintained and advanced browser compatibility issues during layout coding, solving HTML5, CSS, JavaScript, and jQuery cross-browser issues.",
            "Created APIs to use client features while ensuring code integrity with the UI, integrating with RESTful services.",
            "Significantly contributed to the project's success by single-handedly managing the entire project life cycle, including development, deployment, and database management."
        ]
    },
    {
        id: "hariskyline",
        company: "Hariskyline",
        role: "Software Engineer",
        period: "Jun 2019 - Nov 2020",
        duration: "1 year 5 months",
        achievements: [
            "Developed responsive web pages that led to a 27% increase in mobile user traffic.",
            "Contributed to multiple client web solutions by delivering cross-browser, mobile-first UIs with ES6+ JavaScript, HTML5, and CSS3.",
            "Integrated RESTful APIs to enhance frontend functionality, resulting in a smoother user experience.",
            "Led migration of legacy systems to modern SPA, increasing development efficiency by 35%."
        ]
    }
];

const Experience = () => {
    const [defaultTab] = useState(experiences[0].id);

    return (
        <section id="experience" className="section-padding bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-accent">
                    Experience
                </h2>

                <div className="max-w-4xl mx-auto">
                    <Tabs defaultValue={defaultTab} className="w-full">
                        <TabsList className="flex flex-wrap mb-8 w-full bg-secondary/20 p-1 overflow-x-auto">
                            {experiences.map((exp) => (
                                <TabsTrigger
                                    key={exp.id}
                                    value={exp.id}
                                    className="data-[state=active]:bg-accent data-[state=active]:text-primary-foreground flex-grow"
                                >
                                    {exp.company}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {experiences.map((exp) => (
                            <TabsContent key={exp.id} value={exp.id} className="border-l-2 border-accent pl-6 animate-fade-in">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                                    <div className="flex flex-col sm:flex-row sm:gap-6 mt-2 text-foreground/70">
                                        <div className="flex items-center">
                                            <Briefcase className="mr-2 h-4 w-4 text-accent" />
                                            <span>{exp.company}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Calendar className="mr-2 h-4 w-4 text-accent" />
                                            <span>{exp.period} ({exp.duration})</span>
                                        </div>
                                    </div>
                                </div>

                                <ul className="space-y-4 mt-6">
                                    {exp.achievements.map((achievement, index) => (
                                        <ScrollReveal key={index} delay={index * 100} className="flex">
                                            <span className="text-accent mr-3 text-xl">•</span>
                                            <span className="text-foreground/90">{achievement}</span>
                                        </ScrollReveal>
                                    ))}
                                </ul>

                                {/* {exp.projects && (
                                    <div className="mt-8">
                                        <h4 className="text-xl font-semibold mb-4 text-accent">Projects</h4>
                                        {exp.projects.map((project, index) => (
                                            <ScrollReveal key={index} delay={index * 150} className="mb-6 last:mb-0">
                                                <div className="border-l-2 border-accent/30 pl-4 py-2">
                                                    <h5 className="text-lg font-medium text-foreground">{project.name}</h5>
                                                    <div className="flex flex-col sm:flex-row sm:gap-4 text-sm text-foreground/60 mt-1">
                                                        <span>Timeline: {project.timeline}</span>
                                                        <span>Team Size: {project.team}</span>
                                                    </div>

                                                    {project.details && (
                                                        <ul className="mt-3 space-y-2">
                                                            {project.details.map((detail, detailIndex) => (
                                                                <li key={detailIndex} className="flex text-sm">
                                                                    <span className="text-accent mr-2">•</span>
                                                                    <span className="text-foreground/80">{detail}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            </ScrollReveal>
                                        ))}
                                    </div>
                                )} */}
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </div>
        </section>
    );
};

export default Experience;
