import React, { useContext, useEffect } from 'react'
import '../Css/Home.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Contexauth';
import IdupplaNaranja from '../../img/Duppla_Logotipo_V2.png'

import { Image } from 'react-bootstrap';
import Idashboard from '../../img/Idashboard.svg';
import Icustomer from '../../img/Iclientes.svg';
import Iinmuebles from '../../img/Iinmuebles.svg';
import Ilogout from '../../img/logout.svg';







function Home() {

  // trae la función  salida, que se declaro en el contexto para implementar aquí

  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };

  useEffect(() => {


    var divElement = document.getElementById('viz1700005056770');
    var vizElement = divElement.getElementsByTagName('object')[0];
    if (divElement.offsetWidth > 800) { vizElement.style.minWidth = '1200px'; vizElement.style.maxWidth = '1360px'; vizElement.style.width = '100%'; vizElement.style.minHeight = '710px'; vizElement.style.maxHeight = '830px'; vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px'; }
    else if (divElement.offsetWidth > 500) { vizElement.style.minWidth = '1200px'; vizElement.style.maxWidth = '1360px'; vizElement.style.width = '100%'; vizElement.style.minHeight = '710px'; vizElement.style.maxHeight = '830px'; vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px'; }
    else { vizElement.style.width = '100%'; vizElement.style.height = '2450px'; }
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);


  }, []);




  return (
    <div className='home-inver centrado'>
      {/*navbar fijo*/}

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

      <div className="centrado ">

        {/*Inicio segunda columna */}


        <div class='tableauPlaceholder' id='viz1700005056770' style='position: relative'>
          <noscript>
            <a href='#'>
              <img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;pr&#47;profiles&#47;General&#47;1_rss.png' style='border: none' />
            </a>
          </noscript>
          <object class='tableauViz' style='display:none;'>
            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
            <param name='embed_code_version' value='3' />
            <param name='site_root' value='' /><param name='name' value='profiles&#47;General' />
            <param name='tabs' value='yes' />
            <param name='toolbar' value='yes' />
            <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;pr&#47;profiles&#47;General&#47;1.png' />
            <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' />
            <param name='display_spinner' value='yes' />
            <param name='display_overlay' value='yes' />
            <param name='display_count' value='yes' />
            <param name='language' value='es-ES' />
          </object>
        </div>



      </div>
      <br />
      <br />
    </div>





  )
}

export default Home