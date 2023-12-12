const randomnumber=parseInt(Math.random()*100+1)



const submit=document.querySelector('#subt')
const userinput=document.querySelector('#guessField')
const prevguessSlot=document.querySelector('.guesses')
const rem=document.querySelector('.lastResult')
const lowOraHi=document.querySelector('.lowOrHi')

const startOver=document.querySelector('.resultParas')
const p=document.createElement('p')

let prevguess=[]
let numGuess=1
let playGame=true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userinput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please Enter a Valid Number')
    }else if(guess<1){
        alert('Please Enter a Valid Number more than one')
    }else if(guess>100){
        alert('Please Enter a Valid Number less than hundred')
    }else{
        prevguess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over . Random Number was ${randomnumber}`)
            endGame()
        }
    }
}

function checkGuess(guess){

}

function displayGuess(guess){

}


function displayMessage(message){

}

function endGame(){
    
}

function newGame(){

}








