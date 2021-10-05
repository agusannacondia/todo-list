import React, { useState } from 'react'
import {
    Box,
    Heading,
    Switch,
    HStack
  } from "@chakra-ui/react";
import PropTypes from 'prop-types' 

const Todo = ({ title, isCompleted }) => {

    const [completed, setCompleted] = useState(isCompleted)

    return (
        <Box p={5} shadow="md" borderWidth="1px" bgColor={completed ? 'green.300' : 'red.400'}>
            <HStack justifyContent="space-between">
                <Heading fontSize="xl" color={completed ? 'green.900' : 'red.100'}>{title}</Heading>
                <Switch defaultChecked={completed} onChange={() => setCompleted(!completed)}/>
            </HStack>
        </Box>
    )
}

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
};

export default Todo