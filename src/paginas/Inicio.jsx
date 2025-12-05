import { useState } from "react";
import BarraBusqueda from "../componentes/BarraBusqueda";
import ListaPeliculas from "../componentes/ListaPeliculas";

function Inicio() {
  const [texto, setTexto] = useState("");
  const [peliculas, setPeliculas] = useState([]);

  const buscarPeliculas = async () => {
    if (texto === "") return;

    const respuesta = await fetch(
      `https://www.omdbapi.com/?apikey=2a3fe01f&s=${texto}`
    );
    const datos = await respuesta.json();

    setPeliculas(datos.Search || []);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎬 Buscador de Películas</h1>

      <BarraBusqueda
        texto={texto}
        setTexto={setTexto}
        buscarPeliculas={buscarPeliculas}
      />

      <ListaPeliculas peliculas={peliculas} />
    </div>
  );
}

export default Inicio;
