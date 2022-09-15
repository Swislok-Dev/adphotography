import React from "react"
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  coolGalaxy,
  blackHeart,
} from "../assets/photos/index.js"

function Home() {
  return (
    <div className="home">
      <figure id="family">
        <img id="img1" src={img1} alt="img1" />
        <img id="img2" src={img2} alt="img2" />
        <img id="img3" src={img3} alt="img3" />
      </figure>
      <figure id="couples">
        <img id="img4" src={img3} alt="img3" />
        <img id="img5" src={img4} alt="img4" />
        <img id="img6" src={img5} alt="img5" />
      </figure>
      <figure id="baby">
        <img id="img7" src={img6} alt="img6" />
        <img id="img8" src={coolGalaxy} alt="cool galaxy" />
        <img id="img9" src={blackHeart} alt="black heart logo" />
      </figure>
    </div>
  )
}

export default Home
