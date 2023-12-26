let randomnumber=parseInt(Math.random()*100+1)



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
endGame()
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userinput.value)
       // console.log(guess);
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
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
   if(guess===randomnumber){
      displayMessage(`You guessed it right`)
      endGame()
   }
   else if(guess<randomnumber){
    displayMessage(`Number is too low`)
   }
   else if(guess>randomnumber){
    displayMessage(`Number is too high`)
   }
}

function displayGuess(guess){
  userinput.value=''
  prevguessSlot.innerHTML+=`${guess} `
  numGuess++
  rem.innerHTML=`${11-numGuess}`
}


function displayMessage(message){
  lowOraHi.innerHTML=`<h2>${message}<h2>`

}

function endGame(){
    userinput.value=''
    userinput.setAttribute('disabled','')
    p.classList.add('button')
  
    console.log('value is ',p);
    p.innerHTML=`<h2 id="newgame">Start New Game </h2>`
    startOver.appendChild(p)
    playgame=false
    newGame()
    
}

function newGame(){
  const newgamebtn=document.querySelector("#newgame")
  newgamebtn.addEventListener('click',function(e){
    randomnumber=parseInt(Math.random()*100+1)
    prevguess=[]
    numGuess=1
    prevguessSlot.innerHTML=''
    rem.innerHTML=`${11-numGuess}`
    userinput.removeAttribute('disabled')
    startOver.removeChild(p)    
    
    playgame=true
  })
}








