import { InstagramIcon, Linkedin, Mail, MapIcon, Phone, Send, Twitter } from "lucide-react"
import { cn } from "../lib/utils"
import { useToast } from "@/hooks/use-Toast";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useEffect } from "react";

export const ContactSection = () => {

    useEffect(() => {
    emailjs.init("ZP_7WSZF0ngKnPUAN");
    }, []);


    const { toast } = useToast();
    const [isSubmitting , setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
      'service_tc101yv',
      'template_g2363a1',
      e.target,
      'ZP_7WSZF0ngKnPUAN'
    ).then(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! I'll get back to you soon."
      });
      setIsSubmitting(false);
    }, () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again."
      });
      setIsSubmitting(false);
    });
  };
    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl"> 
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                You have reached the end! If you have anything to discuss feel free to mail me.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6 ">Contact Information</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="text-primary h-6 w-6"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:pranavrajath0@gmail.com" target="_blank"
                                className="text-muted-foreground hover:text-primary transition-colors">
                                    pranavrajath0@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="text-primary h-6 w-6"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <a href="tel:6363050497" target="_blank"
                                className="text-muted-foreground hover:text-primary transition-colors">
                                    6363050497
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapIcon className="text-primary h-6 w-6"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                    Vijayapura, Devanahalli.
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8">
                        <h4 className="font-medium mb-4">Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/pranav-rajath-3a5034266" target="_blank">
                                <Linkedin />
                            </a>
                            <a href="https://x.com/pranav_rajath" target="_blank">
                                <Twitter />
                            </a>
                            <a href="https://www.instagram.com/pranav_rajath" target="_blank">
                                <InstagramIcon   />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-card p-8 rounded-lg shadow-xs" 
                >
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-medium font-medium mb-2 ">Your Name</label>
                            <input type="text" id="name" name="name"
                             className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                             placeholder="Your Name"
                             required/>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-medium font-medium mb-2 ">Your Mail</label>
                            <input type="email" id="email" name="email"
                             className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                             placeholder="Your mail"
                             required/>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-medium font-medium mb-2 ">Your Message</label>
                            <textarea 
                            id="message" 
                            name="message"
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                            placeholder="Your Message"
                             required/>
                        </div>
                        <button type="submit" 
                        disabled={isSubmitting}
                        className={cn("cosmic-button w-full flex items-center justify-center gap-2 ")}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <Send size={16}/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
}