import { useEffect, useState } from "react"
import {
    Box,
    Flex,
    Heading,
    Stack,
  } from "@chakra-ui/react";
import ListOfTodos from '../components/listOfTodos'
import Footer from "../components/footer";
import Error from '../components/error'
import { getTodos as getTodosService } from '../services/todos.service'
import { logout } from "../services/auth.service";

const Dashboard = () => {
    
    const [isLoading, setIsLoading] = useState(true)
    const [todos, setTodos] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        const getTodos = async () => { 
            const result = await getTodosService()
            if(result.error) 
              setError(result.error)
            else 
              setTodos(result.slice(0, 10))
            setIsLoading(false)
        }
        getTodos()
    }, [])

    return (
      <Flex
        flexDirection="column"
        backgroundColor="gray.100"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
          padding="14"
        >
          <Heading alignSelf="end" as="p" size="md" onClick={() => { logout(); window.location.reload(); }} margin="0"  >Log out</Heading>
          <Heading textAlign="center" color="teal.500" paddingTop="20" paddingBottom="20">Here you have a list of your todos 📝</Heading>
          <Box overflowY="scroll">
          {
            <ListOfTodos data={todos} loading={isLoading}/>
          }
          </Box>
        </Stack>
        {
          !!error && <Error message={error}/>
        }
        <Footer />
      </Flex>
    )
}
export default Dashboard