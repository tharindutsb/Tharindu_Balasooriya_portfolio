
const experiences = [
  {
    period: "June 2024 – December 2024",
    role: "Intern / Trainee Software Engineer",
    company: "Sri Lanka Telecom (SLT – Head Office)",
    description: "Worked as an Intern / Trainee Software Engineer at Sri Lanka Telecom (SLT – Head Office), contributing to enterprise systems including a Debt Recovery System and an Incident Management platform. Built backend APIs, data pipelines, and full-stack features using Python, FastAPI, and the MERN stack to support real-world business workflows.",
    technologies: ["React", "Node.js", "Express", "Python", "FastAPI", "SQL", "MongoDB", "REST APIs", "Swagger", "Postman", "Git"],
    current: false,
  },
    {
    period: "June 2021 – December 2025",
    role: "Bachelor of Science (BSc) in Software Engineering",
    company: "Sri Lanka Technological Campus",
    description: "Pursuing a Bachelor of Science (BSc) in Software Engineering at Sri Lanka Technological Campus, where I have developed a strong foundation in software development principles, algorithms, data structures, and system design. My academic journey has been enriched with hands-on projects and internships that have allowed me to apply theoretical knowledge to real-world scenarios, further fueling my passion for building impactful software solutions.",
    technologies: ["Python", "Java", "JavaScript", "C", "Flutter", "MongoDB", "SQL", "AWS", "Machine Learning", "AI Integration", "Data Structures", "Algorithms", "System Design", "Git", "Agile Methodologies", "Team Collaboration", "Problem Solving", "Critical Thinking", "Communication Skills", "Time Management", "Adaptability", "Continuous Learning", "Project Management", "Version Control", "Testing and Debugging", "Software Development Lifecycle (SDLC)", "Object-Oriented Programming (OOP)", "Functional Programming", "Database Management", "Cloud Computing", "DevOps Practices"],
    current: false,
  },
]
export const Experience = () => {

  return (  
    <section id="experience" className="py-22 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 "/>  

      <div className="container mx-auto px-6 relative z-10  ">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 ">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Career Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight animate-fade-in delay-100 text-secondary-foreground mt-4 mb-6"> 
            My Experience proven 
            
            <span className="font-serif italic font-normal text-white"> through real solutions.</span></h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
              My career journey is shaped by hands-on experience building real-world applications, solving practical problems, and delivering reliable solutions. Each role has strengthened my skills, confidence, and passion for creating products that truly make an impact.
          </p>

        </div>
      </div>
      {/* Timeline */}
      <div className="relative container mx-auto px-6"> 
        <div className="timeline-glow absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>
          
          {/* Experience Items */}
          <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx}className="relative grid md:grid-cols-2 gap-8 animate-fade-in animation-delay-300" 
            style={{
              animationDelay:`${(idx + 1)*150 }ms`
            }}>
              {/* timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-background z-10 flex items-center justify-center">
              {exp.current && <span className="absolute inset-0 bg-primary rounded-full bg-primary animate-ping opacity-75 "/>}
              </div>
              {/* content */}
              <div className={`pl-8 md:pl-0 ${
                idx % 2 === 0 
                ? "md:pr-16 md:text-right md:col-start-1 md:col-end-2" 
                : "md:col-start-2 md:pl-16"
                }`}>
                <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                  <span className="text-sm text-primary font-medium">{exp.period}</span>
                  <h3 className=" text-xl font-semibold mt-2" >{exp.role}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                  <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                    {exp.technologies.map((tech, techIdx)=>(
                      <span key={techIdx} 
                      className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
       
    </section>
  )
} 