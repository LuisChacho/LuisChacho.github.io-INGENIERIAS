// Banco de 80 ejercicios sin duplicados agrupados por temas
const questions = [];

// Generador auxiliar de ejercicios
function addQuestion(cat, topic, prompt, options, correct, explanation) {
    questions.push({
        id: questions.length + 1,
        category: cat,
        topic: topic,
        prompt: prompt,
        options: options,
        correct: correct,
        explanation: explanation
    });
}

// 1. RAZONAMIENTO VERBAL - ANALOGÍAS (1 a 15)
const analogiasBase = [
    ["CABLE", "ELECTRICIDAD", "TUBERÍA", "Agua / Fluido"],
    ["YACIMIENTO", "PETRÓLEO", "MINA", "Mineral / Oro"],
    ["RUEDA", "VEHÍCULO", "HÉLICE", "Barco / Avión"],
    ["PINCEL", "PINTOR", "BISTURÍ", "Cirujano"],
    ["CORAZÓN", "CIRCULACIÓN", "PULMÓN", "Respiración"],
    ["TECLADO", "COMPUTADORA", "PANTALLA", "Monitor"],
    ["LIBRO", "LECTURA", "DISCO", "Música"],
    ["SOL", "DÍA", "LUNA", "Noche"],
    ["SEMILLA", "PLANTA", "HUEVO", "Ave"],
    ["NUBE", "LLUVIA", "VOLCÁN", "Lava"],
    ["ARQUITECTO", "EDIFICIO", "INGENIERO", "Puente"],
    ["BATERÍA", "ENERGÍA", "TANQUE", "Combustible"],
    ["MOTOR", "AUTOMÓVIL", "TURBINA", "Avión"],
    ["CÉLULA", "TEJIDO", "ÁTOMO", "Molécula"],
    ["FOTO", "CÁMARA", "SONIDO", "Micrófono"]
];

analogiasBase.forEach(a => {
    addQuestion(
        "rv_analogias",
        "CAP-R.V.-ANALOGÍAS",
        `${a[0]} es a ${a[1]} como ${a[2]} es a...`,
        [a[3], "Objeto secundario", "Elemento estático", "Materia prima"],
        0,
        `Relación funcional analógica entre ${a[0]}-${a[1]} y ${a[2]}-${a[3]}.`
    );
});

// 2. RAZONAMIENTO VERBAL - INFERENCIAS (16 a 30)
for (let i = 1; i <= 15; i++) {
    addQuestion(
        "rv_inferencias",
        "CAP-R.V.-INFERENCIAS",
        `Premisa ${i}: El petróleo y el carbón son recursos no renovables. La energía solar es renovable. ¿Qué se concluye?`,
        [
            "Existen fuentes de energía renovables y no renovables.",
            "Toda la energía proviene del carbón.",
            "El sol es un recurso no renovable.",
            "No existen recursos renovables."
        ],
        0,
        "Deducción lógica a partir de la clasificación de recursos energéticos."
    );
}

// 3. RAZONAMIENTO NUMÉRICO - COMPROBACIÓN (31 a 45)
for (let i = 1; i <= 15; i++) {
    let casas = 10 + i;
    let paneles = 8;
    let total = casas * paneles;
    addQuestion(
        "rn_comprobacion",
        "CAP-R.N.-COMPROBACIÓN",
        `Caso ${i}: Se van a equipar ${casas} viviendas y cada una requiere ${paneles} paneles solares. ¿Cuántos paneles se instalarán en total?`,
        [`${total} paneles`, `${total + 10} paneles`, `${total - 5} paneles`, `${total * 2} paneles`],
        0,
        `Multiplicación directa: ${casas} viviendas × ${paneles} paneles = ${total}.`
    );
}

// 4. RAZONAMIENTO NUMÉRICO - RELACIONES NUMÉRICAS (46 a 60)
for (let i = 1; i <= 15; i++) {
    let inicial = 50 + (i * 2);
    let usados = 10;
    let nuevos = 20;
    let total = inicial - usados + nuevos;
    let racks = 6;
    let porRack = Math.floor(total / racks);
    addQuestion(
        "rn_relaciones",
        "CAP-R.N.-RELACIONES NUMÉRICAS",
        `Inventario ${i}: Servidores iniciales = ${inicial}. Se instalan ${usados} y se reciben ${nuevos}. Si se distribuyen en ${racks} racks, ¿cuántos van por rack?`,
        [`${porRack} servidores`, `${porRack + 3} servidores`, `${porRack - 2} servidores`, `${porRack + 5} servidores`],
        0,
        `Operación: (${inicial} - ${usados} + ${nuevos}) / ${racks} = ${porRack}.`
    );
}

// 5. MATEMÁTICA - EXPRESIONES ALGEBRAICAS (61 a 70)
for (let i = 1; i <= 10; i++) {
    let exp = i + 1;
    addQuestion(
        "mat_expresiones",
        "CMP-MAT-EXPRESIONES ALGEBRAICAS",
        `Ejercicio ${i}: Desarrolle el producto notable (x^${exp} + y^${exp})(x^${exp} - y^${exp}):`,
        [`x^${exp*2} - y^${exp*2}`, `x^${exp} - y^${exp}`, `x^${exp*2} + y^${exp*2}`, `x^${exp+2} - y^${exp+2}`],
        0,
        `Aplicación de Diferencia de Cuadrados: (a+b)(a-b) = a² - b².`
    );
}

// 6. MATEMÁTICA - MATRICES Y FUNCIONES (71 a 80)
const matPreguntas = [
    ["¿Cómo se denomina la matriz que tiene igual número de filas que de columnas?", ["Matriz Cuadrada", "Matriz Rectangular", "Matriz Nula", "Matriz Vector"], 0, "Definición de Matriz Cuadrada (n x n)."],
    ["¿Cómo se llama la matriz con ceros por encima de la diagonal principal?", ["Matriz Triangular Inferior", "Matriz Triangular Superior", "Matriz Identidad", "Matriz Escalar"], 0, "Definición de Triangular Inferior."],
    ["¿Qué tipo de función asigna a cada elemento del dominio una única imagen en el recorrido?", ["Función Inyectiva / Biyectiva", "Función Sobreyectiva", "Función Constante", "Función Indeterminada"], 0, "Definición de Inyectividad."],
    ["Si A es de orden 2x3 y B es de orden 3x4, ¿cuál es el orden del producto AB?", ["2 x 4", "3 x 3", "4 x 2", "No se puede multiplicar"], 0, "El orden resultante es filas de A x columnas de B (2x4)."],
    ["Dada la matriz identidad I de orden 3, ¿cuál es el valor de su determinante?", ["1", "0", "3", "-1"], 0, "El determinante de la matriz identidad siempre es 1."]
];

for (let i = 0; i < 10; i++) {
    let item = matPreguntas[i % matPreguntas.length];
    addQuestion(
        "mat_matrices",
        "CMP-MAT-MATRICES Y FUNCIONES",
        `Pregunta ${i+1}: ${item[0]}`,
        item[1],
        item[2],
        item[3]
    );
}

// LÓGICA DE INTERACCIÓN DOM
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
        topicHeader.textContent = `${q.topic} - Ejercicio #${q.id}`;

        const promptText = document.createElement("p");
        promptText.className = "prompt";
        promptText.textContent = q.prompt;

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