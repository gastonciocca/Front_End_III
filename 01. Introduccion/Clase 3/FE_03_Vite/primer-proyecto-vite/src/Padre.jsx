import React from "react";
import Hijo from "./Hijo";

const frutas = ["ananá", "banana", "pera","manzana","naranja"];
const titulo = "Listado de frutas";

const Padre = () => {
    const hijos = () =>
        frutas.map((fruta)=>
        <Hijo fruta={fruta}/>);
    return (
        <>
            <h1>{titulo}</h1>
            <ul>{hijos()}</ul>
        </>
    );
    
}

export default Padre