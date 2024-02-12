import "./App.css";
import Header from "./Component/Header/Navbar";
import Hero from "./Component/Hero/Hero";
import Skill from "./Component/Skill/Skills";
import About from "./Component/About/About";
import Project from "./Component/Project/Project";
function App() {
  return (
    <>
      <section className="App">
        <Header />
        <Hero />
        <Skill />
        <About />
        <Project />
      </section>
    </>
  );
}

export default App;
