const   accessKey = "Un60YW6JmT_s_2lsM2nUlR_JuqHKjj1aQLFeK0AYBCA"

// const showLoading = document.querySelector(".show1");
const formEl = document.querySelector("form")
const inputEl = document.getElementById("search-input")
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById("show-more")

let inputData = "";
let pege = 1;

async function searchImages(){
    inputData = inputEl.value;
    const url = `http://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if(page === 1){
        searchResults.innerHTML = "";
    }

    results.map((result) =>{
        const imageWrapper =document.createElement("div");
        imageWrapper.classList.add("search-results");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_decription;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_decription;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        imageWrapper.appendChild(imageWrapper);
    })
    page++;
    if(page > 1){
        showMore.style.display = "block";
    }
}

const enes = document.querySelector(".enes");

formEl.addEventListener("submit", (event) =>{

    if(event){
        const lod = document.createElement("div");
        lod.classList.add("show-loading");
        enes.appendChild(lod);
        setTimeout(() => {
            enes.style.position = "absolute";
            // showLoading.addEventListener("click", () => document.body.classList.toggle("show1"));
            lod.remove();
            console.log("Beklemede");
        }, 600);
    }
    event.preventDefault(); //varsayılan eylemin normalde olduğu gibi yapılmaması gerektiğini belirtiyoruz
    page = 1;
    searchImages();
})

showMore.addEventListener("click", () =>{
    searchImages();
})

