
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState("");

    // In your contact form component
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("");

        const templateParams = {
            name: formData.name,
            email: formData.email,
            title: formData.subject,
            message: formData.message,
        };

        try {
            const response = await emailjs.send(
                "service_hkpvgtr",
                "template_rc43o74",
                templateParams,
                "RUq1iNGdlj0UXRLFV"
            );
            console.log("Success:", response);
            toast({
                title: "Message sent!",
                description: "Thanks for reaching out. I’ll get back to you soon.",
            });
            setStatus("Message sent successfully!");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            console.error("Error:", error);
            toast({
                title: "Error sending message",
                description: "Please try again later.",
                variant: "destructive",
            });
            setStatus("Error sending message.");
        } finally {
            setIsSubmitting(false);
        }
    };


    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     setIsSubmitting(true);

    //     // Simulate form submission
    //     setTimeout(() => {
    //         toast({
    //             title: "Message sent!",
    //             description: "Thanks for reaching out. I'll get back to you soon.",
    //         });
    //         setFormData({
    //             name: "",
    //             email: "",
    //             subject: "",
    //             message: ""
    //         });
    //         setIsSubmitting(false);
    //     }, 1500);
    // };

    return (

        <section id="contact" className="section-padding bg-secondary/50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-4 text-center">
                    <span className="text-gradient">Get In Touch</span>
                </h2>
                <p className="text-center text-foreground/70 mb-12 max-w-lg mx-auto">
                    Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-center">
                                <div className="bg-accent/10 p-3 rounded-full mr-4">
                                    <Mail className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <p className="text-sm text-foreground/70">Email</p>
                                    <p className="text-foreground">ashwinikashyap206@gmail.com</p>
                                </div>
                            </div>

                            {/* <div className="flex items-center">
                                <div className="bg-accent/10 p-3 rounded-full mr-4">
                                    <Phone className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <p className="text-sm text-foreground/70">Phone</p>
                                    <p className="text-foreground">+1 (555) 123-4567</p>
                                </div>
                            </div> */}

                            <div className="flex items-center">
                                <div className="bg-accent/10 p-3 rounded-full mr-4">
                                    <MapPin className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <p className="text-sm text-foreground/70">Location</p>
                                    <p className="text-foreground">Ahmedabad, Gujarat India</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl font-semibold mb-4">Connect</h3>
                            <div className="flex space-x-4">
                                <a href="https://www.linkedin.com/in/ashwinikashyap" target="_blank" rel="noopener noreferrer" className="bg-darkCard p-3 rounded-full hover:bg-accent/10 transition-colors">
                                <svg className="h-6 w-6 text-accent" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                                </a>
                                <a href="https://github.com/ashwini206" target="_blank" rel="noopener noreferrer" className="bg-darkCard p-3 rounded-full hover:bg-accent/10 transition-colors">
                                <svg className="h-6 w-6 text-accent" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                </svg>
                                </a>
                                <a href="https://x.com/ashwini_ka14773" target="_blank" rel="noopener noreferrer" className="bg-darkCard p-3 rounded-full hover:bg-accent/10 transition-colors">
                                <svg className="h-6 w-6 text-accent" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-darkCard p-6 rounded-lg border border-accent/20">
                        <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                        <form onSubmit={handleSubmit} method="post">
                            <div className="space-y-4">
                                <div>
                                    <Input
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="bg-background border-accent/20 focus:border-accent focus-visible:ring-accent/30"
                                    />
                                </div>

                                <div>
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="bg-background border-accent/20 focus:border-accent focus-visible:ring-accent/30"
                                    />
                                </div>

                                <div>
                                    <Input
                                        name="subject"
                                        placeholder="Subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="bg-background border-accent/20 focus:border-accent focus-visible:ring-accent/30"
                                    />
                                </div>

                                <div>
                                    <Textarea
                                        name="message"
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        className="min-h-[150px] bg-background border-accent/20 focus:border-accent focus-visible:ring-accent/30"
                                    />
                                </div>

                                <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                    {status && <p>{status}</p>}
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default Contact;
