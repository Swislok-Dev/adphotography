import React from "react"
import "./App.css"
import Header from "./components/Header.jsx"
import Home from "./pages/Home.jsx"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Home />
      </React.Suspense>
    </div>
  )
}

export default App
