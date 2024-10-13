// Definimos la ruta de donde consultaremos los recursos
const API_URL = 'https://jsonplaceholder.typicode.com/';
// Obtenemos el elemento del DOM html donde arrojaremos la info
const HTMLResponse = document.querySelector('#appphotos');
// Creamos el contenedor div donde arrojaremos las fotos
const divContainer = document.createElement('div');

fetch(`${API_URL}/photos`)
  .then(response => response.json())
  .then((photos) => {
    photos.forEach((photo) => {
      let photoDiv = document.createElement('div');
      let img = document.createElement('img');
      img.src = photo.thumbnailUrl; // Usamos thumbnailUrl para obtener la miniatura de la foto
      img.alt = photo.title; // Ponemos el título como texto alternativo

      let title = document.createElement('p');
      title.textContent = photo.title;

      photoDiv.appendChild(img);
      photoDiv.appendChild(title);

      divContainer.appendChild(photoDiv);
    });
    HTMLResponse.appendChild(divContainer);
  })
  .catch((error) => {
    console.error('error en la solicitud');
  });