import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/userSlice";
import SignedInLink from './SignedInLink'
import SignedOutLink from './SignedOutLink'
import './NavBar.css';
const NavBar=()=>{
    const user = useSelector(selectUser);
  
  const username =
    user.user && user.user.username ? user.user.username : "Guest";
    return(
        <nav className="navnav">
            <div className="containers">
           
                <Link to='loginbtn' className="brand-logo">NOISE POLLUTION TRACKER</Link>
                
                <SignedInLink/>
                <SignedOutLink/>
                <div id="user">TELL ME ABOUT YOUR QUERIES , <br/><div id='a'>{username}</div></div>
               
            </div>
        </nav>
        
    )
}
export default NavBar;