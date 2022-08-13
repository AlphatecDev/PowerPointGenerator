import "./App.css"
import ProviderPowerPoint from "./context/ProviderPowerPoint"
import PowerPoint from "./pages/PowerPoint"
import React from "react"

function App() {
  return (
    <ProviderPowerPoint>
      <PowerPoint />
    </ProviderPowerPoint>
  )
}

export default App
