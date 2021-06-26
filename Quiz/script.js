const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
let totalScore=0;
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    alert('your score is '+ totalScore)
  }
  if (correct){
    totalScore= totalScore+1
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Which of the following is not a java feature?',
    answers: [
      { text: 'Use of exception handling', correct: true },
      { text: 'Dynamic', correct: false },
      { text: 'Object-oriented', correct: false },
      { text: 'Architecture', correct: false }
    ]
  },
  {
    question: '________ is used to find and fix bugs in java program?',
    answers: [
      { text: 'JVM', correct: false },
      { text: 'JDB', correct: true },
      { text: 'JRE', correct: false },
      { text: 'JDK', correct: false }
    ]
  },
  {
    question: 'What is the return type of the hashCode() method in the object class?',
    answers: [
      { text: 'object', correct: false },
      { text: 'int', correct: true },
      { text: 'long', correct: false },
      { text: 'void', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true },
      { text: '9', correct: false },
      { text: '76', correct: false }

    ]
  },
  {
    question: 'What does the expression float a = 35 / 0 return?',
    answers: [
      { text: '0', correct: false },
      { text: 'Infinity', correct: true },
      { text: 'Not a Number', correct: false },
      { text: 'Run time exception', correct: false }

    ]
  },
  {
    question: 'Evalute the following java expression, if x=3, y=5,and z= 10: ++z + y - y + z + x++',
    answers: [
      { text: '23', correct: false },
      { text: '25', correct: true },
      { text: '20', correct: false },
      { text: '24', correct: false }

    ]
  },
  {
    question: 'Which of the following tool is used to generate API documentation in HTML format from doc comments in source code?',
    answers: [
      { text: 'javah command', correct: false },
      { text: 'javaw command', correct: false },
      { text: 'javap tool', correct: false },
      { text: 'Javadoc tool', correct: true }

    ]
  },
  {
    question: 'Which of the following creates a list of 3 visible items and multiple selection abled?',
    answers: [
      { text: 'new List(3, true)', correct: true },
      { text: 'new List(false, 3)', correct: false},
      { text: 'new List(true,3)', correct: false },
      { text: 'new List(3,false)', correct: false }

    ]
  },
  {
    question: 'Which package contains the random class?',
    answers: [
      { text: 'java.lang package', correct: false },
      { text: 'java.awt package', correct: false },
      { text: 'java.util package', correct: true },
      { text: 'java.io package', correct: false }

    ]
  },
  {
    question: 'Which of the following is a valid long literal?',
    answers: [
      { text: 'ABH8097', correct: false },
      { text: 'Oxnf029L', correct: true },
      { text: '904423', correct: false },
      { text: 'L990023', correct: false }

    ]
}

]