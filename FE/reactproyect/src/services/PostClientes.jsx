async function PostClientes( nombre, apellido, email, telefono, clave ) {
    const token = localStorage.getItem('access_token');

    const valToken = "Bearer " + token;

    const clienteData = {
        nombre,
        apellido,
        email,
        telefono,
        clave
    };

    try {
        const response = await fetch('http://127.0.0.1:8000/api/clientes/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': valToken,
            },
            body: JSON.stringify(clienteData)
        });

        if (!response.ok) {
            throw new Error('Error al guardar el producto. Token invalido o expirado');
        }

        const nuevoCliente = await response.json();
        console.log('Cliente guardado:', nuevoCliente);
        return nuevoCliente;
    }   catch (error) {
        console.log('Error en la solicitud', error);
        throw error;
    }
}

export default {PostClientes}