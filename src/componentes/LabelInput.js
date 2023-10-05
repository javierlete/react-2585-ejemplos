export default function LabelInput({ etiqueta, id, nombre, tipo, valor, onCambio }) {
    nombre = nombre || id;

    return (
        <div className="row mb-3">
            <label className="col-sm-2 col-form-label" htmlFor={id}>{etiqueta}</label>
            <div class="col-sm">
                <input className={tipo === 'submit' ? 'btn btn-primary' : 'form-control'}
                    value={valor} id={id} name={nombre} type={tipo} 
                    defaultValue={valor} onChange={e => onCambio(e.target.value)} />
            </div>
        </div>
    );
}