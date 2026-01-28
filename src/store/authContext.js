import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);

  useState(()=>{
    setTimeout(()=>{
   setIsAuthenticated(user?true:false);
    },1500)
  },[])
  const login = async(email,password) => {
    try{
    setIsAuthenticated(true);
    setUser("Dummy User");
    }
    catch(error){
        console.log("Login error:", error);
    }
  };

  const logout = async() => {
    try{
    setIsAuthenticated(false);
    }
    catch(error){
      console.log("Logout error:", error);
    }
  };
  const register = async(email,password,userName,profileUrl) => {
    try{

    }
    catch(error){
      console.log("Registration error:", error);
    }
  }

  return (
    <AuthContext.Provider value={{user, isAuthenticated, login, logout, register}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
   const value =  useContext(AuthContext);
   if(!value){
    throw new Error("useAuth must be used within an AuthProvider");
   }
    return value;
}

// i can either import useAuth where needed or export AuthContext and use useContext (AuthContext) whree ever i need to access the auth state.