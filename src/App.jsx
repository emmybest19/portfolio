import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Project";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [loading, setIsLoading] = useState(true);
  return (
    <>
      {loading ? (
        <Loader onFinish={() => setIsLoading(false)} />
      ) : (
        <>
          <Header />
          <Hero />
          <Services />
          <Projects />
          <About />
          <Contact />
          <Footer />
          <ScrollToTopButton />
        </>
      )}
    </>
  );
}

export default App;
