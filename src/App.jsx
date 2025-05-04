import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import { MantineProvider } from "@mantine/core"
import '@mantine/core/styles.css';
import { Footer } from "./components/Footer/Footer";
import { Contact } from "./components/Contact";
import { Notifications } from '@mantine/notifications';
import { HelmetProvider } from 'react-helmet-async';
import NotFoundImage from "./components/ErrorPage/Error";

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
          <div className="min-h-screen bg-primary text-white">
            <Routes>
              <Route path="/" element={
                <>
                  <HomePage />
                  <Contact />
                  <Footer />
                </>
              } />
              <Route path="*" element={<NotFoundImage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </MantineProvider>
    </HelmetProvider>
  )
}

export default App
