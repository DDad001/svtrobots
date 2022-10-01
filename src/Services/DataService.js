
//Get a List of all robots
async function getRobots() {
    let res = await fetch("https://60c8ed887dafc90017ffbd56.mockapi.io/robots");
    let data = await res.json();
    return data;
}

export {  getRobots }
