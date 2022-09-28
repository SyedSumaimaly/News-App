let newsSection = document.getElementById("news_section");
let bussinessSection = document.getElementById("bussiness_section");
let EnterSection = document.getElementById("entertainment_section");
let HealthrSection = document.getElementById("health_section");
let SciSection = document.getElementById("science_section");
let SportsSection = document.getElementById("sports_section");
let TechSection = document.getElementById("technology_section");
let SearchSection = document.getElementById("search_section");
let newsHead = document.getElementById("news_head");
let loader = document.getElementById("loader");



var cat = document.getElementById('search');
function displayCat() {
    event.preventDefault();
    console.log(cat.value)
    fetch(`https://newsapi.org/v2/top-headlines?category=${cat.value.toLowerCase()}&apiKey=96281ad82767456bad1a7fe9ad081c7f`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data.articles)
            displayData(data)
        })

    function displayData(data) {
        let newsHead = document.getElementById("news_head");
        newsHead.innerHTML =`<h1>
        ${cat.value} News
      </h1>`
        for (i = 0; i < data.articles.length; i++) {
            SearchSection.innerHTML += `
    <div class="col-md-4">
        <div class="card" >
        <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.articles[i].title}</h5>
          <p class="card-text">${data.articles[i].description}</p>
          <a href="${data.articles[i].url}" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
        
        `
        }
    }

}

fetch(`https://newsapi.org/v2/top-headlines?category=general&apiKey=96281ad82767456bad1a7fe9ad081c7f`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data.articles)
        displayGeneral(data)
    })

function displayGeneral(data) {
    for (i = 0; i < data.articles.length; i++) {
        newsSection.innerHTML += `
        <div class="col-md-3">
        <div class="card" >
        <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.articles[i].title}</h5>
          <p class="card-text">${data.articles[i].description}</p>
          <a href="${data.articles[i].url}" class="btn btn-info">Read More..</a>
        </div>
      </div>
      </div>
        
        `
    }
}

fetch(`https://newsapi.org/v2/top-headlines?category=business&apiKey=96281ad82767456bad1a7fe9ad081c7f`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data.articles)
        displayBussiness(data)
    })

function displayBussiness(data) {
    for (i = 0; i < data.articles.length; i++) {
        bussinessSection.innerHTML += `
        <div class="col-md-3">
        <div class="card" >
        <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.articles[i].title}</h5>
          <p class="card-text">${data.articles[i].description}</p>
          <a href="${data.articles[i].url}" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
        `
    }
}

fetch(`https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=96281ad82767456bad1a7fe9ad081c7f`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data.articles)
        displayEnter(data)
    })

function displayEnter(data) {
    for (i = 0; i < data.articles.length; i++) {
        EnterSection.innerHTML += `
        <div class="col-md-3">
        <div class="card" >
        <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.articles[i].title}</h5>
          <p class="card-text">${data.articles[i].description}</p>
          <a href="${data.articles[i].url}" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
        `
    }
}

fetch(`https://newsapi.org/v2/top-headlines?category=health&apiKey=96281ad82767456bad1a7fe9ad081c7f`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data.articles)
        displayHealth(data)
    })

function displayHealth(data) {
    for (i = 0; i < data.articles.length; i++) {
        SciSection.innerHTML += `
        <div class="col-md-3">
        <div class="card" >
        <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.articles[i].title}</h5>
          <p class="card-text">${data.articles[i].description}</p>
          <a href="${data.articles[i].url}" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
        `
    }
}


fetch(`https://newsapi.org/v2/top-headlines?category=science&apiKey=96281ad82767456bad1a7fe9ad081c7f`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data.articles)
        displayScience(data)
    })

function displayScience(data) {
    for (i = 0; i < data.articles.length; i++) {
        HealthrSection.innerHTML += `
        <div class="col-md-3">
        <div class="card" >
        <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.articles[i].title}</h5>
          <p class="card-text">${data.articles[i].description}</p>
          <a href="${data.articles[i].url}" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
        `
    }
}

fetch(`https://newsapi.org/v2/top-headlines?category=sports&apiKey=96281ad82767456bad1a7fe9ad081c7f`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data.articles)
        displaysports(data)
    })

function displaysports(data) {
    for (i = 0; i < data.articles.length; i++) {
        SportsSection.innerHTML += `
        <div class="col-md-3">
        <div class="card" >
        <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.articles[i].title}</h5>
          <p class="card-text">${data.articles[i].description}</p>
          <a href="${data.articles[i].url}" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
        `
    }
}

fetch(`https://newsapi.org/v2/top-headlines?category=technology&apiKey=96281ad82767456bad1a7fe9ad081c7f`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data.articles)
        displaytech(data)
    })

function displaytech(data) {
    for (i = 0; i < data.articles.length; i++) {
        TechSection.innerHTML += `
        <div class="col-md-3">
        <div class="card" >
        <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.articles[i].title}</h5>
          <p class="card-text">${data.articles[i].description}</p>
          <a href="${data.articles[i].url}" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
        `
    }
}