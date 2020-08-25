import React from 'react';
import "./css/Header.css";
import {Link} from "react-router-dom";

import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


const Header = (props) => {
  return (
    <nav className="header">
    	{/* Logo */}
	    <Link to="/">
	    	<img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
	    </Link>
		{/* Navber Search */}
	    <div className="header_search">
	    	<input className="header_search_input" type="text" name="search" id="search" />
	    	<SearchIcon className="header_search_icon" />
	    </div>	
		{/* Navber Link */}
		<div className="header_nav">
			<Link to="/signin" className="header_link">
				<div className="header_option">
					<span className="header_span_first">Hello,</span>
					<span className="header_span_second">Signin</span>
				</div>	
			</Link>
			<Link to="/signup" className="header_link">
				<div className="header_option">
					<span className="header_span_first">Returns</span>
					<span className="header_span_second">& Orders</span>
				</div>	
			</Link>
			<Link to="/checkout" className="header_link">
				<div className="header_option">
					<span className="header_span_first">Your</span>
					<span className="header_span_second">Prime</span>
				</div>	
			</Link>
			<Link to="/checkout" className="header_link">
				<div className="header_shopping_busket">
					<ShoppingCartOutlinedIcon />
					<span>0</span>
				</div>	
			</Link>
		</div>
    </nav>
  )
}

export default Header;