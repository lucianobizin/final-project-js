const serviciosYProductos = [astrologia, talleres, tiradasDadosYRunas, tarot, eventos, productos];

/*Revisión de cómo acceder a cada servicio y producto (seryprod) y a sus propiedades

for (const elemento of serviciosYProductos) {
    for (const servyprod of elemento) {
        console.log(servyprod.id)
    }
}

*/

// 2. Se genera las subsecciones de venta de servicios y productos en servicios-productos.html

carrito = []

let tarjetasAstrologia = document.querySelector("#tarjetas-astrologia");

for (const elemento of astrologia) {

    let div = document.createElement("div");
    div.innerHTML =
        `<div class='card'> 
        <img class='card-img-top imagenes-tarjetas' src='../img/${elemento.imagen}' alt='Card image cap'> 
        <div class='card-body '> 
            <h5 class='card-title'>${elemento.nombre}</h5> 
            <p class='card-text'>Euros ${elemento.precio},00</p>
            <a href='#' class='btn btn-primary tamaño-boton' id='btn-comprar-${elemento.nombre.toLowerCase()}'>Comprar</a>
            <a href='#' class='btn btn-primary tamaño-boton' id='btn-info-${elemento.nombre.toLowerCase()}'>Más info</a>
            <a href='https://calendly.com/' class='btn btn-primary tamaño-boton' id='btn-agenda-${elemento.nombre.toLowerCase()}'>Agenda</a>
        </div>
    </div>`;
    tarjetasAstrologia.appendChild(div);

}

for (const elemento of astrologia) {

    let btnComprar = document.getElementById(`btn-comprar-${elemento.nombre.toLowerCase()}`)
    btnComprar.addEventListener('click', () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: '¿Estás segura/o de comprar este producto?',
            text: "Cualquier duda podés quitarlo del carrito",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, estoy segura/o!',
            cancelButtonText: 'Cancelar la selección!',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Se ha sumado el producto al carrito!'
                )

                carrito.push(elemento);
                // console.log(sumar(carrito));

                const enJSON = JSON.stringify(elemento);
                localStorage.setItem(`ProductoCarrito${elemento.nombre}`, enJSON);

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Se ha cancelado la adquisición'
                )
            }
        })
    })
}

for (const elemento of astrologia) {

    let btnComprar = document.getElementById(`btn-info-${elemento.nombre.toLowerCase()}`)
    btnComprar.addEventListener('click', () => {
        Swal.fire({
            title: 'Custom animation with Animate.css',
            text: `ID: ${elemento.id}, Nombre: ${elemento.nombre}, Precio: ${elemento.precio}, Entregable: ${elemento.entregable}, Entrega (días): ${elemento.diasParaEntrega}`,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    })
}

let tarjetasTarot = document.querySelector("#tarjetas-tarot");

for (const elemento of tarot) {

    let div = document.createElement("div");
    div.innerHTML =
        `<div class='card'> 
        <img class='card-img-top imagenes-tarjetas' src='../img/${elemento.imagen}' alt='Card image cap'> 
        <div class='card-body '> 
            <h5 class='card-title'>${elemento.nombre}</h5> 
            <p class='card-text'>Euros ${elemento.precio},00</p>
            <a href='#' class='btn btn-primary tamaño-boton' id='btn-comprar-${elemento.nombre.toLowerCase()}'>Comprar</a>
            <a href='#' class='btn btn-primary tamaño-boton' id='btn-info-${elemento.nombre.toLowerCase()}'>Más info</a>
            <a href='https://calendly.com/' class='btn btn-primary tamaño-boton' id='btn-agenda-${elemento.nombre.toLowerCase()}'>Agenda</a>
        </div>
    </div>`;
    tarjetasTarot.appendChild(div);

}

for (const elemento of tarot) {

    let btnComprar = document.getElementById(`btn-comprar-${elemento.nombre.toLowerCase()}`)
    btnComprar.addEventListener('click', () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: '¿Estás segura/o de comprar este producto?',
            text: "Cualquier duda podés quitarlo del carrito",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, estoy segura/o!',
            cancelButtonText: 'Cancelar la selección!',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Se ha sumado el producto al carrito!'
                )

                carrito.push(elemento);
                // console.log(sumar(carrito));

                const enJSON = JSON.stringify(elemento);
                localStorage.setItem(`ProductoCarrito${elemento.nombre}`, enJSON);

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Se ha cancelado la adquisición'
                )
            }
        })
    })
}

for (const elemento of tarot) {

    let btnComprar = document.getElementById(`btn-info-${elemento.nombre.toLowerCase()}`)
    btnComprar.addEventListener('click', () => {
        Swal.fire({
            title: 'Custom animation with Animate.css',
            text: `ID: ${elemento.id}, Nombre: ${elemento.nombre}, Precio: ${elemento.precio}, Entregable: ${elemento.entregable}, Entrega (días): ${elemento.diasParaEntrega}`,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    })
}

let tarjetasDadosRunas = document.querySelector("#tarjetas-dadosyrunas");

for (const elemento of tiradasDadosYRunas) {

    let div = document.createElement("div");
    div.innerHTML =
        `<div class='card'> 
        <img class='card-img-top imagenes-tarjetas' src='../img/${elemento.imagen}' alt='Card image cap'> 
        <div class='card-body '> 
            <h5 class='card-title'>${elemento.nombre}</h5> 
            <p class='card-text'>Euros ${elemento.precio},00</p>
            <a href='#' class='btn btn-primary tamaño-boton' id='btn-comprar-${elemento.nombre.toLowerCase()}'>Comprar</a>
            <a href='#' class='btn btn-primary tamaño-boton' id='btn-info-${elemento.nombre.toLowerCase()}'>Más info</a>
            <a href='https://calendly.com/' class='btn btn-primary tamaño-boton' id='btn-agenda-${elemento.nombre.toLowerCase()}'>Agenda</a>
        </div>
    </div>`;
    tarjetasDadosRunas.appendChild(div);

}

for (const elemento of tiradasDadosYRunas) {

    let btnComprar = document.getElementById(`btn-comprar-${elemento.nombre.toLowerCase()}`)
    btnComprar.addEventListener('click', () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: '¿Estás segura/o de comprar este producto?',
            text: "Cualquier duda podés quitarlo del carrito",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, estoy segura/o!',
            cancelButtonText: 'Cancelar la selección!',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Se ha sumado el producto al carrito!'
                )

                carrito.push(elemento);
                // console.log(sumar(carrito));

                const enJSON = JSON.stringify(elemento);
                localStorage.setItem(`ProductoCarrito${elemento.nombre}`, enJSON);

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Se ha cancelado la adquisición'
                )
            }
        })
    })
}

for (const elemento of tiradasDadosYRunas) {

    let btnComprar = document.getElementById(`btn-info-${elemento.nombre.toLowerCase()}`)
    btnComprar.addEventListener('click', () => {
        Swal.fire({
            title: 'Custom animation with Animate.css',
            text: `ID: ${elemento.id}, Nombre: ${elemento.nombre}, Precio: ${elemento.precio}, Entregable: ${elemento.entregable}, Entrega (días): ${elemento.diasParaEntrega}`,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    })
}

let tarjetasTalleres = document.querySelector("#tarjetas-talleres");

for (const elemento of talleres) {

    let div = document.createElement("div");
    div.innerHTML =
        `<div class='card'> 
        <img class='card-img-top imagenes-tarjetas' src='../img/${elemento.imagen}' alt='Card image cap'> 
        <div class='card-body '> 
            <h5 class='card-title'>${elemento.nombre}</h5> 
            <p class='card-text'>Euros ${elemento.precio},00</p>
            <a href='#' class='btn btn-primary tamaño-boton' id='btn-comprar-${elemento.nombre.toLowerCase()}'>Comprar</a>
            <a href='#' class='btn btn-primary tamaño-boton' id='btn-info-${elemento.nombre.toLowerCase()}'>Más info</a>
            <a href='https://calendly.com/' class='btn btn-primary tamaño-boton' id='btn-agenda-${elemento.nombre.toLowerCase()}'>Agenda</a>
        </div>
    </div>`;
    tarjetasTalleres.appendChild(div);

}

for (const elemento of talleres) {

    let btnComprar = document.getElementById(`btn-comprar-${elemento.nombre.toLowerCase()}`)
    btnComprar.addEventListener('click', () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: '¿Estás segura/o de comprar este producto?',
            text: "Cualquier duda podés quitarlo del carrito",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, estoy segura/o!',
            cancelButtonText: 'Cancelar la selección!',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Se ha sumado el producto al carrito!'
                )

                carrito.push(elemento);
                // console.log(sumar(carrito));

                const enJSON = JSON.stringify(elemento);
                localStorage.setItem(`ProductoCarrito${elemento.nombre}`, enJSON);

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Se ha cancelado la adquisición'
                )
            }
        })
    })
}

for (const elemento of talleres) {

    let btnComprar = document.getElementById(`btn-info-${elemento.nombre.toLowerCase()}`)
    btnComprar.addEventListener('click', () => {
        Swal.fire({
            title: 'Custom animation with Animate.css',
            text: `ID: ${elemento.id}, Nombre: ${elemento.nombre}, Precio: ${elemento.precio}, Duración: ${elemento.duracion}`,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    })
}

let tarjetasEventos = document.querySelector('#tarjetas-eventos');

for (const elemento of eventos) {

    let div = document.createElement('div');
    div.innerHTML =
        `<div class='card'> 
        <img class='card-img-top imagenes-tarjetas' src='../img/${elemento.imagen}' alt='Card image cap'> 
        <div class='card-body '> 
            <h5 class='card-title'>${elemento.nombre}</h5> 
            <p class='card-text'>Euros ${elemento.precio},00</p>
            <a href='#' class='btn btn-primary tamaño-boton' id='btn-comprar-${elemento.nombre.toLowerCase()}'>Comprar</a>
            <a href='#' class='btn btn-primary tamaño-boton' id='btn-info-${elemento.nombre.toLowerCase()}'>Más info</a>
            <a href='https://calendly.com/' class='btn btn-primary tamaño-boton' id='btn-agenda-${elemento.nombre.toLowerCase()}'>Agenda</a>
        </div>
    </div>`;
    tarjetasEventos.appendChild(div);

}


for (const elemento of eventos) {

    let btnComprar = document.getElementById(`btn-comprar-${elemento.nombre.toLowerCase()}`)
    btnComprar.addEventListener('click', () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: '¿Estás segura/o de comprar este producto?',
            text: "Cualquier duda podés quitarlo del carrito",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, estoy segura/o!',
            cancelButtonText: 'Cancelar la selección!',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Se ha sumado el producto al carrito!'
                )

                carrito.push(elemento);
                // console.log(sumar(carrito));

                const enJSON = JSON.stringify(elemento);
                localStorage.setItem(`ProductoCarrito${elemento.nombre}`, enJSON);

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Se ha cancelado la adquisición'
                )
            }
        })
    })
}

for (const elemento of eventos) {

    let btnComprar = document.getElementById(`btn-info-${elemento.nombre.toLowerCase()}`)
    btnComprar.addEventListener('click', () => {
        Swal.fire({
            title: 'Custom animation with Animate.css',
            text: `ID: ${elemento.id}, Nombre: ${elemento.nombre}, Precio: ${elemento.precio}, Descripción: ${elemento.descripción}, Fecha: ${elemento.fecha}, Hora: ${elemento.hora}, Lugar: ${elemento.lugar}`, 
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    })
}

let tarjetasProductos = document.querySelector("#tarjetas-productos");

for (const elemento of productos) {

    let div = document.createElement("div");
    div.innerHTML =
        `<div class='card'> 
        <img class='card-img-top imagenes-tarjetas' src='../img/${elemento.imagen}' alt='Card image cap'> 
        <div class='card-body '> 
            <h5 class='card-title'>${elemento.nombre}</h5> 
            <p class='card-text'>Euros ${elemento.precio},00</p>
            <a href='#' class='btn btn-primary tamaño-boton' id='btn-comprar-${elemento.nombre.toLowerCase()}'>Comprar</a>
            <a href='#' class='btn btn-primary tamaño-boton' id='btn-info-${elemento.nombre.toLowerCase()}'>Más info</a>
            <a href='https://calendly.com/' class='btn btn-primary tamaño-boton' id='btn-agenda-${elemento.nombre.toLowerCase()}'>Agenda</a>
        </div>
    </div>`;
    tarjetasProductos.appendChild(div);

}

for (const elemento of productos) {

    let btnComprar = document.getElementById(`btn-comprar-${elemento.nombre.toLowerCase()}`)
    btnComprar.addEventListener('click', () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: '¿Estás segura/o de comprar este producto?',
            text: "Cualquier duda podés quitarlo del carrito",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, estoy segura/o!',
            cancelButtonText: 'Cancelar la selección!',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Se ha sumado el producto al carrito!'
                )

                carrito.push(elemento);
                // console.log(sumar(carrito));

                const enJSON = JSON.stringify(elemento);
                localStorage.setItem(`ProductoCarrito${elemento.nombre}`, enJSON);

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Se ha cancelado la adquisición'
                )
            }
        })
    })
}

for (const elemento of productos) {

    let btnComprar = document.getElementById(`btn-info-${elemento.nombre.toLowerCase()}`)
    btnComprar.addEventListener('click', () => {
        Swal.fire({
            title: 'Custom animation with Animate.css',
            text: `ID: ${elemento.id}, Nombre: ${elemento.nombre}, Precio: ${elemento.precio}, Entregable: ${elemento.entregable}, Entrega (días): ${elemento.diasParaEntrega}`,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    })
}

// Guardar carrito como un array de objetos

let guardarCarritoLocalStorage = document.getElementById('ir-al-carrito');
guardarCarritoLocalStorage.addEventListener ('click', () => {

    const guardarLocalCarrito = (clave, valor) => {
        localStorage.setItem(clave, valor)
    }

    guardarLocalCarrito ("Carrito", JSON.stringify(carrito))


    // const enJSON = JSON.stringify(carrito);
    // localStorage.setItem(`Carrito`, enJSON);

})



















// const nombresh2 = ['Astrología', 'Tarot', 'Dados y runas', 'Eventos', 'Talleres', 'Productos'];

// let section = document.querySelector('#vta-astrologia');

// for (let i = 0; i < nombresh2.length; i++) {

//     let tituloSeccion = document.createElement ("div");
//     tituloSeccion.innerHTML = `<div class="titulo-subseccion" id=titulo-${nombresh2[i]}></div>`;
//     section.appendChild (tituloSeccion)

//     document.body.append(section)
// }

// let ol = document.querySelector('#carousel-indicators-astrologia');

// for (let i = 0; i < astrologia.length; i++) {

//     if (i===0) {

//         let li = document.createElement('li')
//         ol.append(`<li data-target="#carouselExampleIndicators-astrologia" data-slide-to="${i} class="active"></li>`)

//     } else {
//         let li = document.createElement('li')
//         ol.append(`<li data-target="#carouselExampleIndicators-astrologia" data-slide-to="${i}"></li>`)
//     }

// }

