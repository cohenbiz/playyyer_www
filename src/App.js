import React from "react";
import { Playyyer_address, Playyyer_abi } from "./contracts/Playyyer";
import { useContract } from "./hooks/useContract";
import Dapp from "./Dapp";

//export const PlayyyerContext = React.createContext(null);

function App() {
  return (
  //<PlayyyerContext.Provider value={Playyyer}>
    <Dapp />
  //</PlayyyerContext.Provider>
  );
}

export default App;
