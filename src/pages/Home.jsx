import React from "react"
import "lazysizes"
import * as pics from "../assets/photos/index"

function Home() {
  return (
    <div className="home">
      <figure id="family">
        <img src={pics.img2} alt="img2" className="lazyload" />
        <img src={pics.img3} alt="img3" className="lazyload" />
      </figure>

      <figure id="couples">
        <img data-src={pics.img5} alt="img5" className="lazyload" />
      </figure>

      <figure id="baby">
        <img data-src={pics.img1} alt="img1" className="lazyload" />
        <img data-src={pics.img4} alt="img4" className="lazyload" />
        <img data-src={pics.img6} alt="img6" className="lazyload" />
      </figure>

      <figure id="wedding"></figure>
      <figure id="art-prints">
        <img data-src={pics.bh} alt="bh" className="lazyload" />
      </figure>
    </div>
  )
}

export default Home
