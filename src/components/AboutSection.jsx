import { Briefcase, Code, User } from "lucide-react";

export const AboutSection =() => {
    return (
      <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="grid md:items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                 <span className="text-primary">Student </span>
                 </h3>
              <p className="text-xl text-foreground mb-8">
                I'm currently pursuing a degree in Information Science
                and Engineering at SJC Institute of Technology, Chikkaballapur – 562101,
                Karnataka.
              </p>
              <p className="text-xl text-foreground mb-8">
                I've been passionate about computers and technology.
                I like to work on tech projects, constantly learning and experimenting
                with new tools and concepts.
              </p>
              <p className="text-xl text-foreground mb-8">
                You can explore some of my projects on my page.
              </p>
              <p className="text-xl text-foreground mb-8">
                For more quires contact me and you can also get my Resume below.
              </p>
              <div className="flex gap-4 justify-center md:justify-center">
                <button
                  className="cosmic-button"
                  onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  >
                    Get in Touch
                  </button>
                <a href="/Portfolio/Pranav_rajath_Resume.pdf" download="Pranav_rajath_Resume.pdf"
                  className="px-6 py-2 rounded-full border border-primary text-primary bg-primary/10 transition-colors duration-300"
                  >
                   Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
    
}
