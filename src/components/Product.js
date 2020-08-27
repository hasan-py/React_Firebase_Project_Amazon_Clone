import React,{useContext} from 'react';
import "./css/Product.css";
import StarIcon from '@material-ui/icons/Star';
import {StateContext} from "../App";

const Product = ({id ,title,image,price, rating}) => {

    const {dispatch} = useContext(StateContext)

    const addToCart = ()=> {
        dispatch({
            type:"add_to_cart",
            payload:{
                id,title,image,price,rating
            }
        })
    }

  return (
    <div className="product" key={id}>
    	<div className="porduct_info">
    		<p>{title}</p>
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
    	</div>
    	<div className="product_display">
	    	<img src={image} alt="" />
	    	<button onClick={e=> addToCart()} >Add to cart</button>
    	</div>
    </div>
  )
}

export default Product;