import React,{useContext} from 'react';
import {StateContext} from "../App";
import {getSubtotal} from "./Reducer";

const SubtotalComponent = (props) => {
	const {data} = useContext(StateContext)
  return (
    <div>
		<div className="SubtotalComponent">
	        <h3>Subtotoal</h3>
	        <hr/>
	        <div>
	            Total Items : {data.busket.length}
	            <br/>
	            Subtotal: {getSubtotal(data.busket)}
	        </div>
	        <button className="btn">Checkout</button>
	    </div>
    </div>
  )
}

export default SubtotalComponent;