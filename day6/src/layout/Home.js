import React from 'react';
import './Home.css'; // Import your CSS file

// Import your product images
import earPlugImage from '../Asset/e.jpg';
import meeToImage from '../Asset/e2.jpg';
import cordedEarplugsImage from '../Asset/e3.jpg';
import earPlug1270Image from '../Asset/e4.jpg';
import earWaxCleanerImage from '../Asset/e5.jpg';
import flareCalmerImage from '../Asset/e6.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='b'>
     
        <div className="head">OUR PRODUCTS</div>
        <div className="top-text">
      <Link to="/que">Dashboard</Link>
    </div>  
      <div className="grid-container">
        <div className="item1">
          <img src={earPlugImage} alt="Ear Plug" />
          <div className='r'>EAR PLUG</div>
        </div>
        <div className="item2">
          <img src={meeToImage} alt="MeeTo Soft Silicone Noise Reduction Ear" />
          <div className='r'>MeeTo Soft Silicone Noise Reduction Ear</div>
        </div>
        <div className="item3">
          <img src={cordedEarplugsImage} alt="Noise Reduction Corded Earplugs Pack" />
          <div className='r'>Noise Reduction Corded Earplugs Pack</div>
        </div>
        <div className="item4">
          <img src={earPlug1270Image} alt="3M 1270 Ear Plug Corded" />
          <div className='r'>3M 1270 Ear Plug Corded</div>
        </div>
        <div className="item5">
          <img src={earWaxCleanerImage} alt="Ear Wax Cleaner" />
          <div className='r'>Ear Wax Cleaner</div>
        </div>
        <div className="item6">
          <img src={flareCalmerImage} alt="Flare Calmer Night – Sleeping Ear Plugs" />
          <div className='r'>Flare Calmer Night – Sleeping Ear Plugs</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
