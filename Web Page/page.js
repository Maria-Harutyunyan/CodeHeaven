const fish = document.querySelector("#fish");

fish.addEventListener("click", function (event) {
  event.stopPropagation();
  const change1 = Math.random() * 80;
  const change2 = Math.random() * 80;
  fish.style.left = change1 + "%";
  fish.style.top = change2 + "%";
});

const form = document.querySelector("#contact-form");
form.addEventListener("click", function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  fetch({
    method: "Post",
    body: formData,
  })
    .then((resp) => {
      console.log(resp);
    })
    .catch((error) => {
      console.log(error);
    });
});
