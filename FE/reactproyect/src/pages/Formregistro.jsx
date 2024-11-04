import React, { useState } from 'react'

function Formregistro() {
      const [nombreusuario, setNombreUsuario] =  useState('')
    const [apellidousuario, setApellidoUsuario] =  useState('')
    const [contrausuario, setContraUsuario] =  useState('')
    const [correousuario, setCorreoUsuario] =  useState('')

    if (nombreusuario === ''|| apellidousuario === ''|| contrausuario === ''|| correousuario === '') {
      alert('Por favor, rellene todos los espacios')
    }
    else{
      alert('Usuario registrado satisfactoriamente')
    }

    const valorNombre =(e) => {
      setNombreUsuario(e.target.value)
  }
  const valorApellido =(e) => {
    setApellidoUsuario(e.target.value)
}
const valorContra =(e) => {
  setContraUsuario(e.target.value)
}
const valorCorreo =(e) => {
  setCorreoUsuario(e.target.value)
}
const valorBoton =(e) => {
  setValorBoton(e.target.value)
}

    const datosUsuario ={
        nombre: nombreusuario,
        apellido: apellidousuario,
        contra: contrausuario,
        correo: correousuario,    
    }
 
    return (
    <div>
      <input onChange={valorNombre} type="text" placeholder='Nombre'/>
      <input onChange={valorApellido} type="text" placeholder='Apellidos'/>
      <input onChange={valorContra} type="password" placeholder='Contraseña'/>
      <input onChange={valorCorreo} type="email" placeholder='Correo'/>
      <button onClick={valorBoton}>Ingresar</button>

    </div>
  )
}

export default Formregistro

