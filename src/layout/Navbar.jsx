import {Button} from "@/components/Button";  
import {Menu,X} from "lucide-react";
import {useState, useEffect} from "react";

const navLinks = [
  { id: "about", href: "#about", label: "About" },
  { id: "experience", href: "#experience", label: "Experience" },
  { id: "projects", href: "#projects", label: "Projects" },
  { id: "credentials", href: "#credentials", label: "Credentials" },
  // { id: "contact", href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
    const handleScroll =()=> {
      setIsScrolled(window.scrollY > 50);
    }
      window.addEventListener("scroll",handleScroll);
      return () => {
        window.removeEventListener("scroll",handleScroll);
      }
   },[])
  return (  
    <header className={`fixed top-0 left-0 right-0  z-50 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"}`}>
      <nav className="container mx-auto px-6 flex items-center justify-between"> 
        <a href="#home" className="text-xl font-bold tracking-tigh hover:text-primary">
          T.S.<span className ="text-primary">Balasooriya</span>
  
        </a>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-1">
        <div className="glass rounded-full px-2 py-1 items-center gap-1 ">
          {navLinks.map((link,index) => (
            <a href={link.href} key={link.id} 
            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
            >{link.label}</a>
          ))}

        </div>
      </div>

      {/*CTA Button */}
      <div className="hidden md:block">
        <Button size="sm" onClick={() => window.open("#contact", "_self")}>
          Contact Me
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setIsMobileMenuOpen(prev => !prev)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      </nav>
          {/* Mobile menu */}
          {isMobileMenuOpen && (          
            <div className="md:hidden glass-strong animate-fade-in ">
            <div className="container mx-auto px-6 flex flex-col py-6 gap-4">
                {navLinks.map((link,index) => (
              <a href={link.href} key={link.id} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg text-muted-foreground hover:text-foreground py-2"
              >{link.label}</a>
            ))}
            

            </div>

          </div>)}

    </header>
  )
}