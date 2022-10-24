import React from 'react'
import WhyTastebite from '../components/WhyTastebite/WhyTastebite'

const LandingPage = () => {
  return (
    <div>
        <section className="h-screen">Hero Section
            {/* Your section goes here */}
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