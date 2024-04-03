const contenedorTarjetas = document.getElementById("cart-container");
const cantidadElement = document.getElementById("cantidad");
const precioElement = document.getElementById("precio");
const carritoVacioElement = document.getElementById("carrito-vacio");
const totalesContainer = document.getElementById("totales");

/** Crea las tarjetas de productos teniendo en cuenta lo guardado en localstorage */
function crearTarjetasProductosCarrito() {
  contenedorTarjetas.innerHTML = "";
  const productos = JSON.parse(localStorage.getItem("muebles"));
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      const nuevoMueble = document.createElement("div");
      nuevoMueble.classList = "tarjeta-producto";
      nuevoMueble.innerHTML = `
    <img src="./img/productos/${producto.id}.webp" alt="muebles">
    <h3>${producto.nombre}</h3>
    <span>$${producto.precio}</span>
    <div class"cantidad">
    <button><</button>
    <span class="cantidad">${producto.cantidad}</span>
    <button>></button>
    </div>
    `;
      contenedorTarjetas.appendChild(nuevoMueble);
      nuevoMueble
        .getElementsByTagName("button")[0]
        .addEventListener("click", (e) => {
          const cantidadElement = e.target.parentElement.getElementsByClassName("cantidad")[0];
          cantidadElement.innerText = restarAlCarrito(producto);
          crearTarjetasProductosCarrito();
          actualizarTotales();
        });
        nuevoMueble
        .getElementsByTagName("button")[1]
        .addEventListener("click", (e) => {
          const cantidadElement = e.target.parentElement.getElementsByClassName("cantidad")[0];
          cantidadElement.innerText = agregarAlCarrito(producto);
          actualizarTotales();
        });
    });
  }
  revisarMensajeVacio();
  actualizarTotales();
  actualizarNumeroCarrito();
}

crearTarjetasProductosCarrito();

/** Actualiza el total de precio y unidades de la página del carrito */
function actualizarTotales() {
  const productos = JSON.parse(localStorage.getItem("muebles"));
  let cantidad = 0;
  let precio = 0;
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      cantidad += producto.cantidad;
      precio += producto.precio * producto.cantidad;
    });
  }
  cantidadElement.innerText = cantidad;
  precioElement.innerText = precio;
  if(precio === 0) {
    reiniciarCarrito();
    revisarMensajeVacio();
  }
}

document.getElementById("reiniciar").addEventListener("click", () => {
  contenedorTarjetas.innerHTML = "";
  reiniciarCarrito();
  revisarMensajeVacio();
});

/** Muestra o esconde el mensaje de que no hay nada en el carrito */
function revisarMensajeVacio() {
  const productos = JSON.parse(localStorage.getItem("muebles"));
  carritoVacioElement.classList.toggle("escondido", productos);
  totalesContainer.classList.toggle("escondido", !productos);
}

document.getElementById("btnComprar").addEventListener("click", function() {
  alert("Su compra se ha generado con éxito! CLAPA MUEBLES le agradece su visita y compra");
});


