import { useState } from "react";

export default function Contador() {
    const [numero, setNumero] = useState(0);

    return (
        <div>
            <button onClick={() => setNumero(numero - 1)}>-</button>
            <input type="number" value={numero} />
            <button onClick={() => setNumero(numero + 1)}>+</button>
        </div>
    );
}