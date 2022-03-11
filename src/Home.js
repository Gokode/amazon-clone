import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
         className="home_image"
         src="https://m.media-amazon.com/images/I/61aUfpZteZL._SX3000_.jpg" 
         alt="" />
         
         <div className="home_row">
             <Product id= "23445930" title="The Lean Startup" price={141} image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" rating= {5} />
             <Product id= "33254354345" title="iQOO Z3 5G (Ace Black, 6GB RAM, 128GB Storage) |
              India's First SD 768G 5G Processor | 55W FlashCharge" price={17990} 
              image="https://m.media-amazon.com/images/I/61uIgwiP90S._SL1200_.jpg" rating= {4}/>
             <Product id= "190829332" title="NIVEA Men Body Wash, Active Clean with Active Charcoal,
              Shower Gel for Body, Face & Hair, 250 ml" price={139} 
              image="https://m.media-amazon.com/images/I/51OgdQwPCjL._SL1100_.jpg" rating= {3}/>
         </div>

         <div className="home_row">
             <Product id= "768878" title="Nintendo Switch OLED model With White set" 
             price={37899} image="https://m.media-amazon.com/images/I/31Zm5UaF-sL.jpg" rating= {3}/>
             <Product id= "23313" title="Freakway Ceramic Classic Bowl - Pack of 6, Blue" 
             price={1500} 
             image="https://m.media-amazon.com/images/I/71b+XmgBQrS._SL1500_.jpg" rating= {3}/>
         </div>

         <div className="home_row">
            <Product id= "675675" title="Sony Bravia 215 cm (85 Inches) 4K Ultra HD Smart LED
             Google TV KD-85X85J (Black) (2021 Model) | with Alexa Compatibility" 
             price={427490} image="https://m.media-amazon.com/images/I/81mxentP+bS._SL1500_.jpg" rating= {5}/>
         </div>

      </div>
     
    </div>
  )
}

export default Home;