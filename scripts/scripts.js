const $img_1 = document.querySelector(".large")
const $img_2 = document.querySelector(".medium")
const $img_3 = document.querySelector(".small")
const $carrusel = document.querySelector(".carrusel-container")
const $fragmento = document.createDocumentFragment()
const $fragmento2 = document.createDocumentFragment()
const $fragmento3 = document.createDocumentFragment()


    // contenedor de imagenes
const $img =[
    {img:"media/monte.jpg"},
    {img:"media/montef.jpg"},
    {img:"media/playa.jpg"},
    {img: "media/japon.jpeg"},
    {img:"media/ciudad1.jpg"},
    {img:"media/ciudadnoche.jpg"},
    {img:"media/ciudaddia.jpeg"}
]

// creacion y asignacion de los divs

$img.forEach(el => {
    let $div2 = document.createElement("div")
    let $div = document.createElement("div")
    let $div3 = document.createElement("div")
    $div2.classList.add("img-container-2")
    $div.classList.add("img-container")
    $div3.classList.add("img-container-3")
    $div2.innerHTML =`<img src="${el.img}" class="img" alt="${el.img}">`
    $div.innerHTML =`<img src="${el.img}" class="img" alt="${el.img}">`
    $div3.innerHTML =`<img src="${el.img}" class="img" alt="${el.img}">`
    $fragmento2.appendChild($div2)
    $fragmento.appendChild($div)
    $fragmento3.appendChild($div3)
});
$img_3.appendChild($fragmento2)
$img_2.appendChild($fragmento)
$img_1.appendChild($fragmento3)

// seleccion del conjunto de imagenes
const $imgC = document.querySelectorAll(".img-container")
const $imgC2 = document.querySelectorAll(".img-container-2")
const $imgC3 = document.querySelectorAll(".img-container-3")

// variable contador para controlar el cambio de los elementos
let cotador = $imgC.length -1


// asignacion de clase a la primer imagen segun el valor del contador
$imgC[cotador].classList.add("activate")
$imgC[cotador].classList.add("index")
$imgC2[cotador].classList.add("activate")
$imgC2[cotador].classList.add("index")
$imgC3[cotador].classList.add("activate")
$imgC3[cotador].classList.add("index")

// funcion para controlar el flujo del slieder
function nextImg (){

    // quita la clase "activate" para que se le pueda agregar a un elemento siguiente
    $imgC[cotador].classList.remove("activate")
    $imgC2[cotador].classList.remove("activate")
    $imgC3[cotador].classList.remove("activate") 

    // validacion para quitar la clase (index) del ultimo elemento cuando el contador llega a 0
    if (cotador == 0) {
        $imgC3[$imgC3.length-1].classList.remove("index")
        $imgC[$imgC.length-1].classList.remove("index")
        $imgC2[$imgC.length-1].classList.remove("index")
        $imgC3[$imgC3.length-2].classList.remove("index")
        $imgC[$imgC.length-2].classList.remove("index")
        $imgC2[$imgC.length-2].classList.remove("index")
    }

    // validacion para quitar la clase (index) de algunos elementos que hacian conflicto 

    if(cotador == 5){
        $imgC3[0].classList.remove("index")
        $imgC3[1].classList.remove("index")
        $imgC3[2].classList.remove("index")
        $imgC3[3].classList.remove("index")
        $imgC3[4].classList.remove("index")
        $imgC[0].classList.remove("index")
        $imgC[1].classList.remove("index")
        $imgC[2].classList.remove("index")
        $imgC[3].classList.remove("index")
        $imgC[4].classList.remove("index")
        $imgC2[0].classList.remove("index")
        $imgC2[1].classList.remove("index")
        $imgC2[2].classList.remove("index")
        $imgC2[3].classList.remove("index")
        $imgC2[4].classList.remove("index")

        
    }
    // amento del contador
    cotador++


    // validacion para que si el contador se pasa de la cantidad de imagenes se reinice a cero
    if (cotador > $imgC.length -1) {
        cotador = 0
    }
    // agrega las clases con el valor que tiene el contador al aumentar
    $imgC[cotador].classList.add("activate")
    $imgC[cotador].classList.add("index")
    $imgC2[cotador].classList.add("activate")
    $imgC2[cotador].classList.add("index")
    $imgC3[cotador].classList.add("activate")
    $imgC3[cotador].classList.add("index")

}

// funcion de intervalo que ejecuta la funcion para continuar con el slider
setInterval(() => {
    nextImg()
}, 6000);


// window.addEventListener("visibilitychange",(e)=>{
    
//     if(document.visibilityState === "visible"){
//         console.log("lo veo todo")

//     }else{

//     }
// })


// const play = (entradas)=>{
//     console.log(entradas)

// }

// const obs = new IntersectionObserver(play,{})

// obs.observe($carrusel)

