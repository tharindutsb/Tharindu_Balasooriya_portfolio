import { ChevronRight, ChevronLeft, X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react"
import { useState, useRef, useEffect } from "react"

const credentials = [
  {
    title: "Bachelor of Science (BSc) in Software Engineering",
    institution: "Sri Lanka Technological Campus",
    type: "Transcript",
    date: "2021 - 2025",
    description: "This official academic transcript highlights my GPA and coursework in Software Engineering, through which I earned Second Upper Class Honours.",
    images: ["testimonials_resourses/transcript1.jpg", "testimonials_resourses/transcript2.jpg"],
  },
  {
    title: "Campus Letter",
    institution: "University of Colombo",
    type: "Letter",
    date: "2024",
    description: "Official letter from campus administration certifying my achievements and enrollment.",
    images: ["/path-to-your-campus-letter.jpg"],
  },
  {
    title: "SLT Certification",
    institution: "Sri Lanka Telecom",
    type: "Certification",
    date: "2023",
    description: "Professional certification from SLT acknowledging technical competency.",
    images: ["testimonials_resourses/transcript1.jpg", "testimonials_resourses/transcript2.jpg"],
  },
  {
    title: "Academic Certificate",
    institution: "University of Colombo",
    type: "Certificate",
    date: "2024",
    description: "Official academic achievement certificate with honors distinction.",
    images: ["/path-to-your-certificate.jpg"],
  },
]

export const Credentials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCredential, setSelectedCredential] = useState(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [panX, setPanX] = useState(0)
  const [panY, setPanY] = useState(0)
  const [isPanning, setIsPanning] = useState(false)
  const [panStart, setPanStart] = useState({ x: 0, y: 0 })
  const imageRef = useRef(null)
  const containerRef = useRef(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % credentials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + credentials.length) % credentials.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Zoom controls
  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.2, 3))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.2, 1))
  }

  const handleResetZoom = () => {
    setZoom(1)
    setPanX(0)
    setPanY(0)
  }

  // Mouse wheel zoom for desktop
  const handleWheel = (e) => {
    e.preventDefault()
    if (e.deltaY < 0) {
      handleZoomIn()
    } else {
      handleZoomOut()
    }
  }

  // Desktop panning with mouse
  const handleMouseDown = (e) => {
    if (zoom > 1) {
      setIsPanning(true)
      setPanStart({ x: e.clientX - panX, y: e.clientY - panY })
    }
  }

  const handleMouseMove = (e) => {
    if (isPanning && zoom > 1) {
      setPanX(e.clientX - panStart.x)
      setPanY(e.clientY - panStart.y)
    }
  }

  const handleMouseUp = () => {
    setIsPanning(false)
  }

  // Touch events for mobile pinch zoom
  const touchStartDistance = useRef(0)
  const touchStartZoom = useRef(1)

  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      const touch1 = e.touches[0]
      const touch2 = e.touches[1]
      const distance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      )
      touchStartDistance.current = distance
      touchStartZoom.current = zoom
    }
  }

  const handleTouchMove = (e) => {
    if (e.touches.length === 2) {
      e.preventDefault()
      const touch1 = e.touches[0]
      const touch2 = e.touches[1]
      const distance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      )
      const scale = distance / touchStartDistance.current
      const newZoom = Math.max(1, Math.min(touchStartZoom.current * scale, 3))
      setZoom(newZoom)
    }
  }

  useEffect(() => {
    if (selectedCredential) {
      handleResetZoom()
      setSelectedImageIndex(0)
    }
  }, [selectedCredential])

  const nextImageSide = () => {
    if (selectedCredential && selectedImageIndex < selectedCredential.images.length - 1) {
      setSelectedImageIndex((prev) => prev + 1)
      handleResetZoom()
    }
  }

  const prevImageSide = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex((prev) => prev - 1)
      handleResetZoom()
    }
  }

  return (
    <section id="credentials" className="py-22 relative overflow-hidden">
      {/* bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-bold tracking-wider uppercase animate-fade-in animation-delay-100">
            Credentials & Achievements
          </span>
          <h2 className="font-serif italic font-normal text-white text-4xl md:text-5xl mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            My Academic and Professional
            <span className="
            text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground"> Journey</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Official recognition of my educational achievements and professional certifications.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-7xl mx-auto">
          {/* Credential Card */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="glass rounded-2xl overflow-hidden p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className="relative group cursor-pointer" onClick={() => setSelectedCredential(credentials[currentIndex])}>
                  <div className="relative overflow-hidden rounded-xl aspect-square">
                    <img
                      src={credentials[currentIndex].images[0]}
                      alt={credentials[currentIndex].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-40" />
                    
                    {/* Click to expand hint */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center">
                        <div className="bg-primary/80 rounded-full p-3 mb-2">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                          </svg>
                        </div>
                        <p className="text-white text-sm font-semibold">Click to expand</p>
                      </div>
                    </div>

                    {/* Multiple sides indicator */}
                    {credentials[currentIndex].images.length > 1 && (
                      <div className="absolute top-3 right-3 bg-primary/90 text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                        {credentials[currentIndex].images.length} sides
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="inline-block">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full border border-primary/30">
                      {credentials[currentIndex].type}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-white">
                    {credentials[currentIndex].title}
                  </h3>

                  <p className="text-secondary-foreground font-semibold">
                    {credentials[currentIndex].institution}
                  </p>

                  <p className="text-muted-foreground text-sm">
                    {credentials[currentIndex].date}
                  </p>

                  <p className="text-foreground leading-relaxed">
                    {credentials[currentIndex].description}
                  </p>

                  <button
                    onClick={() => setSelectedCredential(credentials[currentIndex])}
                    className="mt-6 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 transition-colors font-semibold"
                  >
                    View Full Size
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 p-2 rounded-full glass hover:bg-primary/20 transition-all hover:text-primary"
              aria-label="Previous credential"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 p-2 rounded-full glass hover:bg-primary/20 transition-all hover:text-primary"
              aria-label="Next credential"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {credentials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "bg-primary w-3 h-3"
                    : "bg-muted hover:bg-muted-foreground w-2 h-2"
                }`}
                aria-label={`Go to credential ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-6 text-muted-foreground text-sm">
            {currentIndex + 1} / {credentials.length}
          </div>
        </div>
      </div>

      {/* Modal/Popup for Full Image */}
      {selectedCredential && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setSelectedCredential(null)}>
          <div 
            className="relative w-auto max-h-[95vh] bg-card rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCredential(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-primary hover:bg-primary/80 transition-colors shadow-lg"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-primary-foreground" />
            </button>

            {/* Zoom Controls - Desktop */}
            <div className="absolute top-4 left-4 z-10 hidden md:flex gap-2 bg-card/80 backdrop-blur-sm p-2 rounded-lg border border-border">
              <button
                onClick={handleZoomIn}
                className="p-2 rounded-lg bg-primary/20 hover:bg-primary/40 text-primary transition-colors"
                aria-label="Zoom in"
                title="Zoom In (scroll wheel)"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={handleZoomOut}
                className="p-2 rounded-lg bg-primary/20 hover:bg-primary/40 text-primary transition-colors"
                aria-label="Zoom out"
                title="Zoom Out (scroll wheel)"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <div className="flex items-center px-3 py-2 text-sm font-semibold text-foreground border-l border-border/50 ml-2">
                {Math.round(zoom * 100)}%
              </div>
              <button
                onClick={handleResetZoom}
                className="p-2 rounded-lg bg-primary/20 hover:bg-primary/40 text-primary transition-colors"
                aria-label="Reset zoom"
                title="Reset"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>

            {/* Multiple Sides Navigation - Top Right */}
            {selectedCredential.images.length > 1 && (
              <div className="absolute top-4 right-16 z-10 flex items-center gap-2 bg-card/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-border">
                <button
                  onClick={prevImageSide}
                  disabled={selectedImageIndex === 0}
                  className="p-1 rounded-lg bg-primary/20 hover:bg-primary/40 text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Previous side"
                  title="Previous side"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-semibold text-foreground min-w-[40px] text-center">
                  Side {selectedImageIndex + 1}/{selectedCredential.images.length}
                </span>
                <button
                  onClick={nextImageSide}
                  disabled={selectedImageIndex === selectedCredential.images.length - 1}
                  className="p-1 rounded-lg bg-primary/20 hover:bg-primary/40 text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next side"
                  title="Next side"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Mobile Zoom Hint */}
            <div className="absolute bottom-4 left-4 z-10 md:hidden text-xs text-muted-foreground bg-card/80 backdrop-blur-sm px-3 py-2 rounded-lg">
              Pinch to zoom • Drag to pan
            </div>

            {/* Image Container - scrollable and zoomable */}
            <div
              ref={containerRef}
              className="relative overflow-auto max-h-[95vh] flex items-center justify-center bg-black/50"
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              style={{ cursor: zoom > 1 ? (isPanning ? 'grabbing' : 'grab') : 'default' }}
            >
              <img
                ref={imageRef}
                src={selectedCredential.images[selectedImageIndex]}
                alt={`${selectedCredential.title} - Side ${selectedImageIndex + 1}`}
                className="h-auto max-h-[95vh] w-auto transition-transform duration-200 select-none"
                style={{
                  transform: `scale(${zoom}) translate(${panX / zoom}px, ${panY / zoom}px)`,
                }}
                draggable={false}
              />
            </div>

            {/* Info Footer */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card via-card/80 to-transparent p-6">
              <h3 className="text-xl font-bold text-white mb-1">
                {selectedCredential.title}
                {selectedCredential.images.length > 1 && (
                  <span className="text-primary text-sm ml-2">
                    • Side {selectedImageIndex + 1}
                  </span>
                )}
              </h3>
              <p className="text-secondary-foreground text-sm">{selectedCredential.institution}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}