import React from "react";
import WhyTastebite from "../components/WhyTastebite/WhyTastebite";
import Banner from "../components/HeroSection/Banner";
import TopNav from "../components/HeroSection/TopNav";
import Slider from "../components/Testimonials/Slider";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/Footer/ContactForm";
import TabComponent from "../components/Recipes/TabComponent";

const LandingPage = () => {
  return (
    <div>
      <TopNav />
      <section className="w-full">
        {/* Your section goes here */}

        <Banner />
      </section>
      <section className="mb-20">
        
        <TabComponent />
       
      </section>

      <section>
        <WhyTastebite />
      </section>
      <section >
        <Slider />
      </section>
      <section >
      <ContactForm />
        <Footer />
        {/* Your section goes here */}
      </section>
    </div>
  );
};

export default LandingPage;
