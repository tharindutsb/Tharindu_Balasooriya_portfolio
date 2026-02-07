import { Code2, Lightbulb, Rocket, User } from "lucide-react"



const highlights=[
  {
    id: "clean-code",
    icon:Code2,
    title:"Clean Code",
    description:"Writing clean, maintainable, and efficient code following best practices and design patterns."
  },
  {
    id: "performance-optimized",
    icon:Rocket,
    title:"Performance Optimized",
    description:"Optimizing applications for speed and efficiency to deliver the best user experience.",
  },
  {
    id: "collaboration",
    icon:User,
    title:"Collaboration",
    description:"Working effectively with teams and stakeholders to deliver high-quality software solutions."
  },
  {
    id: "innovation",
    icon:Lightbulb,
    title:"Innovation",
    description:"Bringing creative ideas to life through innovative problem-solving and cutting-edge technology."
  }
]
export const About = () => {
  return (  
    <section id="about" className="py-22 relative overflow-hidden">
         <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* left column */}
            <div className="space-y-8">
              <div className="animate-fade-in">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              About Me
             </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in delay-100 text-secondary-foreground">
              Building the future, 
              <span className="font-serif italic font-normal text-white"> one component at a time.</span>
               
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a passionate software engineer who specializes in building modern, scalable applications with a strong focus on React-based frontends and robust backend systems. My journey began with curiosity about how applications work end to end, and it has grown into a drive to create meaningful digital products.
              </p>
              <p>
                I specialize in React, Java, Python, MongoDB, and backend API development, crafting everything from responsive user interfaces to powerful server-side solutions. I also enjoy integrating AI-powered features that enhance functionality, automation, and user experience.
              </p>
              <p>
                When I’m not coding, you’ll find me exploring new technologies, experimenting with AI, and continuously sharpening my skills to stay ahead in the ever-evolving tech landscape.
              </p>
            </div>
          
          <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
            <p className="text-lg font-medium italic text-foreground ">
              "My mission is to grow as a confident and knowledgeable Software Engineer, deliver delightful work with real impact, and build products that users genuinely love, while continuously learning and improving my skills every day."
            </p>
          </div>

              </div>
             
            {/* right column - highlights */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map( (item,idx)=>(
                <div key={item.id} className="glass p-6 rounded-2xl animate-fade-in 
                "
                style={{
                  animationDelay:`${(idx + 1)*100 }ms`
                }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/30">
                    <item.icon className="w-6 h-6 text-primary"/>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
            
          </div>
         </div>
    </section>
  )
}