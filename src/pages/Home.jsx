import { HeroSection } from "../components/HeroSection.jsx";
import { NavBar } from "../components/NavBar.jsx";
import { StarBackground } from "../components/StarBackground.jsx";
import { ThemeToggle } from "../components/ThemeToggle.jsx";
import { AboutSection } from "../components/AboutSection.jsx";
import { SkillSection } from "../components/SkillSection.jsx";
import { ProjectSection } from "../components/ProjectSection.jsx";
import { ContactSection } from "../components/ContactSection.jsx";



export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    
    {/*theme toggle*/}
    <ThemeToggle/>
    {/*background effects*/}
    <StarBackground/>
    {/*navbar*/}
    <NavBar/>  
    {/*main content*/}
    <main>
        <HeroSection/>
        <AboutSection/>
        <SkillSection/>
        <ProjectSection/>
        <ContactSection/>
    </main>
   
    </div>;
}