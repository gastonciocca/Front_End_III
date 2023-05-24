import React from "react";

class ClassComponent extends React.Component {
    render (){
        return (
            <>
                <h1>Este es el componente de clase</h1>
                <p>Paragraph ejemplo</p>
                <ul>
                    <li>Elemento 1</li>
                    <li>Elemento 2</li>
                    <li>Elemento 3</li>
                    <li>Elemento 4</li>

                </ul>
            </>
        )
    }
}

export default ClassComponent //solo se puede poner un export default por archivo

export class OtroComponente extends React.Component {
    render (){
        return(
            <>
                <h1>Otro componente</h1>
            
            </>
        )
    }
}