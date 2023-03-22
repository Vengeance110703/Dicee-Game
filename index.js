var randomNumber = [];
for (var i = 1; i <= 2; i++) {
    randomNumber.push(Math.floor(Math.random() * 6) + 1);
    document.querySelector(".img"+String(i)).setAttribute("src", "images/dice" + String(randomNumber[i-1]) + ".png");
}
if(randomNumber[0] > randomNumber[1])
document.querySelector("h1").textContent = "🚩 Player 1 Won";
else if(randomNumber[0] < randomNumber[1])
document.querySelector("h1").textContent = "Player 2 Won 🚩";
else
document.querySelector("h1").textContent = "Draw";