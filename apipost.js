// Definimos la ruta de donde consultaremos los recursos
const API_URL = 'https://jsonplaceholder.typicode.com/';
// Obtenemos el elemento del DOM html donde arrojaremos la info
const HTMLResponse = document.querySelector('#appposts');
// Creamos el elemento tabla donde arrojaremos la información
const table = document.createElement('table');

// Creamos el encabezado de la tabla
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const headerTitle = document.createElement('th');
headerTitle.textContent = 'Encabezado';
const headerBody = document.createElement('th');
headerBody.textContent = 'Post';

// Agregamos las celdas de encabezado a la fila
headerRow.appendChild(headerTitle);
headerRow.appendChild(headerBody);
// Agregamos la fila de encabezado al thead
thead.appendChild(headerRow);
// Agregamos el encabezado a la tabla
table.appendChild(thead);

// Creamos el cuerpo de la tabla
const tbody = document.createElement('tbody');

fetch(`${API_URL}/posts`)
  .then(response => response.json())
  .then((posts) => {
    posts.forEach((post) => {
      // Creamos una fila por cada post
      let row = document.createElement('tr');

      // Creamos una celda para el título
      let titleCell = document.createElement('td');
      titleCell.textContent = post.title;

      // Creamos una celda para el cuerpo (body) del post
      let bodyCell = document.createElement('td');
      bodyCell.textContent = post.body;

      // Agregamos las celdas a la fila
      row.appendChild(titleCell);
      row.appendChild(bodyCell);

      // Agregamos la fila al cuerpo de la tabla
      tbody.appendChild(row);
    });
    // Agregamos el cuerpo de la tabla a la tabla
    table.appendChild(tbody);
    // Al final agregamos la tabla dentro del div obtenido
    HTMLResponse.appendChild(table);
  })
  .catch((error) => {
    console.error('error en la solicitud');
  });
