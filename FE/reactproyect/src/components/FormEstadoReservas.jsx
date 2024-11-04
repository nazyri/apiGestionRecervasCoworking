import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/FormEstadosReservas.css'

const EstadoReservasForm = () => {
    const [estado, setEstado] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const ESTADO_OPCIONES = [
        { value: 'activa', label: 'Activa' },
        { value: 'cancelada', label: 'Cancelada' },
        { value: 'completada', label: 'Completada' },
        { value: 'pendiente', label: 'Pendiente' },
        { value: 'no_show', label: 'No Show' },
        { value: 'expirada', label: 'Expirada' },
    ];
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        // Validación del estado
        if (!estado) {
            setError('Por favor, selecciona un estado.');
            return;
        } else {
            setError(''); // Limpiar el error si todo está bien
        }
        try {
            const response = await fetch('/api/estados-reservas/', {
                method: 'POST', // Usamos POST para crear un nuevo recurso
                headers: {
                    'Content-Type': 'application/json', // Indicar que estamos enviando JSON
                },
                body: JSON.stringify({ estado }), // Convertimos el objeto a una cadena JSON
            });
            if (!response.ok) {
                const errorData = await response.json(); // Intentar obtener los datos de error (opcional)
                throw new Error(errorData.message || 'Error al guardar el estado'); // Lanzar un error con el mensaje adecuado
            }
            const data = await response.json(); // Obtener la respuesta JSON
            console.log('Estado guardado:', data); // Mostrar el estado guardado en la consola
            // Mensaje de éxito
            setSuccess('Estado guardado correctamente.');
            // Resetear el formulario
            setEstado('');
        } catch (error) {
            // Manejar errores
            setError(error.message);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <h1>Crear Estado de Reserva</h1>
            <div>
                <label htmlFor="estado">Estado:</label>
                <select
                    id="estado"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                >
                    <option value="">Selecciona un estado</option>
                    {ESTADO_OPCIONES.map((opcion) => (
                        <option key={opcion.value} value={opcion.value}>
                            {opcion.label}
                        </option>
                    ))}
                </select>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <button type="submit">Guardar</button>
            <Link to="/" className="button">Volver al Inicio</Link>
        </form>
    );
};
export default EstadoReservasForm;







