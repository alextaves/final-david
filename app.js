const navToggleEl = document.querySelector("#js-navbar-toggle");
const mainMenuEl = document.querySelector(".navigation-grid");
const mainContentEl = document.querySelector(".main-mantra");
const backgroundFade = document.querySelector(".body-image");
// const serviceFade = document.querySelector(".cut");


function toggleNav(){
    navToggleEl.addEventListener("click", function(){
        mainMenuEl.classList.toggle("navOpen")
        mainContentEl.classList.toggle("main-fade");
        // serviceFade.classList.toggle("service-fade")
        console.log("works")
        backgroundFade.classList.toggle("opacityImage")
    })
}

toggleNav();
