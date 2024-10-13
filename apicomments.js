//Definimos la ruta de donde consultaremos los recursos
const API_URL = 'https://jsonplaceholder.typicode.com/'
//Obtenemos el elemento del DOM html donde arrojaremos la info
const HTMLResponse = document.querySelector('#appcomments');
//creamos el elemento donde arrojaremos la info
const ol = document.createElement('ol');

fetch(`${API_URL}/comments`)
    .then(response => response.json())
    .then((comments) => {
        comments.forEach((comment) => {
            let elem = document.createElement('li');
            elem.appendChild(
              document.createTextNode(`${comment.name} || ${comment.body}`)
            );
            ol.appendChild(elem);
        });
        HTMLResponse.appendChild(ol);
    })
    .catch((error) =>{
        console.error('error en la solicitud')
    })