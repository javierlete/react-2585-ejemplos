import { useState } from "react";
import Contador from "./Contador";

export default function Principal() {
    const [nombre, setNombre] = useState('');
    const [noPodreisPasar, setNoPodreisPasar] = useState(false);

    function alCambiarNombre(e) {
        setNombre(e.target.value);
    }

    return (
        <main>
            <Contador maximo="10" onAlarma={() => alert('Alarma')} />
            <Contador maximo="5" onAlarma={() => setNoPodreisPasar(true)} />

            <p>{noPodreisPasar ? 'No podreis pasar' : 'Pasad'}</p>

            <form>
                <button onClick={() => alert('Saludo')}>Saludar</button>

                <input onChange={e => alCambiarNombre(e)} type="text" placeholder="Dime tu nombre" />
                <p>Hola {nombre}</p>
            </form>
        </main>
    );
}