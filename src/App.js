import React, {useState, useEffect} from "react"
import "./App.scss";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { Shop } from "./components/Shop";
import { Cart } from "./components/Cart";
import { About } from "./components/About";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";

export const App = () => {
  const [cartItems, setCartItems] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let newTotal = 0;
    for (const item of Object.entries(cartItems)) {
      newTotal += (item[1].quantity * item[1].price);
    }
    setTotal(newTotal);
  }, [cartItems]);

  const addingToCart = e => {
    const itemName = e.target.dataset.item;
    if (itemName in cartItems) return;
    const newCart = {...cartItems};
    newCart[itemName] = {
      name: itemName,
      quantity: 1,
      price: e.target.dataset.price
    }
    setCartItems(newCart);
  }


  const decrementCount = target => {
    const newCart = {...cartItems};
    if (newCart[target].quantity <= 1) return;
    newCart[target].quantity -= 1;
    setCartItems(newCart);
  }

  const incrementCount = target => {
    const newCart = {...cartItems};
    newCart[target].quantity += 1;
    setCartItems(newCart);
  }
  
  return(
    <BrowserRouter>
      <section className="App">
        <header>
          <nav>
            <Link to="/shopping-cart">
              <h1> <Icon icon={faStore}/>Sn'ackies</h1>
            </Link>
            <Link to="/shopping-cart/cart">
              <div className="cart-logo">
                <h3>Cart</h3>
                <Icon icon={faShoppingCart} style={{fontSize:"2rem"}}/>
                {total >= 0 && <div className="items-count">{Object.keys(cartItems).length}</div>}
              </div>
            </Link>
          </nav>
        </header>
          <Switch>
            <Route exact path="/shopping-cart/" component={Homepage} />
            <Route exact path="/shopping-cart/shop">
              <Shop addingToCart={addingToCart} />
            </Route>
            <Route exact path="/shopping-cart/cart">
              <Cart 
                cartItems={cartItems}
                decrementCount={decrementCount}
                incrementCount={incrementCount}
                total={total}/>
            </Route>
            <Route exact path="/shopping-cart/about" component={About} />
          </Switch>
      </section>
    </BrowserRouter>
    )
}
