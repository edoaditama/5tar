import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="grow">
      <Navbar />
      <Hero />
      <About />
      <Footer/>
      </main>
  </div>
  );
}

export default App;
