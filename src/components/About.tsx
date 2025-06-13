
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
    return (
        <section id="about" className="section-padding bg-secondary/50 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-32 h-32 bg-accent/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
                <div className="absolute top-[60%] right-[10%] w-40 h-40 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse-slow animation-delay-400"></div>
                <div className="absolute bottom-[20%] left-[15%] w-28 h-28 bg-purple-500/5 rounded-full filter blur-2xl floating-slow"></div>
                <div className="absolute top-[30%] right-[30%] w-24 h-24 bg-green-500/5 rounded-full filter blur-2xl floating animation-delay-200"></div>
                <div className="absolute bottom-[40%] left-[40%] w-20 h-20 bg-yellow-500/5 rounded-full filter blur-2xl floating-slow animation-delay-600"></div>

                {/* Geometric shapes */}
                <div className="absolute top-[20%] right-[5%] w-4 h-4 bg-accent/20 rotate-45 floating animation-delay-400"></div>
                <div className="absolute bottom-[30%] right-[20%] w-3 h-3 bg-blue-500/20 rounded-full floating-slow"></div>
                <div className="absolute top-[70%] left-[10%] w-2 h-8 bg-purple-500/20 floating animation-delay-800"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2 animate-fade-in">
                        <h2 className="text-3xl font-bold mb-6 relative">
                            <span className="text-gradient">About Me</span>
                            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-accent animate-fade-in-delayed"></span>
                        </h2>
                        <div className="space-y-4 text-foreground/80">
                            <p className="animate-fade-in-delayed opacity-0 [animation-fill-mode:forwards]">
                                Experienced software engineer with over 5 years in the industry. I've worked across the full stack,
                                developing high-performance applications that solve complex business problems.
                            </p>
                            <p className="animate-fade-in-delayed-medium opacity-0 [animation-fill-mode:forwards]">
                                My expertise spans both frontend and backend development, with a strong focus on creating
                                efficient, scalable solutions. I'm passionate about clean code, performance optimization,
                                and implementing innovative technologies that drive business results.
                            </p>
                            <p className="animate-fade-in-delayed-long opacity-0 [animation-fill-mode:forwards]">
                                Throughout my career, I've consistently delivered projects that exceed expectations,
                                working with cross-functional teams to create seamless user experiences and robust
                                technical architectures.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 grid grid-cols-2 gap-4">
                        <Card className="bg-darkCard border-accent/20 hover:border-accent/50 transition-all duration-500 
                           hover:shadow-[0_0_20px_rgba(74,222,128,0.15)] hover:scale-105 hover:-rotate-2
                           animate-fade-in animation-delay-200 opacity-0 [animation-fill-mode:forwards]
                           group cursor-pointer">
                            <CardContent className="p-6 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <h3 className="text-accent text-4xl font-bold mb-2 group-hover:animate-pulse relative z-10">5+</h3>
                                <p className="text-foreground/70 relative z-10">Years of Experience</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-darkCard border-accent/20 hover:border-accent/50 transition-all duration-500 
                           hover:shadow-[0_0_20px_rgba(74,222,128,0.15)] hover:scale-105 hover:rotate-2
                           animate-fade-in animation-delay-400 opacity-0 [animation-fill-mode:forwards]
                           group cursor-pointer">
                            <CardContent className="p-6 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-l from-blue-500/5 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <h3 className="text-accent text-4xl font-bold mb-2 group-hover:animate-pulse relative z-10">30+</h3>
                                <p className="text-foreground/70 relative z-10">Projects Completed</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-darkCard border-accent/20 hover:border-accent/50 transition-all duration-500 
                           hover:shadow-[0_0_20px_rgba(74,222,128,0.15)] hover:scale-105 hover:rotate-1
                           animate-fade-in animation-delay-600 opacity-0 [animation-fill-mode:forwards]
                           group cursor-pointer">
                            <CardContent className="p-6 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <h3 className="text-accent text-4xl font-bold mb-2 group-hover:animate-pulse relative z-10">30%</h3>
                                <p className="text-foreground/70 relative z-10">Performance Improvements</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-darkCard border-accent/20 hover:border-accent/50 transition-all duration-500 
                           hover:shadow-[0_0_20px_rgba(74,222,128,0.15)] hover:scale-105 hover:-rotate-1
                           animate-fade-in animation-delay-800 opacity-0 [animation-fill-mode:forwards]
                           group cursor-pointer">
                            <CardContent className="p-6 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-l from-green-500/5 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <h3 className="text-accent text-4xl font-bold mb-2 group-hover:animate-pulse relative z-10">99%</h3>
                                <p className="text-foreground/70 relative z-10">Client Satisfaction</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
