import React from "react"
import { Link } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

export const Homepage = () => {
  return(
    <section className="Homepage">
      <section className="home-main">
        <h1>YOUR</h1>
        <h1>place to shop some goodie'</h1>
        <Link to="/shop">
          <h3>Let's get going <Icon className="arrow" icon={faArrowRight}/></h3>
        </Link>
      </section>
      <footer>
        <Link to="/about"><h4>About us <Icon className="arrow" icon={faArrowRight}/></h4></Link>
      </footer>
    </section>
    )
}
