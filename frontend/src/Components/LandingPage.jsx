import React, { useEffect, useState } from 'react'
import './LandingPage.css'
import myItem from '../assets/auctionItem.jpg'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {

    const [bidAmount, setbidAmount] = useState({ amount: "" })
    const [getAuction, setgetAuction] = useState('')
    const [token, settoken] = useState('')
    const navigate=useNavigate()

    const handleChange = (e) => {
        setbidAmount({
            ...bidAmount,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
      const token=localStorage.getItem("token")
      settoken(token)

    }, [])
    
    useEffect(() => {
        const getAuctionItem = async () => {
            try {
                const response = await axios.get("http://localhost:3000/currentAuction")
                if (response) {
                    setgetAuction(response.data.itemName)
                    console.log(response.data.itemName)
                    console.log(" data found")

                } else {
                    console.log("no data found")

                }
            } catch (err) {
                console.error(err)

            }
        }
        getAuctionItem()
    }, [])



    const storeBid = async (e) => {
        // e.preventDefault();
        try {
        
            const response = await axios.post("http://localhost:3000/bid", { ...bidAmount, id: uuidv4() })
            console.log(response)
            setbidAmount({ amount: '' })
            toast.success('Bid Added!!', {
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
        catch (err) {
            console.error(err)
        }
    }
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

            <div className='container-L'>
                <div className='content'>
                    <div className="auction-item">
                        <img src={myItem} width={252} alt="img" />
                        {getAuction? <p>{getAuction}</p>: <p>Loading...</p> }
                        

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
                    <input value={bidAmount.amount} name="amount" onChange={handleChange} placeholder='Enter amount'
                        className="amount"
                        type="number" />

                       
                    <button className='btn1'  onClick={()=>{ token? bidAmount.amount && storeBid ():navigate("/login")}}  type="button">Bid Here</button>



                </div>
            </div>
        </>
    )
}

export default LandingPage
