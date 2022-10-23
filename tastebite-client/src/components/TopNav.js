import React from 'react'
import logo from './logo.svg'

export default function TopNav() {
  return (
    /*flex container*/
    <div className='flex items-centre justify-between'>
        <div className='pt-2'>
            <img src={logo} alt="logo"></img>
        </div>
        <div className=''>
            <ul className=''>
                <li className=''>Home</li>
                <li className=''>Recipes</li>
                <li className=''>Featues</li>
                <li className=''>Testimonials</li>
                <li className=''>Contact us</li>
            </ul>
        </div>
    </div>
  )
}
