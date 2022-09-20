import React from "react"
const ShowImage = React.lazy(() => import("../components/ShowImage.jsx"))

function Home() {

  return (
    <div className="home">
      <figure id="family">
        <ShowImage imagesPath="../assets/photos/family" />
      </figure>
      <figure id="couples">
        <ShowImage imagesPath="../assets/photos/couples" />
      </figure>
      <figure id="baby">
        <ShowImage imagesPath="../assets/photos/baby" />
      </figure>
      <figure id="wedding">
        <ShowImage imagesPath="../assets/photos/wedding" />
      </figure>
    </div>
  )
}

export default Home
