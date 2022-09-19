import React from "react"
import "./App.css"
import Header from "./components/Header.jsx"
const Home = React.lazy(() => import("./pages/Home.jsx"))

function App() {
  return (
    <div className="App">
      <React.Suspense>
        <Header />
        <Home />
      </React.Suspense>
    </div>
  )
}

export default App
