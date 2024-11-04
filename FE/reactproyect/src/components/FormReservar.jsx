import { useState } from "react";
import { Link } from 'react-router-dom';
import '../style/FormReservar.css';
function FormReservar() {
    const [fechareserva, setFechareserva] = useState('');
    const [horainicio, setHorainicio] = useState('');
    const [horaretiro, setHoraretiro] = useState('');
    const [personas, setPersonas] = useState('');
    const [fechacreacion, setFechacreacion] = useState('');    
    const [fechamodificacion, setFechamodificacion] = useState('');
    const [error, setError] = useState('');
    const cargarNombre = (e) => setFechareserva(e.target.value);
    const cargarHorainicio = (e) => setHorainicio(e.target.value);
    const cargarHoraretiro = (e) => setHoraretiro(e.target.value);
    const cargarPersonas = (e) => setPersonas(e.target.value);
    const cargarFechacreacion = (e) => setFechacreacion(e.target.value);
    const cargarFechamodificacion = (e) => setFechamodificacion(e.target.value);
    const validarFecha = (fecha) => {
        const re = /^\d{4}-\d{2}-\d{2}$/; // Formato YYYY-MM-DD
        return re.test(fecha);
    };
    const validarHora = (hora) => {
        const re = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/; // Formato HH:MM
        return re.test(hora);
    };
    const cargar = (e) => {
        e.preventDefault();
        setError(''); // Reiniciar el mensaje de error
        // Validación de campos vacíos
        if (!fechareserva || !horainicio || !horaretiro || !personas || !fechacreacion || !fechamodificacion) {
            setError('Por favor complete todos los campos.');
            return;
        }
        // Validación de formato de fecha
        if (!validarFecha(fechareserva) || !validarFecha(fechacreacion) || !validarFecha(fechamodificacion)) {
            setError('Por favor ingrese fechas válidas (YYYY-MM-DD).');
            return;
        }
        // Validación de formato de hora
        if (!validarHora(horainicio) || !validarHora(horaretiro)) {
            setError('Por favor ingrese horas válidas (HH:MM).');
            return;
        }
        // Validación de personas
        const numPersonas = parseInt(personas, 10);
        if (isNaN(numPersonas) || numPersonas <= 0) {
            setError('Ingrese un número válido de personas.');
            return;
        }
        // Aquí puedes manejar la lógica de envío de datos
        console.log("Datos de reserva:", { fechareserva, horainicio, horaretiro, personas, fechacreacion, fechamodificacion });
    };
    return (
        <div>
            <form className="form-reserva" onSubmit={cargar}>
                <h2 className="form-title">Reservas</h2>
                
                <div className="form-group">
                    <label className="form-label" htmlFor="fechareserva">Ingrese la fecha de su reserva</label>
                    <input type="text" id="fechareserva" className="form-input" value={fechareserva} onChange={cargarNombre} />
                </div>
                
                <div className="form-group">
                    <label className="form-label" htmlFor="horainicio">Ingrese la hora de inicio</label>
                    <input type="text" id="horainicio" className="form-input" value={horainicio} onChange={cargarHorainicio} />
                </div>
                
                <div className="form-group">
                    <label className="form-label" htmlFor="horaretiro">Ingrese la hora de su retiro</label>
                    <input type="text" id="horaretiro" className="form-input" value={horaretiro} onChange={cargarHoraretiro} />
                </div>
                
                <div className="form-group">
                    <label className="form-label" htmlFor="personas">Ingrese cuántas personas son</label>
                    <input type="text" id="personas" className="form-input" value={personas} onChange={cargarPersonas} />
                </div>
                
                <div className="form-group">
                    <label className="form-label" htmlFor="fechacreacion">Ingrese la fecha en que está haciendo la reservación</label>
                    <input type="text" id="fechacreacion" className="form-input" value={fechacreacion} onChange={cargarFechacreacion} />
                </div>
                
                <div className="form-group">
                    <label className="form-label" htmlFor="fechamodificacion">Ingrese la fecha en que está haciendo la modificación</label>
                    <input type="text" id="fechamodificacion" className="form-input" value={fechamodificacion} onChange={cargarFechamodificacion} />
                </div>
                
                {error && <p className="error-message">{error}</p>}
                <button className="form-button">Guardar Datos</button>
                <Link to="/" className="button">Volver al Inicio</Link>
            </form>
        </div>
    );
}

export default FormReservar