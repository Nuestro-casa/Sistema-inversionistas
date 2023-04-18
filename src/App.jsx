import React, { useContext, useState } from 'react';
import {
  Route,
  Routes,
  Navigate

} from 'react-router-dom';

import Home from './componentes/Pages/Home.jsx'
import Login from './componentes/Pages/Login.jsx'
import SingIn from './componentes/Pages/SingIn.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './Context/Contexauth.jsx';
import { AuthContext } from './Context/Contexauth.jsx';



function App() {
  const Private = ({ children }) => {

    const { authenticated, loanding } = useContext(AuthContext);

    // valida que este en localsotore- si no esta logueado se redirecciona a login

    if (loanding) {
      return <div>cargando...</div>;
    }
    if (!authenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  }

  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Login />} ></Route>
        <Route path='/singin' element={<SingIn />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
       
        <Route exact path='/inicio' element={<Private><Home/></Private>} ></Route>

      </Routes>
    </AuthProvider>
  )
}

export default App
