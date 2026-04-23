import { motion } from "framer-motion"

const experiences = [
  {
    id: "kode-eye-co-founder",
    period: "April 2026 – Present",
    role: "Co-Founder & Lead Software Engineer",
    company: "Kode-Eye",
    description: "As a Co-Founder and Lead Engineer at Kode Eye, I lead the technical vision and infrastructure development for high-performance digital ecosystems. Our mission is Engineering Without Compromise, delivering global-quality software solutions that prioritize scalability, security, and technical integrity.",
    technologies: ["Custom Logic", "Web Platforms", "AI Integration", "Dashboards", "Data Systems", "Next Gen Technologies", "Microservices", "Cloud-Native Solutions", "Agile Methodologies", "Innovation-Driven Development"],
    current: true,
  },
  
  {
    id: "slt-intern",
    period: "December 2024 – June 2025",
    role: "Intern / Trainee Software Engineer",
    company: "Sri Lanka Telecom (SLT – Head Office)",
    description: "Worked as an Intern / Trainee Software Engineer at Sri Lanka Telecom (SLT – Head Office), contributing to enterprise systems including a Debt Recovery System and an Incident Management platform. Built backend APIs, data pipelines, and full-stack features using Python, FastAPI, and the MERN stack to support real-world business workflows.",
    technologies: ["React", "Node.js", "Express", "Python", "FastAPI", "SQL", "MongoDB", "REST APIs", "Swagger", "Postman", "Git"],
    current: false,
  },
    {
    id: "bsc-sltc",
    period: "June 2021 – December 2025",
    role: "Bachelor of Science (BSc) in Software Engineering",
    company: "Sri Lanka Technological Campus",
    description: "Pursuing a Bachelor of Science (BSc) in Software Engineering at Sri Lanka Technological Campus, where I have developed a strong foundation in software development principles, algorithms, data structures, and system design. My academic journey has been enriched with hands-on projects and internships that have allowed me to apply theoretical knowledge to real-world scenarios, further fueling my passion for building impactful software solutions.",
    technologies: ["Python", "Java", "JavaScript", "C", "Flutter", "MongoDB", "SQL", "AWS", "Machine Learning", "AI Integration", "Data Structures", "Algorithms", "Git", "Agile Methodologies", "Team Collaboration"],
    current: false,
  },

]

export const Experience = () => {

  const lineVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: "100%", 
      opacity: 1, 
      transition: { duration: 1.5, ease: "easeInOut" } 
    }
  }

  const cardVariantsLeft = {
    hidden: { opacity: 0, x: -50, filter: "blur(10px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } }
  }

  const cardVariantsRight = {
    hidden: { opacity: 0, x: 50, filter: "blur(10px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } }
  }

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  }

  return (  
    <section id="experience" className="py-22 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"/>  

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {}
          }}
          className="max-w-3xl mb-16"
        >
          <motion.span variants={headerVariants} className="text-secondary-foreground text-sm font-bold tracking-wider uppercase">
            Career Journey
          </motion.span>
          <motion.h2 variants={headerVariants} className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground mt-4 mb-6"> 
            My Experience proven <br className="hidden sm:block"/>
            <span className="font-serif italic font-normal text-white"> through real solutions.</span>
          </motion.h2>

          <motion.p variants={headerVariants} className="text-muted-foreground text-lg leading-relaxed">
              My career journey is shaped by hands-on experience building real-world applications, solving practical problems, and delivering reliable solutions. Each role has strengthened my skills, confidence, and passion for creating products that truly make an impact.
          </motion.p>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="relative container mx-auto px-6 max-w-6xl"> 
        {/* Animated Line */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={lineVariants}
          className="timeline-glow absolute left-6 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/40 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)] origin-top z-0"
        />
          
        {/* Experience Items */}
        <div className="space-y-16">
          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div 
                key={exp.id} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={isLeft ? cardVariantsLeft : cardVariantsRight}
                className="relative grid md:grid-cols-2 gap-8 z-10"
              >
                {/* timeline dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 }}
                  className="absolute left-[22px] md:left-1/2 top-6 w-4 h-4 bg-primary shadow-[0_0_15px_rgba(32,178,166,0.8)] rounded-full -translate-x-1/2 ring-4 ring-background z-20 flex items-center justify-center"
                >
                  {exp.current && <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"/>}
                </motion.div>
                
                {/* content */}
                <div className={`pl-12 md:pl-0 ${
                  isLeft 
                  ? "md:pr-16 md:text-right md:col-start-1 md:col-end-2" 
                  : "md:col-start-2 md:pl-16"
                }`}>
                  <motion.div 
                    whileHover={{ scale: 1.02, translateY: -2 }}
                    className={`glass p-8 rounded-2xl border border-primary/20 hover:border-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10`}
                  >
                    <span className="text-sm text-primary font-bold tracking-wider">{exp.period}</span>
                    <h3 className="text-2xl font-bold mt-2 text-foreground">{exp.role}</h3>
                    <p className="text-secondary-foreground font-medium text-lg mt-1">{exp.company}</p>
                    <p className="text-muted-foreground mt-4 leading-relaxed">{exp.description}</p>
                    <div className={`flex flex-wrap gap-2 mt-6 ${isLeft ? "md:justify-end" : ""}`}>
                      {exp.technologies.map((tech, techIdx)=>(
                        <motion.span 
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(32,178,166,0.1)", color: "var(--color-primary)" }}
                          key={`${exp.id}-tech-${techIdx}`} 
                          className="px-3 py-1 bg-surface/80 border border-border/50 text-xs font-semibold rounded-full text-muted-foreground cursor-default transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 