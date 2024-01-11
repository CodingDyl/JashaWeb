import { BrowserRouter } from "react-router-dom"
import HomePage from "./components/HomePage"
import { MantineProvider } from "@mantine/core"
import '@mantine/core/styles.css';

function App() {

  return (
    <MantineProvider>
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
    </MantineProvider>
  )
}

export default App
