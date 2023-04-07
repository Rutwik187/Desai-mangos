import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import AboutUs from "./pages/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ratnagari from "./pages/products/Ratnagari";
import Devgad from "./pages/products/Devgad";
import Pawas from "./pages/products/Pawas";
import ScrollToTop from "./scrollToTop";

import Gallery from "./components/Gallery";
import AmrutPairi from "./pages/products/AmrutPairi";
import Modak from "./pages/products/Modak";
import GanpatiMurti from "./pages/products/GanpatiMurti";
import Faral from "./pages/products/Faral";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Routes>
        <Route path="/ratnagari" element={<Ratnagari />} />
        <Route path="/devgad" element={<Devgad />} />
        <Route path="/pawas" element={<Pawas />} />
        <Route path="/amrut-pairi" element={<AmrutPairi />} />
        <Route path="/faral" element={<Faral />} />
        <Route path="/ganesh-murti" element={<GanpatiMurti />} />
        <Route path="/modak" element={<Modak />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
