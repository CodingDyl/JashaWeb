import { BrowserRouter } from "react-router-dom"
import HomePage from "./components/HomePage"
import { MantineProvider } from "@mantine/core"
import '@mantine/core/styles.css';
import About from "./components/About";
import { Footer } from "./components/Footer/Footer";
import { Contact } from "./components/Contact";
import Offer from "./components/Offer";
import { Notifications } from '@mantine/notifications';

function App() {

  return (
    <MantineProvider>
      <Notifications 
        position="top-right"
        zIndex={9999}
        containerWidth={400}
        autoClose={4000}
        style={{ 
          position: 'fixed',
          top: '20px',
          right: '20px'
        }}
        className="notification-container"
      />
      <BrowserRouter>
        <div className="min-h-screen bg-primary text-white">
          <HomePage />
          <Contact />
          <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
