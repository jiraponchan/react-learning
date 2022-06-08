import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./sections/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Myfucn1 from "./sections/Myfucn1";
import ShowSec from "./components/ShowSec";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/myfucn1" element={<Myfucn1 />} />
        <Route path="/showSec" element={<ShowSec />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
