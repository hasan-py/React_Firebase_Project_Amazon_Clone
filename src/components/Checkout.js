import React,{useContext} from 'react';
import CheckoutProduct from "./CheckoutProduct"
import {StateContext} from "../App";
import SubtotalComponent from "./SubtotalComponent";
import "./css/CheckoutProduct.css"

const Checkout = (props) => {
	let {data} = useContext(StateContext)
	let {busket} = data
  return (
    <div className="checkoutComponent">
        <div className="items">        
        	{
        		busket && !busket.length>0 
        		? (
        			<h1>Your cart is empty</h1>
        		)
        		: busket.map((i)=>{
        			return (
        				<CheckoutProduct
        					id={i.id}
        					title={i.title}
        					price={i.price}
        					image={i.image}
        					rating={i.rating}
        				/>
        			)
        		})
        	}
        </div>
        <div className="subtotal"> 
            <SubtotalComponent/>
        </div>
    </div>
  )
}

export default Checkout;