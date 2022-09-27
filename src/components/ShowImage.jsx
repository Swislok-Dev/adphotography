import React from "react"
import "lazysizes"

const ShowImage = ({ imagesPath }) => {
  return (
    <>
      {imagesPath
        ? imagesPath.map((res) => {
            return (
              <img
                className="lazyload"
                data-src={res.url}
                alt={res.id}
                key={res.id}
              />
            )
          })
        : null}
    </>
  )
}

export default ShowImage
