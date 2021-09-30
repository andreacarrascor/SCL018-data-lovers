import data from './data/ghibli/ghibli.js'
import orderData from './data.js'
//variable para llamar al arreglo que contiene las películas 
let printFilm = data.films

const movieList = function (films) {
    let list = '';
    //reemplazamos el contenido de filmCard con una cadena vacía
    document.getElementById('filmCard').innerHTML = '';

    for (let i = 0; i < films.length; i++) {
        //template strings
        list += `
    <section class="filmsContainer">
    <figure class="cardImage">                           
        <img alt="Poster" id="poster" class="poster" src="${films[i].poster}">
    </figure>
    <section class="cardContainer-inner">
        <h2 id="title" class="cardTitle">${films[i].title}</h2>
        <h3 id="director" class="cardDirector">Director: ${films[i].director}</h3>
        <h3 id="year" class="cardYear">(${films[i].release_date})</h3>
    </section>
    </section>`
    }
    //el contenido de filmCard ahora contiene los valores de la variable list
    document.getElementById('filmCard').innerHTML = list;
}
movieList(printFilm)

const filmCard = document.getElementById("filmCard");
const openModal = document.getElementById("openModal");
const close = document.getElementsByClassName("close")[0];

filmCard.addEventListener("click", () => {
    openModal.style.display = "block";
})
close.addEventListener("click", () => {
    openModal.style.display = "none";
})

// const filmModal = function (dataFilm) {
//     let showContent = '';

//     for (let i = 0; i < dataFilm.length; i++) {
//         showContent += `
//     <section class="modalContent">
//     <h2 id="title" class="cardTitle">${dataFilm[i].title}</h2>
//     <h3 id="director" class="cardDirector">Director: ${dataFilm[i].director}</h3>
//     <h3 id="year" class="cardYear">(${dataFilm[i].release_date})</h3>
//     </section> `
//     }
//     document.getElementById('innerModal').innerHTML = showContent;

// }

//filmModal(printFilm)
/*console.log(orderData, data)*/



