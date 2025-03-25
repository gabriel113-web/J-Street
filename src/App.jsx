import Hero from "./components/Hero";
import Navbar from "./components/Nav";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import RunningText from "./components/RunningText";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <Projects />
      <About />
      <RunningText />

      <Footer />
    </>
  );
}

export default App;
