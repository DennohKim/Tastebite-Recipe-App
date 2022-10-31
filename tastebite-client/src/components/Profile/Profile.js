import React from 'react'

const Profile = () => {
  return (
    <div className='form-container'>
        <form className='profile-change'>
            <label>
                Username
            </label>
            <input 
            className='form-field'
            placeholder='Username'
            name ='username'/>

            <label>
                Email
            </label>

            <input 
            className='form field'
            placeholder='Email'
            name ="email"/>

            <label>
                Profile Picture
            </label>

            <input 
            className='picture'
            type="file"
            name ="file"/>
            <button>Browse Files</button>
            

            <button
            className='form-field'
            type ="submit">Save  Changes</button>
        </form>


    </div>
  )
}

export default Profile



