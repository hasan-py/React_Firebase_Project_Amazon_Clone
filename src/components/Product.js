import React from 'react';
import "./css/Product.css";
import StarIcon from '@material-ui/icons/Star';

const Product = ({id ,title,image,price, rating}) => {
  return (
    <div className="product">
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
	    	<button>Add to cart</button>
    	</div>
    </div>
  )
}

export default Product;