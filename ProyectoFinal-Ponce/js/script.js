const celulares = [
    {
        "nombre": "TCL 305",
        "precio": 29333,
        "stock": 12,
        "img": "https://tienda.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/t/c/tcl-305-frente_1.png",
        "id": 1,
         "aVender":1
    },
    {
        "nombre": "TCL 305i",
        "precio": 35656,
        "stock": 5,
        "img": "https://tienda.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/i/m/image_7__1.png",
        "id": 2,
"aVender":1
    },
    {
        "nombre": "SAMSUNG GALAXY A13 128GB",
        "precio": 32434,
        "stock": 3,
        "img": "https://tienda.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/a/1/a13-negro-frente_1.png",
        "id": 3,
"aVender":1
    },
    {
        "nombre": "SAMSUNG GALAXY S22 plus 5G",
        "precio": 36888,
        "stock": 5,
        "img": "https://tienda.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/s/2/s22_-blanco-frente.png",
        "id": 4,
"aVender":1
    },
    {
        "nombre": "SAMSUNG GALAXY A33 5G",
        "precio": 43299,
        "stock": 7,
        "img": "https://tienda.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/a/3/a33-negro-frente_1.png",
        "id": 5,
"aVender":1
    },
    {
        "nombre": "SAMSUNG GALAXY A04S 128GB",
        "precio": 34656,
        "stock": 11,
        "img": "https://tienda.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/f/r/frente_15.png",
        "id": 6,
"aVender":1
    },
    {
        "nombre": "SAMSUNG GALAXY S20 FE 5G",
        "precio": 25776,
        "stock": 2,
        "img": "https://tienda.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/s/2/s20-azul-frente_1.png",
        "id": 7,
"aVender":1
    },
    
    {
        "nombre": "MOTOROLA EDGE 30 5G",
        "precio": 29999,
        "stock": 1,
        "img": "https://tienda.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/e/d/edge30-plata-frente.png",
        "id": 8,
"aVender":1
    },
    {
        "nombre": "MOTOROLA MOTO G22",
        "precio": 40599,
        "stock": 4,
        "img": "https://tienda.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/g/2/g22-negro-frente.png",
        "id": 9,
"aVender":1
    },
    {
        "nombre": "MOTOROLA MOTO E32",
        "precio": 45374,
        "stock": 4,
        "img": "https://tienda.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/m/o/motoe32-frente.png",
        "id": 10,
"aVender":1
    }]

const contadorCarro = document.querySelector('#contadorCarro')

const contenedor = document.getElementById("cajita");

celulares.forEach((producto) => {

    let contenido = document.createElement("div");

    contenido.classList.add("card")

    contenido.innerHTML = `

        <img src=${producto.img} class="card-img" alt="...">

        <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="precio">$ ${producto.precio} </p>
        <p class="stock">Stock: ${producto.stock}</p>
        <button id="boton_alerta"  class="btn btn-danger botoncito" onClick="agregarAlCarrito (${producto.id})"> Comprar </button>
        </div>
    `
    contenedor.appendChild(contenido)

})



let envio = 1000;
let precioApagar ;
const carrito = [];
const cantidad = 0;


// JSON

const guardarLocal = (denominacion, valor, cantidad, estilo) => { localStorage.setItem(denominacion, valor, cantidad, estilo) };


for (const prod of celulares) {
    guardarLocal(prod.id, JSON.stringify(prod));
}




    function agregarAlCarrito(id) {

        const item = celulares.find((producto) => producto.id === id)
const agregarId = id
var yaExiste="false";
carrito.forEach(myFunction)
    function myFunction(item, index, arr) {
if(arr[index].id===agregarId){

  arr[index].aVender+=1;
yaExiste="true";

}
}
    if(yaExiste=="false"){
        carrito.push(item)

}else{
yaExiste="false"
    }
    mostrarCarrito()

        localStorage.setItem("carrito", JSON.stringify(carrito))
    }


//CARRITO

const mostrarCarrito = () => {
    const modalContainer = document.querySelector('.modal .modal-body')
    modalContainer.innerHTML=''
    carrito.forEach ((producto) => {
const {id, nombre, stock, precio, img, aVender} = producto 
        modalContainer.innerHTML +=  `
        <!--  <div class="modal-contenedor">
        
        // <img class="img-fluid img-carrito" scr="${producto.img}"/>
        // </div>-->

        <div class="modal-contenedor">
        
        <img class="img-fluid img-carrito" scr="${img}"/>
        <p class="nombre_modal">${nombre}</p>
        <p class="precio_modal">$ ${precio}</p>
        <p class="stock_modal"><span id="contadorCarro">${aVender}</span></p>

        <button class="btn-elim btn-danger" onClick="eliminarProducto(${id})">Eliminar</button>
        </div>
        
        `
       
    })

    guardarStorage()



total.innerText = "Total: $ " + carrito.reduce((acc,producto) => acc + Number(producto.precio * producto.aVender) ,0)
}


function eliminarProducto(id) {

    const nocId = id
carrito.forEach(myFunction)
    function myFunction(item, index, arr) {
if(arr[index].id===nocId){
arr[index].aVender=0;

   arr.splice(index,1);

}
}
    mostrarCarrito();
    }



function guardarStorage () {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

//Funcion para vaciar el carrito
const vaciarCarrito = document.querySelector("#vaciar_carrito")

vaciarCarrito.addEventListener ('click', () => {
    carrito.length = [];
    mostrarCarrito()
})


// Total 

const total = document.getElementById("total")


//alerta 
const alerta2=document.querySelector(".btn-comprar")
alerta2.addEventListener('click',()=>{
    Swal.fire(
        '¡Su compra fue realizada con exito!',
        '',
        'success'
    )
    carrito.length = [];
    mostrarCarrito()
})



