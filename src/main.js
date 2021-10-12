import data from './data/ghibli/ghibli.js'
import { filterData } from './data.js'

let films = data.films;
let printCard = document.getElementById("film-card");

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

for (let i = 0; i < films.length; i++) {
    printCard.innerHTML += drawCard(films[i]);
}


const printModal = document.querySelector(".modal-container");

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

// Query modal
document.querySelectorAll(".films-container").forEach((element, index) => {
    element.addEventListener("click", () => {

        const modalHTML = drawModal(films[index]);
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


//escuchador de opciones director//traer values de las option
let directorOption = document.querySelector(".combo-box");

directorOption.addEventListener("change", (event) => {
    // console.log(event.target.value);
    const chosenDirector = filterData(data, event.target.value);
    // document.querySelector(".film-card").style.display = 'block';
    const print = (films) => {
        printCard.innerHTML = "";
        for (let i = 0; i < films.length; i++) {
            // document.querySelector(".film-card").classList.add("test");
            printCard.innerHTML += drawCard(films[i]);

            document.querySelectorAll(".films-container").forEach((element, index) => {
                element.addEventListener("click", () => {

                    const modalHTML = drawModal(films[index]);
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
    }
    print(chosenDirector);
    // console.log(chosenDirector)
});

const home = document.querySelector(".home-button");

home.addEventListener("click", function () {
    location.reload();

})

//Función search, bug de modal
const search = document.getElementById("search-id");

search.addEventListener("keydown", (key) => {
    if (key.key === "Enter") {
        const text = search.value.toLowerCase();
        const titleFilter = films.filter(x => (x.title.toLowerCase()).includes(text));
        const directorFilter = films.filter(x => (x.director.toLowerCase()).includes(text));

        if (titleFilter.length > 0) {
            printCard.innerHTML = "";
            for (let i = 0; i < titleFilter.length; i++) {
                printCard.innerHTML += drawCard(titleFilter[i]);
            }
        }
        else if (directorFilter.length > 0) {
            printCard.innerHTML = "";
            for (let i = 0; i < directorFilter.length; i++) {
                printCard.innerHTML += drawCard(directorFilter[i]);
            }
        }
        else {
            alert("Película no encontrada");
        }

    }
});



