import React from "react";
import {HStack, Box, Heading, Text, Image, VStack} from "@chakra-ui/react";
import "./main.css";

function Home() {
    return (
        <Box>
            <VStack bg={"#97cb50"}>
                <HStack maxW={"1300"} width={"100%"}>
                    <Box textAlign={"center"} className={"ptb"} w={"100%"} pr={"24px"} m={"0px"}>
                        <Image style={{maxHeight: "200px", objectFit: "cover", height: "100%"}}
                               src="./images/manosparisis_logo.jpg"></Image>
                    </Box>
                    <Box pl={"24px"} w={"100%"} color={"#0B3F5F"}>
                        <Heading as="h2"
                                 m={'0px'}
                                 className={"title"}>Προσωποποιημένο Πρόγραμμα
                            Διατροφής</Heading>
                        <Text as="p"
                              m={'0px'}
                              mt={"10px"}
                              className={"text"}>Στοχευμένη απώλεια βάρους έως και 10 κιλά το μήνα!</Text>
                    </Box>
                </HStack>
            </VStack>
            <VStack bg={"#0B3F5F"}>
                <HStack maxW={"1300"} width={"100%"}>
                    <Box textAlign={"center"} className={"ptb"} w={"100%"} pr={"24px"} m={"0px"}>
                        <Image style={{maxHeight: "626px", objectFit: "cover", height: "100%"}}
                               src="./images/manos.jpeg"></Image>
                    </Box>
                    <Box pl={"24px"} w={"100%"} color={"white"} ml={"0"}>
                        <Heading as="h2"
                                 m={'0px'}
                                 className={"title"}>
                            Μάνος Παρίσης
                        </Heading>
                        <Text as={"h3"} m={"13px 0px 25px 0px"}
                              fontSize={"20px"}
                              fontWeight={"800"}
                              lineHeight={"22px"}
                              letterSpacing={"0xp"}>
                            Κλινικός διαιτολόγος Χαροκοπείου Πανεπιστημίου Αθηνών
                        </Text>
                        <Text as="p"
                              m={'0px'}
                              mt={"10px"}
                              className={"text"}>
                            Με ιδιαίτερη αγάπη στο υγιές σώμα και εξειδίκευση τόσο στην κλινική διατροφή όσο και στην
                            αθλητική διατροφή, ο Μάνος Παρίσης δημιουργεί στοχοποιημένο πρόγραμμα απώλειας ή συντήρησης
                            βάρους με τους διαιτούμενους.
                        </Text>
                    </Box>
                </HStack>
            </VStack>
            <VStack>
                <HStack maxW={"1300"} width={"100%"}>
                    <Box textAlign={"center"} className={"ptb"} w={"100%"} pr={"24px"} m={"0px"}>
                        <Image style={{maxHeight: "626px", objectFit: "cover", height: "100%"}}
                               src="./images/manos.jpeg"></Image>
                    </Box>
                    <Box pl={"24px"} w={"100%"} color={"white"} ml={"0"}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25196.151876165135!2d23.759053!3d37.871544!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8271e664fb28bc71!2zzqPOtc6yzrHPg8-Ezq4gzqDOsc-AzrHPis-JzqzOvc69zr_PhSB8IM6azrvOuc69zrnOus6uIM6UzrnOsc65z4TOv867z4zOs86_z4IgLSDOlM65zrHPhM-Bzr_Phs6_zrvPjM6zzr_Pgg!5e0!3m2!1sen!2sus!4v1670254722087!5m2!1sen!2sus"
                            width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </Box>
                </HStack>
            </VStack>
            <VStack bg={"#97cb50"} p={"40px 0"}>
                    <Box>
                        <Text as={"h2"}
                              fontSize={"35px"}
                              fontWeight={"800"}
                              lineHeight={"42px"}
                              letterSpacing={"0px"}
                              m={"0"}
                              color={"#0B3F5F"}>
                            Follow us
                        </Text>
                    </Box>
                    <Box height={"25px"}>
                        <img src="/images/facebook.svg" alt="" />
                        <img src="/images/instagram.svg" alt=""/>
                    </Box>
            </VStack>
        </Box>
    )
}

export default Home;