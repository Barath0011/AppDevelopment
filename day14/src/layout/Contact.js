import React from 'react';
import '../layout/Contact.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Contact() {
  return (
    <div className='aboutusimage'>
    <div className="custom-aboutus-container">
    <div className="top-text">
        <Link to="/que">Dashboard</Link>
      </div>  
      <h1>About Us</h1>
      <div className="p1">
      <p>
      At NoiseTrack, we're on a mission to make the world a quieter and healthier place. We understand the adverse effects of noise pollution on our well-being and the environment. Our team of dedicated engineers and environmental enthusiasts is committed to providing innovative solutions for tracking and mitigating noise pollution.
      </p>
      </div>
      <div className="p2">
      <h3>Our Mission :</h3>
      <p>
      At NoiseTrack, our mission is to revolutionize the way we understand and combat noise pollution. We are committed to providing individuals, communities, and organizations with the tools and knowledge they need to address this pervasive and often overlooked environmental issue.</p>
      </div>
      <div className="p3">
      <h3>Our Values :</h3>
      <p>
      Creating a noise pollution tracking app is a valuable initiative to address the growing concerns related to noise pollution in urban areas. To build an effective and impactful app, it's essential to define clear values and principles that guide its development and usage.       </p>
      </div>
      <div className="p4">
      <h3>Contact Us :</h3>
      <p>
      I apologize for any confusion, but I'm unable to directly contact individuals or organizations on your behalf. If you're looking to report or address a noise pollution issue or seek assistance related to noise pollution, here are some general steps you can take:
      </p>
      <p>
      Local Authorities: If you are experiencing noise pollution in your area, you can contact your local municipal or city government. They often have departments or agencies responsible for handling noise complaints and enforcing noise regulations. You can typically find contact information for your local government on their official website.</p>
      <p> Noisepollution@gmail.com or +91 xxxxxxxxxx.</p>
      </div>
    </div>
    <div className='hell'><Footer/></div>
    </div>
  );
}

export default Contact;