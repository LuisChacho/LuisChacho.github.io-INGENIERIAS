// Banco de preguntas exacto extraído de las imágenes
const questions = [
    // ANALOGÍAS
    {
        id: 1,
        category: "analogias",
        topic: "CAP-R.V.-ANALOGÍAS",
        prompt: "CABLE es a ELECTRICIDAD como TUBERÍA es a...",
        options: ["Agua / Fluido", "Gasolina", "Metal", "Presión"],
        correct: 0,
        explanation: "El cable conduce electricidad, así como la tubería conduce agua o fluidos."
    },
    {
        id: 2,
        category: "analogias",
        topic: "CAP-R.V.-ANALOGÍAS",
        prompt: "YACIMIENTO es a PETRÓLEO como MINA es a...",
        options: ["Mineral / Oro", "Tierra", "Gas", "Excavación"],
        correct: 0,
        explanation: "Del yacimiento se extrae petróleo; de la mina se extraen minerales/metales."
    },
    {
        id: 3,
        category: "analogias",
        topic: "CAP-R.V.-ANALOGÍAS",
        prompt: "RUEDA es a VEHÍCULO como HÉLICE es a...",
        options: ["Barco / Avión", "Motor", "Viento", "Mar"],
        correct: 0,
        explanation: "La rueda permite la propulsión/movimiento del vehículo terrestre; la hélice lo hace en barcos/aviones."
    },

    // INFERENCIAS
    {
        id: 4,
        category: "inferencias",
        topic: "CAP-R.V.-INFERENCIAS",
        prompt: "El petróleo es un recurso no renovable. El carbón es un recurso no renovable. El sol es una fuente de energía.",
        options: [
            "Existen recursos renovables y no renovables utilizados para energía.",
            "El sol es un recurso no renovable.",
            "El carbón se extrae del sol.",
            "Toda fuente de energía es no renovable."
        ],
        correct: 0,
        explanation: "Se deduce válidamente que existen recursos no renovables (petróleo/carbón) e inagotables/renovables (sol)."
    },

    // COMPROBACIÓN / NÚMEROS
    {
        id: 5,
        category: "comprobacion",
        topic: "CAP-R.N.-COMPROBACIÓN",
        prompt: "15 casas requieren 8 paneles solares cada una en su techo. ¿Cuántos paneles solares se instalarán en total?",
        options: ["120 paneles", "110 paneles", "125 paneles", "100 paneles"],
        correct: 0,
        explanation: "Operación: 15 casas × 8 paneles = 120 paneles."
    },
    {
        id: 6,
        category: "comprobacion",
        topic: "CAP-R.N.-COMPROBACIÓN",
        prompt: "Tender 3500 metros de fibra óptica divididos equitativamente entre 7 cuadrillas. ¿Cuántos metros instala cada una?",
        options: ["500 metros", "600 metros", "450 metros", "700 metros"],
        correct: 0,
        explanation: "Operación: 3500 / 7 = 500 metros por cuadrilla."
    },
    {
        id: 7,
        category: "comprobacion",
        topic: "CAP-R.N.-COMPROBACIÓN",
        prompt: "65 generadores en funcionamiento. 12 sufren averías y se apagan, pero luego se reparan 5. ¿Cuántos quedan operativos?",
        options: ["58 generadores", "53 generadores", "60 generadores", "55 generadores"],
        correct: 0,
        explanation: "Operación: 65 - 12 + 5 = 58 generadores."
    },
    {
        id: 8,
        category: "comprobacion",
        topic: "CAP-R.N.-RELACIONES NUMÉRICAS",
        prompt: "Servidores: Inicio = 80. Instalan 25, devuelven 5, reciben 12, compran 40. ¿Cuántos servidores van en cada uno de los 6 racks de forma exacta?",
        options: ["17 servidores", "18 servidores", "16 servidores", "20 servidores"],
        correct: 0,
        explanation: "Total: 80 - 25 - 5 + 12 + 40 = 102. Distribución: 102 / 6 = 17 servidores por rack."
    },

    // MATEMÁTICA / MATRICES Y PRODUCTOS
    {
        id: 9,
        category: "matematica",
        topic: "CMP-MAT-EXPRESIONES ALGEBRAICAS",
        prompt: "Seleccione el producto notable equivalente a: (e^3x + xy)(e^3x - xy)",
        options: ["e^(6x) - x^2*y^2", "e^(9x) - x^2*y^2", "e^(6x) + x^2*y^2", "e^(3x) - xy"],
        correct: 0,
        explanation: "Diferencia de cuadrados: (a+b)(a-b) = a² - b² -> (e^3x)² - (xy)² = e^(6x) - x²y²."
    },
    {
        id: 10,
        category: "matematica",
        topic: "CMP-MAT-MATRICES",
        prompt: "¿Cómo se llama una matriz cuadrada si todos los elementos por encima de la diagonal principal son cero?",
        options: ["Matriz Triangular Inferior", "Matriz Triangular Superior", "Matriz Diagonal", "Matriz Escalar"],
        correct: 0,
        explanation: "Si los elementos sobre la diagonal principal son 0, la matriz es Triangular Inferior."
    },
    {
        id: 11,
        category: "matematica",
        topic: "CMP-MAT-MATRICES",
        prompt: "Dada A = [[2,-1,3],[0,4,-2]] y B = [[1,2,-1],[3,-2,4]]. Calcule la matriz 2A + B:",
        options: [
            "[[5, 0, 5], [3, 6, 0]]",
            "[[3, 1, 2], [3, 2, 2]]",
            "[[4, -1, 5], [3, 4, 0]]",
            "[[5, 1, 4], [3, 6, 2]]"
        ],
        correct: 0,
        explanation: "2A = [[4,-2,6],[0,8,-4]]. Sumando B: [[4+1, -2+2, 6-1], [0+3, 8-2, -4+4]] = [[5, 0, 5], [3, 6, 0]]."
    }
];

let userAnswers = {};

document.addEventListener("DOMContentLoaded", () => {
    renderQuestions("all");
    setupCategoryFilters();

    document.getElementById("reset-btn").addEventListener("click", resetQuiz);
});

function renderQuestions(categoryFilter) {
    const container = document.getElementById("quiz-container");
    container.innerHTML = "";

    const filtered = categoryFilter === "all" 
        ? questions 
        : questions.filter(q => q.category === categoryFilter);

    filtered.forEach((q) => {
        const card = document.createElement("article");
        card.className = "question-card";

        const topicHeader = document.createElement("h3");
        topicHeader.textContent = q.topic;

        const promptText = document.createElement("p");
        promptText.className = "prompt";
        promptText.textContent = `${q.id}. ${q.prompt}`;

        const optionsGroup = document.createElement("div");
        optionsGroup.className = "options-group";

        const feedback = document.createElement("div");
        feedback.className = `feedback id-fb-${q.id}`;

        q.options.forEach((opt, index) => {
            const btn = document.createElement("button");
            btn.className = "option-btn";
            btn.textContent = opt;

            if (userAnswers[q.id] !== undefined) {
                btn.disabled = true;
                if (index === q.correct) btn.classList.add("correct");
                if (userAnswers[q.id] === index && index !== q.correct) btn.classList.add("wrong");
            } else {
                btn.onclick = () => selectOption(q.id, index, q.correct, q.explanation);
            }

            optionsGroup.appendChild(btn);
        });

        card.appendChild(topicHeader);
        card.appendChild(promptText);
        card.appendChild(optionsGroup);
        card.appendChild(feedback);

        if (userAnswers[q.id] !== undefined) {
            showFeedback(q.id, userAnswers[q.id] === q.correct, q.explanation);
        }

        container.appendChild(card);
    });

    updateScore();
}

function selectOption(qId, selectedIndex, correctIndex, explanation) {
    userAnswers[qId] = selectedIndex;
    renderQuestions(getCurrentCategory());
}

function showFeedback(qId, isCorrect, explanation) {
    const fb = document.querySelector(`.id-fb-${qId}`);
    if (fb) {
        fb.classList.add("show", isCorrect ? "success" : "error");
        fb.innerHTML = isCorrect 
            ? `<strong>¡Correcto!</strong> ${explanation}`
            : `<strong>Incorrecto.</strong> ${explanation}`;
    }
}

function updateScore() {
    const answeredCount = Object.keys(userAnswers).length;
    let correctCount = 0;

    questions.forEach(q => {
        if (userAnswers[q.id] === q.correct) correctCount++;
    });

    document.getElementById("score-display").textContent = `${correctCount} / ${questions.length}`;
}

function setupCategoryFilters() {
    const items = document.querySelectorAll("#category-list li");
    items.forEach(item => {
        item.addEventListener("click", (e) => {
            items.forEach(i => i.classList.remove("active"));
            e.target.classList.add("active");
            renderQuestions(e.target.getAttribute("data-cat"));
        });
    });
}

function getCurrentCategory() {
    const active = document.querySelector("#category-list li.active");
    return active ? active.getAttribute("data-cat") : "all";
}

function resetQuiz() {
    userAnswers = {};
    renderQuestions(getCurrentCategory());
}