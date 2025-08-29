const imgBox = document.querySelector(".img-box");
const wrapBox = document.querySelector(".img-wrap");
const originalImg = document.querySelector("#original-img");
const line = document.querySelector("#line");

const leftSpace  = imgBox.offsetLeft;
originalImg.style.width = imgBox.offsetWidth + "px";

imgBox.onmousemove = function(e) {
    const boxWidth = (e.pageX - leftSpace) + "px";
    wrapBox.style.width = boxWidth;
    line.style.left = boxWidth;
};