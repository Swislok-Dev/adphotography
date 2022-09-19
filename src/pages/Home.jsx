import React from "react"
// import {LazyLoadImage} from "react-lazy-load-image-component"
// import { img2, img3, img5 } from "../assets/photos/index.js"
// import ShowImage from "../components/ShowImage"
const ShowImage = React.lazy(() => import("../components/ShowImage.jsx"))
// import {babyPhotos} from '../assets/photos/index.js'

function Home() {
  // const [babypics, setBabypics] = React.useState([])

  // const importAll = (r) => {
  //   return r.keys().map(r)
  // }

  // React.useEffect(() => {
  //   const babyphotos = importAll(
  //     require.context("../assets/photos/baby", false, /\.(png|JPG|jpe?g)$/)
  //   )
  //   return setBabypics(babyphotos)
  // }, [])

  // console.log("babypics/:", babypics)
  return (
    <div className="home">
      <figure id="family">
        <ShowImage imagesPath="../assets/photos/family" />
      </figure>
      <figure id="couples">
        <ShowImage imagesPath="../assets/photos/couples" />
      </figure>
      <figure id="baby">
        <div className="page-break"></div>
        <ShowImage imagesPath="../assets/photos/baby" />
        {/* {babypics.map((item, index) => <img key={item[index]} src={item} alt="babypic" />)} */}
      </figure>
      <figure id="wedding">
        <ShowImage imagesPath="../assets/photos/wedding" />
      </figure>
    </div>
  )
}

export default Home
