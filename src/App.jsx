import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Project";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
