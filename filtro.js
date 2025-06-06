/* CAMBIOS GENERALES
-Añadi punto y coma en donde faltaba
-Formato al documento
-Puse todas las variables hasta arriba de el documento para mejorar la legibilidad*/

const productos = [
  {
    nombre: "Zapato negro",
    tipo: "zapato",
    color: "negro",
    img: "./taco-negro.jpg",
  },
  {
    nombre: "Zapato azul",
    tipo: "zapato",
    color: "azul",
    img: "./taco-azul.jpg",
  },
  {
    nombre: "Bota negra",
    tipo: "bota",
    color: "negro",
    img: "./bota-negra.jpg",
  },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  {
    nombre: "Zapato rojo",
    tipo: "zapato",
    color: "rojo",
    img: "./zapato-rojo.jpg",
  },
];

//Cambie la variable li a lista productos para que se entendiera más
const listaProductos = document.getElementById("lista-de-productos"); //aqui cambié  getElementsByName por getElementsById ya que esta llamando a el id de la etiqueta
//Cambie la variable $i a inputFiltro para que se entendiera más
const inputFiltro = document.querySelector("input"); //no hay ninguna clase con el nombre de ".input" pero ya que hay solo un input lo cambie a que seleccionara la etiqueta
const botonDeFiltro = document.querySelector("button");

const displayProductos = (productos) => {
  //puse en una funcion este bloque de codigo ya que abajo estaba sin usarse
  for (let i = 0; i < productos.length; i++) {
    var d = document.createElement("div");
    d.classList.add("producto");

    var tituloProducto = document.createElement("p"); //cambie la palabra de ti a tituloProducto
    tituloProducto.textContent = productos[i].nombre; //quite tituloProducto.classList.add("titulo"); ya que en css no esta siendo referenciada 

    var imagen = document.createElement("img");
    imagen.setAttribute("src", productos[i].img);

    d.appendChild(tituloProducto);
    d.appendChild(imagen);

    listaProductos.appendChild(d);
  }
};

displayProductos(productos);

//añadi esta funcion para hacer el codigo mas modular
const limpiarProductos = () => {
  while (listaProductos.firstChild) {
    listaProductos.removeChild(listaProductos.firstChild);
  }
};

botonDeFiltro.onclick = function () {
  limpiarProductos();
  const productosFiltrados = filtrado(productos, inputFiltro.value); //quite la varible texto ya que considero que solo se repite y puse directamente inputFiltro.value
  displayProductos(productosFiltrados); //aqui el codigo hacia lo mismo que la funcion displayProducts solo que aqui le pase la lista filtrada de productos
};

const filtrado = (productos = [], texto) => {
  return productos.filter(
    (item) => item.tipo.includes(texto) || item.color.includes(texto)
  );
};
