import React from 'react'
import './header.css'
import { FaBeer } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import HeaderOptions from './HeaderOptions';
import { FaHome } from 'react-icons/fa';
import { FaSubway } from 'react-icons/fa';
import { FaPoll } from 'react-icons/fa';
import { FaAddressBook } from 'react-icons/fa';
import { FaAmilia } from 'react-icons/fa';
import { FaSchool } from 'react-icons/fa';



function Header() {
  return (
    <div className='header'> 

       <div className='header_left'>
            <img className='header_logo' src='https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_linkedin-512.png
            ' alt />
            {/* <h3> Lets go for a <FaBeer />? </h3>
            <h3>  <FaBeer /> </h3> */}
            <div className='header_search'>
              <FaSearch /> 
                <input type='text'/>
        </div>
       </div>

       <div className='header_right'>
        <HeaderOptions title= 'Home' Icon={FaHome}/>
        <HeaderOptions title='My Network' Icon={FaSubway}/>
        <HeaderOptions title= 'Chat' Icon={FaSchool}/>
        <HeaderOptions title='Profile' Icon={FaAmilia}/>
        <HeaderOptions title= 'Home' Icon={FaAddressBook}/>
        <HeaderOptions title='Notifications' Icon={FaPoll}/>
        <HeaderOptions title= '' avatar='https://th.bing.com/th/id/R.226a4310e3391b5bda7cf9dcdcc1e9fc?rik=fsyXNseACKRhqQ&pid=ImgRaw&r=0'/>
        
       </div>
    </div>
  )
}

export default Header