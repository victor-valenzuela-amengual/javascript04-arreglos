var casa1 = {
  Tipo: "Casa de campo",
  Dormitorios: 6,
  Metros: 460,
  Descripcion: "Espectacular casa habitacional de construcción sólida, en exclusivo condominio Arboretum Mirador. Emplazada en 4.600 metros cuadrados de terreno, tiene amplios e iluminados espacios.",
  Foto: "assets/img/casadecampo.webp",
};

var casa2 = {
  Tipo: "Casa de playa",
  Dormitorios: 4,
  Metros: 450,
  Descripcion: "Jardines, entrada al menos 4 vehículos. Bodega. Casa en Tres Niveles, 4 Dormitorios, 3 Baños, Amplio Living Comedor con cocina americana."
    + "Dos Terrazas. Vista al mar. a minutos de la playa.",
  Foto: "assets/img/casaplaya.webp",
};
var casa3 = {
  Tipo: "Casa en el centro",
  Dormitorios: 2,
  Metros: 100,
  Descripcion: "Hermosa casona patrimonial de uso mixto ubicada en el mejor barrio histórico y consolidado de Santiago, a pasos de Club Hípico",
  Foto: "assets/img/casacentro.webp",
};

var casa4 = {
  Tipo: "Casa rodante",
  Dormitorios: 3,
  Metros: 40,
  Descripcion: "Es un vehículo de 12 metros de largo que tiene un lujoso interior y que además permite llevar un auto en una cabina equipada con sistema de apertura electrohidráulico",
  Foto: "assets/img/casarodante.jpg",
};
var casa5 = {
  Tipo: "Departamento",
  Dormitorios: 1,
  Metros: 225,
  Descripcion: "En Venta Casa Remodelada con excelente ubicación, con auténtica vida de barrio y muy bien emplazada en terreno de 225 m2.",
  Foto: "assets/img/depto.webp",
};
var casa6 = {
  Tipo: "Mansión",
  Dormitorios: 6,
  Metros: 600,
  Descripcion: "Vendo maravillosa Mansión, para deleitar su magnificencia. Ideal para inversionistas nacionales e internacionales que desean vivir o invertir en Chile.",
  Foto: "assets/img/mansion.webp",
};
var casa7 = {
  Tipo: "Casa de lujo",
  Dormitorios: 3,
  Metros: 200,
  Descripcion: "Esta hermosa casa, cuenta con antejardín, y patio interior con un hermoso árbol limonero, que brinda sombra y frutos durante gran parte del año.",
  Foto: "assets/img/casa01.webp",
};

let cantCuartos = document.querySelector("#cant-cuartos");
let cantCuartos2 = document.querySelector("#cant-cuartos2");
let mts2desde = document.querySelector("#mts-desde");
let mts2hasta = document.querySelector("#mts-hasta");
let mostrarTodo = 0;
let casasJson;
const TotalCasas = 7;

function Filtrar(casa) {
  var encontrado = 0;
  if (mostrarTodo == 1)
    encontrado = 1;
  else {
    if (casa.Dormitorios >= cantCuartos.value && casa.Dormitorios <= cantCuartos2.value && casa.Metros >= mts2desde.value && casa.Metros <= mts2hasta.value) {
      encontrado = 1;
    }
  }
  return encontrado;
}

function MostrarCasas() {
  let casas = [casa1, casa2, casa3, casa4, casa5, casa6, casa7];
  let contenedor = document.querySelector("#container");
  let etiqTotal = document.querySelector("#cantEncontrado");
  let total = 0;
  let html = "";

  for (let casa of casas) {    
    if (Filtrar(casa) == 1) {
      html += `<div class="card" style="width: 13rem;">
      <img src="${casa.Foto}" class="card-img-top" alt="${casa.Tipo}">
      <div class="card-body d-flex flex-column text-white">
      <h5 class="card-title">${casa.Tipo}</h5>
      <p class="card-text">Dormitorios: ${casa.Dormitorios}<span class="metros"> Metros: ${casa.Metros}</p></span>    
      <p class="card-text">${casa.Descripcion}</p>
      <a href="#" class="btn btn-primary mt-auto">Ver más</a>
      </div>
      </div>`
      contenedor.innerHTML = html;
      total += 1;
    }
  }
  if (total == 0)
    contenedor.innerHTML = "";
  etiqTotal.innerHTML = `Total: ${total} de ${TotalCasas}`
}

function Validar(todo) {  
  mostrarTodo = 0;
  if (todo == 1) {
    mostrarTodo = 1;
    MostrarCasas();
    return;
  }


  if (cantCuartos.value == 0 || cantCuartos2.value == 0)
    alert("Debe introducir la cantidad de dormitorios")
  else if (mts2desde.value == 0)
    alert("Debe introducir desde cuantos mts\u00B2")
  else if (mts2hasta.value == 0)
    alert("Debe introducir hasta cuantos mts\u00B2")
  else
    MostrarCasas();

}

function Limpiar() {
  cantCuartos.value = "";
  cantCuartos2.value = "";
  mts2desde.value = "";
  mts2hasta.value = "";
}


