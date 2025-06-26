let randomNumber = Math.floor(Math.random() * 100) +1;
console.log(randomNumber);  
let attemps = 0;
let guessIput = document.getElementById('guessInput');
let result = document.getElementById('result');
let guessButton = document.getElementById('guessButton');
let attempsNumber = document.getElementById('attempsNumber');

guessButton.addEventListener('click',function(){

    let guess = parseInt(guessIput.value);

    if(guess > 100 || guess < 1 || isNaN(guess)){
        alert('Número inválido');
        return false;
    }
    if(attemps < 10){
        if(guess > randomNumber){
            attemps++;
            result.innerHTML = 'O número secreto é MENOR que '+guess;
        }
        else if(guess < randomNumber){
            attemps++;
            result.innerHTML = 'O número secreto é MAIOR que '+guess;
        }
        else{
            result.innerHTML = 'Parabéns você acertou!! O número secreto era '+randomNumber+'.';
        }
    }
    else{
        result.innerHTML = 'Você falhou! O número era '+randomNumber+'!';
    }
    attempsNumber.innerHTML = 'Número de tentativas:'+attemps+'/10';
}) 