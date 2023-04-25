import React, { useContext } from 'react'
import '../Css/Home.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Contexauth';
import IdupplaNaranja from '../../img/Duppla_Logotipo_V2.png'

import { Image } from 'react-bootstrap';
import Idashboard from '../../img/Idashboard.svg';
import Icustomer from '../../img/Iclientes.svg';
import Iinmuebles from '../../img/Iinmuebles.svg';
import Ilogout from '../../img/logout.svg';


const Customer = () => {
  // trae la función  salida, que se declaro en el contexto para implementar aquí

  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };




  return (
    <div className='home-inver'>


<nav class="navbar  navbar-expand-lg nav-size  fixed-top">
        <div class="container-fluid">
          <Image src={IdupplaNaranja} className=" img-logotipo navbar-brand " alt="Simbolo duppla" />
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">

            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
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
                <li class="nav-item">
                  <div className=" container-sm ">
                    <Link to='/cliente'>
                      <div className="card-docs-m   ">
                        <div className="card-body-docs col-2">
                          <img src={Icustomer} className="" alt="" width="24px" height="24px" />
                        </div>
                        <br />
                        <div className="card-body col-10 text-space">
                          <p className="card-text-docs text-nav">Cliente</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </li>
                <li class="nav-item ">
                  <div className=" container-sm ">
                    <Link to='/inmueble'>
                      <div className="card-docs-m   ">
                        <div class="card-body-docs col-2">
                          <img src={Iinmuebles} className="" alt="" width="24px" height="24px" />
                        </div>
                        <br />
                        <div className="card-body col-10 text-space">
                          <p className="card-text-docs text-nav">Inmueble</p>
                        </div>

                      </div>
                    </Link>
                  </div>
                </li>

                <li className="nav-item">

                  <div className=" container-sm ">
                   
                      <div className="card-docs-m   ">
                        <div class="card-body-docs col-2 " onClick={handleLogout}  >
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
      <br />
      <br />









      {/*Inicio segunda columna */}
      <div className="">
        {/*Embed tableau*/}
        <div className=" boards">
          <script
            type="module"
            src="https://prod-useast-a.online.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"
          > </script>
          <tableau-viz
            id="tableau-viz"
            src="https://prod-useast-a.online.tableau.com/t/nuestrocasa/views/customer_profile/Customerprofile"
            width="1250"
            height="720"
            hide-tabs
            toolbar="bottom"
          ></tableau-viz>
          <br />
          <br />
          <tableau-viz id='tableau-viz' src='https://prod-useast-a.online.tableau.com/t/nuestrocasa/views/portfolio_v1/Buyer'
            width='1250 ' height='723' toolbar='bottom' >

          </tableau-viz>


        </div>


      </div>
      <br/>
    </div>




  )
}

export default Customer