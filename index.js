//Dice Roll Program

function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value,
        diceResults = document.getElementById("diceResults"),
        diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);

        images.push(`<img src = "./Dice-images/dice${value}.png" alt = "Dice ${value}">`);
    }

    diceResults.textContent = `Dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join(" ");

}