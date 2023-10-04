import { useState } from "react";
import Contador from "./Contador";

export default function Principal() {
    const [nombre, setNombre] = useState('');

    function alCambiarNombre(e) {
        setNombre(e.target.value);
    }

    return (
        <main>
            <Contador />
            <Contador />

            <form>
                <button onClick={() => alert('Saludo')}>Saludar</button>

                <input onChange={e => alCambiarNombre(e)} type="text" placeholder="Dime tu nombre" />
                <p>Hola {nombre}</p>
            </form>
        </main>
    );
}