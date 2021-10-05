import data from './data/ghibli/ghibli.js'
// import orderData from './data.js'

let films = data.films;
let printCard = document.getElementById("filmCard");

const drawCard = (films) => {
    return `
    <section class="filmsContainer">
    <figure class="cardImage">                           
        <img alt="Poster" id="poster" class="poster" src="${films.poster}">
    </figure>
    <section class="cardContainer-inner">
        <h2 id="title" class="cardTitle">${films.title}</h2>
        <h3 id="director" class="cardDirector">Director: ${films.director}</h3>
        <h3 id="year" class="cardYear">(${films.release_date})</h3>
    </section>
    </section>
    
    <section class="modal">
    <section class="innerModal" id="innerModal">
        <span class="close">&times;</span>
        <img alt="Poster" id="poster" class="poster" src="${films.poster}">
        <p>Title: ${films.title}</p>
        <p>Director: ${films.director}</p>
        <p>Description: ${films.description}</p>
        <p>Producer: ${films.producer}</p>
        <p>Release date: ${films.release_date}</p>
    </section>
    </section>`
        ;
};

for (let i = 0; i < films.length; i++) {
    printCard.innerHTML += drawCard(films[i]);
}

// Query modal
document.querySelectorAll(".filmsContainer").forEach(element => {
    element.addEventListener("click", (event) => {
        event.target.style.display = "block";
        // console.log(event.target);
        document.querySelector(".modal").style.display = 'block';
    })
});


//Botón cerrar modal
const close = document.getElementsByClassName("close")[0];

close.addEventListener("click", () => {
    document.querySelector(".modal").style.display = 'none';
})

//FUNCION ELI
// document.querySelectorAll(".filmsContainer").forEach(element => {
//     element.addEventListener("click", (event) => {
//         // event.target.querySelector(event.target.dataset.id).style.display = "block";
//         // event.target.dataset.id.style.display = "block";
//         event.target.style.display = "block";
//     })
// });

// console.log(data)







