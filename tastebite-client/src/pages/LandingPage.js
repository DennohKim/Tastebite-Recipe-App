import React from 'react'
// import Recipes from '../components/Recipes/Recipes'
// import TabComponent from '../components/Recipes/Tabs'
import Tabtest from '../components/Recipes/TabComponent'


const LandingPage = () => {
  return (
    <div>
        <section className="h-screen">Hero Section
            {/* Your section goes here */}
        </section>
        <section className="">
            {/* <TabComponent /> */}
            <Tabtest/>
            {/* <Recipes /> */}
        </section>
        <section className="h-screen">Why tastebite
            {/* Your section goes here */}
           
        </section>
        <section className="h-screen">Testimonials
            {/* Your section goes here */}
        </section>
        <section className="h-screen">ContactForm & Footer
            {/* Your section goes here */}
        </section>
    </div>
  )
}

export default LandingPage