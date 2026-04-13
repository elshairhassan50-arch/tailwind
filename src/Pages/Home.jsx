import React from 'react'
import AiTypes from '../Components/AiTypes'
import AiBenefits from '../Components/AiBenfits'
import Contacts from '../Components/Contacts'
import Footer from '../Components/Footer'
import HeroSections from '../Components/HeroSections'
import Navbar from '../Components/Navbar'

function Home() {
  return <>
    <Navbar/>
    <main id="home">
      <HeroSections/>
      <AiTypes/>
      <AiBenefits/>
      <Contacts/>
    </main>
    <Footer/>
   </>
}

export default Home
