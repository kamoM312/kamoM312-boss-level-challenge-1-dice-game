var randomNumber1;
var randomNumber2;

function randomNumberGenerator () {
    var num = Math.floor((Math.random() * 6) + 1);
    return num;
}

randomNumber1 = randomNumberGenerator();
console.log(randomNumber1);

randomNumber2 = randomNumberGenerator();
console.log(randomNumber2);

document.querySelector("img.img1").setAttribute("src", `./images/dice${randomNumber1}.png`);
document.querySelector("img.img2").setAttribute("src", `./images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerText = "Draw!";
}