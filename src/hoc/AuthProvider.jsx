import React, {createContext, useState} from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const signin = (newUser, callbackFun) => {
        setUser(newUser);
        callbackFun();
    }
    const signout = (callbackFun) => {
        setUser(null);
        callbackFun();
    }
    const value = {
        user,
        signin,
        signout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;