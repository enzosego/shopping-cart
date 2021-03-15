import React from "react"
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";

export const Shop = ({addingToCart}) => { return(
    <section className="Shop">
      <section className="tiles">
        <div className="tile">
          <div className="item-image" id="sevenup">
            <div></div>
          </div>
          <section className="item-text">
            <h3>7up</h3>
            <p className="price">$1</p>
          </section>
          <div className="icon-container"
            data-item="sevenup" 
            data-price={1}
            title="Add to Cart" 
            onClick={addingToCart}>
            <Icon icon={faCartPlus} 
              className="add-to-cart-icon"/>
          </div>
        </div>
        <div className="tile">
          <div className="item-image" id="pepsi">
          <div></div>
          </div>
          <section className="item-text">
            <h3>Pepsi</h3>
            <p className="price">$1</p>
          </section>
          <div className="icon-container"
            data-item="pepsi" 
            data-price={1}
            title="Add to Cart" 
            onClick={addingToCart}>
            <Icon icon={faCartPlus} 
              className="add-to-cart-icon"/>
          </div>
        </div>
        <div className="tile">
          <div className="item-image" id="lays">
          <div></div>
          </div>
          <section className="item-text">
            <h3>Lays Classic</h3>
            <p className="price">$2</p>
          </section>
          <div className="icon-container"
            data-item="lays" 
            data-price={2}
            title="Add to Cart" 
            onClick={addingToCart}>
            <Icon icon={faCartPlus} 
              className="add-to-cart-icon"/>
          </div>
        </div>
        <div className="tile">
          <div className="item-image" id="cheetos">
          <div></div>
          </div>
          <section className="item-text">
            <h3>Cheetos - Flaming Hot</h3>
            <p className="price">$3</p>
          </section>
          <div className="icon-container"
            data-item="cheetos" 
            data-price={3}
            title="Add to Cart" 
            onClick={addingToCart}>
            <Icon icon={faCartPlus} 
              className="add-to-cart-icon"/>
          </div>
        </div>
        <div className="tile">
          <div className="item-image" id="coca">
            <div></div>
          </div>
          <section className="item-text">
            <h3>Coca-Cola</h3>
            <p className="price">$2</p>
          </section>
          <div className="icon-container"
            data-item="coca" 
            data-price={2}
            title="Add to Cart" 
            onClick={addingToCart}>
            <Icon icon={faCartPlus} 
              className="add-to-cart-icon"/>
          </div>
        </div>
        <div className="tile">
          <div className="item-image" id="kitkat">
            <div></div>
          </div>
          <section className="item-text">
            <h3>Kit-Kat</h3>
            <p className="price">$5</p>
          </section>
          <div className="icon-container"
            data-item="kitkat" 
            data-price={5}
            title="Add to Cart" 
            onClick={addingToCart}>
            <Icon icon={faCartPlus} 
              className="add-to-cart-icon"/>
          </div>
        </div>
        <div className="tile">
          <div className="item-image" id="redbull">
            <div></div>
          </div>
          <section className="item-text">
            <h3>Red-Bull</h3>
            <p className="price">$2</p>
          </section>
          <div className="icon-container"
            data-item="redbull" 
            data-price={2}
            title="Add to Cart" 
            onClick={addingToCart}>
            <Icon icon={faCartPlus} 
              className="add-to-cart-icon"/>
          </div>
        </div>
        <div className="tile">
          <div className="item-image" id="mnm">
            <div></div>
          </div>
          <section className="item-text">
            <h3>m&m</h3>
            <p className="price">$3</p>
          </section>
          <div className="icon-container"
            data-item="mnm" 
            data-price={3}
            title="Add to Cart" 
            onClick={addingToCart}>
            <Icon icon={faCartPlus} 
              className="add-to-cart-icon"/>
          </div>
        </div>
        <div className="tile">
          <div className="item-image" id="doritos">
            <div></div>
          </div>
          <section className="item-text">
            <h3>Doritos - Nacho Cheese</h3>
            <p className="price">$3</p>
          </section>
          <div className="icon-container"
            data-item="doritos" 
            data-price={3}
            title="Add to Cart" 
            onClick={addingToCart}>
            <Icon icon={faCartPlus} 
              className="add-to-cart-icon"/>
          </div>
        </div>
        <div className="tile">
          <div className="item-image" id="snickers">
            <div></div>
          </div>
          <section className="item-text">
            <h3>Snickers</h3>
            <p className="price">$2</p>
          </section>
          <div className="icon-container"
            data-item="snickers" 
            data-price={2}
            title="Add to Cart" 
            onClick={addingToCart}>
            <Icon icon={faCartPlus} 
              className="add-to-cart-icon"/>
          </div>
        </div>
        <div className="tile">
          <div className="item-image" id="sprite">
            <div></div>
          </div>
          <section className="item-text">
            <h3>Sprite</h3>
            <p className="price">$1</p>
          </section>
          <div className="icon-container"
            data-item="sprite" 
            data-price={1}
            title="Add to Cart" 
            onClick={addingToCart}>
            <Icon icon={faCartPlus} 
              className="add-to-cart-icon"/>
          </div>
        </div>
        <div className="tile">
          <div className="item-image" id="fanta">
            <div></div>
          </div>
          <section className="item-text">
            <h3>Fanta</h3>
            <p className="price">$2</p>
          </section>
          <div className="icon-container"
            data-item="fanta" 
            data-price={2}
            title="Add to Cart" 
            onClick={addingToCart}>
            <Icon icon={faCartPlus} 
              className="add-to-cart-icon"/>
          </div>
        </div>
      </section>
    </section>
    )
}
