import React from 'react';
import { Box, Center, Image } from "@chakra-ui/core";

function Banner() {
    return (
        <Box bg="Silver" color="white" py="1rem">
            <Center>
            <Box maxW="600" marginX="auto">
                <Image src="http://rkazur.free.fr/playyyer/icon-playyyer.png" alt="logo playyyer"/>
            </Box>
            </Center>
        </Box>
    )
}

export default Banner
