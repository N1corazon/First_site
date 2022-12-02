import React from "react";
import {HStack, Box, Center, Square, Circle} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton
} from '@chakra-ui/react'
import {ChevronDownIcon} from "./ChevronDownIcon";

function Navbar() {

    return (
        <Center background="#0B3F5F" color={"white"}>
            <HStack maxW={"1300px"} justifyContent={"space-between"} width={"100%"} mt={15} mb={15}>
                <Box className="site-name">
                    <h3>Manos Parisis</h3>
                    <h4>Clinical Nutritionist - Dietitian & Partners</h4>
                </Box>
                <Menu>
                    <MenuButton className="menu-btn" as={IconButton} aria-label='Options' variant='outline' icon={<ChevronDownIcon />}/>
                    <MenuList>
                        <MenuItem>Κεντρική Σελίδα</MenuItem>
                        <MenuItem>Η ομάδα μας</MenuItem>
                        <MenuItem>Μέτρηση Μεταβολισμού</MenuItem>
                        <MenuItem>Κόστος Συνεδρίας</MenuItem>
                        <MenuItem>Eπικοινωνία</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </Center>
    );
}

export default Navbar;