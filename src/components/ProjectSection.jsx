import { Description } from "@radix-ui/react-toast";
import { ArrowRight, ExternalLink, Github, Key } from "lucide-react";


const projects =[
    {
        id:1,
        title:"BuildBox",
        Description:"A Website-Builder webpage to build website without coding",
        image:"/Portfolio/projects/buildboxpic.png",
        tags:["React", "TailWindCSS", "MongoDB"],
        demoUrl: "#",
        githubUrl: "https://github.com/Pranavrajath/Buildbox"
    },
    {
        id:2,
        title:"Portfolio",
        Description:"A portfolio that helps me showcase my skills and projects",
        image:"/Portfolio/projects/portfoliopic.png",
        tags:["React", "TailWindCSS", "JavaScript"],
        demoUrl: "#",
        githubUrl: "https://github.com/Pranavrajath/Portfolio"
    },
]


export const ProjectSection = () => {

    return <section id="projects" className="py-15 px-4 relative ">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
            Featured<span className="text-primary"> Projects</span>
            </h2>
            <p className="text-xl p-2">
                At the moment, I've completed only a few projects 
                - Some are still under construction. Check back later for more!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 ">
                {projects.map((project) => (
                      <div key={project.id}  className=" group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-3">
                            <div className="flex flex-wrap gap-2 md-4">
                                {project.tags.map((tag) => (
                                    <span key={tag}  className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground"> {tag} </span>

                                ))}
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground text-sm pb-7">
                                {project.Description}
                        </p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3 pb-2 pl-2">
                                <a href= {project.githubUrl} 
                                target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <Github/>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                target="_blank"
                href="https://github.com/Pranavrajath">
                    Check My github <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section> ;
}