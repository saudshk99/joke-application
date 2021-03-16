const apiUrl = "https://api.chucknorris.io/jokes/random";

async function getJokes() {
  const response = await fetch(apiUrl);
  const data = await response.json();

  document.getElementById("getjokes").innerHTML = data.value;
}

