import axios from "axios";
import { useState, useContext, createContext, useEffect } from "react";

const AuthContext = createContext(); // Create the authentication context

const AuthProvider = ({ children }) => { // Use destructuring for cleaner syntax
  const [authState, setAuthState] = useState({
    user: null,
    token: "",
  });



  axios.defaults.headers.common['Authorization'] = `Bearer ${authState?.token}`;

  useEffect(()=>{
    const data = localStorage.getItem("auth");
    if(data){
      const parseData = JSON.parse(data);
      setAuthState({
        ...authState,
        user: parseData.user,
        token: parseData.token
      })
    }
    //eslint-disable-next-line
  },[])

  return (
    <AuthContext.Provider value={[authState, setAuthState]}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };