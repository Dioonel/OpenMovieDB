const KEY = `a201b035`;                                                  // public API key
const input = document.getElementById("input");
const button = document.getElementById("button");


async function request(url){
    const response = await fetch(url);
    const data = response.json();
    return data;
}

async function executeRequest(){
    let movieName = input.value;
    const url = `http://www.omdbapi.com/?t=${movieName}&plot=full&apikey=${KEY}`;
    console.log(await request(url));
}








