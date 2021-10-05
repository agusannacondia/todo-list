import {
    Box,
    Flex,
    Heading,
    Stack,
    Text
  } from "@chakra-ui/react";
  import { Link } from "react-router-dom";

const _404 = () => (
    <Flex
    flexDirection="column"
    width="100wh"
    height="100vh"
    backgroundColor="gray.100"
    justifyContent="center"
    alignItems="center"
    >
  <Stack
    flexDir="column"
    mb="2"
    justifyContent="center"
    alignItems="center"
    padding="14"
  >
    <Heading textAlign="center" color="teal.500">Ups, it seems there is nothing around here</Heading>
    <Link to="/"><Text fontSize="xl" color="blue.500">Go back 🙏🏻</Text></Link>
    <Box minW={{ base: "90%", md: "468px" }}>
    </Box>
  </Stack>
</Flex>
)

export default _404