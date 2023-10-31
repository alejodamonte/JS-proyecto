/* Simulador de descuentos */

/*
Es un simulador de compra de bolsas de cemento, cal y arena, el mismo tiene un sistema para aplicar un descuento dependiendo de la cantidad de bolsas totales compradas,
Si el usuario compra mas de 10 bolsas se hace un 5% de descuento.
Si el usuario compra mas de 20 bolsas se hace un 10% de descuento.
Si el usuario compra mas de 30 bolsas se hace un 15% de descuento.
Si el usuario compra mas de 40 bolsas se hace un 30% de descuento.
la aplicacion muestra el total, luego el precio que pagara con descuento y por ultimo la cantidad que se ahorro.

*/
let nombreInput = document.getElementById('nombre');
let tipoInput = document.getElementsByName('opcion');
let cantidadInput = document.getElementById('cantidad');
let agregarBtn = document.getElementById('agregar');
let terminarBtn = document.getElementById('terminar');
let guardarBtn = document.getElementById('guardar');
let listaCompras = document.querySelector('ol');
let mensaje = document.getElementById('mensaje');


let compras = [];

function agregarCompra() {

    let cantidad = parseInt(cantidadInput.value);
    let nombre = nombreInput.value;
    let tipoBolsa;

    for (let i = 0; i < tipoInput.length; i++) {
        if (tipoInput[i].checked) {
            tipoBolsa = tipoInput[i].value;
            break;
        }
    }

    mensaje.textContent = '';

    if (nombre && tipoBolsa && !isNaN(cantidad) && cantidad > 0) {
        compras.push({ nombre: nombreInput.value, tipoBolsa, cantidad });
        mensaje.style.color = 'green';
        mensaje.textContent += 'Se agrego su compra correctamente';
        cantidadInput.value = '';
    } else {
        mensaje.style.color = 'red';
        if (!nombre) {
            mensaje.textContent += '(Ingrese un nombre) ';
        }
        if (!tipoBolsa) {
            mensaje.textContent += '(Ingrese el tipo de bolsa) ';
        }
        if (isNaN(cantidad) || cantidad < 0) {
            mensaje.textContent += '(Ingrese una cantidad mayor 0) ';
        }
    }
    console.log(compras);
}

agregarBtn.addEventListener('click', agregarCompra);

terminarBtn.addEventListener('click', () => {
    let total = 0;
    let totalBolsas = 0;
    let nombreAbuscar = nombreInput.value;
    let nombreEncontrado = compras.filter((e) => e.nombre === nombreAbuscar);
    if (nombreEncontrado.length > 0) {
        nombreEncontrado.forEach(e => {
            if (e.tipoBolsa === 'Arena') {
                total += e.cantidad * 50;
            }
            if (e.tipoBolsa === 'Cal') {
                total += e.cantidad * 40;
            }
            if (e.tipoBolsa === 'Cemento') {
                total += e.cantidad * 30;
            }
            totalBolsas += e.cantidad;

        });
    }
    let descuento = 0;
    if (totalBolsas > 40) {
        descuento = 0.30;
    } else if (totalBolsas > 30) {
        descuento = 0.15;
    } else if (totalBolsas > 20) {
        descuento = 0.10;
    } else if (totalBolsas > 10) {
        descuento = 0.05;
    }


    let totalConDescuento = total - total * descuento;
    let totalAhorro = total * descuento;

    let resultados = `Total de bolsas: ${totalBolsas}\nTotal a pagar: $${total}\nTotal con Descuento: $${totalConDescuento}\nAhorro: $${totalAhorro}`;

    let nuevaCompra = document.createElement('li');
    nuevaCompra.innerText = resultados;
    listaCompras.append(nuevaCompra);
});


guardarBtn.addEventListener('click', () => {
    localStorage.setItem('compras', JSON.stringify(compras));
    alert('Compras guardadas correctamente.');
});


if (localStorage.getItem('compras')) {
    compras = JSON.parse(localStorage.getItem('compras'));
    compras.forEach(compra => {
        let nuevaCompra = document.createElement('li');
        nuevaCompra.textContent = `${compra.nombre} compró ${compra.cantidad} bolsas `;
        listaCompras.appendChild(nuevaCompra);
    });
}