import { useState } from "react";
import { cn } from "../lib/utils";
const Skills = [

    { name: "HTML/CSS", level:75, category:"Frontend" },
    { name: "JavaScript", level:70, category:"Frontend" },
    { name: "React", level:75, category:"Frontend" },
    { name: "Tailwind CSS", level:80, category:"Frontend" },

    //backend

    { name: "Node js", level:75, category:"Backend" },
    { name: "MongoDB", level:75, category:"Backend" },

    // tools

    { name: "Git/GitHub", level:70, category:"Tools" },
    { name: "VS Code", level:85, category:"Tools" },
]
const categories = ["all","Frontend","Backend","Tools"]

export const SkillSection = () => {
    const [ActiveCategory, setActiveCategory] = useState("all")

    const filtredSkills = Skills.filter(
        (skill) => ActiveCategory === "all" || skill.category === ActiveCategory);

    return ( 
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button key={key} 
                    onClick={() => setActiveCategory(category)}
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        ActiveCategory === 
                        category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                    )}>

                        {category}
                    </button>
                ))}
            </div>
            <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtredSkills.map((skills,key) => (
                    <div key={key}
                    className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skills.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-2 rounded-full origin-left animate-[glow_1.5s_ease-out"
                        style={{width:skills.level + "%"}}
                        />
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skills.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
};