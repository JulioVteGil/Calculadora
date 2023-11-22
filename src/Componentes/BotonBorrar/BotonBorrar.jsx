import React from "react";
import "./BotonBorrar.css"

function BotonBorrar(props){
    return(
        <button 
            className="clear" 
            onClick={props.manejarClear}>
            {props.children} 
        </button>
    )
}

export default BotonBorrar;
