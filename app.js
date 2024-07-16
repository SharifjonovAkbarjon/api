
const API_URL = "https://jsonplaceholder.typicode.com"

async function laylo (api){
    let reponse = await fetch(`${api}/posts`)

    reponse
        .json()
        .then((res)=> console.log(res))
        .catch((err)=> console.log(err))

}

laylo(API_URL)






