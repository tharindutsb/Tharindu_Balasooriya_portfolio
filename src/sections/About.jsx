import { Code2, Lightbulb, Rocket, User } from "lucide-react"
import { motion } from "framer-motion"

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
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemFadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  }

  return (  
    <section id="about" className="py-22 relative overflow-hidden">
         <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* left column */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-8"
            >
              <motion.div variants={itemFadeUp}>
                <span className="text-secondary-foreground text-sm font-bold tracking-wider uppercase">
                  About Me
                </span>
              </motion.div>
              <motion.h2 
                variants={itemFadeUp}
                className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground"
              >
                Building the future, 
                <span className="font-serif italic font-normal text-white"> one component at a time.</span>
              </motion.h2>

              <motion.div 
                variants={itemFadeUp}
                className="space-y-4 text-muted-foreground leading-relaxed text-lg"
              >
                <p>
                  I’m a passionate software engineer who specializes in building modern, scalable applications with a strong focus on React-based frontends and robust backend systems. My journey began with curiosity about how applications work end to end, and it has grown into a drive to create meaningful digital products.
                </p>
                <p>
                  I specialize in React, Java, Python, MongoDB, and backend API development, crafting everything from responsive user interfaces to powerful server-side solutions. I also enjoy integrating AI-powered features that enhance functionality, automation, and user experience.
                </p>
                <p>
                  When I’m not coding, you’ll find me exploring new technologies, experimenting with AI, and continuously sharpening my skills to stay ahead in the ever-evolving tech landscape.
                </p>
              </motion.div>
            
              <motion.div 
                variants={itemFadeUp}
                className="glass rounded-2xl p-6 glow-border relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"/>
                <p className="text-lg font-medium italic text-foreground relative z-10">
                  "My mission is to grow as a confident and knowledgeable Software Engineer, deliver delightful work with real impact, and build products that users genuinely love, while continuously learning and improving my skills every day."
                </p>
              </motion.div>
            </motion.div>
             
            {/* right column - highlights */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {highlights.map((item, idx) => (
                <motion.div 
                  key={item.id} 
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, translateY: -5 }}
                  className="glass p-6 rounded-2xl hover:border-primary/50 transition-colors group cursor-default shadow-sm hover:shadow-primary/20"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300"/>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
            
          </div>
         </div>
    </section>
  )
}