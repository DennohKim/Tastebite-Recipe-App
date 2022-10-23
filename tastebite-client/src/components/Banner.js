import React from 'react'

export default function Banner() {
  return (
    <div className='bg-yellow-300 h-96 pt-8 mt-10'>
        <hi class = 'text-7xl pl-8 pt-14'>Cook, Save and Share </hi>
        <p class = 'pl-8 pt-11 text-2xl'>Taste Bite is a unique recipe sharing and discovery platform, 
            <br></br>where users can Save their favorite recipes in the app, create 
            <br></br>new ones and share them with friends.
        </p>
        <button class= 'inline-block text-lg bg-red-400 border-none p-5 m-5'>Get Started</button>
    </div>
  )
}
