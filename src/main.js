import "./style.css";
const getJokeBtn = document.getElementById("getjokebtn");
const jokeTextEl = document.getElementById("joke-text");

getJokeBtn.addEventListener("click", getJokeBtn);

getJokeBtn.addEventListener("click", async () => {
  const response = await fetch("https://v2.jokeapi.dev/joke/Any", {
    method: "GET",
  });
  const data = await response.json();
  console.log(data);
  if (data.setup) {
    jokeTextEl.innerHTML = data.setup;
  } else {
    jokeTextEl.innerHTML = data.joke;
  }
});
