/**
 * 
 *  This should be a module that calls to an Auth API, but in order to solve the challenge,
 *  this module will only save login info in a store
 * 
 */

const login = ({ username, password }) => {
    if (username && password) {
        localStorage.setItem("session", JSON.stringify({ username, password }));
    }
};

const logout = () => {
  localStorage.removeItem("session");
};

const getUserLogged = () => {
  const user = localStorage.getItem('session')
  return user
}

export {
  login,
  logout,
  getUserLogged
};