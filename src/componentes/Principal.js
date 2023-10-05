import { useState } from "react";
import Contador from "./Contador";
import LabelInput from "./LabelInput";
import Login from "./Login";

export default function Principal() {
    const [nombre, setNombre] = useState('');
    const [noPodreisPasar, setNoPodreisPasar] = useState(false);

    function alCambiarNombre(e) {
        setNombre(e.target.value);
    }

    return (
        <main>
            <Login onLogin={usuario => console.log(usuario)} />

            <LabelInput etiqueta="Nombre" id="nombre" tipo="text" valor="contenido" onCambio={valor => console.log(valor)} />

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