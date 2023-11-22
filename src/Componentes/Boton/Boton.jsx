import React from "react";
import "./Boton.css"

function Boton(props){
    return(
        <button 
            className={props.colorBoton}
            onClick={() => props.manejarClick(props.children)}>
            {props.children}
        </button>
        
    )
}

export default Boton;