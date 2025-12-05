import TarjetaPelicula from "./TarjetaPelicula";

function ListaPeliculas({ peliculas }) {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {peliculas.map((peli) => (
        <TarjetaPelicula key={peli.imdbID} peli={peli} />
      ))}
    </div>
  );
}

export default ListaPeliculas;
