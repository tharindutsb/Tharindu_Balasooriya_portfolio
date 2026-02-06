import { ArrowUpRight, Github } from "lucide-react"
import {AnimatedBorderButton} from "@/components/AnimatedBorderButton"
const projects = [
  {
    title: "📍 Ceylon Trails",
    description: "Ceylon Trails is an AI-powered travel assistant that creates personalized, time-optimized itineraries for exploring Sri Lanka comfortably and efficiently.",
    image: "/projects/ceylon_trails.jpg",
    tag: ["Flutter","Python","FastAPI","Machine Learning","Pandas","NumPy"],
    // link: "#",
    github: "https://github.com/tharindutsb/ceylon_trails_frontend_latest",
  },
  {
    title: " 🩺 Menstrual Health Checker App",
    description: "An AI-powered mobile app that helps women monitor menstrual health, predict anomalies, and classify possible conditions using Machine Learning.",
    image: "/projects/Menstrual_Health_App.png",
    tag: ["Flutter ","Flask ","Python ","Machine Learning","Scikit-Learn","Pandas"],
    // link: "#",
    github: "https://github.com/tharindutsb/menstrual_health_app",
  },
  {
    title: "AI-Based Nutrient Detection in Paddy Crops (Ongoing Project)",
    description: "A computer vision–based system for identifying NPK nutrient deficiencies and excesses in paddy plants. Built using deep learning and image processing techniques to support smart agriculture and optimized fertilizer usage.",
    image: "/projects/AI-Based_NPK_detection.png",
    tag: ["Python","TensorFlow","OpenCV","Pandas","NumPy"],
    // link: "#",
    github: "https://github.com/tharindutsb",
  },
  {
    title: "Smart Baby Cradle",
    description: "This project introduces a smart cradle system that automates baby monitoring using Arduino, NodeMCU, and the Blynk IoT platform. It detects baby movement and sends real-time notifications to parents, ensuring peace of mind and enhanced safety for infants.",
    image: "/projects/smart_baby_cradle.png",
    tag: ["Arduino","NodeMCU","Blynk IoT"],
    // link: "#",
    github: "https://github.com/tharindutsb/Smart-Baby-Cradle-IOT-project",
  },
]

export const Projects = () => {
  return (  
    <section id="projects" className="py-22 relative overflow-hidden">
          {/* bg glows */}
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>

         <div className="container mx-auto px-6 relative z-10">
            {/* section header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
              <span className="text-secondary-foreground text-sm font-bold tracking-wider uppercase animate-fade-in ">Featured Work</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Projects that
                <span className="font-serif italic font-normal text-white"> make an impact.</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200"> A collection of web and mobile applications I’ve built to solve real-world problems through thoughtful design and solid engineering. </p>
            </div>
            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in animation-delay-30">
              {projects.map((project,idx)=>(
                  <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                  style={{
                    animationDelay:`${(idx + 1)*100 }ms`
                  }}
                  >
                    {/* image */}
                    <div className="relative overflow-hidden aspect-video">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transport opacity-60"/>
                      {/* overlay link */}
                      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                        {/* project link added here later */}

                        {/* <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                          <ArrowUpRight className="w-5 h-5 "/>
                        </a> */}
                        <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                          <Github className="w-5 h-5 "/>
                        </a>
                      </div>
                    </div>
                    {/* content */}
                    <div className="p-6 space-y-4">
                        <div className="flex items-start justify-between">
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                          <ArrowUpRight className="w-5 h-5 
                          group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/>
                        </div>
                        <p className="text-muted-foreground text-sm">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {(project.tag || []).map((tag, tagIdx) => (
                           <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border-border/50 text-muted-foreground hover:border-primary/50">{tag}</span>
                          ))}
                        </div>
                        </div>
                      </div>
                  
              ))}
            </div>
              {/* view all CTA */}
              <div className="text-center mt-12 animate-fade-in animation-delay-500 ">
                <AnimatedBorderButton className="group" onClick={() => window.open("https://github.com/tharindutsb", "_blank")}>
                View All Projects
                <ArrowUpRight className="w-5 h-5"/>
              </AnimatedBorderButton>
              </div>
              
         </div>
       
    </section>
  )
}