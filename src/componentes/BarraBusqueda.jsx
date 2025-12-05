function BarraBusqueda({ texto, setTexto, buscarPeliculas }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Buscar película..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        style={{ padding: "8px", width: "240px" }}
      />
      <button
        onClick={buscarPeliculas}
        style={{ marginLeft: "10px", padding: "8px" }}
      >
        Buscar
      </button>
    </div>
  );
}

export default BarraBusqueda;
