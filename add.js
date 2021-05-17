var imageBack = document.querySelector(".text")
imageBack.style = `background-image: url("Annexes/background.jpg")`

var imageTableau = [`background-image: url("Annexes/background.jpg")`,`background-image: url("Annexes/background2.jpg")`]
var imageIndex = 0 ;

function changeImage (){
    imageBack.style = imageTableau[imageIndex]
    imageIndex++;
    if (imageIndex >= imageTableau.length){
        imageIndex=0;
    }
}

setInterval(changeImage, 15000);


console.log(document.querySelectorAll("d-flex align-items-stretch"));