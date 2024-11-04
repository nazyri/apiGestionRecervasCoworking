import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Clientes from '../pages/Clientes';
import Reservar from '../components/FormReservar'
import ZonasDisponibles from '../components/FormZonasDisponibles';
import CancelarReserva from '../pages/CancelarReserva'
import EstadoReservas from '../components/FormEstadoReservas';

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Clientes" element={<Clientes />} />
        <Route path="/Reservas" element={<Reservar />} />
        <Route path="/ZonasDisponibles" element={<ZonasDisponibles />} />
        <Route path="/EstadoReservas" element={<EstadoReservas />} />
        <Route path="/CancelarReserva" element={<CancelarReserva />} />
      </Routes>
    </Router>
  );
}

export default Routing;