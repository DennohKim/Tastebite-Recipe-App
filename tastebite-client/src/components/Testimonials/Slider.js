import React, { useState, useEffect } from "react";
import "./Slider.css";
import {people} from "../../data/data";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Slider = () => {
  // const [people] = useState(people);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2 className="text-center font-bold text-lg md:text-2xl lg:text-4xl text-black">What our customer say about us</h2>
      </div>
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const { id, image, name, title, quote } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
            </article>
          );
        })}
        <button className="prev rounded-full" onClick={() => setIndex(index - 1)}>
          <BsArrowLeft/>
        </button>
        <button className="next rounded-full h-32 w-32" onClick={() => setIndex(index + 1)}>
          <BsArrowRight/>
        </button>
      </div>
    </section>
  );
};

export default Slider;
