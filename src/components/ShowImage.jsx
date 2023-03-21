import React from 'react';
import Image from 'next/image';

const ShowImage = ({ imagesPath }) => {
  return (
    <>
      {imagesPath
        ? imagesPath.map((res, index) => {
            return (
              <Image
                src={res}
                height={500}
                width={500}
                alt={res}
                key={res + index}
                placeholder="blur"
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 33vw"
              />
            );
          })
        : null}
    </>
  );
};

export default ShowImage;
