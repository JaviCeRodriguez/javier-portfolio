---
title: 'Firebase CRUD con JS y HTML: Deploy'
metaTitle: 'Firebase CRUD con JS y HTML: Deploy'
metaDesc: 'Este es el último artículo y aquí veremos como hacer el deploy del proyecto.
Una cosa a tener en cuenta es que, como ya se habrán dado cuenta, estamos trabajando sobre una página estática (static page) y no podríamos hacer ciertas tareas propias de una dinámica estilo React. Para esto, vamos a tener que editar un poco nuestro proyecto para poder realizar el deploy.
Vamos a utilizar: Node.js, Express y Firebase CLI para utilizar el servicio de Hosting.'
socialImage: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4umh9mhrgj19fwtwo73o.png'
date: '2021-04-06'
tags:
  - Firebase
  - Javascript
  - HTML
---

Este es el último artículo y aquí veremos como hacer el deploy del proyecto.
Una cosa a tener en cuenta es que, como ya se habrán dado cuenta, estamos trabajando sobre una página estática (static page) y no podríamos hacer ciertas tareas propias de una dinámica estilo React. Para esto, vamos a tener que editar un poco nuestro proyecto para poder realizar el deploy.
Vamos a utilizar: Node.js, Express y Firebase CLI para utilizar el servicio de Hosting.

# __1. Estructura__
🟨 Debemos mejorar un poco la estructura, la vamos a organizar así:
```
./public
    |--> index.html
    |--> js
         |--> getDataForm.js
         |--> firebase_config.js
.gitignore
server.js
```
Creamos 3 archivos nuevos: `firebase_config.js` (con la config dada al principio del proyecto), `.gitignore` (para subir cambios a GitHub excluyendo los archivos indicados dentro) y `server.js` (para tener un archivo principal, para que podamos iniciar el proyecto).

🟨 `server.js` lo definimos así:
```js
// Cargo modulos
const express = require('express');

// Inicio express
const app = express();

// Renderizo archivos estáticos de la carpeta public
app.use(express.static('public'));

// Puerto
app.listen(8080);
```
En este archivo importaremos Express para poder levantar un servidor de manera local y le indicamos que nuestros archivos estáticos están dentro de la carpeta public. Ahora, de donde importamos Express? Tranca, vamos a eso.

# __2. Iniciando proyecto con Node__
🟨 Deberíamos tener instalado previamente Node.js en nuestra computadora para esto. Si no lo tienen instalado, vayan directo a la página y descargan la versión LTS! Les dejo [link](https://nodejs.org/en/).
Ahora, una vez hecho lo anterior vamos a ejecutar en la consola (habiéndonos ubicados previamente en la ruta del proyecto) el siguiente comando: `npm init`. Con esto, crearemos las instancias para nuestro proyecto y podremos instalar los módulos necesarios. Nos va a crear un archivo llamado `package.json` en la raíz.
![init](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/77yitj2jxpwh1gnwdzvv.jpg)
No hace falta tipear nada, pero si quieren pueden colocar una descripción, una versión distinta, autor, etc. Si no, apretan para todo Enter.

🟨 Lo siguiente será instalar el módulo Express. Pero primero, ejecutados `npm install` para generar la carpeta `node_modules`, lugar donde se ubicarán todos los módulos usados.
Luego, simplemente debemos utilizar el comando `npm install express --save` y el `package.json` se va a actualizar con la nueva dependencia.

🟨 Probamos nuestro proyecto. Pero primero les muestro nuestro estado actual en cada archivo:
- ./public/index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <title>ToDo de Javo</title>
</head>
<body class="container">
    <main class="row justify-content-start">
        <div class="container m-1 col-8 p-4 border border-danger rounded">
            <form id="todo_form">
                <label for="todo_name" class="form-label">Nombre de tarea</label>
                <div class="input-group mb-3">
                    <span class="input-group-text">🏷</span>
                    <input type="text" id="todo_name" placeholder="Nombre de tarea" class="form-control" required>
                </div>
    
                <label for="todo_url" class="form-label">URL (opcional)</label>
                <div class="input-group mb-3">
                    <span class="input-group-text">🔗</span>
                    <input type="url" id="todo_url" placeholder="URL (opcional)" class="form-control">
                </div>
    
                <label for="todo_description" class="form-label">Descripción de tarea</label>
                <div class="input-group mb-3">
                    <span class="input-group-text">📝</span>
                    <textarea rows="1" id="todo_description" placeholder="Descripción" class="form-control" required></textarea>
                </div>
                <div class="">
                    <button type="submit" id='btn_todo_form' class="btn btn-danger col-12">Guardar</button>
                </div>
            </form>
        </div>
        <div id="task_todo">

        </div>
    </main>

    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js"></script>

    <!-- TODO: Add SDKs for Firebase products that you want to use
        https://firebase.google.com/docs/web/setup#available-libraries -->
    <script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-firestore.js"></script>

    <script src="./js/firebase_config.js"></script>
    <script src="./js/getDataForm.js"></script>
</body>
</html>
```

- ./public/js/getDataForm.js
```js
const db = firebase.firestore();

const todoForm = document.getElementById('todo_form');
const taskToDo = document.getElementById('task_todo');

let editState = false;
let id = '';

const createTask = (name, url, description) => {
    db.collection('tasks').doc().set({
        name,
        url,
        description
    });
};

const getTask = id => db.collection('tasks').doc(id).get();

const getTasks = (callback) => db.collection('tasks').onSnapshot(callback);

const deleteTask = id => db.collection('tasks').doc(id).delete();

const updateTask = (id, updatedTask) => db.collection('tasks').doc(id).update(updatedTask);

window.addEventListener('DOMContentLoaded', async (e) => {
    getTasks((querySnapshot) => {
        taskToDo.innerHTML = '';
        querySnapshot.forEach(doc => {
            const if_url = `<a href="${doc.data().url}">URL de tarea</a>` 
            taskToDo.innerHTML += `
                <div class="card my-2 p-2">
                    <h4>${doc.data().name}</h4>
                    <p>${doc.data().description}</p>
                    ${doc.data().url ? 
                        if_url
                        : ''
                    }
                    <div>
                        <button class="btn btn-secondary btn-edit" data-id="${doc.id}">Editar</button>
                        <button class="btn btn-primary btn-delete" data-id="${doc.id}">Eliminar</button>
                    </div>
                </div>
            `;

            const deleteButtons = document.querySelectorAll('.btn-delete');
            deleteButtons.forEach(btn => {
                btn.addEventListener('click', async (e) => {
                    await deleteTask(e.target.dataset.id);
                })
            })

            const editButtons = document.querySelectorAll('.btn-edit');
            editButtons.forEach(btn => {
                btn.addEventListener('click', async (e) => {
                    const doc = await getTask(e.target.dataset.id);
                    const task = doc.data();

                    editState = true;
                    id = doc.id;

                    todoForm['todo_name'].value = task.name;
                    todoForm['todo_url'].value = task.url;
                    todoForm['todo_description'].value = task.description;
                    todoForm['btn_todo_form'].innerHTML = 'Editar';
                })
            })
        });
    });
});

todoForm.addEventListener('submit', async e => {
    e.preventDefault();
    const name = todoForm['todo_name'].value;
    const url = todoForm['todo_url'].value;
    const description = todoForm['todo_description'].value;

    if (!editState) {
        await createTask(name, url, description); // Llamo a mi función create
    } else {
        await updateTask(id, {name, url, description});
        editState = false;
        id = '';
        todoForm['btn_todo_form'].innerHTML = 'Guardar';
    }

    todoForm.reset(); // Reseteamos los campos
});
```

- ./public/js/firebase_config.js
```js
var firebaseConfig = {
    apiKey: "sarasa",
    authDomain: "sarasa",
    projectId: "sarasa",
    storageBucket: ""sarasa",
    messagingSenderId: "sarasa",
    appId: "sarasa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
```

- .gitignore
```
node_modules
.env
public/js/firebase_config.js
.firebase
```

- ./server.js
```js
// Cargo modulos
const express = require('express');

// Inicio express
const app = express();

// Renderizo archivos estáticos de la carpeta public
app.use(express.static('public'));

// Puerto
app.listen(8080);
```

Luego de chequear que tengamos todo bien, ejecutamos `npm start` y luego entramos a nuestro navegador a través de `http://localhost:8080/`. Deberíamos ver que está todo en orden y funcionando. Perfecto! Ahora podemos seguir avanzando.

# __3. Deploy a Firebase__
El sitio más fácil para usar como hosting es Firebase. Falta poquito!
🟨 Vamos a Firebase y seleccionamos el servicio **Hosting**. Una vez dentro, veremos lo siguiente:
![CLI](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/67o5kxogmlm4x5g21gc3.jpg)
Ejecutamos ese comando en consola para tener las herramientras de Firebase CLI. También, si quieren, seleccionan el checkbox para ver como agregar el SDK de Firebase aunque ya lo hemos hecho y lo tenemos integrado en nuestro proyecto.

🟨 En el siguiente paso, nos va a pedir inicializar el proyecto. Ejecutamos `firebase login` y nos pedirá autenticarnos mediante un enlace. Luego ejecutamos `firebase init` y veremos lo siguiente:
![firebase init](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w2n5yalirag8cte8arp5.jpg)
Seleccionamos el servicio Hosting y luego aparecerá esto:
![config project](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oxw4n63pa0rzp4knvlv2.jpg)
Básicamente, indicamos que queremos utilizar el Hosting con un proyecto existente y seteamos la configuración del hosting. Lean con atención!
También pueden sincronizar los cambios con un repositorio de GitHub, en mi caso no quiero eso.

🟨 Una vez hecho esto, ejecutamos el último paso: `firebase deploy`:
![deploy](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tgtjt2p5jrw6vtynnow8.jpg)

---

Listo! Deberíamos poder ver nuestra página en el enlace que nos proporciona, en mi caso es [este](https://todo-crud-javo.web.app)
Si llegaste hasta este punto, felicidades!

Ahora, qué falta? Lo ideal sería colocar autenticación, pero el proyecto ya se agrandaría demasiado y no es el objetivo de estos artículos.
Esto mismo se puede realizar en React o algún otro framework que tenga más dinamismo en las páginas, pero hay alternativas mejores de Hosting, estructura y demás. En un futuro explicaré sobre esto con más detalle.
