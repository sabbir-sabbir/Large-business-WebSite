import React from 'react'
import DrinkHero from './DrinkHero'
import FindPlace from './FindPlace'
import Resturant from './Resturant'
import DrinkCarousel from './DrinkCarousel'
import ResturantNearby from './ResturantNearby'
import Map from './Map'

const EatDrink = () => {
  return (
    <>
    <DrinkHero/>
    <FindPlace/>
    <Resturant/>
    <DrinkCarousel/>
    <ResturantNearby/>
    <Map/>
    </>
  )
}

export default EatDrink