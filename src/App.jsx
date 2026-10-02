import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Services from "./sections/Services";
import Experience from "./sections/Experience";
import Certificates from "./sections/Certificates";
import Resume from "./sections/Resume";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Experience />
        <Certificates />
        <Resume />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
