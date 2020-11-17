console.log("Let's get this party started!");

$("searchButton").on("click", search);
$("removeButton").on("click", remove);

async function search(evt) {
  console.log("submit function!")
  evt.preventDefault();
  let query = $("#searchText").val();
  let url = await searchGiphy(query);
  addGif(url);
}

function remove() {
  $("#gifs").empty();
}

async function searchGiphy(query) {
  let apiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
  let response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}`);
  console.log(`${response}`);
  console.log(response.data.url);
  return response.data.url;
}

function addGif(url) {
  $("#gifs")
    .append("<div>")
    .append("<a>")
    .attr("href", url);
}
