import React from 'react'
import WhyTastebite from '../components/WhyTastebite/WhyTastebite'
import Banner from '../components/Banner'
import TopNav from '../components/TopNav'


const LandingPage = () => {
  return (
    <div>
        <section className="h-screen w-full">
            {/* Your section goes here */}
            <TopNav />
            <Banner />
        </section>
        <section className="h-screen">Popular recipes
            {/* Your section goes here */}
            
        </section>
        <section>
            <WhyTastebite />
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