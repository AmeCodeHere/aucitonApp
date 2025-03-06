import React, { useEffect, useState } from 'react';

import './Dashboard.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {

  const [auctionItems, setAuctionItems] = useState([
    { id: '', itemName: '', itemAmount: '' }
  ]);

  useEffect(() => {
    const fetchItems = async () => {

      try {

        const response = await axios.get("http://localhost:3000/getItems")

        setAuctionItems(response.data)
        console.log("Item Data fetched successfully!!")

      } catch (error) {

        console.error("Error fetching data", err)

      }

    }
    fetchItems()
  }, [])


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
              <p className="item-name">{item.itemName}</p>
              <p className="item-bid">Starting Bid: ${item.itemAmount}</p>
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
