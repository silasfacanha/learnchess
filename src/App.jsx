import "./App.css";
import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import { Learn } from "./components/Learn.jsx";
import { Alumni } from "./components/Alumni.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Learn id="learn" />
      <Alumni />
      <Footer />
    </div>
  );
}

export default App;
