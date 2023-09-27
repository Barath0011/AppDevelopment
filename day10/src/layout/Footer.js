import React from 'react';
import { Link } from 'react-router-dom';
// Import your custom social media icons'
import './Footer.css';
import facebookIcon from '../Asset/facebook.png';
import twitterIcon from '../Asset/twiiter.png';
import instagramIcon from '../Asset/instagram.png';


const Footer = () => {
  return (
    <footer>
      <div className="footer-pvt">
        <Link to="/policy"><p>&copy; {new Date().getFullYear()} NoiseTracking Pvt.</p></Link>
      </div>
      
      <div className="footer-text">
        <Link to="/policy">Policy</Link>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        {/* Add more social media links/icons as needed */}
      </div>
    </footer>
  );
};
export default Footer;