
const API_URL = "https://jsonplaceholder.typicode.com"
const wrapper = document.querySelector(".wrapper")
const loading = document.querySelector(".loading")
const btn = document.querySelector(".btn")

async function laylo (api){
    let reponse = await fetch(`${api}/users`)

    reponse
        .json()
        .then((res)=> createCard(res))
        .catch((err)=> console.log(err))
        .finally(()=>{
            loading.style.display = "none"
        })

}

laylo(API_URL)

function createCard(data){
    data.forEach((users)=>{
        let card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML=`
            <div class="card__image"></div>
            <p>${users.id}</p>     
            <h3>${users.name}</h3>
            <p>${users.username}</p>    
            <button class = "btn">View More</button>

        `
        wrapper.appendChild(card)
    })
}






