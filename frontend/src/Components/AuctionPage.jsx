import React, { useState } from 'react';
import './AuctionPage.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const AuctionPage = () => {
  const [auctionData, setAuctionData] = useState({
    itemName: '',
    itemAmount: '',
  });

  const createAuction = () => {
    toast.success('Auction Added!', {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  const handleChange = (e) => {
    // const { name, value } = e.target;
    setAuctionData({ ...auctionData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/saveItem",{...auctionData,id:uuidv4()})
      if (response) {
        console.log(response.data)
        setAuctionData({itemName:"",itemAmount:""})
      }
      
      // console.log('Auction Created:', auctionData);/

    } catch (err) {
      console.error(err)

    }
   
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />
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
              name="itemAmount"
              value={auctionData.itemAmount}
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
    </>
  );
};

export default AuctionPage;
