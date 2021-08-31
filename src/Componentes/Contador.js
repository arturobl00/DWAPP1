import React, {useState, Fragment} from 'react';

const Contador = () => {

    const [miValor, setmiValor] = useState(100);

    //función para incrementar
    const miFuncion = () => {
        setmiValor(miValor + 1);    
    }

    const miFuncion2 = () => {
        setmiValor(miValor - 1);    
    }

    return (
        <Fragment>
            <p>Hola soy tu componente</p>
            <p>El valor de la constante es: {miValor}</p>
            <button onClick={miFuncion}>Incrementa</button> <br/> <br/>
            <button onClick={miFuncion2}>Decrementa</button>
        </Fragment> 
     );
}
 
export default Contador;