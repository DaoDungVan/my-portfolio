import { useReveal } from "./hooks/useReveal.js";
import { useTheme } from "./hooks/useTheme.js";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  useReveal();
  const [, toggleTheme] = useTheme();
  return (
    <div className="vp">
      <Nav onToggle={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
