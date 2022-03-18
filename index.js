const KEY = `a201b035`;                                                  // public API key
const input = document.getElementById("input");
const button = document.getElementById("button");
const image = document.getElementById("poster");

const title = document.getElementById("title");
const year = document.getElementById("year");
const genres = document.getElementById("genres");
const actors = document.getElementById("actors");

async function request(url){
    const response = await fetch(url);
    const data = response.json();
    return data;
}

async function executeRequest(){
    let movieName = input.value;
    const url = `http://www.omdbapi.com/?t=${movieName}&plot=full&apikey=${KEY}`;
    const response = await request(url);
    console.log(response);
    decorateHTML(response);
}

function decorateHTML(res){
    title.innerHTML = `<strong>MOVIE TITLE:</strong> ${res.Title}`;
    year.innerHTML = `<strong>YEAR:</strong> ${res.Year}`;
    genres.innerHTML = `<strong>GENRES:</strong> ${res.Genre}`;
    actors.innerHTML = `<strong>ACTORS:</strong> ${res.Actors}`;
    image.src = res.Poster;
}






