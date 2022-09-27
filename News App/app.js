let newsSection = document.getElementById("news_section");




// var cat = document.getElementById('search');
// function displayCat() {
//     event.preventDefault();
//     console.log(cat.value)
//     fetch(`https://newsapi.org/v2/top-headlines?category=${cat.value.toLowerCase()}&apiKey=96281ad82767456bad1a7fe9ad081c7f`)
//         .then((response) => {
//             return response.json()
//         })
//         .then((data) => {
//             console.log(data.articles)
//             displayData(data)
//         })

//     function displayData(data) {
//         let newsHead = document.getElementById("news_head");
//         newsHead.innerHTML =`<h1>
//         ${cat.value.toUpperCase()}
//       </h1>`
//         for (i = 0; i < data.articles.length; i++) {
//             newsSection.innerHTML += `
//     <div class="col-md-4">
//         <div class="card" >
//         <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${data.articles[i].title}</h5>
//           <p class="card-text">${data.articles[i].description}</p>
//           <a href="${data.articles[i].url}" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//       </div>
        
//         `
//         }
//     }

// }

fetch(`https://newsapi.org/v2/top-headlines?category=general&apiKey=96281ad82767456bad1a7fe9ad081c7f`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data.articles)
        displayData(data)
    })

function displayData(data) {
    for (i = 0; i < data.articles.length; i++) {
        newsSection.innerHTML += `
        <div class="col-md-4">
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

// fetch(`https://newsapi.org/v2/top-headlines?category=business&apiKey=96281ad82767456bad1a7fe9ad081c7f`)
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data.articles)
//         displayData(data)
//     })

// function displayData(data) {
//     for (i = 0; i < data.articles.length; i++) {
//         bussinessNews.innerHTML += `
//         <div class="col-md-4">
//         <div class="card" >
//         <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${data.articles[i].title}</h5>
//           <p class="card-text">${data.articles[i].description}</p>
//           <a href="${data.articles[i].url}" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//       </div>
//         `
//     }
// }