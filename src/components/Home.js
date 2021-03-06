import React from 'react';
import "./css/Home.css";
import Product from "./Product";

const Home = (props) => {
  return (
    <div className="home">
    	<img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Banner" />
    	<div className="home_row">
    		<Product 
                key="1" 
                id="1" 
    			title="AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler"
    			price="289.99"
    			rating="4"
    			image="https://images-na.ssl-images-amazon.com/images/I/717Di3DGIbL._AC_SL1092_.jpg"
    		/>
    		<Product 
                key="2" 
                id="2" 
    			title="AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler"
    			price="289.99"
    			rating="4"
    			image="https://images-na.ssl-images-amazon.com/images/I/717Di3DGIbL._AC_SL1092_.jpg"
    		/>
    	</div>
        <div className="home_row">
            <Product 
                key="3" 
                id="3" 
                title="AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler"
                price="289.99"
                rating="4"
                image="https://images-na.ssl-images-amazon.com/images/I/717Di3DGIbL._AC_SL1092_.jpg"
            />
            <Product 
                key="4" 
                id="4" 
                title="AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler"
                price="289.99"
                rating="4"
                image="https://images-na.ssl-images-amazon.com/images/I/717Di3DGIbL._AC_SL1092_.jpg"
            />
             <Product 
                key="5" 
                id="5" 
                title="AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler"
                price="289.99"
                rating="4"
                image="https://images-na.ssl-images-amazon.com/images/I/717Di3DGIbL._AC_SL1092_.jpg"
            />
        </div>
        <div className="home_row">
            <Product 
                key="6" 
                id="6" 
                title="AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler"
                price="289.99"
                rating="4"
                image="https://images-na.ssl-images-amazon.com/images/I/717Di3DGIbL._AC_SL1092_.jpg"
            />
        </div>

    </div>
  )
}

export default Home;