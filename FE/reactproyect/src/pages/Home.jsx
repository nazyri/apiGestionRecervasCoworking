import { Link } from 'react-router-dom';
import '../style/Home.css';

const Home = () => {
    return (
        <div className="container">
            <h1>Bienvenidos a Sistema de Gestión de Reservas de Espacios de Coworking</h1>
            <p>
                Permitimos gestionar la reserva de espacios en un centro de coworking. <br />
                Los usuarios pueden registrarse, iniciar sesión y reservar espacios disponibles por hora o día. 
            </p>
            <div className="button-container">
                <Link to="/Clientes" className="button">Clientes</Link>
                <Link to="/ZonasDisponibles" className="button">Zonas Disponibles</Link>
                <Link to="/Reservar" className="button">Reservar Espacios</Link>
                <Link to="/EstadoReservas" className="button">Estados de Reservas</Link>
                <Link to="/CancelarReserva" className="button">Cancelar Reservas</Link>
            </div>
        </div>
    );
};

export default Home;
