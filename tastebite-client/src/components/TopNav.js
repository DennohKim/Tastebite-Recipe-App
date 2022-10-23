import React from 'react'
import logo from './logo.svg'

export default function TopNav() {
  return (
    /*flex container*/
    <div className='flex '>
        <div className='pt-2 pl-'>
            <img src={logo} alt="logo"></img>
        </div>
        <div className='flex-6 '>
            <ul className='flex justify-center m-0 p-12 list-none text-lg font-light cursor-pointer mr-9'>
                <li className='mr-10 hover:text-yellow-300'>Home</li>
                <li className='mr-10 hover:text-yellow-300'>Recipes</li>
                <li className='mr-10 hover:text-yellow-300'>Featues</li>
                <li className='mr-10 hover:text-yellow-300'>Testimonials</li>
                <li className='mr-10 hover:text-yellow-300'>Contact us</li>
            </ul>
        </div>
        <button>Register</button>
        <button>Login</button>
    </div>
  )
}
