import { useState } from 'react';
import { Link } from 'react-router-dom';
import ClientesCrud from '../services/PostClientes'
import '../style/FormClientes.css'

function FormClientes() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState('');   

  const cargarNombre =(e) => {
      setNombre(e.target.value)
  }

  const cargarApellido =(e) => {
      setApellido(e.target.value)
  }

  const cargarEmail =(e) => {
      setEmail(e.target.value)
  }

  const cargarTelefono =(e) => {
      setTelefono(e.target.value)
  }

  const cargarClave =(e) => {
      setClave(e.target.value)
  }

  const cargar = async (e) => {
    e.preventDefault();
    setError(''); // Reiniciar el mensaje de error
    // Validación de campos vacíos
    if (!nombre || !apellido || !email || !telefono || !clave) {
      setError('Por favor complete todos los campos.');
      return;
    }
    // Validación de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor ingrese un email válido.');
      return;
    }
    // Validación de número de teléfono (suponiendo que debe ser de 10 dígitos)
    const telefonoRegex = /^\d{10}$/;
    if (!telefonoRegex.test(telefono)) {
      setError('El teléfono debe tener 10 dígitos.');
      return;
    }
    // Validación de longitud de clave
    if (clave.length < 6) {
      setError('La clave debe tener al menos 6 caracteres.');
      return;
    }
    const res = await ClientesCrud.PostClientes(nombre, apellido, email, telefono, clave);
    console.log("Soy la respuesta del server", res);
}


  return (
    <div>
   <form className="formulario">
  <div className="form-group">
    <label className="form-label" form="nombre">Ingrese su nombre</label>
    <input type="text" id="nombre" className="form-input" onChange={cargarNombre} value={nombre} />
  </div>
  <div className="form-group">
    <label className="form-label" form="apellido">Ingrese su apellido</label>
    <input type="text" id="apellido" className="form-input" onChange={cargarApellido} value={apellido} />
  </div>
  <div className="form-group">
    <label className="form-label" form="email">Ingrese su email</label>
    <input type="text" id="email" className="form-input" onChange={cargarEmail} value={email} />
  </div>
  <div className="form-group">
    <label className="form-label" form="telefono">Ingrese su numero telefonico</label>
    <input type="text" id="telefono" className="form-input" onChange={cargarTelefono} value={telefono} />
  </div>
  <div className="form-group">
    <label className="form-label" form="clave">Ingrese su clave</label>
    <input type="text" id="clave" className="form-input" onChange={cargarClave} value={clave} />
  </div>
  {error && <p className="error-message">{error}</p>}
  <button className="form-button" onClick={cargar}>Guardar Datos</button>
  <Link to="/" className="button">Volver al Inicio</Link>
</form>

    </div>
  )
}

export default FormClientes