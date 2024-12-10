import './style.css';

function Titulo({ tituloH1, tituloSpan }) {
    return (
        <div className='divTitulo'>
            <h1>{tituloH1}</h1>
            <span>{tituloSpan}</span>
        </div>
    );
}

export default Titulo;

