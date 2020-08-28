import React,{useContext} from 'react';
import "./css/CheckoutProduct.css";
import {StateContext} from "../App";
import StarIcon from '@material-ui/icons/Star';

const CheckoutProduct = ({id,title,image,price,rating}) => {
    const {dispatch} = useContext(StateContext)

  return (   
    <div className="checkout_product">
    	<img src={image} alt={title} />
    	<div className="product_info">
    		<h3>{title}</h3>
    		<div>${price}</div>
    		<div>
                {
                    Array(Number(rating))
                    .fill()
                    .map((_)=>(
                        <StarIcon className="starIcon" />
                    ))
                }
            </div>
            <button onClick={e=> dispatch({type:"remove_to_cart",payload:id})} className="btn">Remove</button>
    	</div>
    </div>
  )
}

export default CheckoutProduct;