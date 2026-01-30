import {Button} from "@/components/Button";  
import { ArrowRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
export const Hero = () => {
  return (  
    <section className="relative min-h-screen flex items-center overflow-hidden"> 
    {/* bg */}
    <div className="absolute inset-0">
      <img src="/hero-bg.jpg" alt="Hero image" className="w-full h-full object-cover opacity-40"  />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>  
    </div>
    {/* Green Dots */}
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(30)].map((_, i) => 
       <div key={i} className="absolute w-1.5 h-1.5 rounded-full opacity-60"   
       style={{
        backgroundColor: "#20B2A6",
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `slow-drift ${
          15+Math.random() * 20 
        }s ease-in-out infinite`,
       }}/>
      )}
 
    </div> 
    {/* content */}
    <div className="container mx-auto px-6 relative pt-32 pb-20 z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* left column -text content  */}
        <div className="space-y-8">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary ">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>Software Engineer • Fullstack Developer
            </span>
          </div>
          {/* headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg-text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
              Crafting <span className="text-primary glow-text"> intelligent,</span> <br/> end-to-end digital experiences<br />
              <span className="font-serif italic font-normal text-white">with precision.</span> 
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
              Hi there! I'm Tharindu Balasooriya, a passionate software engineer dedicated to building efficient and scalable web applications. 
              With expertise in both frontend and backend development, I create seamless digital experiences that drive success.
            </p>
          </div>
          {/* CTAs */}
          <div>
            <Button size="lg">
              Contact Me <ArrowRight className="w-5 h-5"/>
            </Button>
            <AnimatedBorderButton className="ml-4"/>
          </div>

        </div>
        {/* right column - profile image */}
      </div>
    </div>
    </section>
  )
}