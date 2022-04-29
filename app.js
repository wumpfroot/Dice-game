// Declaring variables


const rollBtn = document.getElementById("rollBtn") // Our dice throw button
const resetBtn = document.getElementById("resetBtn") // Our game reset button
const oneplayer = document.getElementById("onePlayer")//One player button
const random = Math.floor(Math.random() * 6) + 1 //Dice random number from 1-6
const scoreamount = document.getElementById("scoreAmount")
let score = 0 //Beginning score amount. Player reaches 20, they win. Roll 1, they lose.



// Dice throw function happens, when player clicks the roll button

const diceThrow = () => {
    document.getElementById("diceImage").style.display = "block"
    document.querySelector(".scoreboard").style.display = "block"
    document.getElementById("diceImage").innerHTML = "<img src='images/dicethrow1.gif' height:200px width:200px/>"
    document.getElementById("beginningMsg").style.display = "none"
    setTimeout(() => {
    const random = Math.floor(Math.random() * 6) + 1
    score += random
    document.getElementById("diceImage").innerHTML = "<img src = 'images/dice" + random + ".svg'/>"
    if (random === 1) {
        document.querySelector("#loseGame").style.display = "block"
        document.querySelector("#loseGame").innerHTML = "You rolled 1, you LOSE!"
        score = 0
        rollBtn.disabled = true
    }else{
        // score += random
        scoreamount.innerHTML = score

    }

    if (score >= 20) {
        document.querySelector("#winGame").style.display = "block"
        document.querySelector("#winGame").innerHTML = "You won!"
        rollBtn.disabled = true

    }
    console.log(score)
    console.log
    }, 1000)
}

// Function that hides elements when called
const hide = () => {
    document.querySelector("#winGame").style.display = "none"
    document.querySelector("#loseGame").style.display = "none"
    document.getElementById("diceImage").style.display = "none"
    document.querySelector(".scoreboard").style.display = "none"
    }


// Reset button function
const reset = () => {
    score = 0
    scoreamount.textContent = " "
    rollBtn.disabled = false
    document.getElementById("beginningMsg").style.display = "block"
    hide()
    // introscreen()  
}

// const onePlayer = () => {
//     document.getElementById("beginningMsg").style.display = "block"
//     rollBtn.style.display = "block"
//     resetBtn.style.display = "block"
//     oneplayer.style.display = "none"
// }

// const introscreen = () => {
//     oneplayer.style.display = "block"
//     document.getElementById("beginningMsg").style.display = "none"
//     rollBtn.style.display = "none"
//     resetBtn.style.display = "none"
//     hide()
// }