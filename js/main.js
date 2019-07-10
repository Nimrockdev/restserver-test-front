var loading = document.getElementById('loading');
var mensaje = document.getElementById('mensaje');


// let salarios = [
//     { id: 1, salario: 1000 },
//     { id: 2, salario: 2000 },
//     { id: 3, salario: 3000 }
// ];


var boton = document.getElementById('helloWorld');
boton.addEventListener('click', function() {
    loading.style.display = 'block';
    axios.get('https://restserver-test-jsg.herokuapp.com/hw', {
            responseType: 'json'
        })
        .then(function(res) {
            if (res.status == 200) {
                console.log(res.data);
                mensaje.innerHTML = res.data;

            }
            console.log(res);
        })
        .catch(function(err) {
            console.log(err);
        })
        .then(function() {
            loading.style.display = 'none';
        });
});


var boton = document.getElementById('salarios');
boton.addEventListener('click', function() {
    loading.style.display = 'block';
    axios.get('https://restserver-test-jsg.herokuapp.com/salarios', {
            responseType: 'json',
        })
        .then(function(res) {
            if (res.status == 200) {
                // mensaje.innerHTML = JSON.stringify(res.data, undefined, 2);

                // function genera_tabla() {
                // Obtener la referencia del elemento body

                // let salario = JSON.stringify(res.data);
                let salario = (res.data);
                console.log(salario);

                var body = document.getElementsByTagName("body")[0];

                // Crea un elemento <table> y un elemento <tbody>
                var tabla = document.createElement("table");
                var tblBody = document.createElement("tbody");


                for (i in salario) {
                    x = salario[i].id + ' ' + salario[i].salario;
                    console.log(x);
                }
                var textoCelda = '';
                // Crea las celdas
                for (var i = 0; i < 10; i++) {
                    // Crea las hileras de la tabla
                    var hilera = document.createElement("tr");

                    for (var j = 0; j < 2; j++) {
                        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
                        // texto sea el contenido de <td>, ubica el elemento <td> al final
                        // de la hilera de la tabla
                        var celda = document.createElement("td");
                        if (j = 1) {
                            textoCelda = document.createTextNode(salario[i].id);
                            console.log(salario[i].id);
                        }
                        if (j = 2) {
                            textoCelda = document.createTextNode(salario[i].salario);
                            console.log(salario[i].salario);
                        }

                        // var textoCelda = document.createTextNode(salario[i].salario);

                        celda.appendChild(textoCelda);
                        hilera.appendChild(celda);
                    }

                    // agrega la hilera al final de la tabla (al final del elemento tblbody)
                    tblBody.appendChild(hilera);
                }

                // posiciona el <tbody> debajo del elemento <table>
                tabla.appendChild(tblBody);
                // appends <table> into <body>
                body.appendChild(tabla);
                // modifica el atributo "border" de la tabla y lo fija a "2";
                tabla.setAttribute("border", "2");
            }

            // }
            // console.log(res);
            // console.log(stock);
        })
        .catch(function(err) {
            console.log(err);
        })
        .then(function() {
            loading.style.display = 'none';
        });
});


var boton = document.getElementById('getTimeServiceData');
boton.addEventListener('click', function() {
    loading.style.display = 'block';
    axios.get('https://restserver-test-jsg.herokuapp.com/getTimeServiceData', {
            responseType: 'json',
        })
        .then(function(res) {
            if (res.status == 200) {
                // console.log(res);
                mensaje.innerHTML = JSON.stringify(res.data, undefined, 2);
                //mensaje.innerHTML = res.data.JSON;
            }
            console.log(res.data);
        })
        .catch(function(err) {
            console.log(err);
        })
        .then(function() {
            loading.style.display = 'none';
        });
});


var boton = document.getElementById('location');
let config = {
    headers: {
        location: "Castelldefels",
    }
}


boton.addEventListener('click', function() {
    loading.style.display = 'block';
    axios.get('https://restserver-test-jsg.herokuapp.com/location?location=Castelldefels', {
            responseType: 'json'
        })
        .then(function(res) {
            if (res.status == 200) {

                console.log(res.data);

                mensaje.innerHTML = JSON.stringify(res.data, undefined, 2);
            }
            console.log(res);
        })
        .catch(function(err) {
            console.log(err);
        })
        .then(function() {
            loading.style.display = 'none';
        });
});


var boton = document.getElementById('getTime');
boton.addEventListener('click', function() {
    loading.style.display = 'block';
    axios.get('https://restserver-test-jsg.herokuapp.com/Time', {
            responseType: 'json',

        })
        .then(function(res) {
            if (res.status == 200) {
                console.log(res.data);
                mensaje.innerHTML = JSON.stringify(res.data, undefined, 2);
            }
            console.log(res);
        })
        .catch(function(err) {
            console.log(err);
        })
        .then(function() {
            loading.style.display = 'none';
        });
});

var boton = document.getElementById('product');
boton.addEventListener('click', function() {
    loading.style.display = 'block';
    axios.get('https://restserver-test-jsg.herokuapp.com/products/', {
            responseType: 'json',

        })
        .then(function(res) {
            if (res.status == 200) {
                console.log(res.data);
                let productos = res.data;
                mensaje.innerHTML = JSON.stringify(productos, undefined, 2);
            }
            // console.log(res);
        })
        .catch(function(err) {
            console.log(err);
        })
        .then(function() {
            loading.style.display = 'none';
        });
});