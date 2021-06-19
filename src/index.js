// //////////////////////
// Rehearsal
// //////////////////////

// // 1. Select the button
// const button = document.getElementById("click-me");

// // 2. Listen to a click on the button
// button.addEventListener("click", (event) => {
//   // 3. Change the text add a class
//   event.currentTarget.innerText = "Loading...";
//   event.currentTarget.classList.add("disabled");
// });

// //////////////////////
// HTTP GET request
// //////////////////////

// 1. Select an element input, button, list
const input = document.querySelector("#keyword");
const submitBtn = document.querySelector("#submit");
const results = document.querySelector("#results");

// 2. Listen to a click on the button
submitBtn.addEventListener("click", (event) => {
  // console.log(event);
  event.preventDefault();
  // 2.5 Fetch the OMDb API
  const url = `https://www.omdbapi.com/?s=${input.value}&apikey=adf1f2d7`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data.Search);
      // 3. Display the movies!
      results.innerHTML = "";
      const movies = data.Search;
      movies.forEach((movie) => {
        results.insertAdjacentHTML(
          'beforeend',
          `
          <li class='list-inline-item'>
            <img src="${movie.Poster}" alt="poster" />
            <p>${movie.Title}</p>
          </li>`
        );
      });
    });
});


// //////////////////////
// HTTP POST request
// //////////////////////
const searchAlgoliaPlaces = (event) => {
  fetch("https://places-dsn.algolia.net/1/places/query", {
    method: "POST",
    body: JSON.stringify({ query: event.currentTarget.value })
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data.hits); // Look at local_names.default
    });
};

const search = document.querySelector("#search");
search.addEventListener("keyup", searchAlgoliaPlaces);