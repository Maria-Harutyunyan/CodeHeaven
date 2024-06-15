const endpoint =
  "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fd5a87abe";
const filmContainer = document.querySelector("#film-container");
const filmTitle = document.querySelector("#film-title");
const filmDescription = document.querySelector("#film-description");
const filmProducer = document.querySelector("#film-producer");
const filmDirector = document.querySelector("#film-director");
const filmReleaseDate = document.querySelector("#film-release-date");

function displayFilmInfo() {
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      const title = data.title;
      const description = data.description;
      const producer = data.producer;
      const director = data.director;
      const releaseDate = data.release_date;

      filmTitle.innerHTML = `<strong>Title:</strong>${title}`;
      filmDescription.innerHTML = `<strong>Description:</strong>${description}`;
      filmProducer.innerHTML = `<strong>Producer:</strong>${producer}`;
      filmDirector.innerHTML = `<strong>Director:</strong>${director}`;
      filmReleaseDate.innerHTML = `<strong>Release Date:</strong>${releaseDate}`;
    })
    .catch((error) => console.log(error));
}

displayFilmInfo();
