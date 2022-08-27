// TODO: add game logic

///Timer for the game ////////

const startMinutes = 10;
let time = startMinutes*60;

const countdownEl = document.getElementById('countdown');

setInterval(updatecountdown,1000);

function updatecountdown() {
const minutes = Math.floor(time/60);
let seconds = time % 60;

countdownEl.innerHTML = `${minutes}:${seconds}`; 
time--
}


///Start feature for the game ////

const startButton = document.getElementById('start-btn')
const questionBox = document.getElementById('Question')
const quizIntroduction = document.getElementById('introduction')

const questionElement = document.getElementById('questionHeader')
const answerElementButtons = document.getElementById('answer-btn')
let shuffleQuestions, currentQuestionIndex 

startButton.addEventListener('click',startGame)

function startGame(){
console.log('start')
shuffleQuestions = questionA.sort(() => Math.random()-.5)
currentQuestionIndex = 0 
quizIntroduction.style.display ='none'
questionBox.style.display = 'block'
nextQuestion()


}

function nextQuestion(){

    showQuestion(shuffleQuestions[currentQuestionIndex])

}

function showQuestion(question) {
questionElement.innertext = question.question


}