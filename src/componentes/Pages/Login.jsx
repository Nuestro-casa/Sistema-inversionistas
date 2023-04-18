import React, { useEffect, useContext, useState } from 'react'
import '../Css/Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Contexauth';
import { useNavigate } from 'react-router-dom';


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
                body: '{"email":"test@inv.com","password":"1234"}'
            };

            fetch('https://sistema-duppla-backend.herokuapp.com/inv/login', options).then(response => response.json())
                .then(function (response) {
                    //console.log(response.data);
                    console.log( 'prueba', response.status);
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
        <div className="container-fluid">
            <div className="arrow-return">
                <Link to='/singin'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" fill="currentColor" className=" arrow-return bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                </Link>
            </div>
            <p>{String(authenticated)}</p>
            <div className="title-register">
                <h2> <b>Iniciar Sesión</b>
                </h2>
            </div>

            {/* <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" className="btn btn-prueba text-center links text-white btn-mover"
                    width="400px" height="52px">
                    Ingresar
                </Button>
    </Form>*/}

            <div className="form-register  centrado container-sm">
                <form onSubmit={handleSubmit} >
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




    )
}


export default Login;