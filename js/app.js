const adderFormEl = document.querySelector("#add-form");
const mealResultEl = document.querySelector("#express-meals-result");
const nameMealInputEl = document.querySelector("#name-meal");
const namePriceInputEl = document.querySelector("#price-meal");
const namePhotoLinkInputEl = document.querySelector("#photo-meal-link");
const nameChiefInputEl = document.querySelector("#chief-meal");
const nameRestoranInputEl = document.querySelector("#restoran-meal");
// const addBtnEl = document.querySelector("#")

adderFormEl.addEventListener("submit", (event) => {
    event.preventDefault();
     
    const date = new Date();
    const dateEl = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

    const mealPhotoLink = document.createElement("img")
    mealPhotoLink.src = namePhotoLinkInputEl.value

    const titleMealEl = document.createElement("p")
    const titlePriceEl = document.createElement("p")
    const titleChiefEl = document.createElement("p")
    const titleRestoran = document.createElement("p")

    // titleMealEl.innerHTML = "Taom nomi:";
    // titleRestoran.innerText = "Taom restorani:"

    const deleteBtnEl = document.createElement("button");
    const dateBtnEl = document.createElement("button");
    const overMealBtnEl = document.createElement("button");

    deleteBtnEl.innerHTML = "Taomni o'chirish";
    dateBtnEl.innerHTML = "" + dateEl;
    overMealBtnEl.innerHTML = "Taomni tugadi";

    const mealContainerEl = document.createElement("div")
    const mealInfoWordsEl = document.createElement("div")
    const imageContainer = document.createElement("div")
    const mealInfoContainer = document.createElement("div")
    const buttonContainer = document.createElement("div")

    mealResultEl.appendChild(mealContainerEl);
    mealContainerEl.appendChild(mealInfoWordsEl);

    mealInfoWordsEl.appendChild(imageContainer);
    mealInfoWordsEl.appendChild(mealInfoContainer);
    mealInfoWordsEl.appendChild(buttonContainer);

    imageContainer.appendChild(mealPhotoLink);

    mealInfoContainer.appendChild(titleMealEl)
    mealInfoContainer.appendChild(titlePriceEl)
    mealInfoContainer.appendChild(titleChiefEl)
    mealInfoContainer.appendChild(titleRestoran)

    mealPhotoLink.innerHTML = namePhotoLinkInputEl.value;
    titleMealEl.innerHTML = "Taom nomi:" + nameMealInputEl.value;
    titlePriceEl.innerHTML = "Taom narxi:" + namePriceInputEl.value;
    titleChiefEl.innerHTML = "Taom oshpazi:" + nameChiefInputEl.value;
    titleRestoran.innerHTML = "Restoran nomi: " + nameRestoranInputEl.value;
    
    buttonContainer.appendChild(deleteBtnEl)
    buttonContainer.appendChild(dateBtnEl)
    buttonContainer.appendChild(overMealBtnEl)


    mealContainerEl.className = "express-result";
    buttonContainer.className = "button-container";
    mealInfoWordsEl.className = "meal-info-container";
    imageContainer.className = "image-container";
    mealInfoContainer.className = "meals-word-part";

    // Over btn
    overMealBtnEl.addEventListener("click", () => {
        mealContainerEl.style.backgroundColor = "rgb(181, 255, 181)"
    })

    // Delete btn
    deleteBtnEl.addEventListener("click", () => {
        const agree = confirm("Are you sure to delete this?")
        if(agree == true){
            mealContainerEl.remove()
        }
    })

    // Time btn


})



