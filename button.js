const buttonOfPerso = document.querySelector(".perso");
const listOfPerso = document.querySelector(".listOfPerso");
const bodyPage = document.querySelector("body")
const closeCorss = document.querySelector(".cross")

buttonOfPerso.addEventListener('click', launchPerso);

function launchPerso() {
      listOfPerso.style.display = "block";   
}

closeCorss.addEventListener("click", () => {
    listOfPerso.style.display = "none";
});