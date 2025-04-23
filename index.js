var randomNumber1;

function randomNumberGenerator () {
    var num = Math.floor((Math.random() * 6) + 1);
    return num;
}

randomNumber1 = randomNumberGenerator();
console.log(randomNumber1);