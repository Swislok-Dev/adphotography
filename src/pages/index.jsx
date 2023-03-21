import React from 'react';
import Layout from '../components/Layout';
import ScrollingText from '../components/ScrollingText';
import ShowImage from '../components/ShowImage';
import {
  familyImages,
  couplesImages,
  babyImages,
  weddingImages,
} from '../data/images';

const HomePage = () => {
  return (
    <Layout>
      <div id="home">
        <section id="family">
          <figure>
            <ShowImage imagesPath={familyImages} />
          </figure>

        </section>
        <section id="couples">
          <figure>
            <ShowImage imagesPath={couplesImages} />
          </figure>
        </section>
        <section id="wedding">
          <figure>
            <ShowImage imagesPath={weddingImages} />
          </figure>
        </section>
        <section id="baby">
          <figure>
            <ShowImage imagesPath={babyImages} />
          </figure>
        </section>
        <section id="contact">Contact</section>
      </div>
    </Layout>
  );
};

export default HomePage;
