import React from "react";
import ConnexMetamask from "./components/ConnexMetamask";
import Events from "./components/Events";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import { ChakraProvider, extendTheme } from "@chakra-ui/core";

const theme = extendTheme({
  styles:{
    global:{
      body:{
        bg: "gray.400",
      },
    },
  },
})



function App() {
  return (
    <ChakraProvider>
          <Banner />
          <ConnexMetamask />
          <Events />
          <Footer />
    </ChakraProvider>
  )
}

export default App;