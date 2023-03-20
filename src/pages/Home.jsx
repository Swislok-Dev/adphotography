import React from 'react';
import ShowImage from '../components/ShowImage';
import {
  familyImages,
  couplesImages,
  babyImages,
  weddingImages,
} from '../data/images.js';
import '../styles/home.css';
import ScrollingText from '../components/ScrollingText';

function Home() {
  return (
    <div id="home" className="home">
      <figure id="#family">
        <ShowImage imagesPath={familyImages} />
      </figure>

      <ScrollingText id="couples" title="COUPLES" />

      <figure>
        <ShowImage imagesPath={couplesImages} />
      </figure>

      <ScrollingText id="wedding" title="WEDDING" />

      <figure>
        <ShowImage imagesPath={weddingImages} />
      </figure>

      <ScrollingText id="baby" title="BABY" />

      <figure>
        <ShowImage imagesPath={babyImages} />
      </figure>
    </div>
  );
}

export default Home;
