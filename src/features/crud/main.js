//Desarrollar el insertar datos, editar, mostrar y eliminar en localStorage

const validateForm = () => {
    let email = document.getElementById("email").value;
    let name = document.getElementById("nombre").value;
    let doc = document.getElementById("documento").value;
    
    if (email === "" || name === "" || doc === "") {
        alert("Por favor, complete todos los campos obligatorios.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }
    return true;
}

function showData() {
    let listData;
    if (localStorage.getItem("listData") === null) {
        listData = [];
    } else {
        listData = JSON.parse(localStorage.getItem("listData"));
    }
    let html = "";

    listData.forEach(function (element, index) {
        html += `<tr>
                    <td>${element.email}</td>
                    <td>${element.name}</td>
                    <td>${element.doc}</td>
                    <td>
                        <button class="btn btn-warning btn-sm" onclick="editData(${index})">Editar</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteData(${index})">Eliminar</button>
                    </td>
                </tr>`;
    });
    document.getElementById("tableData").getElementsByTagName("tbody")[0].innerHTML = html;   
}

//Create Data
document.onload = showData();

function addData() {
    if (validateForm() == true) {
        let email = document.getElementById("email").value;
        let name = document.getElementById("nombre").value;
        let doc = document.getElementById("documento").value;

        let listData;
        if (localStorage.getItem("listData") === null) {
            listData = [];
        } else {
            listData = JSON.parse(localStorage.getItem("listData"));
        }
        listData.push({ email: email, name: name, doc: doc });
        localStorage.setItem("listData", JSON.stringify(listData));
        showData();

        document.getElementById("email").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("documento").value = "";
    }
}

/* ===== SOLO LO AGREGADO ===== */

function deleteData(index) {
    let listData = JSON.parse(localStorage.getItem("listData"));
    listData.splice(index, 1);
    localStorage.setItem("listData", JSON.stringify(listData));
    showData();
}

function editData(index) {
    let listData = JSON.parse(localStorage.getItem("listData"));

    document.getElementById("email").value = listData[index].email;
    document.getElementById("nombre").value = listData[index].name;
    document.getElementById("documento").value = listData[index].doc;
    document.getElementById("studentId").value = index;

    document.getElementById("btnAdd").style.display = "none";
    document.getElementById("btnUpdate").style.display = "block";
}

function updateData() {
    let listData = JSON.parse(localStorage.getItem("listData"));
    let index = document.getElementById("studentId").value;

    listData[index] = {
        email: document.getElementById("email").value,
        name: document.getElementById("nombre").value,
        doc: document.getElementById("documento").value
    };

    localStorage.setItem("listData", JSON.stringify(listData));
    showData();

    document.getElementById("studentForm").reset();
    document.getElementById("btnAdd").style.display = "block";
    document.getElementById("btnUpdate").style.display = "none";
}

/*

Actividad de Repaso JS
Diseñar un frontend que permita a los usuarios ingresar su correo electrónico, nombre y número de documento. Al hacer clic en un botón "Agregar", la información se debe almacenar en el almacenamiento local del navegador y mostrarse en una tabla. Cada vez que se agregue un nuevo registro, la tabla debe actualizarse automáticamente para reflejar los cambios.

Actividad 1: Agregar una función para eliminar y editar registros de la tabla. Cada fila de la tabla debe tener un botón "Eliminar" que, al hacer clic, elimine el registro correspondiente tanto de la tabla como del almacenamiento local.

Actividad 2: Validar que el correo electrónico y el número de documento sean únicos antes de agregar un nuevo registro. Si ya existe un registro con el mismo correo electrónico o número de documento, mostrar un mensaje de error y no agregar el nuevo registro.

Actividad 3: Callback
Agregar una descripción de Callbacks y luego implementar la siguiente función utilizando callbacks:
1. Dado los siquientes arrays:  
baseDatos1=[‘Canada’, ‘EUA’, ‘Mexico’,‘Ecuador, ‘Brazil’, ‘Argentina’, ‘Uruguay’]
baseDatos2 =[‘Japón’, ‘Irán’, ‘Corea del Sur’, ‘Alemania’, ‘Croacia’, ‘España’, ‘Inglaterra’]

Implementar una función busquedaBaseDatos1 que busque en baseDatos1 un país, y si lo encuentra retorne con un call back a la función encontrado la cual debe imprimir el mensaje ‘pais encontrado’.
Si el dato NO se encontró en baseDatos1 deberá retornar con un callback a la función busquedaBaseDatos2, y si lo encuentra retornar con un callback a la función encontrado la cual debe imprimir el mensaje ‘Pais encontrado’.
Si el dato NO se encontró en baseDatos2 deberá mostrar el mensaje ‘Dato no encontrado’


Actividad 4: Promises
Agregar una descripción de Promises y luego implementar la siguiente función utilizando Promises:

* Crear una promesa que reciba una cadena y si esta finaliza en vocal devolver con el resolve la vocal, en caso contrario en el reject retornar ‘el caracter no es una vocal’. Se deben tener encuenta las vocales en minúsculas y en mayúsculas.

Actividad 5: Async/Await
Agregar una descripción de Async/Await y luego implementar la siguiente función utilizando Async/Await:
* Crear una función asíncrona que reciba un número y retorne el doble del número después de 2 segundos. Utilizar async/await para manejar la promesa.

Actividad 6: Destructuring Objects
Agregar una descripción de Destructuring Objects y luego implementar la siguiente función utilizando Destructuring Objects:

* Dado el siguiente objeto:
const person = {
  name: 'Juan Carlos Valencia',
  age: 30,
  city: 'Cali',
  profession: 'Desarrollador'
};          
Utilizando destructuring, extraer el nombre, la edad y la profesión de la persona e imprimirlos.


*/