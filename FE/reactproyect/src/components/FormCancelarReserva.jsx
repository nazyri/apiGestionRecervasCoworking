import { useState } from "react";


function FormCancelarReserva() {
  const [fechacancelacion, setFechacancelacion] = useState('');
  const [motivo, setMotivo] = useState('');
  const [reserva, setReserva] = useState('');

  const cargarFechacancelacion =(e) => {
      setFechacancelacion(e.target.value)
  }

  const cargarMotivo =(e) => {
      setMotivo(e.target.value)
  }

  const cargarReserva =(e) => {
      setReserva(e.target.value)
  }

  return (
    <div>
          <form>
      <label>Ingrese su fecha de cancelacion</label>
      <br />
      <input type="text" id='fechacancelacion' onChange={cargarFechacancelacion} value={fechacancelacion}/>
      <br />
      <label>Ingrese el motivo de la cancelacion</label>
      <br />
      <input type="text" id='motivo' onChange={cargarMotivo} value={motivo}/>
      <br />
      <label>Ingrese su reserva</label>
      <br />
      <input type="text" id='reserva' onChange={cargarReserva} value={reserva}/>
      <br />
      <button>Guardar Datos</button>
    </form>
    </div>
  )
}

export default FormCancelarReserva
