import React from "react"
import "./App.css"
import Header from "./components/Header.jsx"
import Home from "./pages/Home.jsx"
// const Home = React.lazy(() => import("./pages/Home.jsx"))

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Home />
      </React.Suspense>
    </div>
  )
}

export default App
