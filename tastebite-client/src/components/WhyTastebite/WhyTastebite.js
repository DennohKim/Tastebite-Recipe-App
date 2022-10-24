import React from 'react'
import { WhyTastebiteImg1 } from '../../assets/images'
import { WhyTastebiteImg2 } from '../../assets/images'
import { WhyTastebiteImg3 } from '../../assets/images'

function WhyTastebite() {
  return (
    <div>
      <p className='text-center font-bold text-4xl'>Why tastebite</p>
      <div className='m-16 grid grid-cols-2 gap-4 grid-rows-3 gap-y-12 ' >
        <div>
          <p className='font-bold text-lg mt-[12%] lg:text-xl'>Discover new recipes and save your favorites.</p>
          <p className='text-base lg:text-lg'>Taste Bite let's you pin your favorite recipes from around the web into an easy to use Web app.</p>
        </div>
        <img src={ WhyTastebiteImg1 } alt="whytastebiteimg1" className='bg-primary-color w-64 rounded' />
        <img src={ WhyTastebiteImg2 } alt="whytastebiteimg2" className='bg-secondary-color w-64 rounded' />
        <div>
          <p className='font-bold text-lg mt-[12%] lg:text-xl'>Create your own recipe book!</p>
          <p className='lg:text-lg'>
            Taste Bite helps you to prepare delicious meals. There are also categories of healthy cuisine,
            vegetarian recipes or desserts on our platform.
          </p>
        </div>
        <div>
          <p className='font-bold text-lg mt-[12%] lg:text-xl'>Share Your Recipes with the World</p>
          <p className='lg:text-lg'>
            Discover new recipes with the help of other users and social networks, and 
            share them with friends.
          </p>
        </div>
        <img src={ WhyTastebiteImg3 } alt="whytastebiteimg3" className='bg-primary-color w-64 rounded' />
      </div>
    </div>
  )
}

export default WhyTastebite