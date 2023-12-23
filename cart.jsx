import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './cart.css'


const Cart = ({cart,setCart}) => {
  return (
        <>
        <div className="cartcontainer">
          {cart.length === 0 && 
          <div className='emptycart'>
          <h2 className='empty'>Cart is Empty</h2>
          <Link to='/product' className='emptycartbtn'>shop Now</Link>
          </div>
          }
          <div className="contant">
            {
              cart.map((curElm)=>
              {
                    return(
                      <div className="cart-item" key={curElm.id}>
                         <div className="img-box">
                          <img src={curElm.Img}alt={curElm.Title}></img>
                          </div> 
                          <div className="detail">
                            <h4>{curElm.cat}</h4>
                            <h3>{curElm.Title}</h3>
                            <p>{curElm.price}</p>
                            <button><AiOutlineClose /></button>
                          </div>

                      </div>

                    )
              })
            }
            
          </div>
        </div>
    
    
        </>
  )
}

export default Cart