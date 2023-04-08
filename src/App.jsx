import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import Learn from "./components/Learn";
import Alumni from "./components/Alumni";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Learn />
      <Alumni />
    </div>
  );
}

export default App;
