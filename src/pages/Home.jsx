import React from "react"
import ShowImage from "../components/ShowImage"
import {
  familyImages,
  couplesImages,
  babyImages,
  weddingImages,
  artPrintImages,
} from "../data/images.js"

function Home() {

  return (
    <div className="home">
      <figure id="family">
        <ShowImage imagesPath={familyImages} />
      </figure>

      <figure id="couples">
        <ShowImage imagesPath={couplesImages} />
      </figure>

      <figure id="baby">
        <ShowImage imagesPath={babyImages} />
      </figure>

      <figure id="wedding">
        <ShowImage imagesPath={weddingImages} />
      </figure>
      <figure id="art-prints">
        <ShowImage imagesPath={artPrintImages} />
      </figure>
    </div>
  )
}

export default Home
