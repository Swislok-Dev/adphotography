import React from "react"
import ShowImage from "../components/ShowImage"
import images from "../data/images.json"

function Home() {
  return (
    <div className="home">
      <figure id="family">
        <ShowImage imagesPath={images.family} />
      </figure>

      <figure id="couples">
        <ShowImage imagesPath={images.couples} />
      </figure>

      <figure id="baby">
        <ShowImage imagesPath={images.baby} />
      </figure>

      <figure id="wedding">
        <ShowImage imagesPath={images.wedding} />
      </figure>
      <figure id="art-prints">
        <ShowImage imagesPath={images.artPrints} />
      </figure>
    </div>
  )
}

export default Home
