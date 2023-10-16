import React, { useState } from 'react';
import axios from 'axios';

import earPlugImage from '../../Asset/e.jpg';
import meeToImage from '../../Asset/e2.jpg';
import cordedEarplugsImage from '../../Asset/e3.jpg';
import earPlug1270Image from '../../Asset/e4.jpg';
import { Link } from 'react-router-dom';
import './votehere.css';

const partiesData = [
  { id: 1, name: 'earplug', image: earPlugImage },
  { id: 2, name: 'meeto earplug', image: meeToImage },
  { id: 3, name: 'corded earrplug', image: cordedEarplugsImage },
  { id: 4, name: 'connected earplug', image: earPlug1270Image },
];

function VoteHere() {
  const [votes, setVotes] = useState({});
  const [totalItems, setTotalItems] = useState(0);

  const handleVote = (partyId) => {
    const newVotes = {
      ...votes,
      [partyId]: (votes[partyId] || 0) + 1,
    };
    setVotes(newVotes);

    // Update the total items count as well
    const newTotalItems = totalItems + 1;
    setTotalItems(newTotalItems);
  };

  const handleReset = () => {
    const resetVotes = {};
    setVotes(resetVotes);
    setTotalItems(0);
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:8080/auth/post', { voteCount:totalItems });
      alert("Total items count sent to the backend");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="vote-container">
    <Link to='/que'><div className="continue-btn">BACK</div></Link>
      <h1>Select the item to buy</h1>
      <div className="party-list">
        {partiesData.map(party => (
          <div className="party" key={party.id}>
            <img src={party.image} alt={`${party.name} Logo`} />
            <h2>{party.name}</h2>
            <p>count: {votes[party.id] || 0}</p>
            <button onClick={() => handleVote(party.id)}>Add to cart</button>
          </div>
        ))}
      </div>

      <div className="results-container">
        <h2>Your Cart:</h2>
        <ul className="results-list">
          {partiesData.map(party => (
            <li key={party.id}>
              {party.name}: {votes[party.id] || 0} count
            </li>
          ))}
        </ul>
        <p className="results-total">
          Total items: {totalItems}
        </p>
        <button onClick={handleSubmit} className="submit-button">
          Submit
        </button>
        <button onClick={handleReset} className="reset-button">
          Reset items
        </button>
      </div><br/><br/>
      <div className="top-text">
        <Link to="/que">Dashboard</Link>
      </div>  
    </div>
  );
}

export default VoteHere;