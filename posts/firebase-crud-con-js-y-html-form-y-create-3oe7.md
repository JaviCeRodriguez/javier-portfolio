---
title: 'Firebase CRUD con JS y HTML: Form y Create'
metaTitle: 'Firebase CRUD con JS y HTML: Form y Create'
metaDesc: 'Vamos a estar realizando las funciones básicas para realizar las consultas a la base de datos. La palabra que resume esta oración es CRUD (Create, Read, Update, Delete).
Vamos a usar Bootstrap para adornar un poco y que nos vaya quedando más prolijo todo. Empecemos!'
socialImage: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ytlwf3q3w3t947n3l0qn.png'
date: '2021-03-28'
tags:
  - Firebase
  - Javascript
  - HTML
---
Hola! Luego de estar un tiempo ausente, vuelvo con una nueva serie de artículos para el siguiente proyecto: Una página ToDo List en HTML y JS, utilizando Firebase.
Para esto, vamos a estar realizando las funciones básicas para realizar las consultas a la base de datos. La palabra que resume esta oración es CRUD (Create, Read, Update, Delete).
Vamos a usar Bootstrap para adornar un poco y que nos vaya quedando más prolijo todo. Empecemos!

## __0. ¿Qué vamos a usar?__
En resumen, esto: Git, GitHub, VS Code, HTML, JavaScript, Firebase (Firestore y Hosting) y Bootstrap. Este proyecto se puede realizar de cualquier otra forma, el objetivo va a ser el mismo.

## __1. Creación de repositorio__
Hay varias formas de iniciar un proyecto, en mi caso voy a empezar creando el repositorio y luego clonarlo en mi PC.

🟨 Vamos a [GitHub](https://github.com/) y le damos clic en **New**
![New](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/trom1hn1f39olodl7j9i.jpg)
🟨 Tipeamos un nombre en **Repository name**, si quieren pueden agregar una **Description** y seleccionar si queremos agregar un **README**, un **.gitignore** y/o una **licencia**, esto podemos hacerlo después. Para el ejemplo, le voy a poner "ToDo Javo". Le damos clic en **Create repository**.
![Repository](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j0cso7c85rfhnf9b7ts5.jpg)
🟨 Una vez creado, vamos a **Code**, seleccionamos la pestaña **HTTPS** y copiamos el enlace del repositorio.
![Code](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/996fa3r7t7qwx5ync3h8.jpg)
🟨 Vamos a algún directorio específico que deseemos para clonar nuestro repositorio y tenerlo de manera local. Esto debemos hacerlo desde la consola (también está la opción de hacerlo desde GitHub Desktop, pero eso lo dejo para otro artículo 😉).
Una vez dentro de la carpeta desde la consola, tipeamos `git clone enlace_que_copiamos_antes`.
Una vez hecho esto, entramos a la carpeta creada y tipeamos `code .` si ya tienen [VS Code](https://code.visualstudio.com/download) instalado (si no, instalen ahora y luego entran desde VS Code)
![PowerShell](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v3uz0tvrx95zkzoktas0.jpg)

## __2. Creación de formulario__
🟨 Una vez clonado el repositorio, hacemos un formulario básico sin estilos. Este va a guardar en Firebase: Nombre de tarea (`todo_name`), Descripción (`todo_description`) y URL (`todo_url`)(opcional). Agregamos algunos id en el form y en el button. Guardamos los cambios y podemos ver esto con la extensión llamada [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
```html
<!-- index.html -->
<form id="todo_form">
    <div>
        <input type="text" id="todo_name" placeholder="Nombre de tarea">
    </div>
    <div>
        <input type="url" id="todo_url" placeholder="URL (opcional)">
    </div>
    <div>
        <textarea rows="4" id="todo_description" placeholder="Descripción"></textarea>
    </div>
    <button id='btn_todo_form'>Guardar</button>
</form>
```
![Form](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0eebq4sjr68zv148xmpe.jpg)

🟨 Ahora, queremos obtener la información del formulario a modo de testear que todo ande bien antes de pasar a Firebase. Para esto, necesitamos crear un script (lo llamaré `getDataForm.js`):
```js
// getDataForm.js
const todoForm = document.getElementById('todo_form');

todoForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = todoForm['todo_name'].value;
    const url = todoForm['todo_url'].value;
    const description = todoForm['todo_description'].value;
    console.log(name, url, description);
});
```
Luego, incluimos este script en nuestro `index.html`
```html
<!-- index.html -->
    <script src="./getDataForm.js"></script>
</body>
```
![Test Form](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ueaphtv6195hxlu1igs2.jpg)

## __3. Incluimos primeros estilos con Bootstrap__
Si seguimos sin estilos, nos vamos a aburrir. Vamos a la página de introducción a [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) y nos copiamos el CDN para obtener la librería en nuestro HTML (dentro del `head` va):
```html
<!-- index.html -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
```
Aplicamos los cambios y ya deberíamos ver unos cambios en el formato del formulario debido al CDN. Eso es buena señal que nos indica que hicimos todo bien.

Ahora viene la parte divertida (o por lo menos para mí): dar estilos!. Esto lo dejo a criterio de ustedes como lo van a hacer, en mi caso, lo dejo así:
```html
<!-- index.html -->
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
        <div class="container m-1 col-4 p-4 border border-danger rounded">
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
    </main>

    <script src="./getDataForm.js"></script>
</body>
</html>
```
![Form](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2sg58zkqbtw57hfz1dyl.jpg)

## __4. Configuración de Firebase.__
Llegó el momento de la estrella: Firebase. Vamos a configurar primero la base de datos y luego modificaremos el script para que se adquiera la info y la guarde.

🟨 Vamos a [Firebase](https://firebase.google.com/) (si es la primera vez que entran, deben usar una cuenta de Gmail). Ingresamos a **Ir a la consola** para empezar a crear una DB en línea.
![Firebase Home](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1viqd8ps7kaz9u8ostcs.jpg)
🟨 Creamos un nuevo proyecto desde **Agregar proyecto**
![Consola](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qphpl1u568ctcs8ef7uo.jpg)
🟨 Nos pedirá ingresar un nombre, yo lo llamaré todo-crud-javo (offtopic: miren el detalle de la derecha, sobresale el brazo)
![Nombre de DB](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/swv86krzsut8rt188pf5.jpg)
🟨 Luego nos mostrarán las opciones de agregar analíticas, deseleccionamos eso (no nos interesa ahora implementarlas) y luego le damos a **Crear proyecto**. Esperamos un momento a que termine de crearse y apretamos en **Continuar**.
![DB creada](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oskk4xldn3ues4fqizr9.jpg)
🟨 Esto nos redirecciona a la página de inicio de nuestro proyecto creado. Vamos al menú de la izquierda, seleccionamos **Firestore Database** y luego apretamos en **Crear base de datos**.
![Firestore](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sfkoe75cp35v248mqq4m.jpg)
🟨 En el modal que aparece, nos pide configurar las reglas de la DB. En resumen, con esto indicamos de que manera uno puede realizar las consultas a la DB de Firebase, con que permisos y etc. Por ahora, seleccionamos en **Comenzar en modo de prueba** para tener más libertad en las consultas y luego apretamos en **Siguiente**.
![Reglas](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hf5poneangsd52frwuba.jpg)
🟨 Luego nos pide elegir la ubicación de Firestore. Puede ser cualquiera en nuestro caso. Elegimos y luego apretamos en **Habilitar**. Listo! Tenemos creado Firestore.
🟨 Para obtener las credenciales, hacemos clic en un el engranaje y seleccionamos **Configuración del proyecto**
![Config](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q111o8q26vo0buescyhm.jpg)
🟨 Vamos a la sección de **Tus Apps** y seleccionamos la opción de Web App (3er ícono).
![Web App](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7trz6iezrydm2m0opop7.jpg)
🟨 Nos pedirán registrar al app: ingresamos un nombre que puede ser la misma que usamos antes para el proyecto. Luego hacemos clic en Registrar App.
🟨 Vamos a obtener un script con las credenciales. Por ahora lo copiamos y lo pegamos en nuestro HTML (antes del script que colocamos para le Form). Queremos asegurarnos de que funcione la comunicación (no compartas estas credenciales).
![Credenciales](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ksjrp4wwglcohk35hj1x.jpg)
🟨 Si miramos con atención, en los comentarios nos da una url con las librerías disponibles para Firebase. Nosotros queremos usar uno de los servicios que creamos anteriormente (Firestore). Por lo tanto, vamos a tener que importar la librería correspondiente.
Entramos al [enlace](https://firebase.google.com/docs/web/setup#available-libraries) que nos dan y veremos varias listas desplegables, abrimos la que dice **SDK de Firebase JS disponibles (de las URL de Hosting reservadas)** y vemos el script para completar:
```js
<script src="/__/firebase/8.2.10/firebase-firestore.js"></script>
```
🟨 Vamos a nuestro HTML, copiamos el script que importa la librería `firebase-app.js` y simplemente le cambiamos por la librería que vamos a importar. Nos quedaría así:
```html
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
    https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-firestore.js"></script>

<script>
// Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "sarasa",
        authDomain: "sarasa",
        projectId: "sarasa",
        storageBucket: "sarasa",
        messagingSenderId: "sarasa",
        appId: "sarasa"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
</script>
```

## __5. Crear datos__
🟨 Modifiquemos un "poco" nuestro script `getDataForm.js` para poder enviar los datos capturados del Form a Firestore. Antes explico un poco lo que haremos: la idea del ToDo es guardar tareas por hacer en Firestore de alguna forma. Si desearamos ingresar otro tipo de información en la misma DB, debemos usar **colecciones** (o **collections**). Las colecciones las podemos pensar como si fuesen carpetas que van a contener **documentos** con un **Id** que identificará la información almacenada.
Para nuestro caso, vamos a crear una colección llamada `tasks`.
```js
// getDataForm.js
const db = firebase.firestore();

const todoForm = document.getElementById('todo_form');

const create = (name, url, description) => {
    db.collection('tasks').doc().set({
        name,
        url,
        description
    })
}

todoForm.addEventListener('submit', async e => {
    e.preventDefault();
    const name = todoForm['todo_name'].value;
    const url = todoForm['todo_url'].value;
    const description = todoForm['todo_description'].value;

    await create(name, url, description); // Llamo a mi función create

    todoForm.reset(); // Reseteamos los campos
});
```
Y esto lo podemos ver en Firestore:
![Coleccion creada](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0dfbuo2medoomomwpdwb.jpg)

---

Perfecto! Ya tenemos un formulario que envía estos datos a Firebase. En el próximo artículo veremos como leerlos y mostrarlos. Saludos!