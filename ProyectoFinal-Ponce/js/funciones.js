
// Funcion para agregar productos al carrito
// const agregarAlCarrito = async(id)=>{
//     const listaProductos = await getData();
//     let producto = celulares.find(producto => producto.id === id);
//     let productoEnCarro = carrito.find (productoEnCarro => productoEnCarro.id === id)

//     if(productoEnCarro){
//         productoEnCarro.cantidad ++;
    
//     }else {
//         producto.cantidad = 1;
//         carrito.push(producto);
        
//     }
//     ActualizarCantidad()
    
//     localStorage.setItem("datos", JSON.stringify (carrito))
// };

//Contenido del carrito dentro del modal de productos seleccionados a comprar
const contenedorCarrito = document.getElementById("modalContainer")
const actualizarCarrito=() =>{
contenedorCarrito.innerHTML=""
carrito.forEach((producto) =>{
    const carritoContainer = document.createElement ("div")
    carritoContainer.classList.add("carrito_container")
    carritoContainer.innerHTML=`
    <p class="nombre_producto">${producto.nombre}</p>
    <p class="precio_producto">$${producto.precio}</p>
    <p class="cantidad_producto">${producto.cantidad}</p>
    <button onclick="eliminarDelCarrito(${producto.id})"class="boton_eliminar_producto"><i class="fa-solid fa-trash-can"></i></button>
    `
    contenedorCarrito.appendChild(carritoContainer)

    localStorage.setItem('carrito', JSON.stringify(carrito))
})
}

//Reducir elementos del carrito
const eliminarDelCarrito= (productoId) =>{
const item = carrito.find((producto) => producto.id === productoId)
if(item.cantidad > 1 ){
item.cantidad --
}else{
    const i = carrito.indexOf(item)
    carrito.splice(i , 1)
}
ActualizarCantidad()
}

//Funcion para vaciar el carrito
const vaciarCarrito = document.querySelector("#vaciar_carrito")

vaciarCarrito.addEventListener ('click', () => {
    carrito.length = [];
    mostrarCarrito()
})


function vaciarCarrito(){
carrito.splice(0,carrito.length)
ActualizarCantidad()
localStorage.clear()
}

//Actualizar la cantidad de los productos
function ActualizarCantidad(){
let precioTotal= 0;
let cantidadTotal=0;
for(let i = 0 ; i < carrito.length; i++){
    cantidadTotal += carrito[i].cantidad 

precioTotal += carrito[i].precio * carrito[i].cantidad;
}
precioApagar = document.getElementById("total")
precioApagar.innerText = "Precio Total: $" + precioTotal;

const contadorCarrito = document.getElementById("contadorCarro")
contadorCarrito.innerText = cantidadTotal;

actualizarCarrito()

function guardar(clave, valor){
    localStorage.setItem(clave,valor)
}
guardar ('precioTotal', JSON.stringify(precioTotal))
guardar('cantidadTotalProductos', JSON.stringify(cantidadTotal))   
}