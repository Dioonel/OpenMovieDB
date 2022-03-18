const key = `a201b035`;
const url = `http://www.omdbapi.com/?t=Spider+man&plot=full&apikey=${key}`

async function request(){
    const response = await fetch(url);
    const data = response.json();
    return data;
}

async function execute(){
    console.log(await request());
}

execute();

