import React from 'react';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import Categories from './Categories';
import TestimonialsSection from '../components/TestimonialsSection';
import UserBenefitsSection from '../components/UserBenefitsSection';
import Counter from '../components/Counter';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Hero></Hero>
      <Categories></Categories>
      <UserBenefitsSection></UserBenefitsSection>
      <TestimonialsSection></TestimonialsSection>
      <Counter></Counter>
    </div>
  );
};

export default Home;