let next = document.querySelector("#next");
let back = document.querySelector("#back");

back.addEventListener("click", () => {
    location.replace("index.html")
})
next.addEventListener("click", () => {
    location.replace("topi.html")
})