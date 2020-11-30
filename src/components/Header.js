import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { IsLoggedInContext } from "../context/IsLoggedInContext";

import PlayyyerIcon from "../images/icon-playyyer.png";

const Header = () => {
  const { isLoggedIn } = useContext(IsLoggedInContext);
  console.log("isLoggedIn", isLoggedIn);

  return (
    <>
      <header>
        <div>
        <Link to="/"><img className="logoHeader" src={PlayyyerIcon} alt="Playyyer logo"></img></Link>
        </div>
        <nav>
          <Link to="/events">Events</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
