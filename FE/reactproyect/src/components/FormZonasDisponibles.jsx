import { useState } from "react";
import { Link } from 'react-router-dom';
import '../style/FormZonasDisponibles.css';
function FormZonasDisponibles() {
  const [oficinas, setOficinas] = useState('');
  const [salareuniones, setSalareuniones] = useState('');
  const [escritorios, setEscritorios] = useState('');
  const [error, setError] = useState('');
  const cargarOficinas = (e) => setOficinas(e.target.value);
  const cargarSalareuniones = (e) => setSalareuniones(e.target.value);
  const cargarEscritorios = (e) => setEscritorios(e.target.value);
  const cargar = (e) => {
    e.preventDefault();
    setError(''); // Reiniciar el mensaje de error
    // Validación de campos vacíos
    if (!oficinas || !salareuniones || !escritorios) {
      setError('Por favor complete todos los campos.');
      return;
    }
    // Validación de que sean números enteros positivos
    const oficinaNum = parseInt(oficinas, 10);
    const salaNum = parseInt(salareuniones, 10);
    const escritorioNum = parseInt(escritorios, 10);
    if (isNaN(oficinaNum) || oficinaNum < 0) {
      setError('Ingrese un número válido para oficinas.');
      return;
    }
    if (isNaN(salaNum) || salaNum < 0) {
      setError('Ingrese un número válido para salas de reuniones.');
      return;
    }
    if (isNaN(escritorioNum) || escritorioNum < 0) {
      setError('Ingrese un número válido para escritorios.');
      return;
    }
    // Aquí puedes manejar la lógica de envío de datos
    console.log("Datos de zonas disponibles:", { oficinas, salareuniones, escritorios });
  };
  return (
    <div>
      <form className="formzonas" onSubmit={cargar}>
        <h2 className="form-title">Planificación de Espacios</h2>
        <div className="form-group">
          <label className="form-label" htmlFor="oficinas">¿Cuántas oficinas necesita?</label>
          <input type="text" id="oficinas" className="form-input" onChange={cargarOficinas} value={oficinas} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="salareuniones">¿Cuántas salas de reuniones necesita?</label>
          <input type="text" id="salareuniones" className="form-input" onChange={cargarSalareuniones} value={salareuniones} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="escritorios">¿Cuántos escritorios necesita?</label>
          <input type="text" id="escritorios" className="form-input" onChange={cargarEscritorios} value={escritorios} />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button className="form-button">Guardar Datos</button>
        <Link to="/" className="button">Volver al Inicio</Link>
      </form>
    </div>
  );
}
export default FormZonasDisponibles;