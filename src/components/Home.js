import React, { useContext } from "react";

import LoginForm from "./LoginForm";


import Web3Info from "./Web3Info";
import { Web3Context } from "../hooks/useWeb3";

import MetamaskLogo from "../images/icon-metamask.png";

const Home = () => {
  const [web3State, login] = useContext(Web3Context);
  return (
    <>
      {web3State.is_logged ? (
        <span className="web3connected">
          Web 3 is connected
        </span>
      ) : (
        <>
          <div>
          <img src={MetamaskLogo} className="logoHome" alt="Logo Metamask"/>
          </div>
          <div className="connectWeb3P">
            <button className="connectWeb3Btn" onClick={login}>
              Please connect Web 3
            </button>
          </div>
          <br />
          <span className="web3disconnected">
            Web 3 is disconnected
          </span>
        </>
      )}
      <LoginForm />
      <Web3Info />
      <div className="temp"></div>
    </>
  );
};

export default Home;
