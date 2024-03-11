const contenedorTarjetas = document.getElementById("productos-container");

/** Crea las tarjetas de productos teniendo en cuenta la lista en muebles.js */
function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevoMueble = document.createElement("div");
    nuevoMueble.classList = "tarjeta-producto"
    nuevoMueble.innerHTML = `
    <img src="./img/productos/${producto.id}.webp" alt="Muebles">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button>Agregar al carrito</button>`
    contenedorTarjetas.appendChild(nuevoMueble);
    nuevoMueble.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(muebles);

/**abre y cierra la nav en el menu hamburguesa **/
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
})

cerrar.addEventListener("click", ()=> {
  nav.classList.remove("visible");
})

