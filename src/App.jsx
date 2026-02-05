import {Hero} from "@/sections/Hero";
import {About} from "@/sections/About";
import {Experience} from "@/sections/Experience";
import {Projects} from "@/sections/Projects";
import {Credentials} from "@/sections/Credentials";
import {Contact} from "@/sections/Contact";
import {Navbar} from "@/layout/Navbar";
import {Footer} from "@/layout/Footer";


function App() {
 

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar/>
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Credentials />
        <Contact />

      </main> 
      <Footer />
      </div>
  );
}

export default App
