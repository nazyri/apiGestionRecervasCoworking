import { useState } from "react";


function FormZonasDisponibles() {
  const [oficinas, setOficinas] = useState('');
  const [salareuniones, setSalareuniones] = useState('');
  const [escritorios, setEscritorios] = useState('');
   

  const cargarOficinas =(e) => {
      setOficinas(e.target.value)
  }

  const cargarSalareuniones =(e) => {
      setSalareuniones(e.target.value)
  }

  const cargarEscritorios =(e) => {
      setEscritorios(e.target.value)
  }


  return (
    <div>
    <form className="formzonas">
      <label>Cuantas oficinas necesita?</label>
      <br />
      <input type="text" id='oficinas' onChange={cargarOficinas} value={oficinas}/>
      <br />
      <label>Cuantas salas de reuniones necesita?</label>
      <br />
      <input type="text" id='salareuniones' onChange={cargarSalareuniones} value={salareuniones}/>
      <br />
      <label>Cuantos escritorios necesita?</label>
      <br />
      <input type="text" id='escritorios' onChange={cargarEscritorios} value={escritorios}/>
      <br />
      <button>Guardar Datos</button>
    </form>
    </div>
  )
}

export default FormZonasDisponibles
