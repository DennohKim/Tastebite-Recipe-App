import React from 'react'


import Tabtest from '../components/Recipes/TabComponent'

import WhyTastebite from '../components/WhyTastebite/WhyTastebite'
import Banner from '../components/HeroSection/Banner'
import TopNav from '../components/HeroSection/TopNav'
import Slider from '../components/Testimonials/Slider'



const LandingPage = () => {
  return (
    <div>
        <section className="h-screen w-full">
            {/* Your section goes here */}
            <TopNav />
            <Banner />
        </section>
        <section className="">
            {/* <TabComponent /> */}
            <Tabtest/>
            {/* <Recipes /> */}
        </section>

        <section>
            <WhyTastebite />
        </section>
        <section className="" >
            <Slider/>
        </section>
        <section className="h-screen">ContactForm & Footer
            {/* Your section goes here */}
        </section>
    </div>
  )
}

export default LandingPage