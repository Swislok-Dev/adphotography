import React from 'react';
// import Contact from '../components/Contact';
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
        <section>
          <ScrollingText id="couples" title="COUPLES" />
          <figure>
            <ShowImage imagesPath={couplesImages} />
          </figure>
        </section>
        <section>
          <ScrollingText id="wedding" title="WEDDING" />
          <figure>
            <ShowImage imagesPath={weddingImages} />
          </figure>
        </section>
        <section>
          <ScrollingText id="baby" title="BABY" />
          <figure>
            <ShowImage imagesPath={babyImages} />
          </figure>
        </section>

        {/* <Contact /> */}
      </div>
    </Layout>
  );
};

export default HomePage;
