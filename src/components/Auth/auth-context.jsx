import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
    authLevel: '',
    loginSucceeded: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(() => {

    // }, []);

    const logoutHandler = () => {
        setIsLoggedIn(false);
    };

    async function loginHandler() {

        // let theCreds = {email: email, password: password};

        // const response = 
        // await fetch('https://hotellistingapi-mike.azurewebsites.net/api/User/login', 
        // {
        //     method: 'POST',
        //     body: JSON.stringify(theCreds),
        //     headers: { 'Content-Type': 'application/json' }
        // });
        // const data = await response.json();

        // //console.log(data.status);
        // if (data.status !== null && data.title !== null) 
        // {
        //     setIsLoggedIn(data.title ? "Unauthorized" : false);
        // }
        
        setIsLoggedIn(true);
    };

    return <AuthContext.Provider 
        value={{ 
            isLogged: isLoggedIn, 
            onLogout: logoutHandler, 
            onLogin: loginHandler,
            }}>
        {props.children}
    </AuthContext.Provider>
};

export default AuthContext;