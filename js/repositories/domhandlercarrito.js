// Tabla de la página carrito.html

const arrayCarrito = JSON.parse(localStorage.getItem ("Carrito"));

let filasCarrito = document.getElementById("tabla-carrito-descripcion");
let totalCarrito = document.getElementById("tabla-carrito-total");

let total = 0;

for (const elemento of arrayCarrito) {

    let trcolumna = document.createElement ("tr");
    trcolumna.innerHTML = `<tr>
    <td>${elemento.nombre}</td>
    <td>${elemento.precio}</td>
    </tr>`;
    filasCarrito.appendChild(trcolumna);

    total = total + elemento.precio;
}

console.log (total)

let trColumnaTotal = document.createElement ("tr");
trColumnaTotal.innerHTML = `<tr>
<td>TOTAL</td>
<td>${total}</td>
</tr>`;
totalCarrito.appendChild (trColumnaTotal);
