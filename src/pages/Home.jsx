import React from 'react';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import Categories from './Categories';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Categories></Categories>
    </div>
  );
};

export default Home;