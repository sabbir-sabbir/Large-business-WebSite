import React from 'react'
import ClubHero from './ClubHero'
import ClubResturants from './ClubResturants'
import Clubcarousel from './Clubcarousel'
import MapCpm from './MapCpm'

const Club = () => {
  return (
    <section>
      <ClubHero/>
      <ClubResturants/>
      <Clubcarousel/>
      <ClubResturants/>
      <MapCpm/>
    </section>
  )
}

export default Club