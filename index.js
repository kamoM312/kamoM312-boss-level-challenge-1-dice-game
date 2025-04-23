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

