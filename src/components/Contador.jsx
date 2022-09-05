import { useState } from "react";

const Contador = () => {
    
    const [contador, setContador] = useState(20)

    const aumentar = () => {
        setContador(contador + 1)
        console.log(contador)
    }
    return (
        <>
            <h2>Contador</h2>
            <button className="btn btn-primary" onClick={aumentar}>+</button>
            <h3> {contador} </h3>
        </>
    )
}

export default Contador;
