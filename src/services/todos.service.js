/**
 * 
 *  This should be a module that calls to a Todos API, using any security measure like a session token
 *  in the Authentication Header of the request, in order to identify the user and the permissions.
 *  To solve the challenge and simplify the solution, this will call an Mocked API and save the status of
 *  the Todos in a store
 * 
 */

const getTodos = async () => await fetch(`${process.env.REACT_APP_URL_API}/todos`).then((data) => data.json()).catch((error) => ({ error: error.message }))

const saveTodos = async () => {}

export { getTodos, saveTodos }