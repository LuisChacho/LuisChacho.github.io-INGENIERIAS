// BANCO COMPLETO DE 150 PREGUNTAS
const questions = [
    // --- TEMA 1: CAP-R.V.-ANALOGÍAS (1-10) ---
    { id: 1, category: "rv_analogias", topic: "CAP-R.V.-ANALOGÍAS", prompt: "CABLE es a ELECTRICIDAD como TUBERÍA es a...", options: ["Gasolina", "Metal", "Agua / Fluido", "Presión"], correct: 2, explanation: "El cable conduce electricidad, así como la tubería conduce agua o fluidos." },
    { id: 2, category: "rv_analogias", topic: "CAP-R.V.-ANALOGÍAS", prompt: "YACIMIENTO es a PETRÓLEO como MINA es a...", options: ["Tierra", "Mineral / Oro", "Gas", "Excavación"], correct: 1, explanation: "Del yacimiento se extrae petróleo; de la mina se extraen minerales." },
    { id: 3, category: "rv_analogias", topic: "CAP-R.V.-ANALOGÍAS", prompt: "RUEDA es a VEHÍCULO como HÉLICE es a...", options: ["Barco / Avión", "Motor", "Viento", "Mar"], correct: 0, explanation: "La rueda propulsa el vehículo terrestre; la hélice propulsa el barco o avión." },
    { id: 4, category: "rv_analogias", topic: "CAP-R.V.-ANALOGÍAS", prompt: "PINCEL es a PINTOR como BISTURÍ es a...", options: ["Medicina", "Corte", "Hospital", "Cirujano"], correct: 3, explanation: "El pincel es la herramienta de trabajo del pintor; el bisturí del cirujano." },
    { id: 5, category: "rv_analogias", topic: "CAP-R.V.-ANALOGÍAS", prompt: "CORAZÓN es a CIRCULACIÓN como PULMÓN es a...", options: ["Oxígeno", "Respiración", "Aire", "Pecho"], correct: 1, explanation: "El corazón se encarga de la circulación; el pulmón de la respiración." },
    { id: 6, category: "rv_analogias", topic: "CAP-R.V.-ANALOGÍAS", prompt: "TECLADO es a ENTRADA como PANTALLA es a...", options: ["Imagen", "Monitor", "Salida", "Computadora"], correct: 2, explanation: "El teclado es dispositivo de entrada; la pantalla es de salida." },
    { id: 7, category: "rv_analogias", topic: "CAP-R.V.-ANALOGÍAS", prompt: "ARQUITECTO es a EDIFICIO como INGENIERO es a...", options: ["Puente / Estructura", "Planos", "Maquinaria", "Obra"], correct: 0, explanation: "El arquitecto diseña edificios; el ingeniero diseña puentes o estructuras." },
    { id: 8, category: "rv_analogias", topic: "CAP-R.V.-ANALOGÍAS", prompt: "SOL es a DÍA como LUNA es a...", options: ["Sombra", "Estrella", "Noche", "Cielo"], correct: 2, explanation: "El sol ilumina en el día; la luna en la noche." },
    { id: 9, category: "rv_analogias", topic: "CAP-R.V.-ANALOGÍAS", prompt: "BATERÍA es a ENERGÍA como TANQUE es a...", options: ["Agua", "Combustible", "Metal", "Presión"], correct: 1, explanation: "La batería almacena energía; el tanque almacena combustible." },
    { id: 10, category: "rv_analogias", topic: "CAP-R.V.-ANALOGÍAS", prompt: "MOTOR es a AUTOMÓVIL como TURBINA es a...", options: ["Viento", "Hélice", "Generador", "Avión"], correct: 3, explanation: "El motor impulsa al automóvil; la turbina impulsa al avión." },

    // --- TEMA 2: CAP-R.V.-INFERENCIAS (11-20) ---
    { id: 11, category: "rv_inferencias", topic: "CAP-R.V.-INFERENCIAS", prompt: "El petróleo es un recurso no renovable. El carbón es no renovable. El sol es una fuente de energía. ¿Qué se concluye?", options: ["El sol es un recurso no renovable.", "Existen fuentes de energía renovables y no renovables.", "Toda fuente energética se agota.", "El carbón procede del sol."], correct: 1, explanation: "Se infiere la existencia de fuentes renovables y no renovables." },
    { id: 12, category: "rv_inferencias", topic: "CAP-R.V.-INFERENCIAS", prompt: "El gas natural se extrae del subsuelo. La extracción del subsuelo requiere tecnología. ¿Qué se deduce?", options: ["Las piedras son más valiosas que el gas.", "El subsuelo solo contiene gas natural.", "Extraer gas natural requiere tecnología obligatoriamente.", "No se necesita tecnología en minería."], correct: 2, explanation: "Al extraerse del subsuelo, requiere necesariamente tecnología." },
    { id: 13, category: "rv_inferencias", topic: "CAP-R.V.-INFERENCIAS", prompt: "La energía solar proviene del sol y no se agota. ¿Qué se concluye?", options: ["La energía solar es inagotable y natural.", "El sol dejará de emitir energía pronto.", "Toda energía natural es fósil.", "El sol requiere tecnología."], correct: 0, explanation: "Combina la fuente natural con la cualidad de inagotable." },
    { id: 14, category: "rv_inferencias", topic: "CAP-R.V.-INFERENCIAS", prompt: "Todos los ingenieros en sistemas saben programar. Carlos es ingeniero en sistemas. ¿Qué se deduce?", options: ["Carlos no utiliza computadoras.", "Todos los programadores son ingenieros.", "Carlos es diseñador.", "Carlos sabe programar."], correct: 3, explanation: "Silogismo categórico directo." },
    { id: 15, category: "rv_inferencias", topic: "CAP-R.V.-INFERENCIAS", prompt: "Si llueve, el suelo se moja. Hoy ha llovido toda la mañana. ¿Qué se infiere?", options: ["El suelo está mojado.", "Nunca volverá a llover.", "El suelo se secará de inmediato.", "No ha caído agua."], correct: 0, explanation: "Modus Ponens en lógica deductiva." },
    { id: 16, category: "rv_inferencias", topic: "CAP-R.V.-INFERENCIAS", prompt: "Las plantas necesitan luz para la fotosíntesis. Una planta estuvo a oscuras un mes. ¿Qué se deduce?", options: ["Creció más rápido.", "No realizó fotosíntesis adecuadamente.", "Produjo más oxígeno.", "El sol la quemó."], correct: 1, explanation: "Sin luz, el proceso fotosintético se detiene." },
    { id: 17, category: "rv_inferencias", topic: "CAP-R.V.-INFERENCIAS", prompt: "Los metales conducen electricidad. El cobre es un metal. ¿Qué conclusión es válida?", options: ["El cobre es aislante.", "Todos los conductores son cobre.", "El cobre conduce electricidad.", "El cobre no conduce calor."], correct: 2, explanation: "Inclusión de clases." },
    { id: 18, category: "rv_inferencias", topic: "CAP-R.V.-INFERENCIAS", prompt: "Ningún vehículo eléctrico emite gases nocivos. El prototipo X es un vehículo eléctrico. ¿Qué se concluye?", options: ["El prototipo X usa gasolina.", "El prototipo X no emite gases nocivos.", "El prototipo X no requiere energía.", "Todos los vehículos son ecológicos."], correct: 1, explanation: "Universal negativa aplicada a un individuo." },
    { id: 19, category: "rv_inferencias", topic: "CAP-R.V.-INFERENCIAS", prompt: "Todos los estudiantes aprobados entregaron su proyecto. Juan no entregó el proyecto. ¿Qué se infiere?", options: ["Juan no aprobó.", "Juan sacó la nota máxima.", "El proyecto era opcional.", "Juan aprobó."], correct: 0, explanation: "Modus Tollens: al negar el consecuente, se niega la condición." },
    { id: 20, category: "rv_inferencias", topic: "CAP-R.V.-INFERENCIAS", prompt: "El consumo de agua aumenta en verano. Actualmente estamos en verano. ¿Qué se puede prever?", options: ["El consumo disminuirá.", "No habrá agua.", "El consumo de agua aumentará.", "El clima estará frío."], correct: 2, explanation: "Previsión deducida del comportamiento estacional." },

    // --- TEMA 3: CAP-R.N.-COMPROBACIÓN (21-30) ---
    { id: 21, category: "rn_comprobacion", topic: "CAP-R.N.-COMPROBACIÓN", prompt: "Se equiparán 15 casas y cada una requiere exactamente 8 paneles solares. ¿Cuántos paneles se instalarán en total?", options: ["110 paneles", "120 paneles", "125 paneles", "100 paneles"], correct: 1, explanation: "15 × 8 = 120 paneles." },
    { id: 22, category: "rn_comprobacion", topic: "CAP-R.N.-COMPROBACIÓN", prompt: "Se deben tender 3500 metros de fibra óptica entre 7 cuadrillas. ¿Cuántos metros corresponden a cada una?", options: ["600 metros", "450 metros", "700 metros", "500 metros"], correct: 3, explanation: "3500 / 7 = 500 metros." },
    { id: 23, category: "rn_comprobacion", topic: "CAP-R.N.-COMPROBACIÓN", prompt: "Un campamento tiene 65 generadores. 12 se apagan por falla y luego se reparan 5. ¿Cuántos quedan operativos?", options: ["58 generadores", "53 generadores", "60 generadores", "55 generadores"], correct: 0, explanation: "65 - 12 + 5 = 58." },
    { id: 24, category: "rn_comprobacion", topic: "CAP-R.N.-COMPROBACIÓN", prompt: "Si 20 computadoras consumen 100 kW al día, ¿cuántos kW consumirán 30 computadoras iguales?", options: ["120 kW", "180 kW", "150 kW", "200 kW"], correct: 2, explanation: "(100/20) * 30 = 150 kW." },
    { id: 25, category: "rn_comprobacion", topic: "CAP-R.N.-COMPROBACIÓN", prompt: "Se requieren 240 sacos de cemento. Se han entregado 4 camiones con 45 sacos cada uno. ¿Cuántos sacos faltan?", options: ["50 sacos", "60 sacos", "40 sacos", "70 sacos"], correct: 1, explanation: "240 - (4 × 45) = 240 - 180 = 60 sacos." },
    { id: 26, category: "rn_comprobacion", topic: "CAP-R.N.-COMPROBACIÓN", prompt: "Un servidor procesa 1200 peticiones por minuto. ¿Cuántas peticiones procesa en 15 segundos?", options: ["300 peticiones", "200 peticiones", "400 peticiones", "150 peticiones"], correct: 0, explanation: "15 segundos es 1/4 min -> 1200 / 4 = 300." },
    { id: 27, category: "rn_comprobacion", topic: "CAP-R.N.-COMPROBACIÓN", prompt: "Para cercar un terreno cuadrado de 25 m de lado, ¿cuántos metros de cerca se necesitan?", options: ["625 m", "50 m", "100 m", "150 m"], correct: 2, explanation: "Perímetro = 4 × 25 m = 100 m." },
    { id: 28, category: "rn_comprobacion", topic: "CAP-R.N.-COMPROBACIÓN", prompt: "De 900 microprocesadores, el 3% está defectuoso. ¿Cuántos chips funcionan bien?", options: ["870", "880", "850", "873"], correct: 3, explanation: "3% de 900 = 27 defectuosos. Operativos = 900 - 27 = 873." },
    { id: 29, category: "rn_comprobacion", topic: "CAP-R.N.-COMPROBACIÓN", prompt: "Se compran 8 transformadores de $1500 c/u con 10% de descuento total. ¿Cuánto se paga?", options: ["$10,800", "$12,000", "$10,500", "$11,200"], correct: 0, explanation: "8 * 1500 = $12000 - 10% ($1200) = $10,800." },
    { id: 30, category: "rn_comprobacion", topic: "CAP-R.N.-COMPROBACIÓN", prompt: "Un vehículo eléctrico recorre 420 km con 3 cargas. ¿Cuántos km recorrerá con 5 cargas?", options: ["650 km", "700 km", "750 km", "800 km"], correct: 1, explanation: "(420 / 3) * 5 = 140 * 5 = 700 km." },

    // --- TEMA 4: CAP-R.N.-RELACIONES NUMÉRICAS (31-40) ---
    { id: 31, category: "rn_relaciones", topic: "CAP-R.N.-RELACIONES NUMÉRICAS", prompt: "Inventario: Inicio = 80. Instalan 25, devuelven 5, reciben 12, compran 40. ¿Cuántos van en cada uno de 6 racks?", options: ["18", "16", "17", "20"], correct: 2, explanation: "80 - 25 - 5 + 12 + 40 = 102 / 6 = 17." },
    { id: 32, category: "rn_relaciones", topic: "CAP-R.N.-RELACIONES NUMÉRICAS", prompt: "A: 120/150 (80%). B: 150/200 (75%). C: 45/50 (90%). D: 210/300 (70%). ¿Mayor efectividad?", options: ["Proyecto A", "Proyecto C (90%)", "Proyecto B", "Proyecto D"], correct: 1, explanation: "45 / 50 = 90% de efectividad." },
    { id: 33, category: "rn_relaciones", topic: "CAP-R.N.-RELACIONES NUMÉRICAS", prompt: "Z1: 300 P, 50 T. Z2: 400 P, 100 M. Z3: 150 T, 200 M. ¿Total de Paneles + Turbinas?", options: ["850", "950", "1000", "900"], correct: 3, explanation: "Paneles (700) + Turbinas (200) = 900." },
    { id: 34, category: "rn_relaciones", topic: "CAP-R.N.-RELACIONES NUMÉRICAS", prompt: "Empresa A: 5/400. B: 12/600. C: 3/300. ¿Menor tasa de error?", options: ["Empresa C (1%)", "Empresa A (1.25%)", "Empresa B (2%)", "Todas igual"], correct: 0, explanation: "C tiene 1% de error." },
    { id: 35, category: "rn_relaciones", topic: "CAP-R.N.-RELACIONES NUMÉRICAS", prompt: "Stock: 500 routers. Ventas: 120, 150. Entran: 200. Ventas: 180. ¿Stock final?", options: ["280", "250", "300", "220"], correct: 1, explanation: "500 - 120 - 150 + 200 - 180 = 250." },
    { id: 36, category: "rn_relaciones", topic: "CAP-R.N.-RELACIONES NUMÉRICAS", prompt: "Relación técnicos a ingenieros = 4 a 1. Hay 32 técnicos. ¿Cuántos ingenieros hay?", options: ["6", "10", "8", "12"], correct: 2, explanation: "32 / 4 = 8 ingenieros." },
    { id: 37, category: "rn_relaciones", topic: "CAP-R.N.-RELACIONES NUMÉRICAS", prompt: "Tres envases: 120L, 180L, 240L. ¿Mayor capacidad del recipiente común?", options: ["60 Litros", "30 Litros", "40 Litros", "20 Litros"], correct: 0, explanation: "MCD(120, 180, 240) = 60 L." },
    { id: 38, category: "rn_relaciones", topic: "CAP-R.N.-RELACIONES NUMÉRICAS", prompt: "Banco A: 5% de $2000. Banco B: 4% de $3000. ¿Mayor ganancia anual?", options: ["Banco A ($100)", "Igual", "Banco B ($120)", "Ninguno"], correct: 2, explanation: "A = $100, B = $120." },
    { id: 39, category: "rn_relaciones", topic: "CAP-R.N.-RELACIONES NUMÉRICAS", prompt: "Cable de 120 m cortado en razón 3:5. ¿Longitud del tramo mayor?", options: ["45 m", "75 m", "80 m", "70 m"], correct: 1, explanation: "(5/8) * 120 = 75 m." },
    { id: 40, category: "rn_relaciones", topic: "CAP-R.N.-RELACIONES NUMÉRICAS", prompt: "Lote A: 100 al 95%. Lote B: 200 al 90%. ¿Porcentaje promedio global?", options: ["92.50%", "90.00%", "93.33%", "91.66%"], correct: 3, explanation: "(95 + 180) / 300 = 275 / 300 = 91.66%." },

    // --- TEMA 5: CAP-R.N.-ANÁLISIS DE PROBLEMAS (41-50) ---
    { id: 41, category: "rn_problemas", topic: "CAP-R.N.-ANÁLISIS DE PROBLEMAS", prompt: "4 máquinas tardan 15 días. Si se agregan 2 máquinas más, ¿cuántos días tardan?", options: ["12 días", "10 días", "8 días", "9 días"], correct: 1, explanation: "Inversa: (4 * 15) / 6 = 10 días." },
    { id: 42, category: "rn_problemas", topic: "CAP-R.N.-ANÁLISIS DE PROBLEMAS", prompt: "Servidor 500 TB. 30% reserva. Del resto, la mitad se asigna a VMs. ¿TB libres?", options: ["175 TB", "150 TB", "200 TB", "250 TB"], correct: 0, explanation: "350 TB restan. 350 / 2 = 175 TB." },
    { id: 43, category: "rn_problemas", topic: "CAP-R.N.-ANÁLISIS DE PROBLEMAS", prompt: "A 120 rpm consume 240 W. ¿Consumo a 150 rpm si es directamente proporcional?", options: ["280 W", "320 W", "300 W", "350 W"], correct: 2, explanation: "(240 / 120) * 150 = 300 W." },
    { id: 44, category: "rn_problemas", topic: "CAP-R.N.-ANÁLISIS DE PROBLEMAS", prompt: "2 bombas llenan un tanque en 6 horas. ¿Cuánto tardan 3 bombas?", options: ["5 h", "3 h", "4.5 h", "4 h"], correct: 3, explanation: "Inversa: (2 * 6) / 3 = 4 horas." },
    { id: 45, category: "rn_problemas", topic: "CAP-R.N.-ANÁLISIS DE PROBLEMAS", prompt: "8 programadores hacen un sistema en 20 días. ¿Días para 10 programadores?", options: ["16 días", "15 días", "18 días", "12 días"], correct: 0, explanation: "(8 * 20) / 10 = 16 días." },
    { id: 46, category: "rn_problemas", topic: "CAP-R.N.-ANÁLISIS DE PROBLEMAS", prompt: "Presupuesto $12,000. 40% en HW y 25% del resto en SW. ¿Dinero libre?", options: ["$4,800", "$5,400", "$6,000", "$5,000"], correct: 1, explanation: "Resta HW: $7200. Resta SW: $7200 * 0.75 = $5,400." },
    { id: 47, category: "rn_problemas", topic: "CAP-R.N.-ANÁLISIS DE PROBLEMAS", prompt: "Tren a 80 km/h tarda 3 h. A 100 km/h, ¿cuánto tarda?", options: ["2.5 h", "2 h", "2.4 h (2h 24m)", "2.8 h"], correct: 2, explanation: "240 / 100 = 2.4 horas." },
    { id: 48, category: "rn_problemas", topic: "CAP-R.N.-ANÁLISIS DE PROBLEMAS", prompt: "Impresora 3D: 3 piezas en 45 min. ¿Piezas en 3 horas (180 min)?", options: ["10", "15", "9", "12"], correct: 3, explanation: "(180 / 45) * 3 = 12 piezas." },
    { id: 49, category: "rn_problemas", topic: "CAP-R.N.-ANÁLISIS DE PROBLEMAS", prompt: "80L de mezcla al 20% aditivo. Se agregan 20L de aditivo puro. ¿Nuevo %?", options: ["36%", "40%", "30%", "32%"], correct: 0, explanation: "(16 + 20) / 100 = 36%." },
    { id: 50, category: "rn_problemas", topic: "CAP-R.N.-ANÁLISIS DE PROBLEMAS", prompt: "Un sensor guarda datos cada 4 segundos. ¿Registros en 2 horas (7200 s)?", options: ["3600", "1800", "1200", "2400"], correct: 1, explanation: "7200 / 4 = 1800 registros." },

    // --- TEMA 6: CMP-MAT-NÚMEROS REALES (51-60) ---
    { id: 51, category: "mat_reales", topic: "CMP-MAT-NÚMEROS REALES", prompt: "Relación correcta entre Reales (R), Racionales (Q) e Irracionales (I):", options: ["R = Q ∩ I", "Q = R ∪ I", "R = Q ∪ I", "I = Q ∩ R"], correct: 2, explanation: "Los reales son la unión de racionales e irracionales." },
    { id: 52, category: "mat_reales", topic: "CMP-MAT-NÚMEROS REALES", prompt: "¿Cuál es la intersección entre Racionales (Q) e Irracionales (I)?", options: ["Q ∩ I = ∅ (Vacío)", "Q ∩ I = R", "Q ∩ I = {0}", "Q ∩ I = N"], correct: 0, explanation: "Son conjuntos disjuntos." },
    { id: 53, category: "mat_reales", topic: "CMP-MAT-NÚMEROS REALES", prompt: "¿Cuál de los siguientes números es un número Irracional?", options: ["3/4", "0.2525...", "-5", "√2"], correct: 3, explanation: "√2 tiene infinitos decimales no periódicos." },
    { id: 54, category: "mat_reales", topic: "CMP-MAT-NÚMEROS REALES", prompt: "La propiedad a * (b + c) = a*b + a*c es la propiedad:", options: ["Conmutativa", "Distributiva", "Asociativa", "Neutro"], correct: 1, explanation: "Propiedad distributiva del producto sobre la suma." },
    { id: 55, category: "mat_reales", topic: "CMP-MAT-NÚMEROS REALES", prompt: "¿Inverso multiplicativo de -3/5?", options: ["5/3", "-5/3", "3/5", "1/3"], correct: 1, explanation: "El producto con su inverso da 1." },
    { id: 56, category: "mat_reales", topic: "CMP-MAT-NÚMEROS REALES", prompt: "Calcular el resultado de |-8| + |3| - |-5|:", options: ["16", "0", "6", "10"], correct: 2, explanation: "8 + 3 - 5 = 6." },
    { id: 57, category: "mat_reales", topic: "CMP-MAT-NÚMEROS REALES", prompt: "Los números enteros (Z) son un subconjunto directo de:", options: ["Los Racionales (Q)", "Los Irracionales (I)", "Los Imaginarios", "Ninguno"], correct: 0, explanation: "Z ⊂ Q ⊂ R." },
    { id: 58, category: "mat_reales", topic: "CMP-MAT-NÚMEROS REALES", prompt: "Simplifique: (x^3 * x^5) / x^2 para x ≠ 0", options: ["x^10", "x^4", "x^8", "x^6"], correct: 3, explanation: "x^(3+5-2) = x^6." },
    { id: 59, category: "mat_reales", topic: "CMP-MAT-NÚMEROS REALES", prompt: "Valor exacto de 2^(-3):", options: ["1/8", "-8", "-1/8", "1/6"], correct: 0, explanation: "1 / (2^3) = 1/8." },
    { id: 60, category: "mat_reales", topic: "CMP-MAT-NÚMEROS REALES", prompt: "Simplificar √50 + √18:", options: ["5√2", "8√2", "32", "2√8"], correct: 1, explanation: "5√2 + 3√2 = 8√2." },

    // --- TEMA 7: CMP-MAT-EXPRESIONES ALGEBRAICAS (61-70) ---
    { id: 61, category: "mat_algebra", topic: "CMP-MAT-EXPRESIONES ALGEBRAICAS", prompt: "Desarrollo de (x^(n+1) + 2y^n)^2:", options: ["x^(2n+2) + 4x^(n+1)y^n + 4y^(2n)", "x^(n+2) + 4x^(n+1)y^n + 4y^(2n)", "x^(2n+2) + 2y^(2n)", "x^(2n+2) + 4y^n"], correct: 0, explanation: "Cuadrado del binomio." },
    { id: 62, category: "mat_algebra", topic: "CMP-MAT-EXPRESIONES ALGEBRAICAS", prompt: "Resuelva: (e^(3x) + xy)(e^(3x) - xy)", options: ["e^(9x) - x^2*y^2", "e^(6x) + x^2*y^2", "e^(6x) - x^2*y^2", "e^(3x) - xy"], correct: 2, explanation: "Diferencia de cuadrados." },
    { id: 63, category: "mat_algebra", topic: "CMP-MAT-EXPRESIONES ALGEBRAICAS", prompt: "Desarrolle: (x^3 + 10y)(x^3 - 8y)", options: ["x^9 + 2x^3y - 80y", "x^6 + 2x^3y - 80y^2", "x^6 - 80y^2", "x^6 - 2x^3y + 80y^2"], correct: 1, explanation: "Producto con término común." },
    { id: 64, category: "mat_algebra", topic: "CMP-MAT-EXPRESIONES ALGEBRAICAS", prompt: "Desarrolle el cubo: (x^n - 2y^n)^3", options: ["x^(3n) - 8y^(3n)", "x^(3n) + 6x^(2n)y^n - 8y^(3n)", "x^(3n) - 2y^(3n)", "x^(3n) - 6x^(2n)y^n + 12x^n y^(2n) - 8y^(3n)"], correct: 3, explanation: "Cubo de un binomio." },
    { id: 65, category: "mat_algebra", topic: "CMP-MAT-EXPRESIONES ALGEBRAICAS", prompt: "Si p(x) = x^3 + y^3 y q(x) = x^2 - xy + y^2. Cociente p(x)/q(x):", options: ["x + y", "x - y", "x^2 + y^2", "(x+y)^2"], correct: 0, explanation: "Suma de cubos." },
    { id: 66, category: "mat_algebra", topic: "CMP-MAT-EXPRESIONES ALGEBRAICAS", prompt: "Resuelva: (2x^2 - a^3)(4x^4 + 2a^3 x^2 + a^6)", options: ["8x^6 + a^9", "6x^6 - a^6", "8x^6 - a^9", "8x^8 - a^9"], correct: 2, explanation: "Diferencia de cubos." },
    { id: 67, category: "mat_algebra", topic: "CMP-MAT-EXPRESIONES ALGEBRAICAS", prompt: "Factorice: 2x^2 + 5x - 3", options: ["(2x + 1)(x - 3)", "(2x - 1)(x + 3)", "(2x + 3)(x - 1)", "(x + 5)(2x - 3)"], correct: 1, explanation: "(2x-1)(x+3)." },
    { id: 68, category: "mat_algebra", topic: "CMP-MAT-EXPRESIONES ALGEBRAICAS", prompt: "Simplifique (a^2 - b^2) / (a + b):", options: ["a + b", "1", "a^2 - b", "a - b"], correct: 3, explanation: "(a+b)(a-b)/(a+b) = a-b." },
    { id: 69, category: "mat_algebra", topic: "CMP-MAT-EXPRESIONES ALGEBRAICAS", prompt: "Trinomio al cuadrado (a + b + c)^2:", options: ["a^2 + b^2 + c^2 + 2ab + 2bc + 2ac", "a^2 + b^2 + c^2", "a^2 + b^2 + c^2 + ab + bc + ac", "(a+b)^2 + c^2"], correct: 0, explanation: "Fórmula de trinomio al cuadrado." },
    { id: 70, category: "mat_algebra", topic: "CMP-MAT-EXPRESIONES ALGEBRAICAS", prompt: "Simplifique: (x^(-2) y^3) / (x^3 y^(-1))", options: ["x^5 / y^4", "y^4 / x^5", "y^2 / x", "1 / (x y)"], correct: 1, explanation: "Exponentes negativos a positivos." },

    // --- TEMA 8: CMP-MAT-FUNCIONES Y SUS GRÁFICAS (71-80) ---
    { id: 71, category: "mat_funciones", topic: "CMP-MAT-FUNCIONES Y SUS GRÁFICAS", prompt: "¿Qué tipo de función es aquella en la que cada elemento del recorrido es imagen de un sólo elemento del dominio?", options: ["Función inyectiva", "Función biyectiva", "Función sobreyectiva", "Función cuadrática"], correct: 0, explanation: "Definición de función uno a uno (inyectiva)." },
    { id: 72, category: "mat_funciones", topic: "CMP-MAT-FUNCIONES Y SUS GRÁFICAS", prompt: "¿Qué tipo de función es aquella en la que todos los elementos del codominio son imagen de al menos un elemento del dominio?", options: ["Función inyectiva", "Función biyectiva", "Función sobreyectiva", "Función cuadrática"], correct: 2, explanation: "El recorrido cubre completamente al codominio (sobreyectiva)." },
    { id: 73, category: "mat_funciones", topic: "CMP-MAT-FUNCIONES Y SUS GRÁFICAS", prompt: "¿Cuándo una función es biyectiva?", options: ["Cuando es inyectiva y sobreyectiva simultáneamente", "Cuando su gráfica es lineal", "Cuando es strictly creciente", "Cuando su dominio son todos los reales"], correct: 0, explanation: "Debe cumplir ambas propiedades a la vez." },
    { id: 74, category: "mat_funciones", topic: "CMP-MAT-FUNCIONES Y SUS GRÁFICAS", prompt: "Si f(x) = x^2 + 2, ¿cuál es el rango o recorrido de la función?", options: ["[2, +∞)", "(-∞, 2]", "[0, +∞)", "(-∞, +∞)"], correct: 0, explanation: "El valor mínimo es 2 en el vértice x=0." },
    { id: 75, category: "mat_funciones", topic: "CMP-MAT-FUNCIONES Y SUS GRÁFICAS", prompt: "¿Cuál es el dominio de la función f(x) = √(x - 4)?", options: ["[4, +∞)", "(4, +∞)", "(-∞, 4]", "Todos los Reales"], correct: 0, explanation: "x - 4 ≥ 0 => x ≥ 4." },
    { id: 76, category: "mat_funciones", topic: "CMP-MAT-FUNCIONES Y SUS GRÁFICAS", prompt: "Una función f es par si cumple que:", options: ["f(-x) = f(x)", "f(-x) = -f(x)", "f(x) = 1/f(x)", "f(x) = 0"], correct: 0, explanation: "Simetría respecto al eje Y." },
    { id: 77, category: "mat_funciones", topic: "CMP-MAT-FUNCIONES Y SUS GRÁFICAS", prompt: "Una función f es impar si cumple que:", options: ["f(-x) = -f(x)", "f(-x) = f(x)", "f(x^2) = f(x)", "f(x) = -x"], correct: 0, explanation: "Simetría respecto al origen." },
    { id: 78, category: "mat_funciones", topic: "CMP-MAT-FUNCIONES Y SUS GRÁFICAS", prompt: "¿Cuál es la asíntota vertical de la función f(x) = 1 / (x - 3)?", options: ["x = 3", "x = -3", "y = 0", "y = 3"], correct: 0, explanation: "El denominador se anula en x = 3." },
    { id: 79, category: "mat_funciones", topic: "CMP-MAT-FUNCIONES Y SUS GRÁFICAS", prompt: "Si f(x) = 3x - 5, ¿cuál es la función inversa f⁻¹(x)?", options: ["(x + 5)/3", "(x - 5)/3", "3x + 5", "1 / (3x - 5)"], correct: 0, explanation: "Despejando x: y = 3x - 5 => x = (y+5)/3." },
    { id: 80, category: "mat_funciones", topic: "CMP-MAT-FUNCIONES Y SUS GRÁFICAS", prompt: "El punto de corte con el eje Y de f(x) = 2x^2 - 4x + 7 es:", options: ["(0, 7)", "(7, 0)", "(0, -4)", "(0, 2)"], correct: 0, explanation: "Evaluando f(0) = 7." },

    // --- TEMA 9: CMP-MAT-GEOMETRÍA Y ECUACIÓN DE LA RECTA (81-90) ---
    { id: 81, category: "mat_geometria", topic: "CMP-MAT-GEOMETRÍA Y ECUACIÓN DE LA RECTA", prompt: "Dados los vértices A(1, 1), B(1, 5) y C(4, 1), calcule la longitud de la hipotenusa (en cm):", options: ["5 cm", "4 cm", "6 cm", "7 cm"], correct: 0, explanation: "Catetos = 4 y 3. Hipotenusa = √(4² + 3²) = 5 cm." },
    { id: 82, category: "mat_geometria", topic: "CMP-MAT-GEOMETRÍA Y ECUACIÓN DE LA RECTA", prompt: "Dados los vértices A(2, 2), B(2, 8) y C(10, 2), calcule la longitud de los catetos (en cm):", options: ["6 cm y 8 cm", "4 cm y 3 cm", "6 cm y 10 cm", "4 cm y 6 cm"], correct: 0, explanation: "Cateto 1 = 8 - 2 = 6 cm; Cateto 2 = 10 - 2 = 8 cm." },
    { id: 83, category: "mat_geometria", topic: "CMP-MAT-GEOMETRÍA Y ECUACIÓN DE LA RECTA", prompt: "Calcule el perímetro (en cm) del triángulo rectángulo con vértices A(2, 2), B(2, 8) y C(10, 2):", options: ["24 cm", "18 cm", "20 cm", "28 cm"], correct: 0, explanation: "Catetos = 6 y 8, hipotenusa = 10. Perímetro = 6 + 8 + 10 = 24 cm." },
    { id: 84, category: "mat_geometria", topic: "CMP-MAT-GEOMETRÍA Y ECUACIÓN DE LA RECTA", prompt: "Escribe la ecuación general de la recta que pasa por A(-1, 2) y cuya pendiente m = -3:", options: ["3x + y + 1 = 0", "3x - y + 1 = 0", "3x + y - 1 = 0", "3x - y - 1 = 0"], correct: 0, explanation: "y - 2 = -3(x + 1) => 3x + y + 1 = 0." },
    { id: 85, category: "mat_geometria", topic: "CMP-MAT-GEOMETRÍA Y ECUACIÓN DE LA RECTA", prompt: "Escribe la ecuación general de la recta que pasa por A(4, -1) y cuya pendiente m = 2:", options: ["2x - y - 9 = 0", "2x - y + 9 = 0", "2x + y - 9 = 0", "2x + y + 9 = 0"], correct: 0, explanation: "y - (-1) = 2(x - 4) => 2x - y - 9 = 0." },
    { id: 86, category: "mat_geometria", topic: "CMP-MAT-GEOMETRÍA Y ECUACIÓN DE LA RECTA", prompt: "¿Cuál es la pendiente de una recta perpendicular a y = 2x + 5?", options: ["-1/2", "1/2", "-2", "2"], correct: 0, explanation: "m2 = -1 / m1 = -1/2." },
    { id: 87, category: "mat_geometria", topic: "CMP-MAT-GEOMETRÍA Y ECUACIÓN DE LA RECTA", prompt: "Distancia entre los puntos P1(1, 2) y P2(4, 6):", options: ["5", "25", "7", "√7"], correct: 0, explanation: "d = √((4-1)² + (6-2)²) = √(9+16) = 5." },
    { id: 88, category: "mat_geometria", topic: "CMP-MAT-GEOMETRÍA Y ECUACIÓN DE LA RECTA", prompt: "Punto medio del segmento que une A(2, 8) y B(6, 4):", options: ["(4, 6)", "(8, 12)", "(2, 2)", "(3, 5)"], correct: 0, explanation: "((2+6)/2, (8+4)/2) = (4, 6)." },
    { id: 89, category: "mat_geometria", topic: "CMP-MAT-GEOMETRÍA Y ECUACIÓN DE LA RECTA", prompt: "Área de un triángulo rectángulo de base 8 cm y altura 5 cm:", options: ["20 cm²", "40 cm²", "13 cm²", "10 cm²"], correct: 0, explanation: "(8 * 5)/2 = 20 cm²." },
    { id: 90, category: "mat_geometria", topic: "CMP-MAT-GEOMETRÍA Y ECUACIÓN DE LA RECTA", prompt: "Dos rectas son paralelas si sus pendientes m1 y m2 cumplen:", options: ["m1 = m2", "m1 * m2 = -1", "m1 = -m2", "m1 * m2 = 1"], correct: 0, explanation: "Las pendientes paralelas son idénticas." },

    // --- TEMA 10: CMP-MAT-TRIGONOMETRÍA (91-100) ---
    { id: 91, category: "mat_trigonometria", topic: "CMP-MAT-TRIGONOMETRÍA", prompt: "¿Cuál de las siguientes expresiones corresponde a la identidad trigonométrica del coseno del ángulo doble, Cos(2x)?", options: ["2 Cos²x - 1", "Sen²x - 1", "Cos x - Sen x", "2 Cos(x - 1)"], correct: 0, explanation: "Cos(2x) = Cos²x - Sen²x = 2Cos²x - 1." },
    { id: 92, category: "mat_trigonometria", topic: "CMP-MAT-TRIGONOMETRÍA", prompt: "Simplificar la expresión: [Sen x (1 + Cot²x)] / Csc x", options: ["1", "Sen x", "-1", "Cos x"], correct: 0, explanation: "1 + Cot²x = Csc²x. [Sen x * Csc²x] / Csc x = Sen x * Csc x = 1." },
    { id: 93, category: "mat_trigonometria", topic: "CMP-MAT-TRIGONOMETRÍA", prompt: "La identidad pitagórica fundamental es:", options: ["Sen²x + Cos²x = 1", "Tan²x + 1 = Cos²x", "Sen x + Cos x = 1", "1 - Sen²x = Tan²x"], correct: 0, explanation: "Sen²x + Cos²x = 1." },
    { id: 94, category: "mat_trigonometria", topic: "CMP-MAT-TRIGONOMETRÍA", prompt: "Equivalente de Tan x en términos de Seno y Coseno:", options: ["Sen x / Cos x", "Cos x / Sen x", "1 / Cos x", "1 / Sen x"], correct: 0, explanation: "Tan x = Sen x / Cos x." },
    { id: 95, category: "mat_trigonometria", topic: "CMP-MAT-TRIGONOMETRÍA", prompt: "Valor exacto de Sen(30°):", options: ["1/2", "√3/2", "√2/2", "1"], correct: 0, explanation: "Sen(30°) = 0.5 = 1/2." },
    { id: 96, category: "mat_trigonometria", topic: "CMP-MAT-TRIGONOMETRÍA", prompt: "Valor exacto de Cos(60°):", options: ["1/2", "√3/2", "√2/2", "0"], correct: 0, explanation: "Cos(60°) = 1/2." },
    { id: 97, category: "mat_trigonometria", topic: "CMP-MAT-TRIGONOMETRÍA", prompt: "Expresión del Seno del ángulo doble, Sen(2x):", options: ["2 Sen x Cos x", "Cos²x - Sen²x", "2 Sen x", "Sen x Cos x"], correct: 0, explanation: "Sen(2x) = 2 Sen x Cos x." },
    { id: 98, category: "mat_trigonometria", topic: "CMP-MAT-TRIGONOMETRÍA", prompt: "Cosecante de x, Csc(x), es la recíproca de:", options: ["1 / Sen x", "1 / Cos x", "1 / Tan x", "Cos x"], correct: 0, explanation: "Csc x = 1 / Sen x." },
    { id: 99, category: "mat_trigonometria", topic: "CMP-MAT-TRIGONOMETRÍA", prompt: "Convertir π/3 radianes a grados sexagesimales:", options: ["60°", "45°", "90°", "30°"], correct: 0, explanation: "180° / 3 = 60°." },
    { id: 100, category: "mat_trigonometria", topic: "CMP-MAT-TRIGONOMETRÍA", prompt: "En un triángulo rectángulo, Secante (Sec θ) se define como:", options: ["Hipotenusa / Cateto Adyacente", "Cateto Opuesto / Hipotenusa", "Cateto Adyacente / Hipotenusa", "Hipotenusa / Cateto Opuesto"], correct: 0, explanation: "Sec θ = H / CA." },

    // --- TEMA 11: CMP-MAT-SUCESIONES, SERIES Y PROBABILIDADES (101-110) ---
    { id: 101, category: "mat_sucesiones", topic: "CMP-MAT-SUCESIONES, SERIES Y PROBABILIDADES", prompt: "Es una sucesión en la que cada término después del primero difiere del término que le precede en una diferencia común d:", options: ["Sucesión aritmética", "Sucesión geométrica", "Sucesión infinita", "Sucesión armónica"], correct: 0, explanation: "Definición de Progresión / Sucesión Aritmética." },
    { id: 102, category: "mat_sucesiones", topic: "CMP-MAT-SUCESIONES, SERIES Y PROBABILIDADES", prompt: "Es una sucesión en la que cada término, a partir del segundo, se obtiene multiplicando el anterior por una razón r constante:", options: ["Sucesión geométrica", "Sucesión aritmética", "Sucesión infinita", "Sucesión armónica"], correct: 0, explanation: "Definición de Sucesión Geométrica." },
    { id: 103, category: "mat_sucesiones", topic: "CMP-MAT-SUCESIONES, SERIES Y PROBABILIDADES", prompt: "¿Cuál es la expresión para el término general (an) de una sucesión aritmética cuyo primer término es -4 y diferencia común d = 6?", options: ["an = 6n - 10", "an = 6n + 10", "an = 10 - 6n", "an = -4n + 6"], correct: 0, explanation: "an = a1 + (n-1)d = -4 + (n-1)6 = 6n - 10." },
    { id: 104, category: "mat_sucesiones", topic: "CMP-MAT-SUCESIONES, SERIES Y PROBABILIDADES", prompt: "En una bolsa hay 3 bolas rojas, 5 azules y 2 verdes. Probabilidad de sacar una bola azul al azar:", options: ["1/2 (50%)", "3/10", "1/5", "2/5"], correct: 0, explanation: "5 favorables / 10 totales = 1/2." },
    { id: 105, category: "mat_sucesiones", topic: "CMP-MAT-SUCESIONES, SERIES Y PROBABILIDADES", prompt: "El quinto término de la sucesión 2, 6, 18, 54... es:", options: ["162", "108", "216", "148"], correct: 0, explanation: "Razón r = 3. Quinto término = 54 * 3 = 162." },
    { id: 106, category: "mat_sucesiones", topic: "CMP-MAT-SUCESIONES, SERIES Y PROBABILIDADES", prompt: "Suma de los primeros 5 términos de la sucesión aritmética: 3, 7, 11, 15, 19:", options: ["55", "50", "45", "60"], correct: 0, explanation: "3 + 7 + 11 + 15 + 19 = 55." },
    { id: 107, category: "mat_sucesiones", topic: "CMP-MAT-SUCESIONES, SERIES Y PROBABILIDADES", prompt: "Al lanzar un dado de 6 caras, ¿cuál es la probabilidad de obtener un número par?", options: ["1/2", "1/3", "1/6", "2/3"], correct: 0, explanation: "Caras pares: {2, 4, 6} -> 3/6 = 1/2." },
    { id: 108, category: "mat_sucesiones", topic: "CMP-MAT-SUCESIONES, SERIES Y PROBABILIDADES", prompt: "Probabilidad de obtener dos 'caras' al lanzar dos monedas al aire:", options: ["1/4", "1/2", "3/4", "1/8"], correct: 0, explanation: "Espacio muestral = {CC, CS, SC, SS}. Favorables = 1/4." },
    { id: 109, category: "mat_sucesiones", topic: "CMP-MAT-SUCESIONES, SERIES Y PROBABILIDADES", prompt: "Hallar el valor de 5! (factorial de 5):", options: ["120", "60", "24", "720"], correct: 0, explanation: "5! = 5*4*3*2*1 = 120." },
    { id: 110, category: "mat_sucesiones", topic: "CMP-MAT-SUCESIONES, SERIES Y PROBABILIDADES", prompt: "¿Cuántas combinaciones distintas de 2 elementos se pueden formar de un grupo de 4?", options: ["6", "12", "8", "24"], correct: 0, explanation: "C(4, 2) = (4*3)/2 = 6." },

    // --- TEMA 12: CMP-MAT-LÓGICA Y CONJUNTOS (111-120) ---
    { id: 111, category: "mat_logica", topic: "CMP-MAT-LÓGICA Y CONJUNTOS", prompt: "De las siguientes oraciones, seleccione las que NO representan una proposición: 1. José es inteligente. 2. 5 x 4 = 20. 3. Ningún ecuatoriano respeta la libertad. 4. 2x - 3 = 2", options: ["1 y 4", "1 y 3", "1 y 2", "2 y 3"], correct: 0, explanation: "Las opiniones subjetivas (1) y ecuaciones abiertas (4) no son proposiciones." },
    { id: 112, category: "mat_logica", topic: "CMP-MAT-LÓGICA Y CONJUNTOS", prompt: "Seleccione las oraciones que NO representan una proposición: 1. Juan está triste. 2. Una hora tiene 60s. 3. x + 3 = 5. 4. Rosa es la niña más linda.", options: ["1, 3 y 4", "1 y 2", "2 y 3", "1 y 4"], correct: 0, explanation: "Estados subjetivos (1), abiertas (3) y valoraciones (4) no tienen valor de verdad absoluto." },
    { id: 113, category: "mat_logica", topic: "CMP-MAT-LÓGICA Y CONJUNTOS", prompt: "'Si está lloviendo y la calle está mojada, entonces el perro ladra'. Con p: La calle está mojada, q: El perro ladra, r: Está lloviendo. ¿Simbolización correcta?", options: ["(r ∧ p) → q", "(q ∧ r) → p", "(p ∧ q) → r", "r → (p ∧ q)"], correct: 0, explanation: "Antecedente: 'está lloviendo y la calle está mojada' = (r ∧ p). Consecuente: q." },
    { id: 114, category: "mat_logica", topic: "CMP-MAT-LÓGICA Y CONJUNTOS", prompt: "La negación de la proposición p → q es equivalente a:", options: ["p ∧ ¬q", "¬p ∨ q", "¬p ∧ ¬q", "p → ¬q"], correct: 0, explanation: "¬(p → q) ≡ ¬(¬p ∨ q) ≡ p ∧ ¬q." },
    { id: 115, category: "mat_logica", topic: "CMP-MAT-LÓGICA Y CONJUNTOS", prompt: "Tabla de verdad: Una Disyunción (p ∨ q) es FALSA únicamente cuando:", options: ["Ambas proposiciones son falsas", "Una es verdadera y otra falsa", "Ambas son verdaderas", "El antecedente es falso"], correct: 0, explanation: "p ∨ q solo es F si p=F y q=F." },
    { id: 116, category: "mat_logica", topic: "CMP-MAT-LÓGICA Y CONJUNTOS", prompt: "Una Condicional (p → q) es FALSA únicamente cuando:", options: ["El antecedente es verdadero y el consecuente falso", "Ambas son falsas", "El antecedente es falso y el consecuente verdadero", "Ambas son verdaderas"], correct: 0, explanation: "V → F es la única combinación Falsa." },
    { id: 117, category: "mat_logica", topic: "CMP-MAT-LÓGICA Y CONJUNTOS", prompt: "El conjunto complemento de A (A') contiene:", options: ["Todos los elementos del Universo que NO están en A", "Los elementos comunes entre A y B", "Todos los elementos de A", "Un conjunto vacío"], correct: 0, explanation: "A' = U - A." },
    { id: 118, category: "mat_logica", topic: "CMP-MAT-LÓGICA Y CONJUNTOS", prompt: "Si A = {1, 2, 3} y B = {3, 4, 5}, el conjunto A ∩ B es:", options: ["{3}", "{1, 2, 3, 4, 5}", "{1, 2}", "{4, 5}"], correct: 0, explanation: "Elementos comunes: {3}." },
    { id: 119, category: "mat_logica", topic: "CMP-MAT-LÓGICA Y CONJUNTOS", prompt: "Una tautología es una proposición compuesta que es:", options: ["Siempre verdadera para todos los valores", "Siempre falsa", "A veces verdadera y a veces falsa", "Una contradicción"], correct: 0, explanation: "Tautología = siempre Verdadera." },
    { id: 120, category: "mat_logica", topic: "CMP-MAT-LÓGICA Y CONJUNTOS", prompt: "Si A = {a, b}, el número de elementos del Conjunto Potencia P(A) es:", options: ["4", "2", "3", "8"], correct: 0, explanation: "2^n = 2^2 = 4 subconjuntos." },

    // --- TEMA 13: CMP-FIS-FÍSICA VECTORIAL Y SUS APLICACIONES (121-130) ---
    { id: 121, category: "fis_vectorial", topic: "CMP-FIS-FÍSICA VECTORIAL Y SUS APLICACIONES", prompt: "Calcule las componentes rectangulares del vector A = (8m, 120°):", options: ["(-4, 6.93) m", "(4, -6.93) m", "(-6.93, 4) m", "(6.93, -4) m"], correct: 0, explanation: "Ax = 8*cos(120°) = -4; Ay = 8*sen(120°) = 6.93." },
    { id: 122, category: "fis_vectorial", topic: "CMP-FIS-FÍSICA VECTORIAL Y SUS APLICACIONES", prompt: "Calcule las componentes rectangulares del vector B = (20m, 210°):", options: ["(-17.32, -10) m", "(17.32, 10) m", "(-10, -17.32) m", "(10, 17.32) m"], correct: 0, explanation: "Bx = 20*cos(210°) = -17.32; By = 20*sen(210°) = -10." },
    { id: 123, category: "fis_vectorial", topic: "CMP-FIS-FÍSICA VECTORIAL Y SUS APLICACIONES", prompt: "Calcule las componentes rectangulares del vector A = (10m, S30°E):", options: ["(5, -8.66) m", "(-5, 8.66) m", "(8.66, -5) m", "(-8.66, 5) m"], correct: 0, explanation: "Ángulo polar = 300°. Ax = 10*cos(300°) = 5; Ay = 10*sen(300°) = -8.66." },
    { id: 124, category: "fis_vectorial", topic: "CMP-FIS-FÍSICA VECTORIAL Y SUS APLICACIONES", prompt: "Calcule las componentes rectangulares del vector B = (12m, S45°O):", options: ["(-8.49, -8.49) m", "(8.49, -8.49) m", "(-8.49, 8.49) m", "(8.49, 8.49) m"], correct: 0, explanation: "Ángulo polar = 225°. Bx = By = 12*(-0.707) = -8.49 m." },
    { id: 125, category: "fis_vectorial", topic: "CMP-FIS-FÍSICA VECTORIAL Y SUS APLICACIONES", prompt: "Transforme el vector B = (-4; 6.93) m de componentes rectangulares a coordenadas polares:", options: ["(8m, 120°)", "(8m, 60°)", "(8m, 150°)", "(8m, 210°)"], correct: 0, explanation: "|B| = √((-4)² + 6.93²) = 8m. Ángulo = 180° - 60° = 120°." },
    { id: 126, category: "fis_vectorial", topic: "CMP-FIS-FÍSICA VECTORIAL Y SUS APLICACIONES", prompt: "Módulo del vector A = (3i - 4j) m:", options: ["5 m", "7 m", "1 m", "25 m"], correct: 0, explanation: "|A| = √(3² + (-4)²) = 5 m." },
    { id: 127, category: "fis_vectorial", topic: "CMP-FIS-FÍSICA VECTORIAL Y SUS APLICACIONES", prompt: "Producto escalar entre A = (2, 3) y B = (4, -1):", options: ["5", "11", "8", "-5"], correct: 0, explanation: "A·B = (2*4) + (3*-1) = 8 - 3 = 5." },
    { id: 128, category: "fis_vectorial", topic: "CMP-FIS-FÍSICA VECTORIAL Y SUS APLICACIONES", prompt: "Vector unitario del vector A = (6, 8):", options: ["(0.6, 0.8)", "(0.8, 0.6)", "(6, 8)", "(1, 1)"], correct: 0, explanation: "|A| = 10. u = (6/10, 8/10) = (0.6, 0.8)." },
    { id: 129, category: "fis_vectorial", topic: "CMP-FIS-FÍSICA VECTORIAL Y SUS APLICACIONES", prompt: "Si A = (5m, 0°) y B = (5m, 180°), la suma A + B resulta:", options: ["(0, 0) m", "(10m, 0°)", "(10m, 180°)", "(5m, 90°)"], correct: 0, explanation: "Son vectores idénticos opuestos en dirección." },
    { id: 130, category: "fis_vectorial", topic: "CMP-FIS-FÍSICA VECTORIAL Y SUS APLICACIONES", prompt: "Dos vectores son ortogonales o perpendiculares si su producto escalar es:", options: ["0", "1", "-1", "Infinito"], correct: 0, explanation: "A · B = 0 implica un ángulo de 90°." },

    // --- TEMA 14: CMP-FIS-CINEMÁTICA (131-140) ---
    { id: 131, category: "fis_cinematica", topic: "CMP-FIS-CINEMÁTICA", prompt: "¿Cómo se denomina la longitud medida sobre la trayectoria recorrida por la partícula al moverse de una posición a otra?", options: ["Distancia recorrida", "Desplazamiento", "Vector posición", "Rapidez"], correct: 0, explanation: "La distancia es la longitud escalar de la trayectoria." },
    { id: 132, category: "fis_cinematica", topic: "CMP-FIS-CINEMÁTICA", prompt: "¿Cómo se denomina la magnitud física que establece la relación entre la variación de la velocidad que experimenta una partícula y el tiempo empleada?", options: ["Aceleración", "Velocidad media", "Fuerza", "Impulso"], correct: 0, explanation: "a = Δv / Δt." },
    { id: 133, category: "fis_cinematica", topic: "CMP-FIS-CINEMÁTICA", prompt: "En el movimiento rectilíneo uniforme (MRU), ¿qué magnitud permanece constante en módulo, dirección y sentido?", options: ["Velocidad", "Aceleración", "Posición", "Distancia"], correct: 0, explanation: "En MRU la velocidad es constante." },
    { id: 134, category: "fis_cinematica", topic: "CMP-FIS-CINEMÁTICA", prompt: "Un avión vuela en tramos rectilíneos de 300 km, 400 km y 500 km. ¿Qué distancia total recorrió?", options: ["1200 km", "500 km", "700 km", "1000 km"], correct: 0, explanation: "Distancia total escalar = 300 + 400 + 500 = 1200 km." },
    { id: 135, category: "fis_cinematica", topic: "CMP-FIS-CINEMÁTICA", prompt: "Un avión recorre un tercer tramo de 300 km en 30 minutos (0.5 h). ¿Qué velocidad empleó en ese tramo?", options: ["600 km/h", "300 km/h", "150 km/h", "450 km/h"], correct: 0, explanation: "v = 300 km / 0.5 h = 600 km/h." },
    { id: 136, category: "fis_cinematica", topic: "CMP-FIS-CINEMÁTICA", prompt: "Dos motocicletas parten desde C y D separadas 360 km a v1 = 40 km/h y v2 = 50 km/h al encuentro. ¿A qué distancia de D se cruzan?", options: ["200 km", "160 km", "180 km", "220 km"], correct: 0, explanation: "t_encuentro = 360 / (40+50) = 4 horas. d_D = 50 * 4 = 200 km." },
    { id: 137, category: "fis_cinematica", topic: "CMP-FIS-CINEMÁTICA", prompt: "Un móvil parte del reposo y acelera a 2 m/s² durante 5 s. Su velocidad final es:", options: ["10 m/s", "20 m/s", "25 m/s", "5 m/s"], correct: 0, explanation: "vf = vi + a*t = 0 + 2*5 = 10 m/s." },
    { id: 138, category: "fis_cinematica", topic: "CMP-FIS-CINEMÁTICA", prompt: "Un auto viaja a 20 m/s y frena completamente en 4 s. ¿Aceleración de frenado?", options: ["-5 m/s²", "-4 m/s²", "-2 m/s²", "-10 m/s²"], correct: 0, explanation: "a = (0 - 20) / 4 = -5 m/s²." },
    { id: 139, category: "fis_cinematica", topic: "CMP-FIS-CINEMÁTICA", prompt: "Un objeto se deja caer libremente desde una altura. Su aceleración es:", options: ["9.8 m/s²", "0 m/s²", "variable", "98 m/s²"], correct: 0, explanation: "Caída libre experimenta la aceleración de la gravedad constante (g = 9.8 m/s²)." },
    { id: 140, category: "fis_cinematica", topic: "CMP-FIS-CINEMÁTICA", prompt: "Un móvil recorre 100 m en 5 s con velocidad constante. Su rapidez es:", options: ["20 m/s", "25 m/s", "50 m/s", "10 m/s"], correct: 0, explanation: "v = d / t = 100 / 5 = 20 m/s." },

    // --- TEMA 15: CMP-FIS-DINÁMICA, ENERGÍA Y TRABAJO (141-150) ---
    { id: 141, category: "fis_dinamica", topic: "CMP-FIS-DINÁMICA, ENERGÍA Y TRABAJO", prompt: "Un bloque de 15 kg reposa en una superficie. Fuerza horizontal de 90 N, µk = 0.20. (g = 10 m/s²). Calcule la aceleración:", options: ["4.0 m/s²", "6.0 m/s²", "2.0 m/s²", "5.0 m/s²"], correct: 0, explanation: "Fr = 0.20 * 15 * 10 = 30 N. Fneta = 90 - 30 = 60 N. a = 60 / 15 = 4 m/s²." },
    { id: 142, category: "fis_dinamica", topic: "CMP-FIS-DINÁMICA, ENERGÍA Y TRABAJO", prompt: "La fuerza producida por un cuerpo cargado eléctricamente se denomina:", options: ["Fuerza eléctrica / electromagnética", "Fuerza gravitacional", "Fuerza nuclear fuerte", "Fuerza de rozamiento"], correct: 0, explanation: "Es la interacción electromagnética originada por cargas." },
    { id: 143, category: "fis_dinamica", topic: "CMP-FIS-DINÁMICA, ENERGÍA Y TRABAJO", prompt: "La fuerza con que la Tierra atrae a todos los cuerpos se denomina:", options: ["Peso / Fuerza gravitacional", "Masa", "Normal", "Tensión"], correct: 0, explanation: "Definición del Peso (P = m*g)." },
    { id: 144, category: "fis_dinamica", topic: "CMP-FIS-DINÁMICA, ENERGÍA Y TRABAJO", prompt: "Un auto de 1500 kg recibe F = 3000 N durante 10 s y alcanza 50 m/s (180 km/h). ¿Velocidad inicial?", options: ["30 m/s", "20 m/s", "10 m/s", "40 m/s"], correct: 0, explanation: "a = 3000/1500 = 2 m/s². vi = 50 - (2*10) = 30 m/s." },
    { id: 145, category: "fis_dinamica", topic: "CMP-FIS-DINÁMICA, ENERGÍA Y TRABAJO", prompt: "Un auto de 900 kg viaja a 20 m/s (72 km/h). ¿Fuerza de frenado para detenerlo en 8 s?", options: ["2250 N", "1800 N", "2500 N", "3000 N"], correct: 0, explanation: "|a| = 20 / 8 = 2.5 m/s². F = 900 * 2.5 = 2250 N." },
    { id: 146, category: "fis_dinamica", topic: "CMP-FIS-DINÁMICA, ENERGÍA Y TRABAJO", prompt: "Para detener un carrito de 40 kg que se mueve a 18 m/s en 6 s, ¿qué fuerza debe aplicarse?", options: ["120 N", "240 N", "180 N", "60 N"], correct: 0, explanation: "|a| = 18 / 6 = 3 m/s². F = 40 * 3 = 120 N." },
    { id: 147, category: "fis_dinamica", topic: "CMP-FIS-DINÁMICA, ENERGÍA Y TRABAJO", prompt: "Un cuerpo pesa 490 N (m = 50 kg) y se lanza verticalmente hacia arriba a 60 m/s. (g = 9.8 m/s²). ¿Energía cinética tras 3 s?", options: ["23,409 J", "25,000 J", "18,200 J", "30,000 J"], correct: 0, explanation: "v(3) = 60 - (9.8*3) = 30.6 m/s. Ec = 0.5 * 50 * (30.6)² = 23,409 J." },
    { id: 148, category: "fis_dinamica", topic: "CMP-FIS-DINÁMICA, ENERGÍA Y TRABAJO", prompt: "Una esfera de 40 kg se lanza hacia arriba con vi = 50 m/s. ¿Energía potencial máxima en la altura máxima?", options: ["50,000 J", "25,000 J", "100,000 J", "40,000 J"], correct: 0, explanation: "Por conservación de la energía: Ep_máx = Ec_inicial = 0.5 * 40 * (50)² = 50,000 J." },
    { id: 149, category: "fis_dinamica", topic: "CMP-FIS-DINÁMICA, ENERGÍA Y TRABAJO", prompt: "Un patinador de 60 kg acelera de 4 m/s a 20 m/s en 8 s. ¿Potencia media desarrollada?", options: ["1440 W", "2880 W", "720 W", "1200 W"], correct: 0, explanation: "ΔEc = 0.5 * 60 * (20² - 4²) = 30 * 384 = 11,520 J. P = 11,520 / 8 = 1440 W." },
    { id: 150, category: "fis_dinamica", topic: "CMP-FIS-DINÁMICA, ENERGÍA Y TRABAJO", prompt: "Un ciclista de 70 kg aumenta su rapidez de 10 m/s a 18 m/s en 4 s. ¿Cuál es la potencia media desarrollada?", options: ["1960 W", "3920 W", "980 W", "1500 W"], correct: 0, explanation: "ΔEc = 0.5 * 70 * (18² - 10²) = 35 * 224 = 7,840 J. P = 7,840 / 4 = 1960 W." }
];

// ESTRUCTURA DE GUARDADO
// userAnswers guardará { questionId: selectedIndex }
let userAnswers = JSON.parse(localStorage.getItem("feirnnr_answers")) || {};
let currentFilteredQuestions = [...questions];
let currentIndex = 0;

function loadQuestion() {
    if (currentFilteredQuestions.length === 0) return;

    updateProgressBar();

    const q = currentFilteredQuestions[currentIndex];
    
    document.getElementById("q-counter").innerText = `Pregunta ${currentIndex + 1} / ${currentFilteredQuestions.length}`;
    document.getElementById("topic-tag").innerText = q.topic;
    document.getElementById("prompt-text").innerText = `${q.id}. ${q.prompt}`;
    
    const optionsBox = document.getElementById("options-box");
    optionsBox.innerHTML = "";
    
    const savedAnswer = userAnswers[q.id]; // Si ya fue respondida anteriormente

    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = `${String.fromCharCode(65 + index)}) ${opt}`;
        
        // Si ya hay respuesta guardada para esta pregunta
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
    // Guardar selección
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

    // Si respondió las 150 preguntas, mostramos el panel de finalización
    if (totalAnswered === 150) {
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

// LÓGICA DE REINICIO
function confirmReset() {
    const totalAnswered = Object.keys(userAnswers).length;
    if (totalAnswered < 150) {
        alert(`Has respondido ${totalAnswered} de 150 preguntas. Para reiniciar el simulador debes responder todas las preguntas primero.`);
    } else {
        forceReset();
    }
}

function forceReset() {
    if (confirm("¿Estás seguro de que deseas reiniciar todo el examen desde cero?")) {
        localStorage.removeItem("feirnnr_answers");
        userAnswers = {};
        document.getElementById("quiz-body").style.display = "block";
        document.getElementById("completion-summary").style.display = "none";
        document.getElementById("topic-select").value = "all";
        currentFilteredQuestions = [...questions];
        currentIndex = 0;
        loadQuestion();
    }
}

// Inicialización
window.onload = loadQuestion;