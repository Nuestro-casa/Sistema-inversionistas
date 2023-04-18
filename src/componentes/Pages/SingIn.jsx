import React from 'react'
import Iduppla from "../../img/Iduppla.png"
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Css/SingIn.css';
import Image from 'react-bootstrap/Image'

function SingIn() {
    return (
        <div className="container-fluid container-singin centrado">
            <div className=" centrado">
                <div className=" ">
                    <div className="centrado">
                        <Image src={Iduppla}
                            className=" img-logotipo justify-content-center"
                            alt="Simbolo duppla" />
                    </div><br />
                    <br />
                    <div class="centrado">
                        <button litype="button"
                            className="btn btn-prueba text-center links text-white btn-mover"
                            width="400px" height="52px">
                                                        
                            <Link to='/login' className="links text-white">Ingresar</Link>  
                        </button>

                    </div>
                </div>
            </div>




        </div>
    )
}

export default SingIn