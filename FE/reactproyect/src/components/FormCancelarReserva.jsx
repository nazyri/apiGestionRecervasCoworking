import { useState } from "react";
import { Link } from 'react-router-dom';
import '../style/FormCancelarReserva.css';
function FormCancelarReserva() {
  const [fechacancelacion, setFechacancelacion] = useState('');
  const [motivo, setMotivo] = useState('');
  const [reserva, setReserva] = useState('');
  const [error, setError] = useState('');
  const cargarFechacancelacion = (e) => setFechacancelacion(e.target.value);
  const cargarMotivo = (e) => setMotivo(e.target.value);
  const cargarReserva = (e) => setReserva(e.target.value);
  const validarFecha = (fecha) => {
    const re = /^\d{4}-\d{2}-\d{2}$/; // Formato YYYY-MM-DD
    return re.test(fecha);
  };
  const cargar = (e) => {
    e.preventDefault();
    setError(''); // Reiniciar el mensaje de error
    // Validación de campos vacíos
    if (!fechacancelacion || !motivo || !reserva) {
      setError('Por favor complete todos los campos.');
      return;
    }
    // Validación de formato de fecha
    if (!validarFecha(fechacancelacion)) {
      setError('Por favor ingrese una fecha válida (YYYY-MM-DD).');
      return;
    }
    // Validación de longitud del motivo
    if (motivo.length < 5) {
      setError('El motivo debe tener al menos 5 caracteres.');
      return;
    }
    // Aquí puedes manejar la lógica de envío de datos
    console.log("Datos de cancelación:", { fechacancelacion, motivo, reserva });
  };
  return (
    <div>
      <form className="form-cancelacion" onSubmit={cargar}>
        <h2 className="form-title">Cancelación de Reserva</h2>
        
        <div className="form-group">
          <label className="form-label" htmlFor="fechacancelacion">Ingrese su fecha de cancelación</label>
          <input type="text" id="fechacancelacion" className="form-input" onChange={cargarFechacancelacion} value={fechacancelacion} />
        </div>
        
        <div className="form-group">
          <label className="form-label" htmlFor="motivo">Ingrese el motivo de la cancelación</label>
          <input type="text" id="motivo" className="form-input" onChange={cargarMotivo} value={motivo} />
        </div>
        
        <div className="form-group">
          <label className="form-label" htmlFor="reserva">Ingrese su reserva</label>
          <input type="text" id="reserva" className="form-input" onChange={cargarReserva} value={reserva} />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button className="form-button">Guardar Datos</button>
        <Link to="/" className="button">Volver al Inicio</Link>
      </form>
    </div>
  );
}
export default FormCancelarReserva;