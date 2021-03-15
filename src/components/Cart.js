import React from "react"
import uniqid from "uniqid";
import { Link } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faMinus} from "@fortawesome/free-solid-svg-icons";

export const Cart = ({cartItems, decrementCount, incrementCount, total}) => {
  const appendingToCart = () => {
    let itemsArray = [];
    for (const item of Object.entries(cartItems)) {
      console.log(item);
      itemsArray.push(
      <div className="cart-item" key={uniqid()}>
        <h3>{item[1].name}</h3>
        <div className="quantity">
          <button onClick={() => decrementCount(item[1].name)}><Icon icon={faMinus}/></button>
          <p>{item[1].quantity}</p>
          <button onClick={() => incrementCount(item[1].name)}><Icon icon={faPlus}/></button>
        </div>
        <h4>TOTAL: ${item[1].price * item[1].quantity}</h4>
        <div className="cart-image" id={item[1].name}>
          <div></div>
        </div>
      </div>)
    }
    return itemsArray;
  }

  const grandTotal = () => 
    total > 0 
      ? <h1 style={{marginTop:"25px", marginBottom:"25px"}}>GRAND TOTAL: ${total}</h1>
      : <h1>Your cart is empty</h1>

  return(
    <section className="Cart">
      <Link to="/shopping-cart/shop">
        <button className="back-to-shop">Keep shopping</button>
      </Link>
      {appendingToCart()}
      {grandTotal()}
    </section>
    )
}
