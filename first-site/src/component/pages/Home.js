import React from "react";
import {HStack, Box, Heading, Text, Image, VStack} from "@chakra-ui/react";

function Home() {
    return (
        <VStack bg={"#546c20"}>
            <HStack>
                <Box pr={"24px"}>
                    <Image style={{maxWidth: "300px", maxHeight: "200px", objectFit: "cover",width: "100%", height: "100%" }} src="./images/manosparisis_logo.jpg"></Image>
                </Box>
                <Box pl={"24px"}>
                    <Heading as="h2">Προσωποποιημένο Πρόγραμμα Διατροφής</Heading>
                    <Text as="p">Στοχευμένη απώλεια βάρους έως και 10 κιλά το μήνα!</Text>
                </Box>
            </HStack>
        </VStack>
    )
}

export default Home;