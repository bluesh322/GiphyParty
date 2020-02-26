async function getGif(val) {
  const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: { q: val, api_key: "iEuRafcY9qd8F3HtQ7jiHSgff2hCMcUI", limit: 10 }
  });
  let rand = Math.floor(Math.random() * 10);
  $("#gifs").append(
    $("<img>", {
      class: "m-3 rounded w-25 h-25",
      src: res.data.data[rand].images.original.url
    })
  );
}

async function getJokes() {
  const res = await axios.get("https://icanhazdadjoke.com/");
  $("tbody")
    .append($("tr"));
}

const form = $("#searchForm");
const btn = $("#RemoveBtn");
form.on("submit", function(e) {
  const input = $("#search");
  e.preventDefault();
  getGif(input.val());
  input.val("");
});

btn.on("click", e => {
  e.preventDefault();
  $("#gifs").html("");
});
