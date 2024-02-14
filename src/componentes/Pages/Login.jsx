import React, { useEffect, useContext, useState } from 'react'
import '../Css/Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Contexauth';
import { useNavigate } from 'react-router-dom';
import Iduppla from '../../img/Iduppla.png';
import Image from 'react-bootstrap/Image'

function Login() {

    const { login, authenticated } = useContext(AuthContext);


    /*Datos enviados a través del servicio*/
    const [datos, setDatos] = useState({
        email: '',
        password: ''
    });

    /*Función manejo de cambios en los inputs, maneja un evento e*/

    const handleInputChance = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value

        })
    }
    // Función que contrala el evento de los inputs del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (datos.email === "" || datos.email === null || datos.password === "" || datos.password === null) {
            alert('El correo  o contraseña no puede estar vacio');
        } else {

            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: '{"email":"' + datos.email + '","password":"' + datos.password + '"}'
            };

            fetch('https://sistema-duppla-backend.herokuapp.com/inv/login', options).then(response => response.json())
                .then(function (response) {
                    //console.log(response.data);
                    console.log('prueba', response.status);
                    if (!response.status === 200) {
                        console.log('error de login');
                    } else {
                        login(response.token);
                        console.log(response.token);
                        setDatos('');

                    }

                }).catch(function (error) {
                    console.error(error);
                });
        }
    };


    return (
        <div className=" prueba-container ">
            <div className="d-grid centrado">
                <div className="container-login">
                    {/*división de columnas */}
                    <div className="row align-items-center">
                        <div className="col-6   ">
                            <div className=" column-login-one   centrado">
                                <div className=" ">
                                    <div className="centrado">
                                        <Image src={Iduppla}
                                            className=" img-logotipo-login justify-content-center"
                                            alt="Simbolo duppla" />
                                    </div><br />
                                    <br />
                                </div>
                            </div>
                        </div>
                        {/*Segunda colunma */}
                        <div className="col-6  ">
                            <div className="column-login ">
                                <div className="form-register  centrado container-sm">
                                    <form onSubmit={handleSubmit} >
                                        <div className="title-register">
                                            <h2> <b>Iniciar Sesión</b>
                                            </h2>
                                        </div>
                                        <br />

                                        <div className="mb-3">
                                            <input type="email"
                                                name='email'

                                                onChange={handleInputChance}
                                                value={datos.email}

                                                className="form-control input-register-inver"
                                                id="exampleInputEmail1"
                                                placeholder="Correo electrónico"
                                                aria-describedby="emailHelp"
                                                required />

                                        </div>
                                        <div className="mb-3">

                                            <input type="password"
                                                name='password'
                                                onChange={handleInputChance}
                                                value={datos.password}
                                                className="form-control input-register-inver"
                                                placeholder="Contraseña"
                                                id="exampleInputPassword1" />

                                        </div>
                                        <button type="submit"
                                            className="btn btn-prueba-ingreso text-center links text-white btn-mover ">Siguiente</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login;