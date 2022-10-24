import React from 'react'
import { FoodPlate } from '../../assets/images'


export default function Banner() {
  return (
    <div className='bg-primary-color pt-8 mt-10 grid grid-cols-1 md:grid-cols-2 w-4/5 mx-auto items-center px-8 rounded-lg' >
        <div className='flex flex-col gap-2'>
            <hi className = 'text-5xl font-bold'>Cook, Save and Share </hi>
            <p className =  'text-2xl pt-4'>Taste Bite is a unique recipe sharing and discovery platform, 
                where users can Save their favorite recipes in the app, create 
                new ones and share them with friends.
            </p>
            <button className = 'inline-block text-lg bg-secondary-color p-5 mt-6 rounded-full w-64 '>Get Started</button>
        </div>
            
        <div className='scale-125'>
         <img src={FoodPlate} alt=''></img>
        </div>
    </div>
  )
}
