import React from "react"
import {LazyLoadImage} from "react-lazy-load-image-component"
import {
  img2,
  img3,
  img5,
} from "../assets/photos/index.js"
// import {babyPhotos} from '../assets/photos/index.js'

function Home() {

  const [babypics, setBabypics] = React.useState([])

  const importAll = (r) => {
    return r.keys().map(r);
  }

  React.useEffect(() => {
    const babyphotos = importAll(
      require.context('../assets/photos/baby', false, /\.(png|JPG|jpe?g)$/)
    )
    return setBabypics(babyphotos)
  }, [])

  
  console.log("babypics:",babypics)
  return (
    <div className="home">
      <figure id="family">
        <LazyLoadImage id="img2" src={img2} alt="img2" />
        <LazyLoadImage id="img3" src={img3} alt="img3" />
      </figure>
      <figure id="couples">
        <LazyLoadImage id="img5" src={img5} alt="img5" />
      </figure>
      <figure id="baby">
        {babypics.map((item, index) => <LazyLoadImage key={item[index]} src={item} alt="babypic" />)}
      </figure>
    </div>
  )
}

export default Home
