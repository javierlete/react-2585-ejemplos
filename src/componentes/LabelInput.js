export default function LabelInput({ etiqueta, id, nombre, tipo, valor, onCambio }) {
    nombre = nombre || id;

    return (
        <div>
            <label htmlFor={id}>{etiqueta}</label>
            <input id={id} name={nombre} type={tipo} defaultValue={valor} onChange={e => onCambio(e.target.value)} />
        </div>
    );
}