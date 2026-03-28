import { Button } from "@/components/Button"
import { ArrowRight, ChevronDown, ChevronUp, Github, Linkedin, Download, Facebook } from "lucide-react"
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const skills = [
  { id: "skill-python", name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { id: "skill-java", name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { id: "skill-js", name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { id: "skill-react", name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { id: "skill-node", name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { id: "skill-flutter", name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
  { id: "skill-mongo", name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { id: "skill-sql", name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { id: "skill-tailwind", name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { id: "skill-docker", name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { id: "skill-aws", name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { id: "skill-ml", name: "Machine Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
]

export const Hero = () => {
  const [isNearEnd, setIsNearEnd] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const distanceFromEnd = documentHeight - (scrollPosition + windowHeight)
      setIsNearEnd(distanceFromEnd < 800)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child element
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" }
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Hero Background Image Base Layer */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
      </motion.div>

      {/* Floating Dynamic Background Gradients */}
      <div className="absolute inset-0 opacity-50 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] mix-blend-screen" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -left-20 w-80 h-80 bg-highlight/20 rounded-full blur-[100px] mix-blend-screen" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10 order-2 md:order-1 pt-8 md:pt-0"
          >
            {/* Name & Title */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
                Hi, I'm <br className="hidden lg:block"/>
                <span className="text-primary glow-text">Tharindu</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-secondary-foreground font-semibold tracking-wide">
                Full-Stack Developer & Software Engineer
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                I craft efficient, scalable web applications with expertise in frontend, backend development and AI integration. Passionate about building digital experiences that drive success.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap items-center sm:items-start md:items-center gap-4 sm:gap-6">
              <Button size="lg" className="group w-full sm:w-auto shrink-0 text-base hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                Get In Touch <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <AnimatedBorderButton
                className="w-full sm:w-auto shrink-0 text-base"
                onClick={() => {
                  const url = "/CV/T.S.Balasooriya_CV.pdf"
                  const a = document.createElement("a")
                  a.href = url
                  a.download = "T.S.Balasooriya_CV.pdf"
                  a.target = "_blank"
                  a.rel = "noopener noreferrer"
                  document.body.appendChild(a)
                  a.click()
                  a.remove()
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </AnimatedBorderButton>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-4">
              <span className="text-sm text-muted-foreground font-bold tracking-wider uppercase">Follow Me</span>
              <div className="flex gap-4">
                {[
                  { id: "social-github", icon: Github, href: "https://github.com/tharindutsb", label: "GitHub" },
                  { id: "social-linkedin", icon: Linkedin, href: "https://www.linkedin.com/in/tharindu-balasooriya-4719b722b/", label: "LinkedIn" },
                  { id: "social-facebook", icon: Facebook, href: "https://www.facebook.com/tharindu.balasooriya.58", label: "Facebook" },
                ].map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.label}
                      className="p-3.5 rounded-xl glass hover:bg-primary/20 hover:text-primary transition-all duration-300 group hover:glow-border"
                    >
                      <Icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            {/* 
              The profile-border-animated class handles the high-performance
              conic-gradient spinning glow in index.css 
            */}
            <div className="profile-border-animated relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] lg:w-[420px] lg:h-[420px] flex items-center justify-center">
              
              {/* Inner container to hold the image slightly smaller than the border */}
              <div className="absolute inset-1 rounded-full z-10 glass-strong overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src="/profile-photoblack.jpg"
                  alt="Tharindu Balasooriya"
                  className="w-full h-full object-cover scale-105"
                />
              </div>

               {/* Live Status Badge */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2 text-sm font-semibold flex items-center gap-3 whitespace-nowrap z-20 hover:bg-white/10 transition-colors shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-default"
              >
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                Available Now
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Skills Marquee - Advanced Infinite Loop */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="w-full mt-24 lg:mt-32"
        >
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-sm text-muted-foreground font-bold uppercase tracking-[0.2em] mb-2">
              Technologies I Work With
            </h3>
            <div className="w-16 h-1 bg-primary/30 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ x: "-100%" }}
                 animate={{ x: "200%" }}
                 transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                 className="w-1/2 h-full bg-primary"
               />
            </div>
          </div>
          
          {/* Mask container to fade out the edges */}
          <div className="[mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] overflow-hidden py-4 hover:[&>div]:[animation-play-state:paused]">
            <div className="flex gap-6 animate-marquee-image w-max">
              {[...skills, ...skills, ...skills].map((skill, idx) => (
                <div 
                  key={`${skill.id}-${idx}`} 
                  className="flex-shrink-0 flex items-center gap-3 px-6 py-3.5 glass-strong rounded-xl hover:bg-white/5 transition-all duration-300 hover:border-primary/40 group cursor-default shadow-sm"
                >
                  <motion.img 
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-9 h-9 object-contain drop-shadow-md" 
                  />
                  <span className="text-base font-bold text-muted-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Smart Scroll Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        onClick={isNearEnd ? scrollToTop : scrollToNext}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 px-4 py-3 rounded-xl hover:text-primary transition-all duration-300 group glass hover:bg-white/5 hover:border-primary/30"
        title={isNearEnd ? "Go to top" : "Scroll to next section"}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/70 group-hover:text-primary transition-colors">
          {isNearEnd ? "Go Up" : "Scroll Down"}
        </span>
        <div className="flex flex-col items-center">
          {isNearEnd ? (
            <ChevronUp className="w-5 h-5 animate-bounce group-hover:-translate-y-1 transition-transform" />
          ) : (
            <ChevronDown className="w-5 h-5 animate-bounce group-hover:translate-y-1 transition-transform" />
          )}
        </div>
      </motion.button>
    </section>
  )
}