const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
let span = document.getElementsByClassName("color")[0];
/* let range = "";
let color = "";
let rangeSplit = []; */

btn.addEventListener("click", () => {
    document.body.style.backgroundColor = `${getColor()}`;
    span.textContent = `${getColor()}`;
});

function getColor() {
    let range = "0123456789ABCDEF";
    let color = "#";
    for (i = 0; i < 6; i++) {
        color += range[Math.floor(Math.random() * 16)];
    }
    return color;
}
