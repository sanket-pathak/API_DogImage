const URL = "https://dog.ceo/api/breeds/image/random" ; 
const btn = document.querySelector("#btn");
// let factValue = document.querySelector("#fact");
const image = document.querySelector("#dogImage");


const getFacts = async () => {
    console.log("getting data...");
    let response = await fetch(URL)

    //converting JSON to javascript object format
    let data = await response.json()

    let image_link = data.message
    console.log(image_link);
    image.innerHTML = `<img src="${image_link}" class="Photo">`
}
btn.addEventListener("click", getFacts);

