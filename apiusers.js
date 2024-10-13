//Definimos la ruta de donde consultaremos los recursos
const API_URL = 'https://jsonplaceholder.typicode.com/'
//Obtenemos el elemento del DOM html donde arrojaremos la info
const HTMLResponse = document.querySelector('#app');
//creamos el elemento donde arrojaremos la info
const ul = document.createElement('ul');

fetch(`${API_URL}/users`)
      .then(response => response.json())
      .then((users) => {
        users.forEach((user) => {
            //creamos el elemento li para almacenar cada usuario en el ul
            let elem = document.createElement('li');
            elem.appendChild(
                document.createTextNode(`${user.name} / ${user.email} / ${user.phone} / ${user.company.name}`)
            );
            //Agregamos name dentro del li y dentro de ul
            ul.appendChild(elem);
        });
        //Al final agregamos el ul dentro del div obtenido
        HTMLResponse.appendChild(ul);
      })
      .catch((error) =>{
        console.error('error en la solicitud')
      })