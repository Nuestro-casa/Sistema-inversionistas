import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";



// creación de contexto global para auth-memoria central
export const AuthContext = createContext({});


export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();

    {/*Se usa el estado para autenticación */ }
    const [token, setToken] = useState(null);

    const [loanding, setLoanding] = useState(true);

    useEffect(() => {
        const recovereToken = localStorage.getItem("token");       

        if (recovereToken) {
            setToken(JSON.parse(recovereToken));
        }
        setLoanding(false);

    }, []);


    {/*useEffect(() => {
        const recovereToken = localStorage.getItem("token");
        if (recovereToken) {
            setToken(JSON.parse(recovereToken));
        }
        setLoanding(false);

    }, []);*/}


    //ejemplo de operador ternario condicion ? true : false
    const login = (tokenUser) => {

        localStorage.setItem('token', JSON.stringify(tokenUser));

        if (tokenUser) {
            console.log('ver si entra el', tokenUser);
            setToken({ token: tokenUser });
            navigate('/inicio')
        } else {
            navigate('/singin')
        }     
    };



    const logout = () => {
        //console.log('logout');
        localStorage.removeItem('token');
        setToken(null);
        navigate('/singin');
    };

    return (
        <AuthContext.Provider
            value={{ authenticated: !!token, token, loanding, login, logout }}>
            {children}
        </AuthContext.Provider>
    )

}