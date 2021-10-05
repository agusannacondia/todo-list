import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton
} from "@chakra-ui/react";
import PropTypes from 'prop-types' 

const Error = ({ message }) => {
    <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>Error!</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
        <CloseButton position="absolute" right="8px" top="8px" />
    </Alert>
}

Error.propTypes = {
    message: PropTypes.string
}

Error.defaultProps = {
    message: "There was an error processing your request"
}

export default Error