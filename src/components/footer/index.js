import {
    Flex,
    Heading,
  } from "@chakra-ui/react";

const Footer = () => 
    <Flex
        flexDirection="column"
        alignItems="center"
        padding="10"
        >
        <Heading textAlign="center" color="blue.400" size="md">Made with ❤️ by <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/federico-agustin-annacondia-28104512b/">Agustin Annacondia</a></Heading>
    </Flex>

export default Footer