import React from 'react'

function ContactForm() {
  return (
    <div className="bg-secondary-color text-white w-3/5 mx-auto p-5 text-center justify-between">
        <h3 className="text-sm text-center text-bold mt-2">Newsletter</h3>
        <h4 classname="text-center text-bold text-xl">Subscribe To Our Newsletter</h4>
        <h3 className="text-xs mt-20">And Never Miss Updates!</h3>
        <div className='flex my-4 w-3/5 mx-auto'>
        <input type="text" placeholder="Email Address" className="bg-white text-black pl-2 pr-20"></input>
        <button className="bg-primary-color text-black ml-2 px-3">Subscribe</button>
        </div>
       
    </div>
  )
}

export default ContactForm