import { ArrowDown } from "lucide-react"

export function HeroSection() {

    return <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl max-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Yo, I am </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">Pranav </span>
                    <span className="text-gradient opacity-0 animate-fade-in-delay-2">Rajath M</span>
                </h1>
                <p className ="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 ">
                    I am a  web developer and tech enthusiast with a love for building clean,
                    user-friendly experiences. I'm also into cloud and AI,
                    always looking to create secure, scalable solutions. 
                    Currently studying Information Science and constantly chasing new challenges.
                </p>
                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>
    <div className="absolute bottom-8 left-1/2 tranasform -translate-x-1/2 flex flex-col items-center animate-bounce">
    <span className="text-sm text-muted-foreground md-2">Scroll</span>
     <ArrowDown className="h-8 w-5 text-primary"/>
    </div>
    </section>

}