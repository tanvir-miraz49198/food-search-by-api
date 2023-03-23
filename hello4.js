
const fetchMeal = (searchText) => {
 const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

fetch(url)
.then(res => res.json())
.then(data => loadMeal(data.meals))

}

const loadMeal = meals => {
  const mealsContainer = document.getElementById('meals-container')
mealsContainer.innerText = " ";
for(const foods of meals){
    
   

const mealDiv = document.createElement('div')
mealDiv.classList.add('col')
mealDiv.innerHTML = `
<div class="card h-100">
            <img src="${foods.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${foods.strMeal}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

              <button onclick = "modalDetails(${foods.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#details">
              Details
              </button>

            </div>
          </div>
`
mealsContainer.appendChild(mealDiv)

}



}

const searchMeals = () => {
    const searchText = document.getElementById("search-filed").value;
fetchMeal(searchText)
}


const modalDetails = (mealsDetails) => {
const url2 = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealsDetails}`

fetch(url2)
.then(res => res.json())
.then(meals2 => mealsDetailsShow(meals2.meals[0]))
}



const mealsDetailsShow = showMeal => {
document.getElementById('exampleModalLabel').innerText = showMeal.strMeal;
const setModalImg = document.getElementById('modal-body')
setModalImg.innerHTML = `<img class = 'img-fluid' src="${showMeal.strMealThumb}" alt=""></img>`

}




fetchMeal()