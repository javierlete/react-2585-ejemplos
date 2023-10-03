export default function Menu({ opciones }) {
    return <nav>
        <ul>
            {opciones.map(opcion => <li key={opcion.url}><a href={opcion.url}>{opcion.texto}</a></li>)}
        </ul>
    </nav>;
}
