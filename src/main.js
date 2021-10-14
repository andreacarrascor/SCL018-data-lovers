import data from './data/ghibli/ghibli.js'
import { filterData, sortData } from './data.js'

let films = data.films;
let currentFilms = films;

let printCard = document.getElementById("film-card");

//FUNCIÓN QUE AGREGA INFORMACIÓN A LAS CARTAS
const drawCard = (films) => {
    return `
    <section class="films-container">
    <figure class="card-image">                           
        <img alt="Poster" id="poster" class="poster" src="${films.poster}">
    </figure>
    <section class="card-container-inner">
        <h2 id="title" class="card-title">${films.title}</h2>
        <h3 id="director" class="card-director">Director: ${films.director}</h3>
        <h3 id="year" class="card-year">(${films.release_date})</h3>
    </section>
    </section>`

};

//FUNCIÓN QUE PINTA CARTAS
const printCards = (newFilms) => {
    printCard.innerHTML = "";
    newFilms.forEach((currentFilm) => {
        printCard.innerHTML += drawCard(currentFilm);
    })
}
printCards(films);


const printModal = document.querySelector(".modal-container");

//FUNCIÓN QUE AGREGA LA INFORMACIÓN AL MODAL
const drawModal = (films) => {

    return `
    <section class="modal">
    <section class="inner-modal" id="inner-modal">
        <span class="close">&times;</span>
        <figure class="modal-image">
        <img alt="Poster" id="poster" class="modal-poster" src="${films.poster}">
        </figure>
        <section class="modal-container-inner">
            <article class="title-container">
                <h4 class="modal-inner-text" id="modal-title">${films.title}</h4>
            </article>
            <article class="director-container">
                <h4 class="subtitles">Director: </h4>
                <h4 class="modal-inner-text"> ${'\u00A0' + films.director}</h4>
            </article>
            <article class="release-date-container">
                <h4 class="subtitles">Release Date: </h4>
                <h4 class="modal-inner-text"> ${'\u00A0' + films.release_date}</h4>
            </article>
            <article class="rate-score">
                <h4 class="subtitles">Rate-score: </h4>
                <h4 class="modal-inner-text"> ${'\u00A0' + films.rt_score}/100</h4>
            </article>
            <article class="description-container">
                <h4 class="subtitles">Description: </h4>
                <h4 class="modal-inner-text"> ${films.description}</h4>
            </article>
        </section>
    </section>
    </section>`
};


// FUNCION QUE PINTA MODAL
const addModal = () => {
    document.querySelectorAll(".films-container").forEach((element, index) => {
        element.addEventListener("click", () => {

            const modalHTML = drawModal(currentFilms[index]);
            const modalContent = document.createElement('div');
            modalContent.innerHTML = modalHTML;

            printModal.innerHTML = "";
            printModal.appendChild(modalContent);
            document.querySelector(".modal").style.display = 'block';
            //Cierra el modal (X)
            const close = document.getElementsByClassName("close")[0];
            close.addEventListener("click", () => {
                document.querySelector(".modal").style.display = 'none';
            })
        })
    });
}
addModal();

//Escuchador de opciones director
const directorOption = document.querySelector(".combo-box-director");
directorOption.addEventListener("change", (event) => {

    const chosenDirector = filterData(data, event.target.value);
    currentFilms = chosenDirector;
    printCards(chosenDirector);
    addModal();
});

//Escuchador opciones Order by
const orderOption = document.querySelector(".combo-box-order");
orderOption.addEventListener("change", (event) => {
    const chosenOrder = sortData(data, event.target.value, event.target.value);
    currentFilms = chosenOrder;
    printCards(chosenOrder);
    addModal();
})

//Escuchador para refrescar a la pantalla inicial
const home = document.querySelector(".home-button");
home.addEventListener("click", function () {
    currentFilms = films;
    printCards(currentFilms);
    addModal();
})

//Escuchador casilla búsqueda (search)
const search = document.getElementById("search-id");
search.addEventListener("keydown", (key) => {
    if (key.key === "Enter") {
        const text = search.value.toLowerCase();
        const titleFilter = films.filter(x => (x.title.toLowerCase()).includes(text));
        const directorFilter = films.filter(x => (x.director.toLowerCase()).includes(text));
        
        if (titleFilter.length > 0) {
            printCards(titleFilter);
            addModal();
        }
        else if (directorFilter.length > 0) {
            printCards(directorFilter);
            addModal();
        }
        else {
            alert("Película no encontrada");
        }
    }
});



