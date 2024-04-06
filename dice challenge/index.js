var randomNumber1 = Math.floor(Math.random() * 6)+1;
var st = "images/dice"+randomNumber1+".png";
document.querySelector("img.img1").setAttribute("src",st);
var randomNumber2 = Math.floor(Math.random() * 6)+1;
var st2 = "images/dice"+randomNumber2+".png";
document.querySelector("img.img2").setAttribute("src",st2);
function changeBackgroundColor(classname, color) 
{
    var targetElement = document.getElementsByClassName(classname);
    targetElement[0].style.backgroundColor = color;
}
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 wins!!";
    changeBackgroundColor("container","#FFD700");
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 wins!!";
    changeBackgroundColor("container","#FADADD");
}
else{
    document.querySelector("h1").innerHTML="Draw!!";
    changeBackgroundColor("container","#FFDAB9");
}