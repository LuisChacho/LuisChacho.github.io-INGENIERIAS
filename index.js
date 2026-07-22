// BANCO DE 80 EJERCICIOS EXACTOS Y SIN REPETICIONES
const questions = [
    // --- TEMA 1: CAP-R.V.-ANALOGÍAS (1-10) ---
    { id: 1, category: "rv_analogias", topic: "CAP-R.V.-ANALOGÍAS", prompt: "CABLE es a ELECTRICIDAD como TUBERÍA es a...", options: ["Agua / Fluido", "Gasolina", "Metal", "Presión"], correct: 0, explanation: "El cable conduce electricidad, así como la tubería conduce agua o fluidos." },
    { id: 2, category: "rv_analogias", topic: "CAP-R.V.-ANALOGÍAS", prompt: "YACIMIENTO es a PETRÓLEO como MINA es a...", options: ["Mineral / Oro", "Tierra", "Gas", "Excavación"], correct: 0, explanation: "Del yacimiento se extrae petróleo; de la mina se extraen minerales." },
    { id: 3, category: "rv_analogias", topic: "CAP-R.V.-ANALOGÍAS", prompt: "RUEDA es a VEHÍCULO como HÉLICE es a...", options: ["Barco / Avión", "Motor", "Viento", "Mar"], correct: 0, explanation: "La rueda propulsa el vehículo terrestre; la hélice propulsa el barco o avión." },
    { id: 4, category: "rv_analogias", topic: "CAP-R.V.-ANALOGÍAS", prompt: "PINCEL es a PINTOR como BISTURÍ es a...", options: ["Cirujano", "Medicina", "Corte", "Hospital"], correct: 0, explanation: "El pincel es la herramienta de trabajo del pintor; el bisturí del cirujano." },
    { id: 5, category: "rv_analogias", topic: "CAP-R.V.-ANALOGÍAS", prompt: "CORAZÓN es a CIRCULACIÓN como PULMÓN es a...", options: ["Respiración", "Oxígeno", "Aire", "Pecho"], correct: 0, explanation: "El corazón se encarga del sistema circulatorio; el pulmón del respiratorio." },
    { id: 6, category: "rv_analogias", topic: "CAP-R.V.-ANALOGÍAS", prompt: "TECLADO es a ENTRADA como PANTALLA es a...", options: ["Salida", "Imagen", "Monitor", "Computadora"], correct: 0, explanation: "El teclado es un dispositivo de entrada; la pantalla es de salida." },
    { id: 7, category: "rv_analogias", topic: "CAP-R.V.-ANALOGÍAS", prompt: "ARQUITECTO es a EDIFICIO como INGENIERO es a...", options: ["Puente / Estructura", "Planos", "Maquinaria", "Obra"], correct: 0, explanation: "El arquitecto diseña edificios; el ingeniero diseña puentes o estructuras." },
    { id: 8, category: "rv_analogias", topic: "CAP-R.V.-ANALOGÍAS", prompt: "SOL es a DÍA como LUNA es a...", options: ["Noche", "Sombra", "Estrella", "Cielo"], correct: 0, explanation: "El sol domina la iluminación del día; la luna de la noche." },
    { id: 9, category: "rv_analogias", topic: "CAP-R.V.-ANALOGÍAS", prompt: "BATERÍA es a ENERGÍA como TANQUE es a...", options: ["Combustible", "Agua", "Metal", "Presión"], correct: 0, explanation: "La batería almacena energía; el tanque almacena combustible." },
    { id: 10, category: "rv_analogias", topic: "CAP-R.V.-ANALOGÍAS", prompt: "MOTOR es a AUTOMÓVIL como TURBINA es a...", options: ["Avión", "Viento", "Hélice", "Generador"], correct: 0, explanation: "El motor impulsará al automóvil; la turbina impulsará al avión." },

    // --- TEMA 2: CAP-R.V.-INFERENCIAS (11-20) ---
    { id: 11, category: "rv_inferencias", topic: "CAP-R.V.-INFERENCIAS", prompt: "El petróleo es un recurso no renovable. El carbón es no renovable. El sol es una fuente de energía. ¿Qué se concluye?", options: ["Existen fuentes de energía renovables y no renovables.", "El sol es un recurso no renovable.", "Toda fuente energética se agota.", "El carbón procede del sol."], correct: 0, explanation: "Se infiere que hay clasificación de recursos en renovables e inagotables/no renovables." },
    { id: 12, category: "rv_inferencias", topic: "CAP-R.V.-INFERENCIAS", prompt: "El gas natural se extrae del subsuelo. La extracción del subsuelo requiere tecnología. Las piedras no siempre requieren tecnología. ¿Qué se deduce?", options: ["Extraer gas natural requiere tecnología obligatoriamente.", "Las piedras son más valiosas que el gas.", "El subsuelo solo contiene gas natural.", "No se necesita tecnología en minería."], correct: 0, explanation: "Al ser el gas extraído del subsuelo, hereda el requisito de utilizar tecnología." },
    { id: 13, category: "rv_inferencias", topic: "CAP-R.V.-INFERENCIAS", prompt: "La energía solar proviene del sol. El sol es una fuente de energía natural. La energía solar no se agota. ¿Qué se concluye?", options: ["La energía solar es inagotable y natural.", "El sol dejará de emitir energía pronto.", "Toda energía natural es fósil.", "El sol requiere tecnología para funcionar."], correct: 0, explanation: "La conclusión directa combina la naturaleza inagotable y el origen natural del sol." },
    { id: 14, category: "rv_inferencias", topic: "CAP-R.V.-INFERENCIAS", prompt: "Todos los ingenieros en sistemas saben programar. Carlos es ingeniero en sistemas. ¿Qué se deduce?", options: ["Carlos sabe programar.", "Carlos no utiliza computadoras.", "Todos los programadores son ingenieros.", "Carlos es diseñador."], correct: 0, explanation: "Aplicación de silogismo categórico directo sobre el individuo." },
    { id: 15, category: "rv_inferencias", topic: "CAP-R.V.-INFERENCIAS", prompt: "Si llueve, el suelo se moja. Hoy ha llovido durante toda la mañana. ¿Qué podemos inferir?", options: ["El suelo está mojado.", "Nunca volverá a llover.", "El suelo se secará de inmediato.", "No ha caído agua."], correct: 0, explanation: "Modus Ponens: La condición se cumplió, por lo que la consecuencia ocurre." },
    { id: 16, category: "rv_inferencias", topic: "CAP-R.V.-INFERENCIAS", prompt: "Las plantas necesitan luz para la fotosíntesis. Una planta se mantuvo en total oscuridad un mes. ¿Qué se deduce?", options: ["No realizó fotosíntesis adecuadamente.", "Creció más rápido.", "Produjo más oxígeno.", "El sol la quemó."], correct: 0, explanation: "Al faltar el insumo vital (luz), el proceso biológico no pudo llevarse a cabo." },
    { id: 17, category: "rv_inferencias", topic: "CAP-R.V.-INFERENCIAS", prompt: "Los metales conducen electricidad. El cobre es un metal. ¿Qué conclusión es válida?", options: ["El cobre conduce electricidad.", "El cobre es un aislante termal.", "Todos los conductores son cobre.", "El cobre no conduce calor."], correct: 0, explanation: "Deducción lógica por inclusión de clases." },
    { id: 18, category: "rv_inferencias", topic: "CAP-R.V.-INFERENCIAS", prompt: "Ningún vehículo eléctrico emite gases nocivos. El prototipo X es un vehículo eléctrico. ¿Qué se concluye?", options: ["El prototipo X no emite gases nocivos.", "El prototipo X usa gasolina.", "El prototipo X no requiere energía.", "Todos los vehículos son ecológicos."], correct: 0, explanation: "Inferencia inmediata universal negativa." },
    { id: 19, category: "rv_inferencias", topic: "CAP-R.V.-INFERENCIAS", prompt: "Todos los estudiantes aprobados entregaron su proyecto. Juan no entregó el proyecto. ¿Qué se infiere?", options: ["Juan no aprobó.", "Juan sacó la nota máxima.", "El proyecto era opcional.", "Juan aprobó con honores."], correct: 0, explanation: "Modus Tollens: Al negar el consecuente, se niega la condición." },
    { id: 20, category: "rv_inferencias", topic: "CAP-R.V.-INFERENCIAS", prompt: "El consumo de agua aumenta en verano. Actualmente estamos en verano. ¿Qué se puede prever?", options: ["El consumo de agua aumentará.", "El consumo de agua disminuirá.", "No habrá disponibilidad de agua.", "El clima estará frío."], correct: 0, explanation: "Previsión deducida del comportamiento observado durante la estación." },

    // --- TEMA 3: CAP-R.N.-COMPROBACIÓN (21-30) ---
    { id: 21, category: "rn_comprobacion", topic: "CAP-R.N.-COMPROBACIÓN", prompt: "Se equiparán 15 casas y cada una requiere exactamente 8 paneles solares. ¿Cuántos paneles se instalarán en total?", options: ["120 paneles", "110 paneles", "125 paneles", "100 paneles"], correct: 0, explanation: "15 casas × 8 paneles = 120 paneles en total." },
    { id: 22, category: "rn_comprobacion", topic: "CAP-R.N.-COMPROBACIÓN", prompt: "Se deben tender 3500 metros de fibra óptica divididos equitativamente entre 7 cuadrillas. ¿Cuántos metros le corresponde a cada una?", options: ["500 metros", "600 metros", "450 metros", "700 metros"], correct: 0, explanation: "3500 metros / 7 cuadrillas = 500 metros por cuadrilla." },
    { id: 23, category: "rn_comprobacion", topic: "CAP-R.N.-COMPROBACIÓN", prompt: "Un campamento tiene 65 generadores. 12 sufren averías y se apagan, pero luego se reparan 5. ¿Cuántos quedan operativos?", options: ["58 generadores", "53 generadores", "60 generadores", "55 generadores"], correct: 0, explanation: "65 - 12 + 5 = 58 generadores operativos." },
    { id: 24, category: "rn_comprobacion", topic: "CAP-R.N.-COMPROBACIÓN", prompt: "Si 20 computadoras consumen 100 kW de energía diariamente, ¿cuántos kW consumirían 30 computadoras de las mismas características?", options: ["150 kW", "120 kW", "180 kW", "200 kW"], correct: 0, explanation: "(100 / 20) * 30 = 5 kW por PC * 30 = 150 kW." },
    { id: 25, category: "rn_comprobacion", topic: "CAP-R.N.-COMPROBACIÓN", prompt: "Una obra civil requiere 240 sacos de cemento. Si se han entregado 4 camiones con 45 sacos cada uno, ¿cuántos sacos faltan?", options: ["60 sacos", "50 sacos", "40 sacos", "70 sacos"], correct: 0, explanation: "240 - (4 × 45) = 240 - 180 = 60 sacos faltantes." },
    { id: 26, category: "rn_comprobacion", topic: "CAP-R.N.-COMPROBACIÓN", prompt: "Un servidor procesa 1200 peticiones por minuto. ¿Cuántas peticiones procesa en 15 segundos?", options: ["300 peticiones", "200 peticiones", "400 peticiones", "150 peticiones"], correct: 0, explanation: "15 segundos es 1/4 de minuto -> 1200 / 4 = 300 peticiones." },
    { id: 27, category: "rn_comprobacion", topic: "CAP-R.N.-COMPROBACIÓN", prompt: "Para cercar un terreno cuadrado de 25 metros de lado, ¿cuántos metros de mazo de cerca se necesitan?", options: ["100 metros", "625 metros", "50 metros", "150 metros"], correct: 0, explanation: "Perímetro del cuadrado = 4 * lado = 4 * 25m = 100 metros." },
    { id: 28, category: "rn_comprobacion", topic: "CAP-R.N.-COMPROBACIÓN", prompt: "Un lote de 900 microprocesadores es inspeccionado. Se detecta que el 3% está defectuoso. ¿Cuántos chips funcionan bien?", options: ["873 chips", "870 chips", "880 chips", "850 chips"], correct: 0, explanation: "3% de 900 = 27 defectuosos. Operativos = 900 - 27 = 873 chips." },
    { id: 29, category: "rn_comprobacion", topic: "CAP-R.N.-COMPROBACIÓN", prompt: "Se instalan 8 transformadores de $1500 cada uno y se recibe un descuento del 10% en el total. ¿Cuánto se paga?", options: ["$10,800", "$12,000", "$10,500", "$11,200"], correct: 0, explanation: "Total base = 8 * 1500 = $12,000. Descuento 10% ($1200) -> Pago = $10,800." },
    { id: 30, category: "rn_comprobacion", topic: "CAP-R.N.-COMPROBACIÓN", prompt: "Un vehículo eléctrico recorre 420 km con 3 cargas completas. ¿Cuántos km recorre con 5 cargas completas?", options: ["700 km", "650 km", "750 km", "800 km"], correct: 0, explanation: "(420 / 3) * 5 = 140 km/carga * 5 = 700 km." },

    // --- TEMA 4: CAP-R.N.-RELACIONES NUMÉRICAS (31-40) ---
    { id: 31, category: "rn_relaciones", topic: "CAP-R.N.-RELACIONES NUMÉRICAS", prompt: "Inventario: Inicio = 80. Instalan 25, devuelven 5, reciben 12, compran 40. ¿Cuántos van en cada uno de 6 racks exactamente?", options: ["17 servidores", "18 servidores", "16 servidores", "20 servidores"], correct: 0, explanation: "Total = 80 - 25 - 5 + 12 + 40 = 102. Distribución = 102 / 6 = 17 por rack." },
    { id: 32, category: "rn_relaciones", topic: "CAP-R.N.-RELACIONES NUMÉRICAS", prompt: "A: 120/150 (80%). B: 150/200 (75%). C: 45/50 (90%). D: 210/300 (70%). ¿Qué proyecto tiene el mayor porcentaje de soportes válidos?", options: ["Proyecto C (90%)", "Proyecto A (80%)", "Proyecto B (75%)", "Proyecto D (70%)"], correct: 0, explanation: "Proyecto C cumple 45 de 50, lo que representa la mayor efectividad (90%)." },
    { id: 33, category: "rn_relaciones", topic: "CAP-R.N.-RELACIONES NUMÉRICAS", prompt: "Zona 1: 300 paneles y 50 turbinas. Zona 2: 400 paneles y 100 medidores. Zona 3: 150 turbinas y 200 medidores. ¿Total de paneles + turbinas?", options: ["900 equipos", "850 equipos", "950 equipos", "1000 equipos"], correct: 0, explanation: "Paneles (300+400=700) + Turbinas (50+150=200) = 900 equipos." },
    { id: 34, category: "rn_relaciones", topic: "CAP-R.N.-RELACIONES NUMÉRICAS", prompt: "Empresa A produce 400 unidades con 5 errores. B produce 600 con 12 errores. C produce 300 con 3 errores. ¿Cuál tiene la menor tasa de error?", options: ["Empresa C (1%)", "Empresa A (1.25%)", "Empresa B (2%)", "Todas igual"], correct: 0, explanation: "Tasa C = 3/300 = 1%. Tasa A = 5/400 = 1.25%. Tasa B = 12/600 = 2%." },
    { id: 35, category: "rn_relaciones", topic: "CAP-R.N.-RELACIONES NUMÉRICAS", prompt: "Stock inicial: 500 router. Ventas: 120 lunes, 150 martes. Reciben 200 el miércoles. Venden 180 el jueves. ¿Stock final?", options: ["250 routers", "280 routers", "300 routers", "220 routers"], correct: 0, explanation: "500 - 120 - 150 + 200 - 180 = 250 routers." },
    { id: 36, category: "rn_relaciones", topic: "CAP-R.N.-RELACIONES NUMÉRICAS", prompt: "Si en un taller la relación de técnicos a ingenieros es de 4 a 1 y hay 32 técnicos, ¿cuántos ingenieros hay?", options: ["8 ingenieros", "6 ingenieros", "10 ingenieros", "12 ingenieros"], correct: 0, explanation: "Proporción 4/1 = 32/X -> X = 32 / 4 = 8 ingenieros." },
    { id: 37, category: "rn_relaciones", topic: "CAP-R.N.-RELACIONES NUMÉRICAS", prompt: "Tres contenedores almacenan 120L, 180L y 240L de lubricante. ¿Cuál es la mayor capacidad de un envase para vaciarlos sin mezclar?", options: ["60 Litros", "30 Litros", "40 Litros", "20 Litros"], correct: 0, explanation: "El Máximo Común Divisor (MCD) de 120, 180 y 240 es 60 Litros." },
    { id: 38, category: "rn_relaciones", topic: "CAP-R.N.-RELACIONES NUMÉRICAS", prompt: "Banco A da 5% de interés en $2000. Banco B da 4% en $3000. ¿Cuál produce mayor ganancia en 1 año?", options: ["Banco B ($120)", "Banco A ($100)", "Ambos ganan igual", "Ninguno rinde"], correct: 0, explanation: "Banco A: 5% de 2000 = $100. Banco B: 4% de 3000 = $120." },
    { id: 39, category: "rn_relaciones", topic: "CAP-R.N.-RELACIONES NUMÉRICAS", prompt: "Un cable de 120 metros se corta en razón 3:5. ¿Cuánto mide el tramo más largo?", options: ["75 metros", "45 metros", "80 metros", "70 metros"], correct: 0, explanation: "Suma de partes = 3+5=8. Parte mayor = (5/8) * 120 = 75 metros." },
    { id: 40, category: "rn_relaciones", topic: "CAP-R.N.-RELACIONES NUMÉRICAS", prompt: "Lote de baterías: A=100 con 95% vida, B=200 con 90% vida. ¿Porcentaje medio de vida del inventario conjunto?", options: ["91.66%", "92.50%", "90.00%", "93.33%"], correct: 0, explanation: "Total operativas = (100*0.95) + (200*0.90) = 95 + 180 = 275. % Promedio = 275/300 = 91.66%." },

    // --- TEMA 5: CAP-R.N.-ANÁLISIS DE PROBLEMAS (41-50) ---
    { id: 41, category: "rn_problemas", topic: "CAP-R.N.-ANÁLISIS DE PROBLEMAS", prompt: "4 retroexcavadoras limpian un terreno en 15 días. Si se alquilan 2 máquinas adicionales de igual capacidad, ¿en cuántos días terminarán?", options: ["10 días", "12 días", "8 días", "9 días"], correct: 0, explanation: "Regla de tres inversa: 4 * 15 = 6 * X -> X = 60 / 6 = 10 días." },
    { id: 42, category: "rn_problemas", topic: "CAP-R.N.-ANÁLISIS DE PROBLEMAS", prompt: "Servidor de 500 TB. 30% reservado para respaldos. De lo que sobra, la mitad se usa para máquinas virtuales. ¿Cuántos TB quedan libres?", options: ["175 TB", "150 TB", "200 TB", "250 TB"], correct: 0, explanation: "Restante respaldo = 70% de 500 = 350 TB. Libre = 350 / 2 = 175 TB." },
    { id: 43, category: "rn_problemas", topic: "CAP-R.N.-ANÁLISIS DE PROBLEMAS", prompt: "A 120 rpm un motor consume 240 W. Si el consumo es directamente proporcional a la velocidad, ¿cuántos vatios consume a 150 rpm?", options: ["300 W", "280 W", "320 W", "350 W"], correct: 0, explanation: "240 W / 120 rpm = 2 W por rpm. A 150 rpm -> 150 * 2 = 300 W." },
    { id: 44, category: "rn_problemas", topic: "CAP-R.N.-ANÁLISIS DE PROBLEMAS", prompt: "Un estanque se llena con 2 bombas en 6 horas. ¿Cuánto tardarán 3 bombas idénticas en llenarlo?", options: ["4 horas", "5 horas", "3 horas", "4.5 horas"], correct: 0, explanation: "Inversamente proporcional: 2 * 6 = 3 * X -> X = 12 / 3 = 4 horas." },
    { id: 45, category: "rn_problemas", topic: "CAP-R.N.-ANÁLISIS DE PROBLEMAS", prompt: "Un equipo de 8 programadores realiza una app en 20 días. ¿Cuántos días tardarían 10 programadores con el mismo ritmo?", options: ["16 días", "15 días", "18 días", "12 días"], correct: 0, explanation: "Inversa: (8 * 20) / 10 = 160 / 10 = 16 días." },
    { id: 46, category: "rn_problemas", topic: "CAP-R.N.-ANÁLISIS DE PROBLEMAS", prompt: "Presupuesto de $12,000. Se gasta el 40% en hardware y el 25% del resto en software. ¿Cuánto dinero queda sin asignar?", options: ["$5,400", "$4,800", "$6,000", "$5,000"], correct: 0, explanation: "Resta HW = $7,200. Resta SW = $7,200 * 0.75 = $5,400 libres." },
    { id: 47, category: "rn_problemas", topic: "CAP-R.N.-ANÁLISIS DE PROBLEMAS", prompt: "Un tren de carga viaja a 80 km/h y tarda 3 horas en llegar. Si aumenta la velocidad a 100 km/h, ¿cuánto tardará?", options: ["2.4 horas (2h 24m)", "2.5 horas", "2 horas", "2.8 horas"], correct: 0, explanation: "Distancia = 80 * 3 = 240 km. Tiempo = 240 / 100 = 2.4 horas." },
    { id: 48, category: "rn_problemas", topic: "CAP-R.N.-ANÁLISIS DE PROBLEMAS", prompt: "Una impresora 3D tarda 45 minutos en fabricar 3 piezas. ¿Cuántas piezas fabricará en 3 horas continuas?", options: ["12 piezas", "10 piezas", "15 piezas", "9 piezas"], correct: 0, explanation: "3 horas = 180 min. (180 / 45) * 3 = 4 * 3 = 12 piezas." },
    { id: 49, category: "rn_problemas", topic: "CAP-R.N.-ANÁLISIS DE PROBLEMAS", prompt: "En una mezcla de 80 Litros de refrigerante, el 20% es aditivo puro. Se añaden 20 Litros de aditivo puro. ¿Nuevo % de aditivo?", options: ["36%", "40%", "30%", "32%"], correct: 0, explanation: "Aditivo inicial = 16L. Nuevo total aditivo = 36L. Total mezcla = 100L. 36/100 = 36%." },
    { id: 50, category: "rn_problemas", topic: "CAP-R.N.-ANÁLISIS DE PROBLEMAS", prompt: "Un sensor registra datos cada 4 segundos. ¿Cuántos registros almacena durante una prueba de 2 horas?", options: ["1800 registros", "3600 registros", "1200 registros", "2400 registros"], correct: 0, explanation: "2 horas = 7200 segundos. 7200 / 4 s = 1800 registros." },

    // --- TEMA 6: CMP-MAT-NÚMEROS REALES (51-60) ---
    { id: 51, category: "mat_reales", topic: "CMP-MAT-NÚMEROS REALES", prompt: "Considerando el conjunto de los números reales (R), donde I son irracionales y Q racionales, ¿cuál igualdad es correcta?", options: ["R = Q ∪ I", "R = Q ∩ I", "Q = R ∪ I", "I = Q ∩ R"], correct: 0, explanation: "Los números reales son la unión disjunta de racionales (Q) e irracionales (I)." },
    { id: 52, category: "mat_reales", topic: "CMP-MAT-NÚMEROS REALES", prompt: "¿Cuál de las siguientes afirmaciones sobre la intersección de Q e I es verdadera?", options: ["Q ∩ I = ∅ (Conjunto Vacío)", "Q ∩ I = R", "Q ∩ I = {0}", "Q ∩ I = N"], correct: 0, explanation: "Un número no puede ser racional e irracional a la vez, su intersección es vacía." },
    { id: 53, category: "mat_reales", topic: "CMP-MAT-NÚMEROS REALES", prompt: "¿Cuál de los siguientes números pertenece al conjunto de los números Irracionales (I)?", options: ["√2", "3/4", "0.2525...", "-5"], correct: 0, explanation: "√2 no se puede expresar como fracción decimal finita ni periódica." },
    { id: 54, category: "mat_reales", topic: "CMP-MAT-NÚMEROS REALES", prompt: "La propiedad a * (b + c) = a*b + a*c en el conjunto de los Reales corresponde a:", options: ["Propiedad Distributiva", "Propiedad Conmutativa", "Propiedad Asociativa", "Elemento Neutro"], correct: 0, explanation: "Es la definición formal de la propiedad distributiva del producto respecto a la suma." },
    { id: 55, category: "mat_reales", topic: "CMP-MAT-NÚMEROS REALES", prompt: "¿Cuál es el inverso multiplicativo de -3/5 en los números reales?", options: ["-5/3", "5/3", "3/5", "1/3"], correct: 0, explanation: "El producto de un número con su inverso multiplicativo da 1: (-3/5) * (-5/3) = 1." },
    { id: 56, category: "mat_reales", topic: "CMP-MAT-NÚMEROS REALES", prompt: "El resultado numérico de la expresión |-8| + |3| - |-5| es:", options: ["6", "16", "0", "10"], correct: 0, explanation: "Valores absolutos: 8 + 3 - 5 = 6." },
    { id: 57, category: "mat_reales", topic: "CMP-MAT-NÚMEROS REALES", prompt: "¿A qué conjunto pertenecen los números enteros (Z) dentro de la clasificación general?", options: ["Son un subconjunto de los Racionales (Q)", "Son un subconjunto de los Irracionales (I)", "Son ajenos a los Reales (R)", "Son únicamente Complejos"], correct: 0, explanation: "Todo número entero se puede escribir como a/1, por ende Z ⊂ Q ⊂ R." },
    { id: 58, category: "mat_reales", topic: "CMP-MAT-NÚMEROS REALES", prompt: "Al simplificar la expresión real (x^3 * x^5) / x^2 para x ≠ 0, se obtiene:", options: ["x^6", "x^10", "x^4", "x^8"], correct: 0, explanation: "Leyes de exponentes: x^(3+5-2) = x^6." },
    { id: 59, category: "mat_reales", topic: "CMP-MAT-NÚMEROS REALES", prompt: "El valor numérico exacto de 2^(-3) equivale a la fracción:", options: ["1/8", "-8", "-1/8", "1/6"], correct: 0, explanation: "Exponente negativo: 1 / (2^3) = 1/8." },
    { id: 60, category: "mat_reales", topic: "CMP-MAT-NÚMEROS REALES", prompt: "¿Cuál es el resultado de simplificar la expresión con radicales √50 + √18?", options: ["8√2", "5√2", "32", "2√8"], correct: 0, explanation: "√50 = 5√2 y √18 = 3√2. Suma: 5√2 + 3√2 = 8√2." },

    // --- TEMA 7: CMP-MAT-EXPRESIONES ALGEBRAICAS (61-70) ---
    { id: 61, category: "mat_algebra", topic: "CMP-MAT-EXPRESIONES ALGEBRAICAS", prompt: "Seleccione el desarrollo correcto para el producto notable (x^(n+1) + 2y^n)^2:", options: ["x^(2n+2) + 4x^(n+1)y^n + 4y^(2n)", "x^(n+2) + 4x^(n+1)y^n + 4y^(2n)", "x^(2n+2) + 2y^(2n)", "x^(2n+2) + 4y^n"], correct: 0, explanation: "Binomio al cuadrado: (a+b)² = a² + 2ab + b²." },
    { id: 62, category: "mat_algebra", topic: "CMP-MAT-EXPRESIONES ALGEBRAICAS", prompt: "Seleccione el producto notable equivalente a: (e^(3x) + xy)(e^(3x) - xy)", options: ["e^(6x) - x^2*y^2", "e^(9x) - x^2*y^2", "e^(6x) + x^2*y^2", "e^(3x) - xy"], correct: 0, explanation: "Diferencia de cuadrados: (a+b)(a-b) = a² - b² -> (e^3x)² - (xy)² = e^(6x) - x²y²." },
    { id: 63, category: "mat_algebra", topic: "CMP-MAT-EXPRESIONES ALGEBRAICAS", prompt: "Desarrolle el producto binómico: (x^3 + 10y)(x^3 - 8y)", options: ["x^6 + 2x^3*y - 80y^2", "x^9 + 2x^3*y - 80y", "x^6 - 80y^2", "x^6 - 2x^3*y + 80y^2"], correct: 0, explanation: "Producto con término común: x^6 + (10y - 8y)x^3 + (10y)(-8y) = x^6 + 2x^3y - 80y²." },
    { id: 64, category: "mat_algebra", topic: "CMP-MAT-EXPRESIONES ALGEBRAICAS", prompt: "Seleccione el desarrollo de la expresión binómica: (x^n - 2y^n)^3", options: ["x^(3n) - 6x^(2n)y^n + 12x^n y^(2n) - 8y^(3n)", "x^(3n) - 8y^(3n)", "x^(3n) + 6x^(2n)y^n - 8y^(3n)", "x^(3n) - 2y^(3n)"], correct: 0, explanation: "Cubo de un binomio: (a-b)³ = a³ - 3a²b + 3ab² - b³." },
    { id: 65, category: "mat_algebra", topic: "CMP-MAT-EXPRESIONES ALGEBRAICAS", prompt: "Dado p(x) = x^3 + y^3 y q(x) = x^2 - xy + y^2. Calcular el cociente p(x)/q(x):", options: ["x + y", "x - y", "x^2 + y^2", "(x+y)^2"], correct: 0, explanation: "Factorización de suma de cubos: x³+y³ = (x+y)(x²-xy+y²). Al dividir cancela q(x), queda (x+y)." },
    { id: 66, category: "mat_algebra", topic: "CMP-MAT-EXPRESIONES ALGEBRAICAS", prompt: "Resuelva el producto de polinomios indicado: (2x^2 - a^3)(4x^4 + 2a^3 x^2 + a^6)", options: ["8x^6 - a^9", "8x^6 + a^9", "6x^6 - a^6", "8x^8 - a^9"], correct: 0, explanation: "Estructura de diferencia de cubos: (a-b)(a²+ab+b²) = a³ - b³ -> (2x²)³ - (a³)³ = 8x^6 - a^9." },
    { id: 67, category: "mat_algebra", topic: "CMP-MAT-EXPRESIONES ALGEBRAICAS", prompt: "Factorizar la expresión cuadrática: 2x^2 + 5x - 3", options: ["(2x - 1)(x + 3)", "(2x + 1)(x - 3)", "(2x + 3)(x - 1)", "(x + 5)(2x - 3)"], correct: 0, explanation: "Comprobación por aspa simple: 2x(-1) + x(3) -> (2x - 1)(x + 3) = 2x² + 6x - x - 3." },
    { id: 68, category: "mat_algebra", topic: "CMP-MAT-EXPRESIONES ALGEBRAICAS", prompt: "Al simplificar la fracción algebraica (a^2 - b^2) / (a + b) se obtiene:", options: ["a - b", "a + b", "1", "a^2 - b"], correct: 0, explanation: "Factorizando el numerador: (a+b)(a-b) / (a+b) = a - b." },
    { id: 69, category: "mat_algebra", topic: "CMP-MAT-EXPRESIONES ALGEBRAICAS", prompt: "El desarrollo de (a + b + c)^2 corresponde a:", options: ["a^2 + b^2 + c^2 + 2ab + 2bc + 2ac", "a^2 + b^2 + c^2", "a^2 + b^2 + c^2 + ab + bc + ac", "(a+b)^2 + c^2"], correct: 0, explanation: "Fórmula formal del trinomio al cuadrado." },
    { id: 70, category: "mat_algebra", topic: "CMP-MAT-EXPRESIONES ALGEBRAICAS", prompt: "Simplificar la expresión con exponentes negativos: (x^(-2) y^3) / (x^3 y^(-1))", options: ["y^4 / x^5", "x^5 / y^4", "y^2 / x", "1 / (x y)"], correct: 0, explanation: "Reordenando exponentes: y^(3 - (-1)) / x^(3 - (-2)) = y^4 / x^5." },

    // --- TEMA 8: CMP-MAT-MATRICES Y FUNCIONES (71-80) ---
    { id: 71, category: "mat_matrices", topic: "CMP-MAT-MATRICES Y FUNCIONES", prompt: "¿Cómo se llama una matriz cuadrada si todos los elementos por encima de la diagonal principal son cero?", options: ["Matriz Triangular Inferior", "Matriz Triangular Superior", "Matriz Diagonal", "Matriz Escalar"], correct: 0, explanation: "Si los valores sobre la diagonal principal son ceros, es una matriz Triangular Inferior." },
    { id: 72, category: "mat_matrices", topic: "CMP-MAT-MATRICES Y FUNCIONES", prompt: "¿Cómo se denomina la matriz que resulta de cambiar de signo todos los elementos de la matriz traspuesta?", options: ["Matriz Anti-simétrica", "Matriz Simétrica", "Matriz Inversa", "Matriz Adjunta"], correct: 0, explanation: "Por definición, A es antisimétrica si A^T = -A." },
    { id: 73, category: "mat_matrices", topic: "CMP-MAT-MATRICES Y FUNCIONES", prompt: "Si A es de orden n x m y B es de orden m x k, ¿cuál es el orden de la matriz resultante C = A * B?", options: ["n x k", "m x m", "k x n", "n x m"], correct: 0, explanation: "El producto hereda las filas de la primera matriz (n) y las columnas de la segunda (k)." },
    { id: 74, category: "mat_matrices", topic: "CMP-MAT-MATRICES Y FUNCIONES", prompt: "Dada A = [[2,-1,3],[0,4,-2]] y B = [[1,2,-1],[3,-2,4]]. Calcule 2A + B:", options: ["[[5, 0, 5], [3, 6, 0]]", "[[3, 1, 2], [3, 2, 2]]", "[[4, -1, 5], [3, 4, 0]]", "[[5, 1, 4], [3, 6, 2]]"], correct: 0, explanation: "2A = [[4,-2,6],[0,8,-4]]. Sumando B = [[4+1, -2+2, 6-1], [0+3, 8-2, -4+4]] = [[5,0,5],[3,6,0]]." },
    { id: 75, category: "mat_matrices", topic: "CMP-MAT-MATRICES Y FUNCIONES", prompt: "¿Cómo se denomina a la matriz que posee el mismo número de filas que de columnas?", options: ["Matriz Cuadrada", "Matriz Rectangular", "Matriz Fila", "Matriz Columna"], correct: 0, explanation: "Una matriz con dimensiones n x n recibe el nombre de matriz cuadrada." },
    { id: 76, category: "mat_matrices", topic: "CMP-MAT-MATRICES Y FUNCIONES", prompt: "¿Qué tipo de función asigna a cada elemento del recorrido la imagen de UN SOLO elemento del dominio?", options: ["Función Inyectiva (Uno a Uno)", "Función Sobreyectiva", "Función Biyectiva", "Función Constante"], correct: 0, explanation: "Inyectiva significa que elementos distintos del dominio tienen imágenes distintas." },
    { id: 77, category: "mat_matrices", topic: "CMP-MAT-MATRICES Y FUNCIONES", prompt: "¿Qué tipo de función cumple que todo elemento del codominio es imagen de al menos un elemento del dominio?", options: ["Función Sobreyectiva", "Función Inyectiva", "Función Par", "Función Impar"], correct: 0, explanation: "Definición formal: El recorrido coincide con todo el codominio (Sobreyectiva)." },
    { id: 78, category: "mat_matrices", topic: "CMP-MAT-MATRICES Y FUNCIONES", prompt: "¿Cuándo se afirma rigurosamente que una función es Biyectiva?", options: ["Cuando es Inyectiva y Sobreyectiva simultáneamente", "Cuando su gráfica es lineal", "Cuando es estrictamente creciente", "Cuando su dominio son todos los reales"], correct: 0, explanation: "Una función es biyectiva si y solo si es inyectiva y sobreyectiva al mismo tiempo." },
    { id: 79, category: "mat_matrices", topic: "CMP-MAT-MATRICES Y FUNCIONES", prompt: "A partir de una curva cuadrática f(x) con vértice en y = 1 que abre hacia arriba, ¿cuál es su recorrido en Y?", options: ["[1, +∞)", "(1, +∞)", "(-∞, 1]", "(-∞, +∞)"], correct: 0, explanation: "El rango o recorrido parte desde el punto mínimo en el eje Y (1) hacia el infinito." },
    { id: 80, category: "mat_matrices", topic: "CMP-MAT-MATRICES Y FUNCIONES", prompt: "Dada la matriz I (Identidad) de orden 3x3, ¿cuál es el valor de su determinante det(I)?", options: ["1", "0", "3", "-1"], correct: 0, explanation: "El determinante de cualquier matriz identidad de cualquier orden es siempre igual a 1." }
];

// ESTADO GLOBAL CON AUTOGUARDADO EN LOCALSTORAGE
let state = {
    currentIndex: 0,
    answers: {}, // Guardará { questionId: optionIndex }
    filter: "all"
};

const STORAGE_KEY = "SIMULADOR_FEIRNNR_PA2026_DATA";

// INICIALIZACIÓN
document.addEventListener("DOMContentLoaded", () => {
    loadLocalStorage();
    buildQuestionGrid();
    renderCurrentQuestion();
    setupEventListeners();
    updateHeaderStats();
});

// Cargar de LocalStorage
function loadLocalStorage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            state.answers = parsed.answers || {};
            state.currentIndex = parsed.currentIndex || 0;
        } catch (e) {
            console.error("Error al cargar localStorage:", e);
        }
    }
}

// Guardar en LocalStorage
function saveLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
        answers: state.answers,
        currentIndex: state.currentIndex
    }));
}

// Renderizar la grilla de navegación (1-80) en el panel lateral
function buildQuestionGrid() {
    const grid = document.getElementById("question-grid");
    grid.innerHTML = "";

    questions.forEach((q, idx) => {
        // Filtrado por categorías en el menú desplegable
        if (state.filter !== "all" && q.category !== state.filter) {
            return;
        }

        const btn = document.createElement("button");
        btn.className = "grid-btn";
        btn.textContent = q.id;
        
        if (idx === state.currentIndex) {
            btn.classList.add("active");
        }
        if (state.answers[q.id] !== undefined) {
            btn.classList.add("answered");
        }

        btn.onclick = () => {
            state.currentIndex = idx;
            saveLocalStorage();
            updateUI();
        };

        grid.appendChild(btn);
    });
}

// Renderizar la pregunta seleccionada
function renderCurrentQuestion() {
    const q = questions[state.currentIndex];

    document.getElementById("topic-badge").textContent = q.topic;
    document.getElementById("question-number").textContent = `Pregunta ${q.id} de ${questions.length}`;
    document.getElementById("question-prompt").textContent = q.prompt;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    const currentAnswer = state.answers[q.id];

    q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = `${String.fromCharCode(65 + idx)}) ${opt}`;

        if (currentAnswer !== undefined) {
            btn.disabled = true;
            if (idx === q.correct) {
                btn.classList.add("selected-correct");
            } else if (currentAnswer === idx) {
                btn.classList.add("selected-wrong");
            }
        } else {
            btn.onclick = () => selectOption(q.id, idx);
        }

        optionsContainer.appendChild(btn);
    });

    // Mostrar feedback si ya fue respondida
    const feedbackBox = document.getElementById("feedback-box");
    if (currentAnswer !== undefined) {
        feedbackBox.classList.remove("hidden", "correct", "wrong");
        const isCorrect = currentAnswer === q.correct;
        feedbackBox.classList.add(isCorrect ? "correct" : "wrong");

        document.getElementById("feedback-status").innerHTML = isCorrect 
            ? "<strong>¡Respuesta Correcta!</strong>" 
            : "<strong>Respuesta Incorrecta.</strong>";
        document.getElementById("feedback-explanation").textContent = q.explanation;
    } else {
        feedbackBox.classList.add("hidden");
    }

    // Estado botones Siguiente / Anterior
    document.getElementById("prev-btn").disabled = state.currentIndex === 0;
    document.getElementById("next-btn").disabled = state.currentIndex === questions.length - 1;
}

// Seleccionar opción
function selectOption(questionId, selectedOptionIndex) {
    state.answers[questionId] = selectedOptionIndex;
    saveLocalStorage();
    updateUI();
}

// Actualizar Estadísticas
function updateHeaderStats() {
    const answeredCount = Object.keys(state.answers).length;
    let score = 0;

    questions.forEach(q => {
        if (state.answers[q.id] === q.correct) {
            score++;
        }
    });

    document.getElementById("progress-text").textContent = `${answeredCount} / ${questions.length}`;
    document.getElementById("score-text").textContent = `${score} pts`;
}

// Refrescar UI global
function updateUI() {
    buildQuestionGrid();
    renderCurrentQuestion();
    updateHeaderStats();
}

// Event Listeners
function setupEventListeners() {
    document.getElementById("prev-btn").addEventListener("click", () => {
        if (state.currentIndex > 0) {
            state.currentIndex--;
            saveLocalStorage();
            updateUI();
        }
    });

    document.getElementById("next-btn").addEventListener("click", () => {
        if (state.currentIndex < questions.length - 1) {
            state.currentIndex++;
            saveLocalStorage();
            updateUI();
        }
    });

    document.getElementById("category-filter").addEventListener("change", (e) => {
        state.filter = e.target.value;
        buildQuestionGrid();
    });

    document.getElementById("reset-btn").addEventListener("click", () => {
        if (confirm("¿Estás seguro de que deseas reiniciar todo el examen? Se borrarán tus respuestas guardadas.")) {
            state.answers = {};
            state.currentIndex = 0;
            localStorage.removeItem(STORAGE_KEY);
            updateUI();
        }
    });
}