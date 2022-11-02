import React from "react";
import { WhyTastebiteImg1 } from "../../assets/images";
import { WhyTastebiteImg2 } from "../../assets/images";
import { WhyTastebiteImg3 } from "../../assets/images";

function WhyTastebite() {
  return (
    <div className="w-full">
      <h2 className="text-center font-bold text-4xl">Why tastebite</h2>
      <div className="grid grid-cols-1 gap-10 grid-rows-3 w-4/5 mx-auto justify-center items-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center">
          <div className="xl:pr-48 lg:pr-30 self-center">
            <p className="font-bold text-lg lg:text-xl">
              Discover new recipes and save your favorites.
            </p>
            <p className="text-base lg:text-lg pt-2">
              Taste Bite let's you pin your favorite recipes from around the web
              into an easy to use Web app.
            </p>
          </div>
          <div>
            <img
              src={WhyTastebiteImg1}
              alt="whytastebiteimg1"
              className="bg-primary-color w-64 rounded"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center">
          <div>
            <img
              src={WhyTastebiteImg2}
              alt="whytastebiteimg2"
              className="bg-secondary-color w-64 rounded "
            />
          </div>
          <div className="xl:pl-48 lg:pr-30 self-center">
            <p className="font-bold text-lg lg:text-xl">
              Create your own recipe book!
            </p>
            <p className="lg:text-lg pt-2">
              Taste Bite helps you to prepare delicious meals. There are also
              categories of healthy cuisine, vegetarian recipes or desserts on
              our platform.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center ">
          <div className="xl:pr-48 lg:pr-30 self-center ">
            <p className="font-bold text-lg lg:text-xl">
              Share Your Recipes with the World
            </p>
            <p className="lg:text-lg pt-2">
              Discover new recipes with the help of other users and social
              networks, and share them with friends.
            </p>
          </div>
          <div >
            <img
              src={WhyTastebiteImg3}
              alt="whytastebiteimg3"
              className="bg-primary-color w-64 rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyTastebite;
