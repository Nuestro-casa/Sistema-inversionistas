import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/Contexauth';
import { useNavigate } from 'react-router-dom';
import Iduppla from '../../img/Iduppla.png';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

function Login() {
   
    const navigate = useNavigate();
    const theme = useTheme();   

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
                  /*   console.log('prueba', response.status); */
                    if (!response.status === 200) {
                        console.log('error de login');
                    } else {
                        login(response.token);                  
                        setDatos('');
                    }

                }).catch(function (error) {
                    console.error(error);
                });
        }
    };


    return (
        <Container sx={{ overflowX: 'hidden' }}>
            <Box
                sx={{
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#ffffff',
                    overflowX: 'hidden',
                    overflowY: 'hidden'
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            <img
                                src={Iduppla}
                                alt="Simbolo duppla"
                                style={{ width: '340px', height: '300px' }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'start'
                               
                            }}
                        >
                            <Typography variant="h5" sx={{ mt: 2, mb: 2, color: '#0A3323', textAlign: 'start' }}>
                                Iniciar Sesión
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} sx={{ width: '80%' }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Correo electrónico"
                                    name="email"
                                    value={datos.email}
                                    onChange={handleInputChance}
                                    variant="outlined"
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Contraseña"
                                    type="password"
                                    id="password"
                                    value={datos.password}
                                    onChange={handleInputChance}
                                    variant="outlined"
                                    sx={{ mb: 2 }}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mb: 2, background: '#81A1F8', color: '#FFFFFF' }}
                                >
                                    Siguiente
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default Login;
