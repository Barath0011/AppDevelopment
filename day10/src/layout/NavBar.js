import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/userSlice";
import SignedInLink from './SignedInLink'


import './NavBar.css';
import Solution from './Solution';
import Footer from './Footer';
const NavBar=()=>{
    const user = useSelector(selectUser);
  
  const username =
    user.user && user.user.username ? user.user.username : "Guest";
    

  return (
    <div className='backg'>
   
    <nav >
      <ul>
      <div className="brand-logos">NOISE POLLUTION TRACKER Application</div>
                <div className='absolute-right'>
                <SignedInLink/>
                
                </div>
      </ul>
    </nav>
                <div id="user">WELCOME, <br/><div id='a'>{username}</div></div>
                

                <div className='k'>
                </div>
                <Solution/>
                <div className='hell'><Footer/></div>
                </div>
                
      
  );
}




export default NavBar;