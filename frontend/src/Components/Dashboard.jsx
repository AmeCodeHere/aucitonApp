import React, { useState } from 'react';

import './Dashboard.css'; 
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const [auctionItems, setAuctionItems] = useState([
    { id: 1, name: 'Vintage Vase', startingBid: 50.00 },
    { id: 2, name: 'Classic Car', startingBid: 20000.00 },
    { id: 3, name: 'Gold Necklace', startingBid: 500.00 },
  ]);


  const navigate = useNavigate(); 

  const handleCreateBid = () => {
    navigate("/auctionPage"); 
  };


  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Auction Dashboard</h2>

      <div className="auction-list">
        {auctionItems.length === 0 ? (
          <p>No auction items available</p>
        ) : (
          auctionItems.map((item) => (
            <div key={item.id} className="auction-item">
              <p className="item-name">{item.name}</p>
              <p className="item-bid">Starting Bid: ${item.startingBid.toFixed(2)}</p>
            </div>
          ))
        )}
      </div>


      <button className="create-bid-btn" onClick={handleCreateBid}>
        Create New Bid
      </button>
    </div>
  );
};

export default Dashboard;
