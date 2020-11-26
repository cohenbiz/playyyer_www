import React, { useEffect, useReducer } from "react";
import {
  Text,
  Center,
  VStack,
  Button,
  HStack,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/core";
// https://docs.ethers.io/v5/
import { ethers } from "ethers";
import {
  accountConnected2MetaMask,
  sendEtherTransaction,
} from "../utils/eth-utils";

//reducer to update web3 state : check if web3 injected, if connected to MetaMask, get account connected, balance...
const web3Reducer = (state, action) => {
  switch (action.type) {
    case "SET_isWeb3":
      return { ...state, isWeb3: action.isWeb3 };
    case "SET_isEnabled":
      return { ...state, isEnabled: action.isEnabled };
    case "SET_account":
      return { ...state, account: action.account };
    case "SET_provider":
      return { ...state, provider: action.provider };
    case "SET_network":
      return { ...state, network: action.network };
    case "SET_signer":
      return { ...state, signer: action.signer };
    case "SET_balance":
      return { ...state, balance: action.balance };
    default:
      throw new Error(`Unhandled action ${action.type} in web3Reducer`);
  }
};

const initialWeb3State = {
  isWeb3: false,
  isEnabled: false,
  account: ethers.constants.AddressZero,
  provider: null,
  signer: null,
  network: null,
  balance: "0",
};

//reducer to update specific dapp state: user chooses to connect to MetaMask, amount to buy
const dappReducer = (state, action) => {
  switch (action.type) {
    case "SET_isConnecting":
      return { ...state, isConnecting: action.isConnecting };
    case "SET_buyValue":
      return { ...state, buyValue: action.buyValue };
    default:
      throw new Error(`Unhandled action ${action.type} in dappReducer`);
  }
};

//ICO address receiving ethers and selling tokens with values shown in ethers
const initialDappState = {
  buyValue: "0",
  isConnecting: false,
  myAddr: "0x987D87a9bfD550b9A38cBc9249dCAA64307C8E7B", //Remy account 2
};



function ConnexMetamask() {
  const [web3State, web3Dispatch] = useReducer(web3Reducer, initialWeb3State);
  const [dappState, dappDispatch] = useReducer(dappReducer, initialDappState);

  //event handler when clicking to connect to MetaMask
  const handleConnectButtonClick = () => {
    if (!web3State.isEnabled)
      dappDispatch({ type: "SET_isConnecting", isConnecting: true });
  };

  //event handler to change value to buy
  const handleChangeValue = (currentBuyValue) => {
    dappDispatch({
      type: "SET_buyValue",
      buyValue: currentBuyValue,
    });
  };

  //event handler to send value for buying tokens
  const handleBuyButtonClick = async () =>
    await sendEtherTransaction(web3State.signer, web3State.provider, {
      to: dappState.myAddr,
      value: ethers.utils.parseEther(dappState.buyValue),
    });

  // Check if Web3 is injected only on mount
  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      web3Dispatch({ type: "SET_isWeb3", isWeb3: true });
    } else {
      web3Dispatch({ type: "SET_isWeb3", isWeb3: false });
    }
  }, []);

  // Check if already connected to MetaMask on mount and when isWeb3 from web3State changes value
  useEffect(() => {
    const checkIfConnected = async () => {
      const account = await accountConnected2MetaMask();
      // if connected set account to connected address, if not: ""
      if (account) {
        web3Dispatch({ type: "SET_isEnabled", isEnabled: true });
        web3Dispatch({ type: "SET_account", account: account });
      } else {
        web3Dispatch({ type: "SET_isEnabled", isEnabled: false });
      }
    };
    //set isEnabled/account only if web3 is injected (isWeb3 === true)
    if (web3State.isWeb3) {
      checkIfConnected();
    }
  }, [web3State.isWeb3]);

  return (
    <>
    <Center>
        <VStack>
          <Box p="6" borderWidth="1px" borderRadius="lg">
            <VStack>
            <HStack>
              <Text fontSize="xl">Evènement 1</Text>
              <NumberInput
              value={dappState.buyValue}
              defaultValue={initialDappState.buyValue}
              step={1}
              min={0}
              max={web3State.balance}
              onChange={handleChangeValue}
              >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>

                  <Button colorScheme="blue" onClick={handleBuyButtonClick}>
                    Achetez un token / place pour {dappState.buyValue} ETH
                  </Button>
                </HStack>
                <HStack>
              <Text fontSize="xl">Evènement 2</Text>
              <NumberInput
              value={dappState.buyValue}
              defaultValue={initialDappState.buyValue}
              step={1}
              min={0}
              max={web3State.balance}
              onChange={handleChangeValue}
              >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>

                  <Button colorScheme="blue" onClick={handleBuyButtonClick}>
                    Achetez un token / place pour {dappState.buyValue} ETH
                  </Button>
                </HStack>
                <HStack>
              <Text fontSize="xl">Evènement 3</Text>
              <NumberInput
              value={dappState.buyValue}
              defaultValue={initialDappState.buyValue}
              step={1}
              min={0}
              max={web3State.balance}
              onChange={handleChangeValue}
              >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>

                  <Button colorScheme="blue" onClick={handleBuyButtonClick}>
                    Achetez un token / place pour {dappState.buyValue} ETH
                  </Button>
                </HStack>
            </VStack>
          </Box>
          </VStack>
          </Center>
    </>
  );
}

export default ConnexMetamask;