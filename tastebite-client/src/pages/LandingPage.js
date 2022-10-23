import React from 'react'
import TopNav from '../components/TopNav'

const LandingPage = () => {
  return (
    <div>
        <section className="h-screen">
            {/* Your section goes here */}
            <TopNav />
        </section>
        <section className="h-screen">Popular recipes
            {/* Your section goes here */}
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