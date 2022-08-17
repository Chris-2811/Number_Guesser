const minNum = document.querySelector('.min-num')
const maxNum = document.querySelector('.max-num')
const input = document.querySelector('#input')
const submitBtn = document.querySelector('#submit')
const message = document.querySelector('.message')

let min = 1
let max = 10
let guessesLeft = 3
let winningNumber = 3


minNum.textContent = min
maxNum.textContent = max


submitBtn.addEventListener('click', (e)=> {
    if(submitBtn.classList.contains('play-again')){
        window.location.reload()
    }
    console.log(submitBtn)
})

submitBtn.addEventListener('click', (e)=>{

    let guess = parseInt(input.value)
   

    if(winningNumber === guess) {
        gameOver(true, `${guess} is correct, YOU WIN!`)
    } 
       else if(isNaN(guess) || guess < 0 || guess > 10) {
            setMessage(`Please enter a number between ${min} and ${max}`, 'red')
        }

    
    
    else {
        guessesLeft --
       
        if(guessesLeft === 0) {
            gameOver(false, `GameOver you lost, the correct number was ${winningNumber}`)
        } else {
            setMessage(`${guess} is false, you have ${guessesLeft} guesses left`, 'red')
        }
    }
    

})


function getRandomNum(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red'

    message.style.color = color
    input.style.borderColor = color

    submitBtn.value = 'play-again'
    submitBtn.classList = 'play-again'

    setMessage(msg)

}

function setMessage(msg, color) {
    message.textContent = msg
    message.style.color = color
}

