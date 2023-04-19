import React from 'react'
import Iduppla from "../../img/Iduppla.png"
import { Link } from "react-router-dom";


import '../Css/SingIn.css';
import Image from 'react-bootstrap/Image'
import IdupplaNaranja from '../../img/Duppla_Logotipo_V2.png'
import Idashboard from '../../img/Idashboard.svg';

function SingIn() {
  return (
    <div className="container-fluid
     container-singin centrado">
      <div className=" centrado">
        
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
                </ul>
                <hr />
                <li className="nav-item">
                      <div className=" container-sm ">
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

              </div>
            </div>

          </div>
        </div>



      </div>




    </div>
  )
}

export default SingIn