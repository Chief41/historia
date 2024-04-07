const questions = [
    {
        question: "Qui est la mère de Richard Coeur de lion ?",
        answer: [
            {text: "Tamar 1ère", correct: false},
            {text: "Aliénor d'Aquitaine", correct: true},
            {text: "Mathilde de Flandre", correct: false},
            {text: "Catherine de Médicis", correct: false},
        ]
    },
    {
        question: "Quel sultan Seldjoukide anéantit la croisade populaire de pierre l'Ermite au camp de Civitot ?",
        answer: [
            {text: "Alp Aslan", correct: false},
            {text: "Yaghi Siyan", correct: false},
            {text: "Danishmend", correct: false},
            {text: "Kilic Aslan", correct: true},
        ]
    },
    {
        question: "Quel maladie metta fin à la vie du roi Baudouin IV ?",
        answer: [
            {text: "La peste", correct: false},
            {text: "La lèpre", correct: true},
            {text: "La gale", correct: false},
            {text: "La grippe Porcine", correct: false},
        ]
    },
    {
        question: "Quel sultan remporta la guerre de Constantinople contre les Byzantins en 1453 ?",
        answer: [
            {text: "Süleyman le magnifique", correct: false},
            {text: "Selim 1er le terrible", correct: false},
            {text: "Mehmet le conquérant", correct: true},
            {text: "Bayezid la foudre", correct: false},
        ]
    },
    {
        question: "Qui est le père de Alexandre le Grand ?",
        answer: [
            {text: "Philippe II", correct: true},
            {text: "Philippe III", correct: false},
            {text: "Louis Philippe de Grèce", correct: false},
            {text: "Leonidas Ier", correct: false},
        ]
    },
    {
        
        question: "Lequel de ses hommes ne fut pas un empereur Romain mais Byzantin ?",
        answer: [
            {text: "Alexis Comnène", correct: true},
            {text: "Jules Cesar", correct: false},
            {text: "Caligula", correct: false},
            {text: "Marc Aurèle", correct: false},
        ]   
    },
    {
        
        question: "Je suis un ancien Mamelouk surnommé le père de la conquète. Qui suis-je ?",
        answer: [
            {text: "Turan Shah", correct: false},
            {text: "Osman 1er", correct: false},
            {text: "Saladin", correct: false},
            {text: "Baybars", correct: true},
        ]   
    },
    {
        
        question: "Quele est le nom de la première periode de la préhistoire ?",
        answer: [
            {text: "L'age de cuivre", correct: false},
            {text: "le néolithique", correct: false},
            {text: "Le paléolithique", correct: true},
            {text: "Le moyen-age", correct: false},
        ]   
    }
]


const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answerButton");
const nextButton = document.getElementById("nextBtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "suivant";
    showQuestion();
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else {
        selectBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function showScore () {
    resetState();
    questionElement.innerHTML = `ton score est de ${score} sur ${questions.length} !` 
    nextButton.innerHTML = "Rejouer";
    nextButton.style.display = "block";
}


function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }else {
        startQuiz();
    }
})

startQuiz();

