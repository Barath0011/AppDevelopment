import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import earPlugImage from '../../Asset/e.jpg'
import meeToImage from '../../Asset/e2.jpg';
import cordedEarplugsImage from '../../Asset/e3.jpg';
import earPlug1270Image from '../../Asset/e4.jpg';
import '../votehere/votehere.css';

const partiesData = [
  { id: 1, name: 'earplug', image: earPlugImage },
  { id: 2, name: 'meeto earplug', image: meeToImage },
  { id: 3, name: 'corded earrplug', image: cordedEarplugsImage },
  { id: 4, name: 'connected earplug', image: earPlug1270Image },
];

function VoteHere() {
  // Initialize vote counts from local storage or set to zero if not available
  const initialVotes = JSON.parse(localStorage.getItem('numbers')) || {};
  const [votes, setVotes] = useState(initialVotes);

  // Function to update the vote counts in both state and local storage
  const updateVotes = (newVotes) => {
    setVotes(newVotes);
    localStorage.setItem('numbers', JSON.stringify(newVotes));
  };

  const handleVote = (partyId) => {
    // Increment the vote count for the party in the state and local storage
    const newVotes = {
      ...votes,
      [partyId]: (votes[partyId] || 0) + 1,
    };
    updateVotes(newVotes);
  };

  const handleReset = () => {
    // Reset the vote counts in the state and local storage
    const resetVotes = {};
    updateVotes(resetVotes);
  };

  return (
    <div className="vote-container">
      <div className="toptext">
        <Link to="/NavBar"><p>Dashboard</p></Link>
      </div>
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
          Total items: {Object.values(votes).reduce((total, count) => total + count, 0)}
        </p>
        <button onClick={handleReset} className="reset-button">
          Reset items
        </button>
      </div>
    </div>
  );
}

export default VoteHere;