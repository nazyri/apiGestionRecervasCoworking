import { useState } from 'react';
import '../style/FormClientes.css'

function FormClientes() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [clave, setClave] = useState('');    

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

  return (
    <div>
    <form>
      <label>Ingrese su nombre</label>
      <br />
      <input type="text" id='nombre' onChange={cargarNombre} value={nombre}/>
      <br />
      <label>Ingrese su apellido</label>
      <br />
      <input type="text" id='apellido' onChange={cargarApellido} value={apellido}/>
      <br />
      <label>Ingrese su email</label>
      <br />
      <input type="text" id='email' onChange={cargarEmail} value={email}/>
      <br />
      <label>Ingrese su numero telefonico</label>
      <br />
      <input type="text" id='telefono' onChange={cargarTelefono} value={telefono}/>
      <br />
      <label>Ingrese su clave</label>
      <br />
      <input type="text" id='clave' onChange={cargarClave} value={clave}/>
      <br />
      <button>Guardar Datos</button>
    </form>
    </div>
  )
}

export default FormClientes
