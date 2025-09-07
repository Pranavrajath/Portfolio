import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react"
import logo from '../assets/logo.png';

const navItems =[
    { name: 'Home', href: "#hero" },
    { name: 'About', href: "#about" },
    { name: 'Skills', href: "#skills" },
    { name: 'Projects', href: "#projects" },
    { name: 'Contact', href: "#contact" },
]


export const NavBar = () => {
        const[isScrolled,setIsScrolled] = useState(false);
        const[isMenuOpen,setIsMenuOpen] = useState(false);


        useEffect(() => {
            const handleScroll = () => {
                setIsScrolled(window.screenY > 10);
            }
            window.addEventListener("scroll",handleScroll);
            return () => 
                window.removeEventListener("scroll",handleScroll);
            
        },[]);
    return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300"
    , isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs " : "py-5"
    )} 
    > 
       <div className="container flex items-center justify-between "> 
        <a className="text-xl font-bold text-primary flex items-center" >
            <span className="relative z-10 w-17">
                <span className="text-glow text-foreground">
                    <img src={logo} alt="Logo" className="logo" width="auto" height="auto"/>


                </span> 
            </span>
        </a>
        {/*desktop nav*/}
        <div className="hidden md:flex space-x-8">
  {navItems.map((item, key) => (
    <button
      key={item.name}
      onClick={() => {
        const el = document.getElementById(item.href.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }}
      className="bg-transparent border-none text-forground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
      style={{ background: 'none', border: 'none', padding: 0 }}
    >
      {item.name}
    </button>
  ))}
</div>

        {/*mobile nav*/}

        <button onClick={() => setIsMenuOpen((prev)=> !prev)}
            className="md:hidden p-2 text-foreground z-50"    
        >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={cn
            ("fixed inset-0 bg-background/80 background-blur-md z-40 flex flex-col items-center justify-center",
                "trasition-all duration-300 md:hidden",
                isMenuOpen ? "opacity-100  pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
        <div className="flex flex-col space-y-8 text-xl">
  {navItems.map((item, key) => (
    <button
      key={item.name}
      onClick={() => {
        const el = document.getElementById(item.href.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }}
      className="bg-transparent border-none text-forground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
      style={{ background: 'none', border: 'none', padding: 0 }}
      aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
    >
      {item.name}
    </button>
  ))}
</div>
        </div>
        
       </div>
    </nav>
    );
}