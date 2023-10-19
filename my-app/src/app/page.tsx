'use client'
import LogoSection from './common components/partner';
import ImageSwap from './common components/imageSwap';
import Whyus from './components/whyus';
import FeatureProperty from './common components/featureproperty';
import BlogPost from './common components/blogpost';
import React from 'react';
import HomeHeader from './components/homeHeader';
import Videoplay from './common components/videoplay';
import PropertySwap from './components/propertySwap';
import Getlisted from './common components/getListed';
import { Reviews } from './common components/reviews';


function Home() {

  
  return (
    <div>
      <HomeHeader/>
        <LogoSection />
        <ImageSwap />
        <Whyus />
        <PropertySwap/>
        <Videoplay/>
        <FeatureProperty type='mainpage'/>
        <Reviews />
        <BlogPost />
        <Getlisted/>
    </div>
  );
};

export default Home

