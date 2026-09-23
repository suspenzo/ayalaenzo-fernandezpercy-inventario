function Encabezado({ titulo, subtitulo }) {

    return (
        <div className="text-center mb-4">
            <h1>{titulo}</h1>
            <p>{subtitulo}</p>
        </div>
    );

}

export default Encabezado;