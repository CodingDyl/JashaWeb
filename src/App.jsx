import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HelmetProvider } from 'react-helmet-async';
import NotFoundImage from "./components/ErrorPage/Error";
import Home from "./page/Home";
import Jasha from "./page/Jasha";
import Knitwire from "./page/Knitwire";
import BiodynamicFuel from "./page/BiodynamicFuel";
import ContactPage from "./page/ContactPage";
import AboutPage from "./page/AboutPage";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-primary-900 text-white font-sans">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/company/jasha" element={<Jasha />} />
            <Route path="/company/knitwire" element={<Knitwire />} />
            <Route path="/company/biodynamic-fuel" element={<BiodynamicFuel />} />
            <Route path="*" element={<NotFoundImage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
