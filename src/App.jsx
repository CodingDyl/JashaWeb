import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MantineProvider } from "@mantine/core"
import '@mantine/core/styles.css';
import { Notifications } from '@mantine/notifications';
import { HelmetProvider } from 'react-helmet-async';
import NotFoundImage from "./components/ErrorPage/Error";
import Home from "./page/Home";
import Jasha from "./page/Jasha";
import Knitwire from "./page/Knitwire";
import BiodynamicFuel from "./page/BiodynamicFuel";

function App() {

  return (
    <HelmetProvider>
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
          <div className="min-h-screen flex flex-col bg-primary text-white">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/company/jasha" element={<Jasha />} />
              <Route path="/company/knitwire" element={<Knitwire />} />
              <Route path="/company/biodynamic-fuel" element={<BiodynamicFuel />} />
              <Route path="*" element={<NotFoundImage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </MantineProvider>
    </HelmetProvider>
  )
}

export default App
