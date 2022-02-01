let scroll = document.getElementById("scroll");
let cards = document.getElementById("cards");

var data = cards.getBoundingClientRect();

console.log(data);

scroll.addEventListener("click", ()=>{
    window.scrollTo(data.x, data.y);
});