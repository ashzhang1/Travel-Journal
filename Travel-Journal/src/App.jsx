import React from "react"
import './styles/index.css'
import NavBar from "./components/Navbar"
import Card from "./components/Card"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <NavBar />
      <div className="cards">
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  )
}

export default App
