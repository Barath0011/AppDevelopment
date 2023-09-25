import React from 'react';
import '../layout/Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
      <h2>
            <Link to='/NavBar'><div className="continue">Back</div></Link></h2>
        <div className="footer-section">
       
          <h3>Address</h3>
          <p>Main Street<br />City, State<br />Postal Code</p>
        </div>
        <div className="footer-section">
          <h3>Social Media</h3>
          <div className="social-icons">
            <a href="o">
              <FacebookIcon />
            </a>
            <a href="o">
              <TwitterIcon />
            </a>
            <a href="o">
              <InstagramIcon />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: example@gmail.com<br />Phone: +91 xxxxxxxxxx</p>
        </div>
      </div>
      <div className="footer-section">
      <div>
        <h3 className='bb'>About us</h3>
        <p className='bb'>Welcome to the Noise Pollution Tracker App, your trusted companion in monitoring and managing noise pollution in your environment. Our mission is to empower individuals, communities, and organizations to take control of their acoustic surroundings and promote healthier, more peaceful living spaces.We are a team of passionate individuals who believe that everyone deserves to live in a peaceful and noise-free environment. Our diverse team includes engineers, environmentalists, data scientists, and community advocates, all working together to combat the issue of noise pollution.</p>
      </div>
      </div>
    </footer>
  );
}

export default Footer;