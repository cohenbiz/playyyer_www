import React, { useContext, useState } from "react";
import { Web3Context } from "./hooks/useWeb3";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Events from "./components/Events";
import EventPage1 from "./components/EventsPages/Event1";

import IsLoggedInContextProvider from "./context/IsLoggedInContext";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./css/styles.css";

function Dapp() {
  const [web3State, login] = useContext(Web3Context);

  const [getValue, setGetValue] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  return (
    <>
      <Router>
        <IsLoggedInContextProvider>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/events" exact component={Events} />
            <Route path="/eventspages/event1" exact component={EventPage1} />

          </Switch>
          <Footer />
        </IsLoggedInContextProvider>
      </Router>
    </>
  );
}

export default Dapp;
