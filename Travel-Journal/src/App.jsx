import React from "react"
import './styles/index.css'
import NavBar from "./components/Navbar"
import Card from "./components/Card"
import Footer from "./components/Footer"
import data from "./data"

function App() {
  const cards = data.map((destination) => {
        return (
        <Card {...destination} />
        )
  })


  return (
    <div>
      <NavBar />
      <div className="cards">
        {cards}
      </div>
      <Footer />
    </div>
  )
}

export default App
