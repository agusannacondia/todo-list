import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack
} from "@chakra-ui/react";
import { login } from "../../services/auth.service";

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({})

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleSubmit = (event) => {
    event.preventDefault()
    if(user.name && user.password) {
      login({ username: user.name, password: user.password })
      window.location.reload();
    }
  }

  return (
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
      >
        <Heading textAlign="center" color="blue.400">Welcome to the Amazing Challenge 🚀</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <Input type="text" placeholder="Name" onChange={(e) => setUser({...user, name: e.target.value})}/>
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={(e) => setUser({...user, password: e.target.value})}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="lg" onClick={handleShowClick}>
                      {showPassword ? "🙈" : "🐵"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="blue"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Form;
