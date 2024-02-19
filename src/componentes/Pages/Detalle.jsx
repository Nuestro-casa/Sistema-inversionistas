import React, { useContext, useEffect } from 'react'
import '../Css/Home.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Contexauth';
import IdupplaNaranja from '../../img/Duppla_Logotipo_V2.png'

import { Image } from 'react-bootstrap';
import Idashboard from '../../img/Idashboard.svg';
import Icustomer from '../../img/Iclientes.svg';
import Ilogout from '../../img/logout.svg';

import { Container, Box, Button, ButtonGroup, Typography, Stack, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';


const Customer = () => {
  // trae la función  salida, que se declaro en el contexto para implementar aquí

  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };

 
  useEffect(() => {
   /*  const adjustVizSize = () => {
      var divElement = document.getElementById('viz1700094002296');
      var vizElement = divElement.getElementsByTagName('object')[0];
  
      // Establecer tamaños mínimo y máximo para el elemento
      vizElement.style.minWidth = '1460px';
      vizElement.style.maxWidth = '100%';
      vizElement.style.minHeight = '710px';
  
      // Calcular la altura en función del ancho de la pantalla
      const aspectRatio = 0.75; // Relación de aspecto deseada
      const width = divElement.offsetWidth;
      const height = Math.max(710, width * aspectRatio);
  
      // Establecer la altura calculada
      vizElement.style.height = height + 'px';
    }; */

    
    const adjustVizSize = () => {
      var divElement = document.getElementById('viz1700094002296');
      var vizElement = divElement ? divElement.getElementsByTagName('object')[0] : null;
    
      if (vizElement) {
        // Calcula el ancho y la altura proporcionalmente al tamaño de la ventana
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
    
        // Define el tamaño máximo del ancho
        const maxWidth = 1260; // Por ejemplo, establece un máximo de 1200px
    
        // Calcula el ancho y la altura según la relación de aspecto y el tamaño máximo
        const aspectRatio = 14 / 7; // Por ejemplo, 16:9
        let width, height;
        if (windowWidth > maxWidth) {
          width = maxWidth;
          height = maxWidth / aspectRatio;
        } else {
          width = windowWidth;
          height = windowWidth / aspectRatio;
        }
    
        // Aplica el tamaño calculado al elemento
        vizElement.style.width = width + 'px';
        vizElement.style.height = height + 'px';
      }
    };
    
    
  
    // Carga del script de Tableau
  var scriptElement = document.createElement('script');
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  document.body.appendChild(scriptElement);

  // Ajuste inicial del tamaño
  adjustVizSize();

  // Adjunta el evento de cambio de tamaño de la ventana
  window.addEventListener('resize', adjustVizSize);

  // Retira el evento de cambio de tamaño y el script al desmontar el componente
  return () => {
    window.removeEventListener('resize', adjustVizSize);
    document.body.removeChild(scriptElement);
  };
  }, []);
  


  return (

    <Box sx={{ flexGrow: 1,  }} >
      <Container maxWidth="xl" sx={{ mt: 2, mb: 4, p:2}}
        className=''>

        <Grid container sx={{
          display: 'flex',
          justifyContent: 'center',
          justifyItems: 'center',
          width: '100%',
          height: '100hv',
          backgroundColor: '#ffffff',
        }}>
          {/*Grafica principal-datos del inmueble  A2*/}
          <Grid className='' xs={12} sm={12} md={12} lg={12} sx={{
            width: '100%',
            borderRadius: '20px',
          }}>
            <nav className="navbar  navbar-expand-lg nav-size  fixed-top">
              <div className="container-fluid">
                <Image src={IdupplaNaranja} className=" nav-size-img-duppla " alt="Simbolo duppla" />
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                  <div className="offcanvas-header">
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                      <li className="nav-item">
                        <div className="content-docs  container-sm ">
                          <Link to='/inicio'>
                            <div className="card-docs-m   ">
                              <div className="card-body-docs col-2">
                                <img src={Idashboard} className="" alt="" width="24px" height="24px" />
                              </div>
                              <br />
                              <div className="card-body col-10 text-space">
                                <p className="card-text-docs text-nav">Dashboard</p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </li>
                      <li className="nav-item">
                        <div className=" container-sm ">
                          <Link to='/detalle'>
                            <div className="card-docs-m   ">
                              <div className="card-body-docs col-2">
                                <img src={Icustomer} className="" alt="" width="24px" height="24px" />
                              </div>
                              <br />
                              <div className="card-body col-10 text-space">
                                <p className="card-text-docs text-nav">Detalle</p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </li>

                      <li className="nav-item">
                        <div className=" container-sm ">
                          <div className="card-docs-m   ">
                            <div className="card-body-docs col-2 " onClick={handleLogout}  >
                              <img src={Ilogout} className="" alt="" width="22px" height="22px" />
                            </div>
                            <br />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </Grid>         
        </Grid>

        <Grid container sx={{          
          justifyContent: 'center',        
          alignItems: 'center',
          width: '100%',
          height: '100hv',       
          marginTop:'4rem'
        }}>
  
          <Grid className='' xs={12} sm={12} md={12} lg={12} sx={{ width: '100%', marginTop:'3rem' }}>
            <div className='centrado' id='viz1700094002296'>
              <div>
              <noscript>
                <a href='#'>
                  <img alt=' Tabla' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;po&#47;portfolio_pub&#47;Selection&#47;1_rss.png'  />
                </a>
              </noscript>
              <object className='tableauViz'  >
                <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                <param name='embed_code_version' value='3' />
                <param name='site_root' value='' />
                <param name='name' value='portfolio_pub&#47;Selection' />
                <param name='tabs' value='yes' />
                <param name='toolbar' value='yes' />
                <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;po&#47;portfolio_pub&#47;Selection&#47;1.png' />
                <param name='animate_transition' value='yes' />
                <param name='display_static_image' value='yes' />
                <param name='display_spinner' value='yes' />
                <param name='display_overlay' value='yes' />
                <param name='display_count' value='yes' />
                <param name='language' value='es-ES' />
              </object>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box >
  )
}




export default Customer