import './App.css';
import Header from "./Component/Header/Navbar"
import Hero from "./Component/Hero/Hero"
import AboutMe from "./Component/About/About"
function App() {
  return (
    <section className="App">
      <Header/>
      <Hero/>
      <AboutMe/>
    </section>
  );
}

export default App;
