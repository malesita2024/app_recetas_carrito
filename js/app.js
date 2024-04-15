const populares = document.getElementById('populares');
const ul = document.getElementById('lista-recetas');
const h2Recetas = document.getElementById('tit_recetas');
const btn_favoritos = document.querySelector(".btn-preferidas");


let inputEdad = document.getElementById("input-edad");
let inputAltura = document.getElementById("input-altura");
let inputPeso = document.getElementById("input-peso");
let genero = document.getElementById("genero");
let actividadFisica = document.getElementById("act-fisica");
let resCalorias = document.getElementById("p-res-calorias");
let resultado = document.getElementById("resultado");
let recetasFavoritas = [];

let li;
let h3;
let pCocina;
let pDieta;
let pInstrucciones;
let pCalorias;
let imagen;

// Funciones recetas populares

if (window.location.pathname == "/index.html") {
    document.addEventListener("DOMContentLoaded", loadRecetasPopulares)
}

function getParams(href) {
    let params = href.split('=');
    console.log(params[1]);
    sessionStorage.setItem("receta", JSON.stringify(params[1]))
}

function loadRecetasPopulares() {

    const recetasPopulares = recetas.filter((item) => item.ranking >= 4);

    recetasPopulares.forEach(item => {
        populares.innerHTML += `
        <div class="card1" style="width: 30%;">
            <img src="${item.foto}" class="card-img-top" alt="...">
            <div class="card-body1">
                <h5 class="card-title">${item.nombre}</h5>
                <div>${createStars(item.ranking)}</div>
                <p><strong>Cocina: </strong>${item.cocina}</p>
                <p><strong>Tipo: </strong>${item.tipo}</p>
                <p><strong>Dieta: </strong>${item.dieta}</p>
                <a href="receta_detalle.html`+ `?receta=${item.nombre}" class="a_popular btn1 btn-secondary">Ver más</a>
            </div>
        </div>
        `;
    });

    let a_popular = document.querySelectorAll(".a_popular");
    for (let i = 0; i < a_popular.length; i++) {
        a_popular[i].addEventListener('click', function () {
            getParams(a_popular[i].href);
        })
    }
}

function createStars(ranking) {
    if (ranking == 5) {
        return `<div class="stars">&#x2B50 &#x2B50 &#x2B50 &#x2B50 &#x2B50 </div>`
    } else if (ranking == 4) {
        return `<div class="stars"> &#x2B50 &#x2B50 &#x2B50 &#x2B50 </div>`
    }
}

// Funciones de la Calculadora de calorías

function iconCalOnClick(valor) {
    switch (valor) {
        case 'MenosEdad':
            if (inputEdad.value >= 1) {
                let inputMenos = inputEdad.value - 1;
                inputEdad.value = inputMenos;
            } else {
                inputEdad.value = 0;
            }
            break;
        case 'MenosAltura':
            if (inputAltura.value >= 1) {
                let inputMenos = inputAltura.value - 1;
                inputAltura.value = inputMenos;
            } else {
                inputAltura.value = 0;
            }
            break;
        case 'MenosPeso':
            if (inputPeso.value >= 1) {
                let inputMenos = inputPeso.value - 1;
                inputPeso.value = inputMenos;
            } else {
                inputPeso.value = 0;
            }
            break;

        case 'MasEdad':
            if (inputEdad.value >= 0) {
                let inputEdadFormateado = parseInt(inputEdad.value);
                let inputMas = inputEdadFormateado + 1;
                inputEdad.value = inputMas;
            } else {
                inputEdad.value = 0;
            }
            break;

        case 'MasAltura':
            if (inputAltura.value >= 0) {
                let inputAlturaFormateado = parseInt(inputAltura.value);
                let inputMas = inputAlturaFormateado + 1;
                inputAltura.value = inputMas;
            } else {
                inputAltura.value = 0;
            }
            break;

        case 'MasPeso':
            if (inputPeso.value >= 0) {
                let inputPesoFormateado = parseInt(inputPeso.value);
                let inputMas = inputPesoFormateado + 1;
                inputPeso.value = inputMas;
            } else {
                inputPeso.value = 0;
            }
            break;

    }
}

function calculoCalorias() {
    console.log(genero.value);
    console.log(inputEdad.value);
    console.log(inputAltura.value);
    console.log(inputPeso.value);
    console.log(actividadFisica.value);

    let TMBFemenino = (10 * inputPeso.value) + (6.25 * inputAltura.value) - (5 * inputEdad.value) - 161;
    let TMBMasculino = (10 * inputPeso.value) + (6.25 * inputAltura.value) - (5 * inputEdad.value) - 5;

    if (genero.value == "Femenino") {
        console.log("escogi femenino")
        if (actividadFisica.value == "Poco") {
            resCalorias.innerHTML = ``;
            let TMB = TMBFemenino * 1.2;
            resCalorias.innerHTML = "Tu consumo recomendado de calorías es: " + parseInt(TMB);
            resultado.style.display = "block";
        } else if (actividadFisica.value == "Ligero") {
            resCalorias.innerHTML = ``;
            let TMB = TMBFemenino * 1.375;
            resCalorias.innerHTML = "Tu consumo recomendado de calorías es: " + parseInt(TMB);
            resultado.style.display = "block";
        } else if (actividadFisica.value == "Moderado") {
            resCalorias.innerHTML = ``;
            let TMB = TMBFemenino * 1.55;
            resCalorias.innerHTML = "Tu consumo recomendado de calorías es: " + parseInt(TMB);
            resultado.style.display = "block";
        } else if (actividadFisica.value == "Fuerte") {
            resCalorias.innerHTML = ``;
            let TMB = TMBFemenino * 1.75;
            resCalorias.innerHTML = "Tu consumo recomendado de calorías es: " + parseInt(TMB);
            resultado.style.display = "block";
        } else if (actividadFisica.value == "Muy fuerte") {
            resCalorias.innerHTML = ``;
            let TMB = TMBFemenino * 1.9;
            resCalorias.innerHTML = "Tu consumo recomendado de calorías es: " + parseInt(TMB);
            resultado.style.display = "block";
        }
    } else if (genero.value == "Masculino") {
        if (actividadFisica == "Poco") {
            resCalorias.innerHTML = ``;
            let TMB = TMBMasculino * 1.2;
            resCalorias.innerHTML = "Tu consumo recomendado de calorías es: " + parseInt(TMB);
            resultado.style.display = "block";
        } else if (actividadFisica.value == "Ligero") {
            resCalorias.innerHTML = ``;
            let TMB = TMBMasculino * 1.375;
            resCalorias.innerHTML = "Tu consumo recomendado de calorías es: " + parseInt(TMB);
            resultado.style.display = "block";
        } else if (actividadFisica.value == "Moderado") {
            resCalorias.innerHTML = ``;
            let TMB = TMBMasculino * 1.55;
            resCalorias.innerHTML = "Tu consumo recomendado de calorías es: " + parseInt(TMB);
            resultado.style.display = "block";
        } else if (actividadFisica.value == "Fuerte") {
            resCalorias.innerHTML = ``;
            let TMB = TMBMasculino * 1.75;
            resCalorias.innerHTML = "Tu consumo recomendado de calorías es: " + parseInt(TMB);
            resultado.style.display = "block";
        } else if (actividadFisica.value == "Muy fuerte") {
            resCalorias.innerHTML = ``;
            let TMB = TMBMasculino * 1.9;
            resCalorias.innerHTML = "Tu consumo recomendado de calorías es: " + parseInt(TMB);
            resultado.style.display = "block";
        }
    }

}

//Funciones Lista de Recetas

function crearRecetas(recipes) {
    recipes.forEach(recipe => {
        ul.innerHTML += `
        <div class="card1" style="width: 30%;">
            <div class="photo_list">
            <img src="${recipe.foto}" class="card-img-top" alt="...">
            </div>
            <div class="card-body1">
                <h5 class="card-title">${recipe.nombre}</h5>
                <p><strong>Cocina: </strong>${recipe.cocina}</p>
                <p><strong>Tipo: </strong>${recipe.tipo}</p>
                <p><strong>Dieta: </strong>${recipe.dieta}</p>
                <a href="receta_detalle.html`+ `?receta=${recipe.nombre}" class="a_recetas btn1 btn-secondary">Ver más</a>
            </div>
        </div>
        `;
    });

    let a_recetas = document.querySelectorAll(".a_recetas");
    for (let i = 0; i < a_recetas.length; i++) {
        a_recetas[i].addEventListener('click', function () {
            getParams(a_recetas[i].href);
        })
    }
}


function filtra(categoria) {
    if (categoria == "todos") {
        ul.innerHTML = ``;
        h2Recetas.style.display = "block";
        crearRecetas(recetas);
    } else if (categoria == "criolla") {
        ul.innerHTML = ``;
        h2Recetas.style.display = "block";
        let cocinaCriolla = recetas.filter((item) => item.tipo == "Criolla");
        crearRecetas(cocinaCriolla);
    } else if (categoria == "internacional") {
        ul.innerHTML = ``;
        h2Recetas.style.display = "block";
        let cocinaInternacional = recetas.filter((item) => item.tipo == "Internacional");
        crearRecetas(cocinaInternacional);
    } else if (categoria == "ricaCal") {
        ul.innerHTML = ``;
        h2Recetas.style.display = "block";
        let ricaCalorias = recetas.filter((item) => item.dieta == "Rica en calorías");
        crearRecetas(ricaCalorias);
    } else if (categoria == "moderadaCal") {
        ul.innerHTML = ``;
        h2Recetas.style.display = "block";
        let moderadaCalorias = recetas.filter((item) => item.dieta == "Moderada en calorías");
        crearRecetas(moderadaCalorias);
    } else if (categoria == "bajaCal") {
        ul.innerHTML = ``;
        h2Recetas.style.display = "block";
        let bajaCalorias = recetas.filter((item) => item.dieta == "Baja en calorías");
        crearRecetas(bajaCalorias);
    } else if (categoria == "menos500Cal") {
        ul.innerHTML = ``;
        h2Recetas.style.display = "block";
        let menor500Calorias = recetas.filter((item) => item.calorias <= 500);
        crearRecetas(menor500Calorias);
    } else if (categoria == "menos1000Cal") {
        ul.innerHTML = ``;
        h2Recetas.style.display = "block";
        let menor1000Calorias = recetas.filter((item) => item.calorias <= 1000);
        crearRecetas(menor1000Calorias);
    }

}

//funciones Detalle de receta

if (window.location.pathname == "/receta_detalle.html") {
    document.addEventListener("DOMContentLoaded", crearRecetaDetail)
}

function insertarBrEnString(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str[i];
        if (!isNaN(parseInt(str[i]))) {
            if (str[i + 1] === '.') {
                i++;
            }
            result += str[i];
        } else if (str[i] == '') {
            result += str[i];
        } else if (str[i] == '.') {
            result += '</br>';
        }
    }
    return result;
}

function crearRecetaDetail() {
    const contenedor_detail = document.getElementById('detalle');
    let sessionStorageReceta = sessionStorage.getItem('receta');
    sessionStorageReceta = sessionStorageReceta.replace(/["]+/g, ' ');
    sessionStorageReceta = sessionStorageReceta.replace(/%20/g, ' ');
    sessionStorageReceta = sessionStorageReceta.trim();

    let recetaDetail = recetas.find(item => item.nombre == sessionStorageReceta);

    if (recetaDetail) {
        contenedor_detail.innerHTML = `
        <h1>${recetaDetail.nombre}</h1>
        <img src=${recetaDetail.foto}>
        <div class="div-agregar-favoritos">
            <p>Agrega a favoritos</p>
            <i id="icon-favorite" class="fa-solid fa-heart"></i>
        </div>
        <div class="txt_detail">
        <h3>Cocina: ${recetaDetail.cocina}</h3>
        <h3>Tipo: ${recetaDetail.tipo}</h3>
        <h3>Dieta: ${recetaDetail.dieta}</h3>
        <h5>Instrucciones:</h5>
        <p>${insertarBrEnString(recetaDetail.instrucciones)}</p>
        <a href="index.html" class="btn1 btn-secondary" data-id=${recetaDetail.id}>Volver</a>
        </div>
        `

    } else {
        contenedor_detail.innerHTML = `<p>No se encontró información para la receta.</p>`;
    }

    const icon_favorite = document.getElementById("icon-favorite");

    icon_favorite.addEventListener("click", (e) => {
        console.log("agregar favoritos")
        console.log(e.target.classList.contains("icon-favorite"))
        if (e.target.classList.contains("icon-favorite") == false) {
            console.log(e.target.parentElement.parentElement)
            const recetaFavorita = e.target.parentElement.parentElement
            leerDatosProducto(recetaFavorita)
        }
    })

}


//funciones Carrito

btn_favoritos.addEventListener("click", mostrarCarrito);


function mostrarCarrito(e) {
    e.preventDefault();
    let carrito = document.querySelector("#carrito");
    if (carrito.style.display === "none") {
        carrito.style.display = "block";
    } else {
        carrito.style.display = "none";
    }
}

function agregarFavoritos(e) {
    if (e.target.classList.contains("icon-favorite")) {
        const recetaFavorita = e.target.parentElement.parentElement
        leerDatosProducto(recetaFavorita)
    }
}

function leerDatosProducto(item) {
    const infoRecetaCart ={
        id: item.querySelector('a').getAttribute('data-id'),
        imagen: item.querySelector('img').getAttribute('src'),
        nombre: item.querySelector('h1').outerText,
        tipo: item.querySelector('h3:nth-of-type(1)').outerText,
        dieta: item.querySelector('h3:nth-of-type(3)').outerText,
    }
    console.log("item info---->", infoRecetaCart)

    if(recetasFavoritas.some(receta => recetaFavorita.id === infoRecetaCart.id)){
        console.log("receta igual")
        recetasFavoritas = [...recetas]
    }else {
        recetasFavoritas = [...recetasFavoritas,infoRecetaCart]
    }

    console.log("Array recetascarrito---->", recetasFavoritas)
    dibujarCarritoHTML();
}

function dibujarCarritoHTML(){
    const listaCarrito = document.querySelector("#lista-carrito")
    recetasFavoritas.forEach(receta =>{
        const fila = document.createElement('tbody')
        fila.innerHTML =`
        <tr>
            <td><img src="${receta.imagen}" width="100%" /></td>
            <td id="cart-description">
                <h5>${receta.nombre}</h5>
                <p>${receta.tipo}</p>
                <p>${receta.dieta}</p>
            </td>
        </tr>
        `
        listaCarrito.appendChild(fila)
    })

    sincronizarStorage()
}

function sincronizarStorage(){
    localStorage.setItem('recFavoritas', JSON.stringify(recetasFavoritas)) 
 }