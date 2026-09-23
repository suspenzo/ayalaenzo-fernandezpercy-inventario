import { useState } from "react";

import Encabezado from "./components/Encabezado";
import FormularioEquipo from "./components/FormularioEquipo";
import Equipo from "./components/Equipo";

function App() {

    const [equipos, setEquipos] = useState([]);


    const registrarEquipo = (nuevoEquipo) => {

        setEquipos([
            ...equipos,
            nuevoEquipo
        ]);

    };


    return (

        <div className="container mt-5">

            <Encabezado
                titulo="Inventario Tecnológico"
                subtitulo="Control de equipos disponibles"
            />


            <FormularioEquipo
                onRegistrar={registrarEquipo}
            />


            <h2 className="mb-4">
                Equipos registrados
            </h2>


            {equipos.length === 0 ? (

                <div className="alert alert-secondary">
                    No existen equipos registrados.
                </div>

            ) : (

                <div className="row">

                    {equipos.map((equipo, index) => (

                        <div
                            className="col-md-6 col-lg-4"
                            key={index}
                        >

                            <Equipo
                                equipo={equipo}
                            />

                        </div>

                    ))}

                </div>

            )}

        </div>

    );
}

export default App;