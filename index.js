document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("simulator-form");
    const resultadoBox = document.getElementById("resultado");
    const cuotaMensualEl = document.getElementById("cuota-mensual");
    const totalPagarEl = document.getElementById("total-pagar");
    const totalInteresesEl = document.getElementById("total-intereses");
    const listaHistorial = document.getElementById("lista-historial");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Captura de valores de entrada
        const monto = parseFloat(document.getElementById("monto").value);
        const tasaAnual = parseFloat(document.getElementById("interes").value);
        const plazoMeses = parseInt(document.getElementById("plazo").value);

        if (isNaN(monto) || isNaN(tasaAnual) || isNaN(plazoMeses)) {
            alert("Por favor, ingresa valores válidos.");
            return;
        }

        // Cálculos financieros (Sistema Francés)
        const tasaMensual = (tasaAnual / 100) / 12;
        let cuotaMensual = 0;

        if (tasaMensual === 0) {
            cuotaMensual = monto / plazoMeses;
        } else {
            cuotaMensual = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazoMeses));
        }

        const totalPagar = cuotaMensual * plazoMeses;
        const totalIntereses = totalPagar - monto;

        // Renderizar resultados
        cuotaMensualEl.textContent = `$${cuotaMensual.toFixed(2)}`;
        totalPagarEl.textContent = `$${totalPagar.toFixed(2)}`;
        totalInteresesEl.textContent = `$${totalIntereses.toFixed(2)}`;

        resultadoBox.classList.remove("hidden");

        // Agregar al historial
        agregarAlHistorial(monto, plazoMeses, cuotaMensual);
    });

    function agregarAlHistorial(monto, meses, cuota) {
        const emptyMsg = listaHistorial.querySelector(".empty-msg");
        if (emptyMsg) {
            emptyMsg.remove();
        }

        const li = document.createElement("li");
        li.textContent = `Préstamo: $${monto.toLocaleString()} a ${meses} meses ➔ Cuota: $${cuota.toFixed(2)}/mes`;
        
        listaHistorial.prepend(li);
    }
});