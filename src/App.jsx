import "./App.css";
import Header from "./Component/Header/Navbar";
import Hero from "./Component/Hero/Hero";
import Skill from "./Component/Skill/Skills";
import About from "./Component/About/About";
import Project from "./Component/Project/Project";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
function App() {
  return (
    <>
      <section className="App">
        <Header />
        <Hero />
        <Skill />
        <About />
        <Project />
        <Contact />
        <Footer />
      </section>
    </>
  );
}

export default App;
