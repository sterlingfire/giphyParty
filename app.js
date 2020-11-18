"use strict";
console.log("Let's get this party started!");

/*Gets URL of search input and adds gif */
async function search(evt) {
  evt.preventDefault();
  let query = $("#searchText").val();
  let url = await searchGiphy(query);
  
  addGif(url);
}

/**Removes all gifs from DOM */
function remove() {
  $("#gifs").empty();
}

/**Searches giphy.com and returns URL of gif to embed in DOM */
async function searchGiphy(query) {
  const apiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"   //make it a global variable
  let searchURL = `http://api.giphy.com/v1/gifs/search`;
  let response = await axios.get(searchURL,{params : {api_key : apiKey, q : query}});

  return response.data.data[0].images.original.url;
}

/**Displays the gif in the DOM */
function addGif(url) {
  $("#gifs").append("<div>");
  $("#gifs>div:last-child").append("<img>");
  $("#gifs>div:last-child>img").attr("src", url);
}

/**Add event listeners to search and remove buttons */
$("#searchGiphy").on("submit", search);
$("#removeButton").on("click", remove);