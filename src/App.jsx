import "./App.css";
import Boton from "./Componentes/Boton/Boton.jsx";
import Pantalla from "./Componentes/Pantalla/Pantalla.jsx";
import BotonBorrar from "./Componentes/BotonBorrar/BotonBorrar.jsx";
import logo from "./img/practicasformativas.png";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {

  const [input, setInput] = useState("");

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    setInput(evaluate(input))
  };

  return (
    <div className="App">
      <div className="contenedorlogo">
        <img src={logo} className="logo" alt="Imagen logo" />
      </div>

      <div className="contenedor">

        <Pantalla input={input}/>
    
        <div className="linea">
          <Boton colorBoton="negro" manejarClick={agregarInput}>1</Boton>
          <Boton colorBoton="negro" manejarClick={agregarInput}>2</Boton>
          <Boton colorBoton="negro" manejarClick={agregarInput}>3</Boton>
          <Boton colorBoton="verde" manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="linea">
          <Boton colorBoton="negro" manejarClick={agregarInput}>4</Boton>
          <Boton colorBoton="negro" manejarClick={agregarInput}>5</Boton>
          <Boton colorBoton="negro" manejarClick={agregarInput}>6</Boton>
          <Boton colorBoton="verde" manejarClick={agregarInput}>-</Boton>
        </div>
        <div className="linea">
          <Boton colorBoton="negro" manejarClick={agregarInput}>7</Boton>
          <Boton colorBoton="negro" manejarClick={agregarInput}>8</Boton>
          <Boton colorBoton="negro" manejarClick={agregarInput}>9</Boton>
          <Boton colorBoton="verde" manejarClick={agregarInput}>*</Boton>
        </div>
        <div className="linea">
          <Boton colorBoton="negro" manejarClick={calcularResultado}>=</Boton>
          <Boton colorBoton="negro" manejarClick={agregarInput}>0</Boton>
          <Boton colorBoton="negro" manejarClick={agregarInput}>.</Boton>
          <Boton colorBoton="verde" manejarClick={agregarInput}>/</Boton>
        </div>

        <div className="linea">
          <BotonBorrar manejarClear={() => setInput("")}>Clear</BotonBorrar>
        </div>

      </div>
    </div>
  );
}

export default App;
