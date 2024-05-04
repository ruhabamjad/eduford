let collapseIcon = document.querySelector(".collapse");
let closeNav = document.querySelector(".close-nav");
let myUl = document.querySelector(".nav ul");

collapseIcon.addEventListener("click", function(){
    myUl.classList.add("right-show");
});

closeNav.addEventListener("click", function(){
    myUl.classList.remove("right-show");
});