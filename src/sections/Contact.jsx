import { Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react"
import { Button } from "@/components/Button"
import { useState } from "react"
import emailjs from "@emailjs/browser"

const ContactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "tharindubalasooriya@gmail.com",
    href: "mailto:tharindubalasooriya@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 72 80 800 60",
    href: "tel:+94728080060",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Colombo, Sri Lanka",
    href: "https://maps.google.com/?q=Colombo+Sri+Lanka",
  },
]

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus({ type: null, message: "" })
    
    try {
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceID || !templateID || !publicKey) {
        throw new Error("EmailJS configuration is missing. Please check your environment variables.")
      }

      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      )

      setSubmitStatus({ type: "success", message: "Message sent successfully! 🎉" })
      setFormData({ name: "", email: "", message: "" })
      
      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" })
      }, 4000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus({
        type: "error",
        message: error.message || "Error submitting form. Please try again later.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-22 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-12 sm:mb-16">
          <span className="text-secondary-foreground text-xs sm:text-sm font-bold tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's Build
            <span className="font-serif italic font-normal text-white"> something amazing together</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground animate-fade-in animation-delay-200">
            Have a project in mind or just want to say hi? I'm always open to new opportunities and collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto animate-fade-in animation-delay-200">
          {/* Contact Form */}
          <div className="glass rounded-2xl overflow-hidden p-6 sm:p-8 md:p-10 animate-fade-in animation-delay-300 order-2 md:order-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-foreground">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-surface/50 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 text-foreground placeholder-muted-foreground outline-none text-sm sm:text-base"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-foreground">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-surface/50 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 text-foreground placeholder-muted-foreground outline-none text-sm sm:text-base"
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  placeholder="Your message here..."
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-surface/50 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 text-foreground placeholder-muted-foreground outline-none resize-none text-sm sm:text-base"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-primary hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed text-primary-foreground font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group text-sm sm:text-base"
              >
                {isLoading ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Status Message */}
              {submitStatus.message && (
                <div
                  className={`p-4 rounded-lg text-sm font-medium animate-fade-in ${
                    submitStatus.type === "success"
                      ? "bg-primary/20 text-primary border border-primary/30"
                      : "bg-red-500/20 text-red-400 border border-red-500/30"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in animation-delay-400 order-1 md:order-2">
            {ContactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <a
                  key={index}
                  href={item.href}
                  target={item.label === "Location" ? "_blank" : undefined}
                  rel={item.label === "Location" ? "noopener noreferrer" : undefined}
                  className="group glass rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-primary/50 transition-all duration-300 flex items-start gap-3 sm:gap-4 cursor-pointer"
                >
                  <div className="p-2 sm:p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors flex-shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">{item.label}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground group-hover:text-secondary-foreground transition-colors break-words">
                      {item.value}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                </a>
              )
            })}

            {/* Additional CTA */}
            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-primary/30 bg-primary/5 animate-fade-in animation-delay-500">
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Prefer Direct Chat?</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Connect with me on social media or reach out via any platform that's most convenient for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}