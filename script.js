// Banco de dados dos flashcards sobre Outer Banks
const flashcards = [
    {
        question: "Qual é o lema dos Pogues?",
        answer: "Pogue life! (Ou: Um Pogue não mente para outro Pogue)"
    },
    {
        question: "Quem é o líder do grupo dos Pogues?",
        answer: "John B."
    },
    {
        question: "Qual é o nome do barco do John B?",
        answer: "The HMS Pogue"
    },
    {
        question: "Como são chamados os moradores ricos da ilha?",
        answer: "Kooks"
    },
    {
        question: "O que estava escrito na bússola do pai de John B?",
        answer: "Redfield"
    }
];

let currentIndex = 0;
const cardElement = document.querySelector('.flashcard');
const questionElement = document.getElementById('card-question');
const answerElement = document.getElementById('card-answer');

// Função para virar o card
function flipCard() {
    cardElement.classList.toggle('is-flipped');
}

// Função para carregar os dados no card
function loadCard() {
    questionElement.textContent = flashcards[currentIndex].question;
    answerElement.textContent = flashcards[currentIndex].answer;
}

// Função para avançar para o próximo card
function nextCard() {
    // Se o card estiver virado, desvira antes de trocar o texto
    if (cardElement.classList.contains('is-flipped')) {
        cardElement.classList.remove('is-flipped');
        // Pequeno atraso para trocar o texto enquanto o card desvira
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % flashcards.length;
            loadCard();
        }, 300);
    } else {
        currentIndex = (currentIndex + 1) % flashcards.length;
        loadCard();
    }
}

// Inicializa o primeiro card quando a página carrega
window.onload = loadCard;