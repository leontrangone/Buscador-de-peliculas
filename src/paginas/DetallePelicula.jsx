import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetallePelicula() {
  const { id } = useParams();
  const [pelicula, setPelicula] = useState(null);

  useEffect(() => {
    const cargar = async () => {
      const resp = await fetch(
        `https://www.omdbapi.com/?apikey=2a3fe01f&i=${id}&plot=full`
      );
      const data = await resp.json();
      setPelicula(data);
    };

    cargar();
  }, [id]);

  if (!pelicula) return <p>Cargando...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{pelicula.Title}</h1>

      <img
        src={pelicula.Poster}
        alt={pelicula.Title}
        style={{ width: "250px", borderRadius: "10px" }}
      />

      <p><b>Año:</b> {pelicula.Year}</p>
      <p><b>Director:</b> {pelicula.Director}</p>
      <p><b>Género:</b> {pelicula.Genre}</p>
      <p><b>Actores:</b> {pelicula.Actors}</p>
      <p><b>Duración:</b> {pelicula.Runtime}</p>
      <p><b>Descripción:</b> {pelicula.Plot}</p>
    </div>
  );
}

export default DetallePelicula;
