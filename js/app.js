//se declara la variable global que va a contener los datos     que se iran registrando
var data = [];
//funcion que se ejecuta al momento de cargar la pagina
window.onload = function() {
    //querySelector es una funcion parecida al getElement
    //esta permite usar selectores de css
    document.querySelector("#add").addEventListener("click", addRow);

}

function addRow() {
    var name = document.querySelector("#name");
    var lastname = document.querySelector("#lastname");
    //validacion para no registrar vacia la fila
    if (name.value == "") {
        alert("el nombre esta vacio");
        return
    }

    if (lastname.value == "") {
        alert("el apellido esta vacio");
        return
    }


    //seccion para agregar los datos al array json
    data.push({
        "identifier": data.length + 1,
        "name": name.value,
        "lastname": lastname.value
    });
    //invocar la funcion para mostrar los datos
    showData();

    //limpiar los campos para registrar una nueva fila
    name.value = "";
    lastname.value = "";
}

function showData() {
    //declaracion de una variable dummy para almacenar temporalmente los datos que se muestran en la tabla
    let tbody = "";

    //recorrriendo el array json
    for (i = 0; i < data.length; i++) {
        //se agregan las etiquetas correspondientes para las tablas
        tbody += "<tr>";
        tbody += "<td>" + data[i].identifier + "</td>";
        tbody += "<td>" + data[i].name + "</td>";
        tbody += "<td>" + data[i].lastname + "</td>";
        //se agrega un evento para invocar la funcion de remover una fila cuando se haga necesaria
        //pasando el indice del array como parametro
        tbody += "<td><a onclick=removeRow(" + i + ")>Eliminar</a></td>";
        tbody += "</tr>";
    }
    //se le agrega todo el contenido que se agrego a la variable temporal a la etiqueta tbody
    document.querySelector("tbody").innerHTML = tbody;
}


//funcion para remover una fila 
// recibe la posicion de la fila (agregada previamente en la etiqueta 'a')
function removeRow(position) {
    //mensaje de confirmacion para eliminar el registro
    if (confirm("Desea eliminar ese registro?")) {
        //splice: funcion para remover un indice de un array
        data.splice(position, 1);
    }
    //se invoca nuevamente la funcion para mostrar los datos
    //reemplazara la tabla con datos viejos y adjunta los datos del array
    //pero sin los datos que se han removido
    showData();
}