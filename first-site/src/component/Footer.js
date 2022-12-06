import {Text, VStack} from "@chakra-ui/react";

export const Footer = () => {
    return (
        <VStack bg={"#0B3F5F"}>
            <Text as={"p"}
            fontSize={"16"}
            fontWeight={"400"}
            lineHeight={"18px"}
            color={"white"}>
                ΜΑΝΟΣ ΠΑΡΙΣΗΣ Μ.ΙΚΕ | 2109623440 | Λ.Βουλιαγμένης 85 Γλυφάδα 16674 (City Plaza Γραφείο #213)
            </Text>
        </VStack>
    )
}