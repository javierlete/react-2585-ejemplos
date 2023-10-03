export default function Anuncios({ anuncios }) {
    let bloqueAnuncios = [];

    for(const url of anuncios) {
        bloqueAnuncios.push(<li key={url}><a href={url}>{url}</a></li>);
    }

    return <ul>
        {anuncios.map(url => <li key={url}><a href={url}>{url}</a></li>)}
        {anuncios.map(function(url) { return <li key={url}><a href={url}>{url}</a></li>; })}
        {bloqueAnuncios}
    </ul>;
}
