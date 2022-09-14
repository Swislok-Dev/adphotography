import React from "react"
import {img1, img2, img3, img4, img5, img6, coolGalaxy, blackHeart} from "../assets/photos/index.js"

function Home() {
  return (
    <div className="home">
      <figure>
        <img src={img1} alt="img1" />
        <img src={img2} alt="img2" />
        <img src={img3} alt="img3" />
        <img src={img3} alt="img3" />
        <img src={img4} alt="img4" />
        <img src={img5} alt="img5" />
        <img src={img6} alt="img6" />
        <img src={coolGalaxy} alt="cool galaxy" />
        <img src={blackHeart} alt="black heart logo" />
      </figure>
    </div>
  )
}

export default Home
