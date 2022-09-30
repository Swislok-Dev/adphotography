import React from "react"
import "lazysizes"

const ShowImage = ({ imagesPath }) => {
  return (
    <>
      {imagesPath
        ? imagesPath.map((res) => {
            return (
              <img
                src="../assets/images/Placeholder_view_vector.svg"
                className="lazyload"
                data-src={res.url}
                alt={res.id}
                key={res.id}
                data-sizes="auto"
              />
            )
          })
        : null}
    </>
  )
}

export default ShowImage
