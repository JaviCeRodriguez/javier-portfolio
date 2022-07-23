---
title: 'Firebase CRUD con JS y HTML: Read, Update y Delete'
metaTitle: 'Firebase CRUD con JS y HTML: Read, Update y Delete'
metaDesc: 'En la segunda parte de este proyecto, terminaremos de implementar las otras funciones (Read, Update y Delete), siguiendo dando estilos con Bootstrap. Al final de este artículo, tendremos una app funcional para guardar, editar o borrar tareas.'
socialImage: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/styj42ffb2v9o1sua2c9.png'
date: '2021-04-02'
tags:
  - Firebase
  - Javascript
  - HTML
---
En la segunda parte de este proyecto, terminaremos de implementar las otras funciones (Read, Update y Delete), siguiendo dando estilos con Bootstrap. Al final de este artículo, tendremos una app funcional para guardar, editar o borrar tareas.

## __1. Leamos datos__
🟨 Agreguemos otro cachito de código a nuestro script para que pueda leer datos. Para esto, vamos a necesitar tener algún "container" en nuestro archivo html para poder contener todas las tareas, y debe ser con un `id`. En mi caso, pongo esto debajo del form:
```html
<div id="task_todo">
</div>
```
Y luego desde el script, obtengo el elemento e inserto los datos consultados de la DB (pongo todo el script entero, ya que hice un par de cambios de nombres con respecto al anterior artículo):
```js
const db = firebase.firestore();

const todoForm = document.getElementById('todo_form');
const taskToDo = document.getElementById('task_todo');

const createTask = (name, url, description) => {
    db.collection('tasks').doc().set({
        name,
        url,
        description
    });
};

const getTasks = (callback) => db.collection('tasks').onSnapshot(callback);

window.addEventListener('DOMContentLoaded', async (e) => {
    getTasks((querySnapshot) => {
        taskToDo.innerHTML = '';
        querySnapshot.forEach(doc => {
            console.log(doc.data());
            const if_url = `<a href="${doc.data().url}">URL de tarea</a>` 
            taskToDo.innerHTML += `
                <div>
                    <h4>${doc.data().name}</h4>
                    <p>${doc.data().description}</p>
                    ${doc.data().url ? 
                        if_url
                        : ''
                    }
                </div>
            `
        });
    });
});

todoForm.addEventListener('submit', async e => {
    e.preventDefault();
    const name = todoForm['todo_name'].value;
    const url = todoForm['todo_url'].value;
    const description = todoForm['todo_description'].value;

    await createTask(name, url, description); // Llamo a mi función create
    todoForm.reset(); // Reseteamos los campos
});
```
🟨 Como el campo de URL es *opcional*, entonces coloco un condicional `if in line` para insertar o no una etiqueta `a`.
Estas tareas se visualizan utilizando `window.addEventListener('DOMContentLoaded', ... )`, dando uso del método `onSnapshot` que nos brinda Firebase para actualizar únicamente si hay nuevos datos.
Visualmente nos quedaría así:
![Leer tareas](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/p9ysqlcs7sk6yvi8dwfw.jpg)

## __2. Eliminemos datos__
🟨 Tener tantas tareas es medio molesto, no? Ahora agreguemos dos botones: *Eliminar* y *Editar*. Ahora solo laburaremos para el botón Eliminar.
Estos botones los agregamos dentro de `innerHTML` que usamos al leer datos, quedaría así (agrego un par de estilos de Bootstrap de paso):
```js
const deleteTask = id => db.collection('tasks').doc(id).delete();

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
        });
    });
});
```
🟨 Al leer cada documento, guardamos los datos en `doc`. Con `doc.data()` obtenemos la información que guardamos y con `doc.id` obtenemos el id generado para cada documento. Esto último nos sirve para identificar cada par de buttons.
Cuando escucho los eventos `click` en los buttons *Eliminar*, me fijo el id puesto en `data-id` y llamo a la función `deleteTask` para eliminar la tarea del button accionado.
Nos queda algo así:
![Eliminar tareas](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5f7a2novpizgxwdd3qb5.jpg)

## __3. Editemos datos__
🟨 Para terminar, tenemos que crear la funcionalidad de editar las tareas para hacer. Es similar a lo que hicimos para eliminar, solo que deseamos que nos aparezca los datos en el formulario y luego enviar los datos actualizados. A modo de listado de lo que debemos implementar, sería:
- Obtener el id del botón accionado
- Cambiar el texto del botón del form por "Editar"
- Obtener los valores de cada campo del form
- Enviar estos datos a Firebase, usando el id del botón
- Cambiar el texto del botón del form por "Guardar"

🟨 Teniendo en cuenta esto, debemos crear un par de variables para cambiar entre el estado Editar y Guardar, las cuales llamaremos `editState` y `id`.
El código final sería este:
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
Al apretar uno de los botones Editar de las tareas, tenemos esto:
![Editar tarea](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/avs2kal4y1q9n379i95b.jpg)

---

Ahora mismo tenemos una aplicación web funcionando. Hay varias cosas para editar y que en esta serie de artículos no tendremos en cuenta:
- Cualquiera puede editar, guardar y eliminar datos.
- No hay autenticación.
- Diseño no es responsive.
- Otras más pero no graves.
Si leemos la documentación de Firebase, podemos solucionar gran parte del problema (agregando autenticación, reglas en la DB y demás).

En el próximo y último artículo, haremos el deploy para tenerlo en línea!