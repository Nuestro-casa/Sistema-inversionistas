import React, { useContext } from 'react'
import '../Css/Home.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Contexauth';
import IdupplaNaranja from '../../img/Duppla_Logotipo_V2.png'




function Home() {

  // trae la función  salida, que se declaro en el contexto para implementar aquí

  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };



  return (
    <div className='container-fluid'>
      <div className="arrow-return container sm">
        <img src={IdupplaNaranja} className="img-fluid  img-user-img" alt="perfil" />
      </div>
      <div className="img-home-inver centrado  ">
        {/*Sección botones oferta */}



        <div className='div-home-btn'>
        <div className='centrado title-home'>

          <h3 className='text-btn-home'>Bienvenido a duppla</h3>

        </div>

          <div className="d-flex justify-content-center align-items-center container-sm ">
            <div>
              <Link to='/Inicio'>
                <button type="button" className="btn btn-home btn-outline-primary text-btn-home " >CANCELAR</button>
              </Link>
            </div><br />
            <div className="">
              <button type="button" className="btn  btn-home  btn-outline-primary text-btn-home "  >ACEPTAR</button>
            </div>


          </div>

        </div>



      </div>
      {/*Sesión de perfil */}
      <div className="profile-data container-fluid ">
        <div className="">
          <div className="row ">
            <div className="col-4">
              {/*  <img src={Iperfil} className="img-fluid  img-user-img" alt="perfil" />
                       */} </div>
            <div className="col-8 ">
              <div className="card-body"><br />
                { /* <h5 className="text-white text.amp "> {data.nombre}</h5>
                                <p className=" text-white ">{data.email}</p>*/}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Sección de datos- hay que traerlos de salesforce*/}
      <div className="user-data-card container-fluid">
        <div className="tarjetas-datos-usuario d-grid " id="cardComponet">
          <div className="card-seccion">
            <div className="row ">
              <div className="col-4">

              </div>
              <div className="col-4">
                <div className="card-body">
                  {/* <p className=""> <small className="text-muted">Cédula</small><br /></p>
                  <p className=""><b>{data.cedula}</b></p>
                */}</div>
              </div>
            </div>
          </div>
        </div>

        {/*componente calendario
        <div className="centrado  container-sm" id="btnIniciarSesion">
          <a className="links" href="https://api.whatsapp.com/send?phone=573152559261">
            <button type="button" id="" className="btn btn-prueba text-white" width="400px" height="46px" >
              QUIERO EDITAR MIS DATOS
            </button>
          </a>
        </div>*/}

        {/*componente calendario*/}
        <div className="centrado  container-sm" id="btnIniciarSesion">
          <button type="button" id="" onClick={handleLogout} className="btn btn-prueba text-white" width="400px" height="46px" >
            Cerrar sesión
          </button>

        </div>




      </div>
    </div>
  )
}

export default Home