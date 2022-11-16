import "./style.css";
import Header from "./components/Header";
import Services from "./components/Services";
import Process from "./components/Process";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Process />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
