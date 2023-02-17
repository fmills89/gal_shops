import {createContext, useState} from 'react';

export const AuthContext = createContext({
  token: '',
  // tells if user is logged in or not
  isAuthenticated: false,
  // methods for changing state
  // when user signs up/logins successfully
  authenticate: token => {},
  // when logout
  logout: () => {},
});

// responsible for managing autocontent state
// and a wrapper -accepts children prop
// will return wrapped children
function AuthContextProvider({children}) {
  const [authToken, setAuthToken] = useState();

  // function triggered when user signs up or logins correctly
  function authenticate(token) {
    setAuthToken(token);
  }

  function logout() {
    setAuthToken(null);
  }

  const value = {
    token: authToken,
    // notnot authtoken converts truthly or falsey value into true or false
    isAuthenticated: !!authToken,
    // making two functions above avail
    authenticate: authenticate,
    logout: logout,
  };

  // value prop equal to value
  // we exposed our authcontent to whatever wants to use it
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
