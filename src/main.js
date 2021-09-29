import data from './data/ghibli/ghibli.js'
import orderData from './data.js'

let printFilm = data.films

const movieList = function (films) {
    let list = ''
    document.getElementById('filmCard').innerHTML = ''

    for (let i = 0; i < films.length; i++) {
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
    document.getElementById('filmCard').innerHTML = list
}
movieList(printFilm)
console.log(orderData, data)

// Rate score
// <h3 id="rate_score" class="cardRate">Rate score: ${films[i].rt_score}/100</h3>
