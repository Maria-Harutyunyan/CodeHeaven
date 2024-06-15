function loadImage() {
  const breedSelect = document.querySelector("#breedSelect");
  const breed = breedSelect.value;
  const dogImage = document.querySelector("#dogImage");

  if (breed) {
    const apiUrl = `https://dog.ceo/api/breed/${breed}/images/random`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((resolve) => {
        dogImage.src = resolve.message;
        dogImage.style.display = "block";
      })
      .catch((error) => {
        console.error(error);
        dogImage.src = "";
        dogImage.style.display = "none";
      });
  }
}
