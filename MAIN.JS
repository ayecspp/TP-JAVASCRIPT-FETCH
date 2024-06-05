
const contenido = document.getElementById("contenidoPoke");
const fetchData = async() => {
    try{
        const respuesta = await fetch("https://rickandmortyapi.com/api/character");
        const data = await respuesta.json()
        const pregunta = data.results


    pregunta.forEach(pregunt => {
        const item = document.createElement("div")
        item.className = "carta"
        item.innerHTML += `<h3> ${pregunt.name} </h3> <p> ${pregunt.status} </P> <p> ${pregunt.species} </P>
        <img src="${pregunt.image}"> 
        `
        contenido.appendChild(item)
    });
    } catch(error) {
        console.log("hubo un error", error)
    }
}
fetchData()

