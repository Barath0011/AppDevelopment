import React from 'react'

import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='background-image'>
         <div className="top-text">
      <Link to="/que">Dashboard</Link>
    </div>
         
        <div className="hero">
            <div class="card text-bg-dark-black border-0">
           
                    <div class="card-img-overlay d-flex flex-column
                    justify-content-center">
                        <div className="container">
                      <h5 class="card-title display-5 fw-bolder mb-0">Noise pollution, unwanted or excessive sound that can have deleterious effects on human health, wildlife, and environmental quality. <br/>Noise pollution is commonly generated inside many industrial facilities and some other workplaces, but it also comes from highway, railway, and airplane traffic and from outdoor construction activities<br/><br/><br/>WE CAN AVOID IT BY:</h5>
                      <p class="card-text lead fs-2">
                      Ride electric vehicles<br/>Replace old vehicles<br/>Turn off electrical appliances<br/>Create a “no horn zone”
                      </p>
                        </div>
                    </div>
            </div>
            
        </div>
        
        </div>
    );
};
export default Home;