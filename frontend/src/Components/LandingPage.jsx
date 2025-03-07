import React from 'react'
import './LandingPage.css'
import myItem from '../assets/auctionItem.jpg'

const LandingPage = () => {

    return (
        <div className='container-L'>
            <div className='content'>
                <div className="auction-item">
                    <img src={myItem} width={252} alt="img" />
                    <p>Item Name</p>

                </div>
                <div className="auction-chat">
                    <div className="h-bider">
                        <div className='h-content'>
                            <p>Top-G :</p>
                            <p>$500</p>
                        </div>

                    </div>
                    <div className="msg">
                        <div className="msg-content">
                            <div className="b-1">
                                <div className='under'>
                                    <p className='p-1'>
                                        A
                                    </p>
                                    <p>User 1 : $400</p>
                                </div>
                                <div className='under'>
                                    <p className='p-1'>
                                        A
                                    </p>
                                    <p>User 2 : $200</p>
                                </div>
                                <div className='under'>
                                    <p className='p-1'>
                                        A
                                    </p>
                                    <p>User 3 : $100</p>
                                </div>
                                <div className='under'>
                                    <p className='p-1'>
                                        A
                                    </p>
                                    <p>User 4 : $350</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bid-a">
                <input value="" onChange="" placeholder='Enter amount'
                    className="amount"
                    type="number" name="amount" />
                <button className='btn1' type="button">Bid Here</button>



            </div>
        </div>
    )
}

export default LandingPage
