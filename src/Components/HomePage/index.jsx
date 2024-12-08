import React from 'react'
import Hero from './Hero';
import ImgSection from './ImgSection';
import ThingsToDo from './ThingsToDo';
import Chiilsbay from './Chiilsbay';
import Carousel from './Carousel'
import Galary  from './Galary';




const HomePage = () => {
  return (
        <>
          <Hero/>
          <ImgSection/>
          <ThingsToDo/>
          <Chiilsbay/>
          <Carousel/>
          <Galary/>
        </>
  )
}

export default HomePage