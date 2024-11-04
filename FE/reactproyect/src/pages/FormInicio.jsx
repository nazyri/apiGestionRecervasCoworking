import e from 'express';
import React from 'react'
import { useState } from 'react'

function FormInicio() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');  
    const [contra, setContra] = useState('');

    if (nombre === ''|| apellido === ''|| contra ==='') {
        alert('Por favor, rellene todos los espacios')
    }
    else{
        alert('Bienvenido')
    }

    const nombreValue =(e) =>{
        setNombre (e.target.value)
    }
    const apellidoValue =(e) =>{
        setApellido (e.target.value)
    }
    const contraValue =(e) =>{
        setContra (e.target.value)
    }
    const botonValue =(e) =>{
        setbotonValue (e.target.value)
    }

    return (
    <div>
      <input onChange={nombreValue} type="text" placeholder='Nombre'/>
      <input onChange={apellidoValue} type="text" placeholder='Apellidos'/>
      <input onChange={contraValue} type="password" placeholder='Contraseña'/>
      <button onClick={botonValue}>Ingresar</button>
    </div>
  )
}

export default FormInicio