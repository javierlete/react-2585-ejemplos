import { useState } from "react";

export default function Contador({ maximo, onAlarma }) {
    const [numero, setNumero] = useState(0);

    function subirValor() {
        if (numero >= maximo) {
            setNumero(maximo);

            onAlarma && onAlarma();
        } else {
            setNumero(numero + 1);
        }
    }

    return (
        <div>
            <button onClick={() => setNumero(numero - 1)}>-</button>
            <input type="number" value={numero} />
            <button onClick={() => subirValor()}>+</button>
        </div>
    );
}