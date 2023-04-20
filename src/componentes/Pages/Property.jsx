import React, { useContext } from 'react'
import '../Css/Home.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Contexauth';
import IdupplaNaranja from '../../img/Duppla_Logotipo_V2.png'

import { Image } from 'react-bootstrap';
import Idashboard from '../../img/Idashboard.svg';
import Icustomer from '../../img/Iclientes.svg';
import Iinmuebles from '../../img/Iinmuebles.svg';


const Property = () => {


  // trae la función  salida, que se declaro en el contexto para implementar aquí

  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };



  return (
    <div className='home-inver'>
      <div className="d-grid">
        <div className="row align-items-center">
          <div className="col-3   ">
            <div className="container-fluid border-nav">
              <div className="row flex-nowrap ">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 ">
                  <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <div className="centrado">
                      <Image src={IdupplaNaranja}
                        className=" img-logotipo justify-content-center"
                        alt="Simbolo duppla"
                      />
                    </div><br />
                    <br />



                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                      <li className="nav-item">
                        <div className="content-docs  container-sm ">
                          <Link to='/inicio'>
                            <div className="card-docs-m   ">
                              <div className="card-body-docs col-2">
                                <img src={Idashboard} className="" alt="" width="24px" height="24px" />
                              </div>
                              <br />
                              <div className="card-body col-10 text-space">
                                <p className="card-text-docs"><b>Dashboard</b></p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </li>

                      <li className="nav-item">
                        <div className=" container-sm ">
                          <Link to='/cliente'>
                            <div className="card-docs-m   ">
                              <div className="card-body-docs col-2">
                                <img src={Icustomer} className="" alt="" width="24px" height="24px" />
                              </div>
                              <br />
                              <div className="card-body col-10 text-space">
                                <p className="card-text-docs"><b>Cliente</b></p>
                              </div>

                            </div>
                          </Link>
                        </div>
                      </li>

                      <li className="nav-item">
                        <div className=" container-sm ">
                          <Link to='/inmueble'>
                            <div className="card-docs-m   ">
                              <div className="card-body-docs col-2">
                                <img src={Iinmuebles} className="" alt="" width="24px" height="24px" />
                              </div>
                              <br />
                              <div className="card-body col-10 text-space">
                                <p className="card-text-docs"><b>Inmueble</b></p>
                              </div>

                            </div>
                          </Link>
                        </div>
                      </li>
                    </ul>
                    <hr />
                    <li className="">
                      {/*componente calendario*/}
                      <div className="centrado" id="btnIniciarSesion">
                        <button type="button" id="" onClick={handleLogout} className="btn btn-prueba" width="400px" height="46px" >
                          <p className='text-blue'> Cerrar sesión</p>
                        </button>

                      </div>
                    </li>

                  </div>
                </div>

              </div>
            </div>
          </div>
          {/*Inicio segunda columna */}
          <div className="col-9">
            {/*Embed tableau*/}
            <div className=" boards">
              <tableau-viz id='tableau-viz' src= 'https://prod-useast-a.online.tableau.com/t/nuestrocasa/views/assets_profile/Assetsprofile' 
              width='1250' height='730' hide-tabs toolbar='bottom' >
                
              </tableau-viz>
              <br/>
              <tableau-viz id='tableau-viz' src='https://prod-useast-a.online.tableau.com/t/nuestrocasa/views/portfolio_v1/Property'
                width='1200' height='723' toolbar='bottom' >
              </tableau-viz>
            </div>
          </div>
        </div>
      </div>











    </div >










  )
}

export default Property