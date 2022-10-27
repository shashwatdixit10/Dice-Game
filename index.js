
 document.querySelector("a").addEventListener("click",function(){  
    let dice1 = Math.floor(Math.random()*6)+1;
let randomimage = "dice"+dice1+".png";
let imagessource = "images/" + randomimage;
let imagefirst = document.querySelectorAll("img")[0];
imagefirst.setAttribute("src",imagessource);

let dice2 = Math.floor(Math.random()*6)+1;
let randomimage2 = "dice" + dice2 + ".png";
let imagessource2 = "images/" + randomimage2;
document.querySelectorAll("img")[1].setAttribute("src",imagessource2);

if (dice1>dice2) {
    document.querySelector("h1").innerHTML="Player 1 Wins";
}

else if(dice2>dice1){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Game Tie";
}
});
