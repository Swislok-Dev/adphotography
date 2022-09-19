import React from "react"
import {LazyLoadImage} from "react-lazy-load-image-component"


const ShowImage = ({imagesPath}) => {
  const [babypics, setBabypics] = React.useState([])

  const importAll = (req) => {
    return req.keys().map(req)
  }


  React.useEffect(() => {
    const babyphotos = importAll(
      require.context("../assets/photos/baby", false, /\.(png|JPE?G|jpe?g)$/)
    )
    return setBabypics(babyphotos)
  }, [])

  return <>
    {babypics.map((item, index) => <LazyLoadImage key={item[index]} src={item} alt="babypic" />)}
  </>
}

export default ShowImage
