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
            {text: "Selim 1er le terrible", correct: true},
            {text: "Mehmet le conquérant", correct: true},
            {text: "Bayezid la foudre", correct: false},
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