const key = `a201b035`;
//const url = `http://www.omdbapi.com/?t=${title}&plot=full&apikey=${key}`;

const input = document.getElementById("input");
const button = document.getElementById("button");


let search = () => {
    let movieName = input.value;
    const url = `http://www.omdbapi.com/?t=${movieName}&plot=full&apikey=${key}`;
    request();
    executeRequest(url);
}

async function request(url){
    const response = await fetch(url);
    const data = response.json();
    return data;
}

async function executeRequest(urlXD){
    console.log(await request(urlXD));
}

//execute();







