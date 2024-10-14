// Datos de ejemplo de clientes
const clients = [
    { nombre: "Juan", apellidos: "Pérez", telefono: "555-1234", evento: "Boda" },
    { nombre: "Ana", apellidos: "García", telefono: "555-5678", evento: "Cumpleaños" },
    { nombre: "Carlos", apellidos: "López", telefono: "555-8765", evento: "Graduación" }
];

// Función para renderizar la lista de clientes
function renderClients(filteredClients) {
    const clientList = document.getElementById('client-list');
    clientList.innerHTML = '';  // Limpiar lista actual
    filteredClients.forEach(client => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="border p-2">${client.nombre}</td>
            <td class="border p-2">${client.apellidos}</td>
            <td class="border p-2">${client.telefono}</td>
            <td class="border p-2">${client.evento}</td>
        `;
        clientList.appendChild(row);
    });
}

// Mostrar todos los clientes al cargar la página
window.onload = function () {
    renderClients(clients);

    // Escuchar eventos de entrada en el campo de búsqueda
    const searchInput = document.querySelector('input[type="text"]');
    searchInput.addEventListener('input', function (event) {
        const searchTerm = event.target.value.toLowerCase();
        const filteredClients = clients.filter(client =>
            client.nombre.toLowerCase().includes(searchTerm) ||
            client.apellidos.toLowerCase().includes(searchTerm) ||
            client.telefono.includes(searchTerm) ||
            client.evento.toLowerCase().includes(searchTerm)
        );
        renderClients(filteredClients);
    });
};

