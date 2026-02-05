import { Button } from "@/components/Button"
import { ArrowRight, ChevronDown, ChevronUp, Github, Linkedin, Twitter, Download } from "lucide-react"
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton"
import { useState, useEffect } from "react"

const skills = [
  "Python",
  "Java",
  "JavaScript",
  "React",
  "Node.js",
  "Flutter",
  "MongoDB",
  "SQL",
  "Tailwind CSS",
  "Docker",
  "AWS",
  "Machine Learning",
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

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Hero Background Image */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Content */}
          <div className="space-y-8 order-2 md:order-1">
            {/* Name & Title */}
            <div className="space-y-3 animate-fade-in animation-delay-100">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Hi, I'm <span className="text-primary glow-text">Tharindu </span>
              </h1>
              <p className="text-lg md:text-xl text-secondary-foreground font-semibold">
                Full-Stack Developer & Software Engineer
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I craft efficient, scalable web applications with expertise in frontend and backend development. Passionate about building digital experiences that drive success.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in animation-delay-300">
              <Button size="lg" className="group">
                Get In Touch <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground font-semibold">Follow Me:</span>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                ].map((social, idx) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.label}
                      className="p-3 rounded-lg glass hover:bg-primary/20 hover:text-primary transition-all duration-300 group"
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2 animate-fade-in animation-delay-200">
            <div className="profile-border-animated relative w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 flex items-center justify-center">
              {/* Glow Background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-3xl" />

              {/* Glass Container */}
              <div className="relative w-full h-full glass rounded-full p-2 overflow-hidden">
                <img
                  src="/profile-photo.jpg"
                  alt="Tharindu Balasooriya"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

                {/* Status Badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass rounded-full px-4 py-1.5 text-xs font-semibold flex items-center gap-2 whitespace-nowrap">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Available Now
                </div>
              </div>
            </div>
          </div>

        {/* Skills Marquee - Full Width */}
        <div className="w-full mt-16 animate-fade-in animation-delay-500">
          <p className="text-xs text-muted-foreground mb-6 font-semibold uppercase tracking-wider text-center">
            Technologies I Work With
          </p>
          <div className="overflow-hidden">
            <div className="flex gap-4 animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0">
                  <span className="px-4 py-2 glass rounded-lg text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Smart Scroll Button */}
      <button
        onClick={isNearEnd ? scrollToTop : scrollToNext}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-fade-in animation-delay-800 flex flex-col items-center gap-2 px-4 py-3 rounded-lg  hover:text-primary transition-all duration-300 group"
        title={isNearEnd ? "Go to top" : "Scroll to next section"}
      >
        <span className="text-xs uppercase tracking-wider font-semibold text-foreground/70 group-hover:text-primary transition-colors">
          {isNearEnd ? "Go Up" : "Scroll Down"}
        </span>
        <div className="flex flex-col items-center">
          {isNearEnd ? (
            <ChevronUp className="w-5 h-5 animate-bounce group-hover:-translate-y-1 transition-transform" />
          ) : (
            <ChevronDown className="w-5 h-5 animate-bounce group-hover:translate-y-1 transition-transform" />
          )}
        </div>
      </button>
    </section>
  )
}