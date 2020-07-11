import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
import Slider from '../components/Slider/Slider';

const images = [
  '/assets/2074623565.jpg',
  '/assets/2074795447.jpg',
  '/assets/poppit-sands.jpg',
  '/assets/front-view.png',

];
const Home = () => (


  <div>
    <Layout>
      <Slider slides={images} autoPlay={4} />
     
      <h2>House Details</h2>
      <p>
        Awelon beach house is a situated in an
        idyllic beach front location on the edge of the Pembrokeshire National Park
      </p>

      <ul>


        <li>
          <i>home</i>
          <span>Sleeps six</span>
        </li>
        <li>
          <i>car</i>
          <span>Parking</span>
        </li>
        <li>
          <i>cat</i>
          <span>Pets allowed</span>
        </li>
        <li>
          <i>sailboat</i>
          <span>Beach front location</span>
        </li>


      </ul>

      <p>
        {' '}
        With the blue flag award winning sandy beach Poppit Sands just seconds from the front door, it is an ideal holiday location for all ages.
        Despite its beauty, Poppit never gets crowded even at the height of summer.
      </p>
      <p>
        It sleeps up to six in comfort, having been sympathetically modernised to offer all modern amenities. Situated in a sheltered spot, protected by the headland you can enjoy the stunning setting and waking up to the sound of waves.
      </p>

    </Layout>


  </div>
);

export default Home;
