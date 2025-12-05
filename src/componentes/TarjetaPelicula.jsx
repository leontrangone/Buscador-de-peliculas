import { Link } from "react-router-dom";

function TarjetaPelicula({ peli }) {
  return (
    <Link to={`/pelicula/${peli.imdbID}`} style={{ textDecoration: "none", color: "black" }}>
      <div
        style={{
          width: "200px",
          cursor: "pointer",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <img src={peli.Poster} alt={peli.Title} width="200" />
        <h3>{peli.Title}</h3>
        <p>{peli.Year}</p>
      </div>
    </Link>
  );
}

export default TarjetaPelicula;
