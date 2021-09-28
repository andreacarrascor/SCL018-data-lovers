import data from './data/ghibli/ghibli.js'
import orderData from './data.js'

let printFilm = data.films

const movieList = function (films) {
  let list = ''
  document.getElementById('filmCard').innerHTML = ''

  for (let i = 0; i < films.length; i++) {
    list += `
    <div class= "cardContainer">
    <div id="printTitle" class="cardContainer-inner">
        <div class="frontCard">
        <img id="poster" class="poster" src="${films[i].poster}"/>
        <div class="nametag">
        <p id="title" class="title">${films[i].title}</p>
        <p id="release_date" class="release_date">Release date: ${films[i].release_date}</p>
        <p id="director" class="director">Director: ${films[i].director}</p>
          </div>
        </div>
      </div>
    </div>`
  }
  document.getElementById('filmCard').innerHTML = list
}
movieList(printFilm)
console.log(orderData, data)
