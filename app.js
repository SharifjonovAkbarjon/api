
const API_URL = "https://jsonplaceholder.typicode.com"
const wrapper = document.querySelector(".wrapper")
const loading = document.querySelector(".loading")

async function laylo (api){
    let reponse = await fetch(`${api}/users`)

    reponse
        .json()
        .then((res)=> createCard(res))
        .catch((err)=> console.log(err))

}

laylo(API_URL)

function createCard(data){
    data.forEach((users)=>{
        let card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML=`
            <div class="card__image"></div>
            <h3>${users.name}</h3>
            <p>${users.username}</p>
        `
        wrapper.appendChild(card)
        // console.log(card);
    })
}






