import { BrowserRouter } from "react-router-dom"
import HomePage from "./components/HomePage"
import { MantineProvider } from "@mantine/core"
import '@mantine/core/styles.css';
import About from "./components/About";
import { Footer } from "./components/Footer/Footer";
import { Contact } from "./components/Contact";
import Offer from "./components/Offer";

function App() {

  return (
    <MantineProvider>
    <BrowserRouter>
    <div className="z-0 bg-primary text-white">
      <HomePage />
      <About />
      <Offer />
      <Contact />
      <Footer />
    </div>
    </BrowserRouter>
    </MantineProvider>
  )
}

export default App
