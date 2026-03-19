import { Helmet } from "react-helmet-async";
import PageTransition from "../components/PageTransition";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Emmanuel Ebri | Full-Stack Developer</title>
        <meta
          name="description"
          content="Emmanuel Ebri — Full-stack developer building scalable web applications with React, Node.js, and MongoDB."
        />
        <meta property="og:title" content="Emmanuel Ebri | Full-Stack Developer" />
        <meta
          property="og:description"
          content="Full-stack developer building scalable web applications with React, Node.js, and MongoDB."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Hero />
    </PageTransition>
  );
};

export default HomePage;
