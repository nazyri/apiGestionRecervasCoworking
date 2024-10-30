import { useState } from "react"


function FormReservar() {
    const [fechareserva, setFechareserva] = useState('');
    const [horainicio, setHorainicio] = useState('');
    const [horaretiro, setHoraretiro] = useState('');
    const [personas, setPersonas] = useState('');
    const [fechacreacion, setFechacreacion] = useState('');    
    const [fechamodificacion, setFechamodificacion] = useState('');

    const cargarNombre =(e) => {
        setFechareserva(e.target.value)
    }

    const cargarHorainicio =(e) => {
        setHorainicio(e.target.value)
    }

    const cargarHoraretiro =(e) => {
        setHoraretiro(e.target.value)
    }

    const cargarPersonas =(e) => {
        setPersonas(e.target.value)
    }

    const cargarFechacreacion =(e) => {
        setFechacreacion(e.target.value)
    }

    const cargarFechamodificacion =(e) => {
        setFechamodificacion(e.target.value)
    }

  return (
    <div>
      <form>
      <label>Ingrese la fecha de su reserva</label>
      <br />
      <input type="text" value={fechareserva} id='fechareserva' onChange={cargarNombre}/>
      <br />
      <label>Ingrese la hora de inicio</label>
      <br />
      <input type="text" value={horainicio} id='horainicio' onChange={cargarHorainicio}/>
      <br />
      <label>Ingrese la hora de su retiro</label>
      <br />
      <input type="text" value={horaretiro} id='horaretiro' onChange={cargarHoraretiro}/>
      <br />
      <label>Ingrese cuantas personas son</label>
      <br />
      <input type="text" value={personas} id='personas' onChange={cargarPersonas}/>
      <br />
      <label>Ingrese la fecha en que esta haciendo la reservacion</label>
      <br />
      <input type="text" value={fechacreacion} id='fechacreacion' onChange={cargarFechacreacion}/>
      <br />
      <label>Ingrese la fecha en que esta haciendo la modificacion</label>
      <br />
      <input type="text" value={fechamodificacion} id='fechamodificacion' onChange={cargarFechamodificacion}/>
      <br />
      <button>Guardar Datos</button>
    </form>
    </div>
  )
}

export default FormReservar
