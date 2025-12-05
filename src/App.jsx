import { Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import DetallePelicula from "./paginas/DetallePelicula";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/pelicula/:id" element={<DetallePelicula />} />
      </Routes>
    </>
  );
}

export default App;
