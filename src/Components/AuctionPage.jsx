import React, { useState } from 'react';
import './AuctionPage.css';

const AuctionPage = () => {
  const [auctionData, setAuctionData] = useState({
    itemName: '',
    startingBid: '',
  });
const createAuction=()=>{
  alert("Auction added")
}
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuctionData({ ...auctionData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Auction Created:', auctionData);
  };

  return (
    <div className="auction-container">


      <form onSubmit={handleSubmit} className="auction-form">
      
        <h2 className="auction-title">Create Auction</h2>

        <div className="form-group">

          <label htmlFor="itemName">Item Name</label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={auctionData.itemName}
            onChange={handleChange}
            required
            placeholder="Enter the item name"
          />
        </div>

        <div className="form-group">

          <label htmlFor="startingBid">Starting Bid ($)</label>
          <input
            type="number"
            id="startingBid"
            name="startingBid"
            value={auctionData.startingBid}
            onChange={handleChange}
            required
            placeholder="Enter the starting bid"
            min="0"
            step="0.01"
          />
        </div>

        <button onClick={createAuction} type="submit" className="auction-btn">Create Auction</button>
      </form>
    </div>
  );
};

export default AuctionPage;
