// BANCO COMPLETO DE PREGUNTAS (Sustituye este arreglo con tus 150 preguntas)
const questions = [
    {
        id: 1,
        category: "matematicas",
        topic: "Matemáticas - Álgebra",
        prompt: "¿Cuál es el valor de x en la ecuación 2x + 5 = 15?",
        options: ["x = 3", "x = 5", "x = 7", "x = 10"],
        correct: 1,
        explanation: "Restamos 5 a ambos lados (2x = 10) y luego dividimos para 2 (x = 5)."
    },
    {
        id: 2,
        category: "fisica",
        topic: "Física - Cinemática",
        prompt: "¿Cuál es la velocidad final de un objeto en caída libre tras 3 segundos? (g = 9.8 m/s²)",
        options: ["19.6 m/s", "29.4 m/s", "9.8 m/s", "39.2 m/s"],
        correct: 1,
        explanation: "La fórmula es v = g * t. Reemplazando: 9.8 * 3 = 29.4 m/s."
    }
    // Agrega el resto de tus preguntas aquí...
];

// VARIABLES DE ESTADO Y PERSISTENCIA
let userAnswers = JSON.parse(localStorage.getItem("feirnnr_answers")) || {};
let currentFilteredQuestions = [...questions];
let currentIndex = 0;
let timerInterval = null;

// CONFIGURACIÓN DEL TEMPORIZADOR PERSISTENTE (1 min x pregunta = 150 min)
const TOTAL_MINUTES = 150;

function initTimer() {
    let endTime = localStorage.getItem("feirnnr_endtime");

    // Si no se ha guardado una hora de fin, la creamos a partir del momento actual
    if (!endTime) {
        endTime = Date.now() + TOTAL_MINUTES * 60 * 1000;
        localStorage.setItem("feirnnr_endtime", endTime);
    }

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        const now = Date.now();
        const remainingMs = endTime - now;

        if (remainingMs <= 0) {
            clearInterval(timerInterval);
            document.getElementById("timer-display").innerText = "⏱️ ¡Tiempo agotado!";
            finishExamByTime();
        } else {
            const totalSeconds = Math.floor(remainingMs / 1000);
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;

            const format = (num) => String(num).padStart(2, '0');
            
            if (hours > 0) {
                document.getElementById("timer-display").innerText = `⏱️ ${hours}:${format(minutes)}:${format(seconds)}`;
            } else {
                document.getElementById("timer-display").innerText = `⏱️ ${format(minutes)}:${format(seconds)}`;
            }
        }
    }, 1000);
}

function finishExamByTime() {
    alert("⌛ El tiempo asignado para el examen ha finalizado.");
    const buttons = document.querySelectorAll(".option-btn");
    buttons.forEach(btn => btn.disabled = true);
    showSummary();
}

function loadQuestion() {
    if (currentFilteredQuestions.length === 0) return;

    updateProgressBar();

    const q = currentFilteredQuestions[currentIndex];
    
    document.getElementById("q-counter").innerText = `Pregunta ${currentIndex + 1} / ${currentFilteredQuestions.length}`;
    document.getElementById("topic-tag").innerText = q.topic;
    document.getElementById("prompt-text").innerText = `${q.id}. ${q.prompt}`;
    
    const optionsBox = document.getElementById("options-box");
    optionsBox.innerHTML = "";
    
    const savedAnswer = userAnswers[q.id];

    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = `${String.fromCharCode(65 + index)}) ${opt}`;
        
        if (savedAnswer !== undefined) {
            btn.disabled = true;
            if (index === q.correct) {
                btn.classList.add("correct");
            }
            if (index === savedAnswer && savedAnswer !== q.correct) {
                btn.classList.add("wrong");
            }
        } else {
            btn.onclick = () => selectOption(btn, index, q.id, q.correct, q.explanation);
        }
        
        optionsBox.appendChild(btn);
    });

    const expBox = document.getElementById("explanation-box");
    if (savedAnswer !== undefined) {
        expBox.innerHTML = `<strong>Explicación:</strong> ${q.explanation}`;
        expBox.style.display = "block";
    } else {
        expBox.style.display = "none";
        expBox.innerHTML = "";
    }
}

function selectOption(selectedBtn, selectedIndex, questionId, correctIndex, explanation) {
    userAnswers[questionId] = selectedIndex;
    localStorage.setItem("feirnnr_answers", JSON.stringify(userAnswers));

    const buttons = document.querySelectorAll(".option-btn");
    buttons.forEach(btn => btn.disabled = true);

    if (selectedIndex === correctIndex) {
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("wrong");
        buttons[correctIndex].classList.add("correct");
    }

    const expBox = document.getElementById("explanation-box");
    expBox.innerHTML = `<strong>Explicación:</strong> ${explanation}`;
    expBox.style.display = "block";

    updateProgressBar();
}

function updateProgressBar() {
    const totalAnswered = Object.keys(userAnswers).length;
    const percentage = ((totalAnswered / 150) * 100).toFixed(1);
    
    document.getElementById("progress-bar").style.width = `${percentage}%`;
    document.getElementById("progress-text").innerText = `Respondidas: ${totalAnswered} / 150 (${percentage}%)`;

    if (totalAnswered === 150) {
        clearInterval(timerInterval);
        showSummary();
    }
}

function showSummary() {
    let score = 0;
    questions.forEach(q => {
        if (userAnswers[q.id] === q.correct) score++;
    });
    
    document.getElementById("quiz-body").style.display = "none";
    const summaryBox = document.getElementById("completion-summary");
    summaryBox.style.display = "block";
    document.getElementById("final-score").innerHTML = `Obtuviste <strong>${score} / 150</strong> respuestas correctas (${((score/150)*100).toFixed(1)}%).`;
}

function nextQuestion() {
    if (currentIndex < currentFilteredQuestions.length - 1) {
        currentIndex++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        loadQuestion();
    }
}

function filterTopic() {
    const selectedCategory = document.getElementById("topic-select").value;
    if (selectedCategory === "all") {
        currentFilteredQuestions = [...questions];
    } else {
        currentFilteredQuestions = questions.filter(q => q.category === selectedCategory);
    }
    currentIndex = 0;
    loadQuestion();
}

function confirmReset() {
    const totalAnswered = Object.keys(userAnswers).length;
    if (totalAnswered < 150) {
        alert(`Has respondido ${totalAnswered} de 150 preguntas. Para reiniciar el simulador debes responder todas las preguntas primero.`);
    } else {
        forceReset();
    }
}

function forceReset() {
    if (confirm("¿Estás seguro de reiniciar el examen? Se borrará todo tu progreso y el temporizador volverá a 150 minutos.")) {
        localStorage.removeItem("feirnnr_answers");
        localStorage.removeItem("feirnnr_endtime");
        userAnswers = {};
        document.getElementById("quiz-body").style.display = "block";
        document.getElementById("completion-summary").style.display = "none";
        document.getElementById("topic-select").value = "all";
        currentFilteredQuestions = [...questions];
        currentIndex = 0;
        initTimer();
        loadQuestion();
    }
}

// INICIALIZACIÓN
window.onload = () => {
    initTimer();
    loadQuestion();
};