import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import Categories from './Categories';
import TestimonialsSection from '../components/TestimonialsSection';
import UserBenefitsSection from '../components/UserBenefitsSection';
import Counter from '../components/Counter';
import HowItWorksSection from '../components/HowItWorksSection';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | BillPay</title>
        <meta name="description" content="Welcome to BillPay – the easiest way to manage and pay your bills online." />
      </Helmet>

      <Slider />
      <Hero />
      <HowItWorksSection />
      <Categories />
      <UserBenefitsSection />
      <TestimonialsSection />
      <Counter />
    </div>
  );
};

export default Home;
