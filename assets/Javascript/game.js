


let dubLet = [
    'a', 'b', 'c',
    'd', 'e', 'f',
    'g', 'h', 'i',
    'j', 'k', 'l',
    'm', 'n', 'o',
    'p', 'q', 'r',
    's', 't', 'u',
    'v', 'w', 'x',
    'y', 'z'];

// console.log(dubLet);

const wordBank = ["silmarils", "isildur", "nazgul", "dunedain", "balrog", "hobbit", "sauron", "mirkwood", "gandalf",
    "sting", "moria", "galadriel", "lothlorien", "arkenstone", "legolas"];

console.log(wordBank);

let chosenWord = "";
let lettersInWord = [];
let blanks = [];
let blanksAndSuccessess = [];
let wrongLetters = [];
var guessesLeft = 10;
let winCount = 0;
let lossCount = 0;
let rightGuess = 0;
let audioLoss1 = document.getElementById('audioLoss');
let audioWin1 = document.getElementById('audioWin');

console.log(guessesLeft);


function reset() {
    chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    lettersInWord = chosenWord.split('');
    blanks = lettersInWord.length;

    letterGuessed = 0;
    rightGuess = 0;
    guessesLeft = 10;
    wrongLetters = [];
    blanksAndSuccessess = [];
    dubLet = [
        'a', 'b', 'c',
        'd', 'e', 'f',
        'g', 'h', 'i',
        'j', 'k', 'l',
        'm', 'n', 'o',
        'p', 'q', 'r',
        's', 't', 'u',
        'v', 'w', 'x',
        'y', 'z'];

    test = false;
    startGame();
}

function startGame() {
    chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    lettersInWord = chosenWord.split('');
    blanks = lettersInWord.length;

    rightGuess = 0;
    wrongLetters = [];
    guessesLeft = 10;
    blanksAndSuccessess = [];
    dubLet = [
        'a', 'b', 'c',
        'd', 'e', 'f',
        'g', 'h', 'i',
        'j', 'k', 'l',
        'm', 'n', 'o',
        'p', 'q', 'r',
        's', 't', 'u',
        'v', 'w', 'x',
        'y', 'z'];

    for (var i = 0; i < blanks; i++) {
        blanksAndSuccessess.push(' ');
        document.getElementById('blankWord').innerHTML = blanksAndSuccessess;
    }

    document.getElementById('blankWord').innerHTML = blanksAndSuccessess.join('  ');
    document.getElementById('winCounter').innerHTML = winCount;
    document.getElementById('lossCounter').innerHTML = lossCount;
    document.getElementById('wrongGuesses').innerHTML = wrongLetters;
    document.getElementById('numGuesses').innerHTML = guessesLeft;

    console.log(chosenWord);
    console.log(lettersInWord);
    console.log(blanks);
    console.log(blanksAndSuccessess);
}

function compareLetters(userKey) {


    if (chosenWord.indexOf(userKey) > -1) {
        for (var i = 0; i < blanks; i++) {
            if (lettersInWord[i] === userKey) {
                rightGuess++;
                blanksAndSuccessess[i] = userKey;
                document.getElementById('blankWord').innerHTML = blanksAndSuccessess.join('');
            }
        }
        console.log(blanksAndSuccessess);
    }

    else {
        wrongLetters.push(userKey);
        guessesLeft--;
        document.getElementById('numGuesses').innerHTML = guessesLeft;
        document.getElementById('wrongGuesses').innerHTML = wrongLetters;
    }
}

function playAudioWin() {
    audioWin1.play();
}



function winLose() {
    if (rightGuess === blanks) {
        winCount++;
        document.getElementById('winCounter').innerHTML = winCount;
        playAudioWin();
        setTimeout(function () { alert("I found it is the small everyday deeds of ordinary folk that keep the darkness at bay"); }, 1000);
        reset();
    }
    else if (guessesLeft === 0) {
        lossCount++;
        document.getElementById('lossCounter').innerHTML = lossCount;
        playAudioloss();
        alert('Fool of a Took!');
        reset();
    }
}

function playAudioloss() {
    audioLoss1.play();
}

startGame();

document.onkeypress = function (event) {
    test = true;
    var letterGuessed = event.key;
    for (var i = 0; i < dubLet.length; i++) {
        if (letterGuessed === dubLet[i] && test === true) {
            var SpliceDword = dubLet.splice(i, 1);

            compareLetters(letterGuessed);
            winLose();
        }
    }
}




    // $('#wrapper').scroll(function () {
    //     var X = $(this).scrollTop();
    //     $('rowz').css('top', t);
    // }






// console.log(chosenWord);

// for (var i = 0; i < numBlanks; i++) {
//     guessWord.push('_');
//     document.getElementById('blankWord').innerHTML = guessWord;
// }


// let generateUnderscore = () => {
//     for (let i = 0; i < chosenWord.length; i++) {
//         underScore.push('_');

//     }
//     return underScore;
// }
// console.log(generateUnderscore());

// document.addEventListener('keypress', (event) => {
//     let keyword = String.fromCharCode(event.keyCode);
//     if (chosenWord.indexOf(keyword) > -1) {
//         rightWord.push(keyword);
//         underScore[choosenWord.indexOf(keyword)] = keyword;
//         if (underScore.join('') == choosenWord) {
//             alert('You win!');
//         }
//         else {
//             wrongWord.push(keyword);
//         }
//     }
// });

// [0].innerHTML = generateUnderscore().join(' ');

// document.addEventListener('keypress', (event) => 

// var remainingLetters = word.length;

// while (remainingLetters > 0) {}





