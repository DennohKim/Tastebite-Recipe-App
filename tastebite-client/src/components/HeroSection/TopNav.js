import React from 'react'
import { Logo } from '../../assets/images'


export default function TopNav() {
  return (
    /*flex container*/
    <div className='flex w-11/12 mx-auto items-center justify-between'>
        <div className='pt-2 pl-'>
            <img src={Logo} alt="logo"/>
        </div>
        <div className='flex-6 hidden md:flex'>
            <ul className='flex justify-center gap-8 p-12 list-none font-base cursor-pointer mr-9'>
                <li className=' hover:text-secondary-color'>Home</li>
                <li className=' hover:text-secondary-color'>Recipes</li>
                <li className=' hover:text-secondary-color'>Features</li>
                <li className=' hover:text-secondary-color'>Testimonials</li>
                <li className=' hover:text-secondary-color'>Contact us</li>
            </ul>
        </div>
        <div className='flex gap-3 '>
        <button className='hover:text-secondary-color text-lg font-base underline' >Register</button>
        <button className='font-light bg-red-400 text-white text-xl px-6 py-2 rounded-full'>Login</button>
        </div>
    </div>
  )
}
