slideArr=document.getElementsByClassName("slide");
var dotContainerEle = document.getElementById("dotContainer");
for (var i=1; i<slideArr.length; i++) {
    slideArr[i].style.display='none';
    dotContainerEle.innerHTML+=`<span class="dot" onclick="dotSlideChange(${i})"></span>`;
}
var currentSlide=0;
var slideTotal=slideArr.length;
function slideChange(param) {
    slideArr[currentSlide].style.display='none';
    currentSlide+=param;
    currentSlide=(currentSlide<0)? slideTotal-1:currentSlide;
    currentSlide=(currentSlide>slideTotal-1)? 0:currentSlide;
    slideArr[currentSlide].style.display='block';
}
function dotSlideChange(n) {
    slideArr[currentSlide].style.display='none';
    currentSlide=n;
    slideArr[currentSlide].style.display='block';
}