const hamburgerBtn = document.querySelector("#hamburger-btn");
const navbarLinks = document.querySelector("#navbar-links");

hamburgerBtn.addEventListener("click", () => {
  navbarLinks.classList.toggle("nav-open");
});

document.addEventListener("click", (event) => {
    const clickedInsideMenu = navbarLinks.contains(event.target);
    const clickedHamburger = hamburgerBtn.contains(event.target);

    if ( !clickedInsideMenu && !clickedHamburger ){
        navbarLinks.classList.remove("nav-open");
    }
});

let cardsHtml = "";
const cardsContainer = document.querySelector(".cards-container");
const restaurants = [
    {name: "KFC", image: "images/cards.jpg", about: "lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, possimus", rating: 5},
    {name: "Kips", image: "images/cards.jpg", about: "lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, possimus", rating: 5},
    {name: "Steers", image: "images/cards.jpg", about: "lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, possimus", rating: 5},
    {name: "TastyBites", image: "images/cards.jpg", about: "lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, possimus", rating: 5}
]

for (const restaurant of restaurants){
    cardsHtml += `
    <article class= "restaurant-card"> 
          <a href= "#">
             <img  src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-picture">
          </a>
        <div class="restaurant-card__description">
            <h3 class="restaurant-card__name">${restaurant.name}</h3>
            <p class="restaurant-card__about">${restaurant.about}</p>
            <p class="restaurant-card__rating">${restaurant.rating}</p>
        </div> 
    </article>
    `;
}
cardsContainer.innerHTML = cardsHtml;