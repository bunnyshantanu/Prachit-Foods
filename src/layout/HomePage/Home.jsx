import React from 'react'
import Slider from '../../Component/Slider'
import AboutHome from '../../Component/AboutHome'
import HomeVeriant from '../../Component/HomeVeriant'
import Step from '../../Component/Step'
import ColdStorage from '../../Component/ColdStorage'
import TempSlider from '../../Component/TempSlider'

export default function Home() {
  return (<>
    <Slider/>
    <Step/>
    <ColdStorage/>
    <HomeVeriant/>
    <AboutHome/>
  </>
  )
}
