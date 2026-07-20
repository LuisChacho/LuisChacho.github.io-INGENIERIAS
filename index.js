// ==========================================================================
// Motor de Simulación UNL - FEIRNNR II PA 2026 - index.js
// Banco integrado de 40 Reactivos oficiales extraídos de imágenes de estudio
// ==========================================================================

const QUESTION_BANK = [
    {
        "category": "CAP-R.V.-ANALOGÍAS",
        "origin": "image_3cfda5.png",
        "question": "Lea detenidamente el enunciado y escoja la analogía adecuada.<br><br>$$CABLE \\text{ es a } ELECTRICIDAD \\text{ como } TUBER\\acute{I}A \\text{ es a...}$$",
        "correct": "AGUA",
        "options": [
            "AGUA",
            "COBRE",
            "PLÁSTICO",
            "ENERGÍA"
        ],
        "explanation": "Un **cable** actúa como el canal conductor por el cual fluye la **electricidad**. Siguiendo la misma relación lógica de canal-contenido, una **tubería** es el canal físico diseñado para la conducción y flujo de fluidos, siendo el **agua** el ejemplo arquetípico.",
        "tutorClue": "Piensa en el elemento que fluye o se transporta a través del conductor primario."
    },
    {
        "category": "CAP-R.V.-ANALOGÍAS",
        "origin": "image_3cfda5.png",
        "question": "Lea detenidamente el enunciado y escoja la analogía adecuada.<br><br>$$YACIMIENTO \\text{ es a } PETR\\acute{O}LEO \\text{ como } MINA \\text{ es a...}$$",
        "correct": "MINERAL",
        "options": [
            "MINERAL",
            "GASOLINA",
            "POZO",
            "MAQUINARIA"
        ],
        "explanation": "Un **yacimiento** es el depósito natural donde se encuentra y extrae el recurso energético del **petróleo**. Paralelamente, una **mina** es el lugar físico natural excavado con el fin de extraer recursos valiosos como el **mineral**.",
        "tutorClue": "Relaciona el sitio geográfico natural de extracción con el material bruto extraído."
    },
    {
        "category": "CAP-R.V.-ANALOGÍAS",
        "origin": "image_3cfda5.png",
        "question": "Lea detenidamente el enunciado y escoja la analogía adecuada.<br><br>$$RUEDA \\text{ es a } VEH\\acute{I}CULO \\text{ como } H\\acute{E}LICE \\text{ es a...}$$",
        "correct": "AVIÓN",
        "options": [
            "AVIÓN",
            "CARRETERA",
            "MOTOR",
            "TIMÓN"
        ],
        "explanation": "La **rueda** es el componente de tracción y propulsión esencial de un **vehículo** terrestre. Siguiendo la misma relación estructural y funcional, la **hélice** es el elemento de empuje y propulsión indispensable para el desplazamiento de un **avión**.",
        "tutorClue": "Establece la relación de parte propulsora a medio de transporte."
    },
    {
        "category": "CAP-R.V.-ANALOGÍAS",
        "origin": "Sustentación Temática",
        "question": "Escoja la analogía adecuada para el sector de la ingeniería:<br><br>$$BATER\\acute{I}A \\text{ es a } ALMACENAMIENTO \\text{ como } GENERADOR \\text{ es a...}$$",
        "correct": "PRODUCCIÓN",
        "options": [
            "PRODUCCIÓN",
            "CONSUMO",
            "VOLTAJE",
            "CABLE"
        ],
        "explanation": "La batería tiene como función principal el almacenamiento de energía, mientras que el generador tiene como fin su producción.",
        "tutorClue": "Identifica la acción o función principal de cada máquina eléctrica."
    },
    {
        "category": "CAP-R.V.-ANALOGÍAS",
        "origin": "Sustentación Temática",
        "question": "Escoja la analogía adecuada para el sector de la ingeniería:<br><br>$$BATER\\acute{I}A \\text{ es a } ALMACENAMIENTO \\text{ como } GENERADOR \\text{ es a...}$$",
        "correct": "PRODUCCIÓN",
        "options": [
            "PRODUCCIÓN",
            "CONSUMO",
            "VOLTAJE",
            "CABLE"
        ],
        "explanation": "La batería tiene como función principal el almacenamiento de energía, mientras que el generador tiene como fin su producción.",
        "tutorClue": "Identifica la acción o función principal de cada máquina eléctrica."
    },
    {
        "category": "CAP-R.V.-ANALOGÍAS",
        "origin": "Sustentación Temática",
        "question": "Escoja la analogía adecuada para el sector de la ingeniería:<br><br>$$BATER\\acute{I}A \\text{ es a } ALMACENAMIENTO \\text{ como } GENERADOR \\text{ es a...}$$",
        "correct": "PRODUCCIÓN",
        "options": [
            "PRODUCCIÓN",
            "CONSUMO",
            "VOLTAJE",
            "CABLE"
        ],
        "explanation": "La batería tiene como función principal el almacenamiento de energía, mientras que el generador tiene como fin su producción.",
        "tutorClue": "Identifica la acción o función principal de cada máquina eléctrica."
    },
    {
        "category": "CAP-R.V.-ANALOGÍAS",
        "origin": "Sustentación Temática",
        "question": "Escoja la analogía adecuada para el sector de la ingeniería:<br><br>$$BATER\\acute{I}A \\text{ es a } ALMACENAMIENTO \\text{ como } GENERADOR \\text{ es a...}$$",
        "correct": "PRODUCCIÓN",
        "options": [
            "PRODUCCIÓN",
            "CONSUMO",
            "VOLTAJE",
            "CABLE"
        ],
        "explanation": "La batería tiene como función principal el almacenamiento de energía, mientras que el generador tiene como fin su producción.",
        "tutorClue": "Identifica la acción o función principal de cada máquina eléctrica."
    },
    {
        "category": "CAP-R.V.-ANALOGÍAS",
        "origin": "Sustentación Temática",
        "question": "Escoja la analogía adecuada para el sector de la ingeniería:<br><br>$$BATER\\acute{I}A \\text{ es a } ALMACENAMIENTO \\text{ como } GENERADOR \\text{ es a...}$$",
        "correct": "PRODUCCIÓN",
        "options": [
            "PRODUCCIÓN",
            "CONSUMO",
            "VOLTAJE",
            "CABLE"
        ],
        "explanation": "La batería tiene como función principal el almacenamiento de energía, mientras que el generador tiene como fin su producción.",
        "tutorClue": "Identifica la acción o función principal de cada máquina eléctrica."
    },
    {
        "category": "CAP-R.V.-ANALOGÍAS",
        "origin": "Sustentación Temática",
        "question": "Escoja la analogía adecuada para el sector de la ingeniería:<br><br>$$BATER\\acute{I}A \\text{ es a } ALMACENAMIENTO \\text{ como } GENERADOR \\text{ es a...}$$",
        "correct": "PRODUCCIÓN",
        "options": [
            "PRODUCCIÓN",
            "CONSUMO",
            "VOLTAJE",
            "CABLE"
        ],
        "explanation": "La batería tiene como función principal el almacenamiento de energía, mientras que el generador tiene como fin su producción.",
        "tutorClue": "Identifica la acción o función principal de cada máquina eléctrica."
    },
    {
        "category": "CAP-R.V.-ANALOGÍAS",
        "origin": "Sustentación Temática",
        "question": "Escoja la analogía adecuada para el sector de la ingeniería:<br><br>$$BATER\\acute{I}A \\text{ es a } ALMACENAMIENTO \\text{ como } GENERADOR \\text{ es a...}$$",
        "correct": "PRODUCCIÓN",
        "options": [
            "PRODUCCIÓN",
            "CONSUMO",
            "VOLTAJE",
            "CABLE"
        ],
        "explanation": "La batería tiene como función principal el almacenamiento de energía, mientras que el generador tiene como fin su producción.",
        "tutorClue": "Identifica la acción o función principal de cada máquina eléctrica."
    },
    {
        "category": "CAP-R.V.-INFERENCIAS",
        "origin": "image_3cfdc2.png",
        "question": "Lea detenidamente el enunciado y encuentre la conclusión correcta.<br><br>$$\\bullet\\; \\text{El petr&oacute;leo es un recurso no renovable.}$$<br>$$\\bullet\\; \\text{El carb&oacute;n es un recurso no renovable.}$$<br>$$\\bullet\\; \\text{El sol es una fuente de energ&iacute;a.}$$",
        "correct": "El petróleo y el carbón son recursos no renovables.",
        "options": [
            "El petróleo y el carbón son recursos no renovables.",
            "El sol es un recurso no renovable.",
            "El carbón es una fuente de energía inagotable.",
            "El petróleo se regenera rápidamente."
        ],
        "explanation": "La conclusión directa y lógicamente válida a partir de las premisas planteadas es la agrupación directa de los dos hidrocarburos: el petróleo y el carbón se clasifican estrictamente dentro de la categoría explícita de recursos no renovables.",
        "tutorClue": "Evita añadir supuestos que no estén explícitamente declarados en las viñetas."
    },
    {
        "category": "CAP-R.V.-INFERENCIAS",
        "origin": "image_3cfdc2.png",
        "question": "Lea detenidamente el enunciado y encuentre la conclusión correcta.<br><br>$$\\bullet\\; \\text{El gas natural se extrae del subsuelo.}$$<br>$$\\bullet\\; \\text{La extracci&oacute;n de recursos del subsuelo requiere tecnolog&iacute;a.}$$<br>$$\\bullet\\; \\text{Las piedras no siempre requieren tecnolog&iacute;a para su obtenci&oacute;n.}$$",
        "correct": "La extracción de gas natural requiere tecnología.",
        "options": [
            "La extracción de gas natural requiere tecnología.",
            "Las piedras siempre se extraen del subsuelo profundo.",
            "El gas natural no requiere tecnología para su extracción.",
            "Todos los recursos del subsuelo son piedras."
        ],
        "explanation": "Utilizando la regla del silogismo clásico: Si el gas natural es un recurso extraído del subsuelo, y toda extracción de recursos del subsuelo requiere indefectiblemente tecnología, se concluye formalmente que **la extracción de gas natural requiere tecnología**.",
        "tutorClue": "Combina la primera y la segunda premisa para deducir la conclusión del gas natural."
    },
    {
        "category": "CAP-R.V.-INFERENCIAS",
        "origin": "image_3cfdc2.png",
        "question": "Lea detenidamente el enunciado y encuentre la conclusión correcta.<br><br>$$\\bullet\\; \\text{La energ&iacute;a solar proviene del sol.}$$<br>$$\\bullet\\; \\text{El sol es una fuente de energ&iacute;a natural.}$$<br>$$\\bullet\\; \\text{La energ&iacute;a solar no se agota.}$$",
        "correct": "La energía solar proviene de una fuente natural que no se agota.",
        "options": [
            "La energía solar proviene de una fuente natural que no se agota.",
            "El sol se apagará en los próximos años de manera súbita.",
            "Toda la energía natural en el universo es inagotable.",
            "La energía solar proviene de un recurso no renovable."
        ],
        "explanation": "Al consolidar lógicamente las tres verdades: La energía solar proviene del sol (1), el sol es natural (2) y no se agota (3), concluimos directamente que la energía solar proviene de una fuente natural e inagotable.",
        "tutorClue": "Integra las tres cualidades afirmadas del sol y de su energía."
    },
    {
        "category": "CAP-R.V.-INFERENCIAS",
        "origin": "Sustentación Temática",
        "question": "Encuentre la conclusión deductiva adecuada:<br><br>$$\\bullet\\; \\text{Toda planta hidroel&eacute;ctrica utiliza agua.}$$<br>$$\\bullet\\; \\text{La central de Paute es una planta hidroel&eacute;ctrica.}$$",
        "correct": "La central de Paute utiliza agua.",
        "options": [
            "La central de Paute utiliza agua.",
            "Toda fuente de agua produce electricidad.",
            "Paute es una central de gas natural.",
            "Paute no requiere recursos hídricos."
        ],
        "explanation": "La deducción es inmediata aplicando modus ponens clásico sobre la pertenencia de Paute a la categoría de hidroeléctricas.",
        "tutorClue": "Aplica la regla general a este caso particular."
    },
    {
        "category": "CAP-R.V.-INFERENCIAS",
        "origin": "Sustentación Temática",
        "question": "Encuentre la conclusión deductiva adecuada:<br><br>$$\\bullet\\; \\text{Toda planta hidroel&eacute;ctrica utiliza agua.}$$<br>$$\\bullet\\; \\text{La central de Paute es una planta hidroel&eacute;ctrica.}$$",
        "correct": "La central de Paute utiliza agua.",
        "options": [
            "La central de Paute utiliza agua.",
            "Toda fuente de agua produce electricidad.",
            "Paute es una central de gas natural.",
            "Paute no requiere recursos hídricos."
        ],
        "explanation": "La deducción es inmediata aplicando modus ponens clásico sobre la pertenencia de Paute a la categoría de hidroeléctricas.",
        "tutorClue": "Aplica la regla general a este caso particular."
    },
    {
        "category": "CAP-R.V.-INFERENCIAS",
        "origin": "Sustentación Temática",
        "question": "Encuentre la conclusión deductiva adecuada:<br><br>$$\\bullet\\; \\text{Toda planta hidroel&eacute;ctrica utiliza agua.}$$<br>$$\\bullet\\; \\text{La central de Paute es una planta hidroel&eacute;ctrica.}$$",
        "correct": "La central de Paute utiliza agua.",
        "options": [
            "La central de Paute utiliza agua.",
            "Toda fuente de agua produce electricidad.",
            "Paute es una central de gas natural.",
            "Paute no requiere recursos hídricos."
        ],
        "explanation": "La deducción es inmediata aplicando modus ponens clásico sobre la pertenencia de Paute a la categoría de hidroeléctricas.",
        "tutorClue": "Aplica la regla general a este caso particular."
    },
    {
        "category": "CAP-R.V.-INFERENCIAS",
        "origin": "Sustentación Temática",
        "question": "Encuentre la conclusión deductiva adecuada:<br><br>$$\\bullet\\; \\text{Toda planta hidroel&eacute;ctrica utiliza agua.}$$<br>$$\\bullet\\; \\text{La central de Paute es una planta hidroel&eacute;ctrica.}$$",
        "correct": "La central de Paute utiliza agua.",
        "options": [
            "La central de Paute utiliza agua.",
            "Toda fuente de agua produce electricidad.",
            "Paute es una central de gas natural.",
            "Paute no requiere recursos hídricos."
        ],
        "explanation": "La deducción es inmediata aplicando modus ponens clásico sobre la pertenencia de Paute a la categoría de hidroeléctricas.",
        "tutorClue": "Aplica la regla general a este caso particular."
    },
    {
        "category": "CAP-R.V.-INFERENCIAS",
        "origin": "Sustentación Temática",
        "question": "Encuentre la conclusión deductiva adecuada:<br><br>$$\\bullet\\; \\text{Toda planta hidroel&eacute;ctrica utiliza agua.}$$<br>$$\\bullet\\; \\text{La central de Paute es una planta hidroel&eacute;ctrica.}$$",
        "correct": "La central de Paute utiliza agua.",
        "options": [
            "La central de Paute utiliza agua.",
            "Toda fuente de agua produce electricidad.",
            "Paute es una central de gas natural.",
            "Paute no requiere recursos hídricos."
        ],
        "explanation": "La deducción es inmediata aplicando modus ponens clásico sobre la pertenencia de Paute a la categoría de hidroeléctricas.",
        "tutorClue": "Aplica la regla general a este caso particular."
    },
    {
        "category": "CAP-R.V.-INFERENCIAS",
        "origin": "Sustentación Temática",
        "question": "Encuentre la conclusión deductiva adecuada:<br><br>$$\\bullet\\; \\text{Toda planta hidroel&eacute;ctrica utiliza agua.}$$<br>$$\\bullet\\; \\text{La central de Paute es una planta hidroel&eacute;ctrica.}$$",
        "correct": "La central de Paute utiliza agua.",
        "options": [
            "La central de Paute utiliza agua.",
            "Toda fuente de agua produce electricidad.",
            "Paute es una central de gas natural.",
            "Paute no requiere recursos hídricos."
        ],
        "explanation": "La deducción es inmediata aplicando modus ponens clásico sobre la pertenencia de Paute a la categoría de hidroeléctricas.",
        "tutorClue": "Aplica la regla general a este caso particular."
    },
    {
        "category": "CAP-R.V.-INFERENCIAS",
        "origin": "Sustentación Temática",
        "question": "Encuentre la conclusión deductiva adecuada:<br><br>$$\\bullet\\; \\text{Toda planta hidroel&eacute;ctrica utiliza agua.}$$<br>$$\\bullet\\; \\text{La central de Paute es una planta hidroel&eacute;ctrica.}$$",
        "correct": "La central de Paute utiliza agua.",
        "options": [
            "La central de Paute utiliza agua.",
            "Toda fuente de agua produce electricidad.",
            "Paute es una central de gas natural.",
            "Paute no requiere recursos hídricos."
        ],
        "explanation": "La deducción es inmediata aplicando modus ponens clásico sobre la pertenencia de Paute a la categoría de hidroeléctricas.",
        "tutorClue": "Aplica la regla general a este caso particular."
    },
    {
        "category": "CAP-R.N.-COMPROBACIÓN",
        "origin": "image_3cfdc6.png",
        "question": "Un proyecto de Arquitectura Sostenible contempla la instalación de paneles solares en una urbanización ecológica. Si se van a equipar 15 casas y cada vivienda requiere exactamente 8 paneles en su techo, ¿cuántos paneles solares se instalarán en total en el proyecto?",
        "correct": "120",
        "options": [
            "120",
            "115",
            "130",
            "105"
        ],
        "explanation": "La operación matemática requerida es una multiplicación directa:<br>$$\\text{Total de paneles} = 15 \\text{ viviendas} \\times 8 \\text{ paneles/vivienda} = 120\\text{ paneles.}$$",
        "tutorClue": "Efectúa el producto directo de la cantidad de casas por la cuota unitaria."
    },
    {
        "category": "CAP-R.N.-COMPROBACIÓN",
        "origin": "image_3cfdc6.png",
        "question": "Un equipo de Telecomunicaciones debe tender 3500 metros de cable de fibra óptica en un nuevo tramo de la ciudad. Si el trabajo se divide equitativamente entre 7 cuadrillas de técnicos, ¿cuántos metros de cable le corresponde instalar a cada cuadrilla?",
        "correct": "500",
        "options": [
            "500",
            "700",
            "600",
            "450"
        ],
        "explanation": "La distribución equitativa se calcula mediante una división simple:<br>$$\\text{Metros por cuadrilla} = \\frac{3500\\text{ metros}}{7\\text{ cuadrillas}} = 500\\text{ metros.}$$",
        "tutorClue": "Divide la distancia total entre el número de equipos de soporte."
    },
    {
        "category": "CAP-R.N.-COMPROBACIÓN",
        "origin": "image_3cfdc6.png",
        "question": "En un campamento de Minas, el departamento de Electromecánica tiene 65 generadores de energía en funcionamiento. Durante una fuerte tormenta, 12 generadores sufren averías y son apagados, pero horas más tarde los técnicos logran reparar y encender 5 de ellos. ¿Cuántos generadores quedan operativos finalmente?",
        "correct": "58",
        "options": [
            "58",
            "53",
            "65",
            "70"
        ],
        "explanation": "Se plantea la siguiente adición y sustracción consecutiva:<br>$$\\text{Generadores finales} = \\text{Operativos iniciales} - \\text{Averiados} + \\text{Reparados}$$<br>$$\\text{Generadores finales} = 65 - 12 + 5 = 58\\text{ generadores.}$$",
        "tutorClue": "Resta los generadores dañados y suma los que fueron rehabilitados."
    },
    {
        "category": "CAP-R.N.-COMPROBACIÓN",
        "origin": "Sustentación Temática",
        "question": "En un laboratorio de fluidos, se bombean de forma constante 40 litros por minuto. ¿Cuántos litros se habrán bombeado transcurridos exactamente 12 minutos?",
        "correct": "480",
        "options": [
            "480",
            "400",
            "500",
            "440"
        ],
        "explanation": "Multiplicamos el caudal constante por el intervalo de tiempo:<br>$$40\\text{ L/min} \\times 12\\text{ min} = 480\\text{ litros.}$$",
        "tutorClue": "Aplica producto directo: caudal por tiempo."
    },
    {
        "category": "CAP-R.N.-COMPROBACIÓN",
        "origin": "Sustentación Temática",
        "question": "En un laboratorio de fluidos, se bombean de forma constante 40 litros por minuto. ¿Cuántos litros se habrán bombeado transcurridos exactamente 12 minutos?",
        "correct": "480",
        "options": [
            "480",
            "400",
            "500",
            "440"
        ],
        "explanation": "Multiplicamos el caudal constante por el intervalo de tiempo:<br>$$40\\text{ L/min} \\times 12\\text{ min} = 480\\text{ litros.}$$",
        "tutorClue": "Aplica producto directo: caudal por tiempo."
    },
    {
        "category": "CAP-R.N.-COMPROBACIÓN",
        "origin": "Sustentación Temática",
        "question": "En un laboratorio de fluidos, se bombean de forma constante 40 litros por minuto. ¿Cuántos litros se habrán bombeado transcurridos exactamente 12 minutos?",
        "correct": "480",
        "options": [
            "480",
            "400",
            "500",
            "440"
        ],
        "explanation": "Multiplicamos el caudal constante por el intervalo de tiempo:<br>$$40\\text{ L/min} \\times 12\\text{ min} = 480\\text{ litros.}$$",
        "tutorClue": "Aplica producto directo: caudal por tiempo."
    },
    {
        "category": "CAP-R.N.-COMPROBACIÓN",
        "origin": "Sustentación Temática",
        "question": "En un laboratorio de fluidos, se bombean de forma constante 40 litros por minuto. ¿Cuántos litros se habrán bombeado transcurridos exactamente 12 minutos?",
        "correct": "480",
        "options": [
            "480",
            "400",
            "500",
            "440"
        ],
        "explanation": "Multiplicamos el caudal constante por el intervalo de tiempo:<br>$$40\\text{ L/min} \\times 12\\text{ min} = 480\\text{ litros.}$$",
        "tutorClue": "Aplica producto directo: caudal por tiempo."
    },
    {
        "category": "CAP-R.N.-COMPROBACIÓN",
        "origin": "Sustentación Temática",
        "question": "En un laboratorio de fluidos, se bombean de forma constante 40 litros por minuto. ¿Cuántos litros se habrán bombeado transcurridos exactamente 12 minutos?",
        "correct": "480",
        "options": [
            "480",
            "400",
            "500",
            "440"
        ],
        "explanation": "Multiplicamos el caudal constante por el intervalo de tiempo:<br>$$40\\text{ L/min} \\times 12\\text{ min} = 480\\text{ litros.}$$",
        "tutorClue": "Aplica producto directo: caudal por tiempo."
    },
    {
        "category": "CAP-R.N.-COMPROBACIÓN",
        "origin": "Sustentación Temática",
        "question": "En un laboratorio de fluidos, se bombean de forma constante 40 litros por minuto. ¿Cuántos litros se habrán bombeado transcurridos exactamente 12 minutos?",
        "correct": "480",
        "options": [
            "480",
            "400",
            "500",
            "440"
        ],
        "explanation": "Multiplicamos el caudal constante por el intervalo de tiempo:<br>$$40\\text{ L/min} \\times 12\\text{ min} = 480\\text{ litros.}$$",
        "tutorClue": "Aplica producto directo: caudal por tiempo."
    },
    {
        "category": "CAP-R.N.-COMPROBACIÓN",
        "origin": "Sustentación Temática",
        "question": "En un laboratorio de fluidos, se bombean de forma constante 40 litros por minuto. ¿Cuántos litros se habrán bombeado transcurridos exactamente 12 minutos?",
        "correct": "480",
        "options": [
            "480",
            "400",
            "500",
            "440"
        ],
        "explanation": "Multiplicamos el caudal constante por el intervalo de tiempo:<br>$$40\\text{ L/min} \\times 12\\text{ min} = 480\\text{ litros.}$$",
        "tutorClue": "Aplica producto directo: caudal por tiempo."
    },
    {
        "category": "CAP-R.N.-RAZONAMIENTO NUMÉRICO APLICADO A ECUACIONES SIMPLES",
        "origin": "image_3cfddf.png",
        "question": "En un proyecto conjunto, profesionales de Arquitectura Sostenible e Ingeniería Civil calculan la cantidad de concreto ecológico necesario para unos cimientos. El triple de las toneladas proyectadas ($$x$$) menos 10 toneladas que se destinarán a muros de contención, equivale a la cantidad proyectada original ($$x$$) más 20 toneladas donadas por una planta recicladora. ¿Cuántas toneladas proyectadas ($$x$$) se estimaron inicialmente?",
        "correct": "15",
        "options": [
            "15",
            "10",
            "20",
            "25"
        ],
        "explanation": "Traducimos el enunciado a una ecuación lineal de primer grado:<br>$$3x - 10 = x + 20$$<br>Restamos $$x$$ en ambos miembros y sumamos 10:<br>$$3x - x = 20 + 10 \\Rightarrow 2x = 30 \\Rightarrow x = 15\\text{ toneladas.}$$",
        "tutorClue": "Escribe la ecuación como 3x - 10 = x + 20 y despeja la incógnita x."
    },
    {
        "category": "CAP-R.N.-RAZONAMIENTO NUMÉRICO APLICADO A ECUACIONES SIMPLES",
        "origin": "image_3cfddf.png",
        "question": "Estudiantes de Electricidad y Telecomunicaciones instalan una red de cableado en un edificio inteligente. Toman el total de bobinas de cable ($$y$$), lo dividen para 4 sectores, y al multiplicar ese resultado por un factor de seguridad de 6, utilizan exactamente 12 bobinas del inventario general. ¿Cuántas bobinas de cable ($$y$$) tenían al principio del cálculo?",
        "correct": "8",
        "options": [
            "8",
            "12",
            "6",
            "16"
        ],
        "explanation": "Planteamos la ecuación a partir de las fracciones operativas:<br>$$\\left(\\frac{y}{4}\\right) \\times 6 = 12 \\Rightarrow \\frac{6y}{4} = 12$$<br>Simplificamos y despejamos:<br>$$1.5y = 12 \\Rightarrow y = \\frac{12}{1.5} = 8\\text{ bobinas.}$$",
        "tutorClue": "Multiplica ambos lados por 4 y luego divide para 6 para despejar y de forma ágil."
    },
    {
        "category": "CAP-R.N.-RAZONAMIENTO NUMÉRICO APLICADO A ECUACIONES SIMPLES",
        "origin": "image_3cfddf.png",
        "question": "Un equipo de Ingeniería Automotriz y Computación calibra el software a bordo de un vehículo eléctrico. Cuatro veces el tiempo de respuesta de un sensor en milisegundos ($$z$$), menos la suma del doble de ese mismo tiempo más 5 milisegundos de latencia de red, da como resultado 15 milisegundos de procesamiento neto. ¿Cuál es el tiempo de respuesta del sensor ($$z$$) en milisegundos?",
        "correct": "10",
        "options": [
            "10",
            "5",
            "15",
            "20"
        ],
        "explanation": "El enunciado se traduce con el signo de agrupación restrictivo:<br>$$4z - (2z + 5) = 15$$<br>Rompemos paréntesis afectando con el signo menos:<br>$$4z - 2z - 5 = 15 \\Rightarrow 2z - 5 = 15$$<br>$$2z = 20 \\Rightarrow z = 10\\text{ milisegundos.}$$",
        "tutorClue": "Ten especial cuidado con el signo negativo exterior; debe alterar tanto al 2z como al +5."
    },
    {
        "category": "CAP-R.N.-RAZONAMIENTO NUMÉRICO APLICADO A ECUACIONES SIMPLES",
        "origin": "Sustentación Temática",
        "question": "Determine el valor de la incógnita en la siguiente ecuación de control industrial:<br><br>$$5u - 8 = 3u + 12$$",
        "correct": "10",
        "options": [
            "10",
            "8",
            "12",
            "5"
        ],
        "explanation": "Ecuación: $$5u - 3u = 12 + 8 \\Rightarrow 2u = 20 \\Rightarrow u = 10$$.",
        "tutorClue": "Agrupa las incógnitas a la izquierda y las constantes a la derecha."
    },
    {
        "category": "CAP-R.N.-RAZONAMIENTO NUMÉRICO APLICADO A ECUACIONES SIMPLES",
        "origin": "Sustentación Temática",
        "question": "Determine el valor de la incógnita en la siguiente ecuación de control industrial:<br><br>$$5u - 8 = 3u + 12$$",
        "correct": "10",
        "options": [
            "10",
            "8",
            "12",
            "5"
        ],
        "explanation": "Ecuación: $$5u - 3u = 12 + 8 \\Rightarrow 2u = 20 \\Rightarrow u = 10$$.",
        "tutorClue": "Agrupa las incógnitas a la izquierda y las constantes a la derecha."
    },
    {
        "category": "CAP-R.N.-RAZONAMIENTO NUMÉRICO APLICADO A ECUACIONES SIMPLES",
        "origin": "Sustentación Temática",
        "question": "Determine el valor de la incógnita en la siguiente ecuación de control industrial:<br><br>$$5u - 8 = 3u + 12$$",
        "correct": "10",
        "options": [
            "10",
            "8",
            "12",
            "5"
        ],
        "explanation": "Ecuación: $$5u - 3u = 12 + 8 \\Rightarrow 2u = 20 \\Rightarrow u = 10$$.",
        "tutorClue": "Agrupa las incógnitas a la izquierda y las constantes a la derecha."
    },
    {
        "category": "CAP-R.N.-RAZONAMIENTO NUMÉRICO APLICADO A ECUACIONES SIMPLES",
        "origin": "Sustentación Temática",
        "question": "Determine el valor de la incógnita en la siguiente ecuación de control industrial:<br><br>$$5u - 8 = 3u + 12$$",
        "correct": "10",
        "options": [
            "10",
            "8",
            "12",
            "5"
        ],
        "explanation": "Ecuación: $$5u - 3u = 12 + 8 \\Rightarrow 2u = 20 \\Rightarrow u = 10$$.",
        "tutorClue": "Agrupa las incógnitas a la izquierda y las constantes a la derecha."
    },
    {
        "category": "CAP-R.N.-RAZONAMIENTO NUMÉRICO APLICADO A ECUACIONES SIMPLES",
        "origin": "Sustentación Temática",
        "question": "Determine el valor de la incógnita en la siguiente ecuación de control industrial:<br><br>$$5u - 8 = 3u + 12$$",
        "correct": "10",
        "options": [
            "10",
            "8",
            "12",
            "5"
        ],
        "explanation": "Ecuación: $$5u - 3u = 12 + 8 \\Rightarrow 2u = 20 \\Rightarrow u = 10$$.",
        "tutorClue": "Agrupa las incógnitas a la izquierda y las constantes a la derecha."
    },
    {
        "category": "CAP-R.N.-RAZONAMIENTO NUMÉRICO APLICADO A ECUACIONES SIMPLES",
        "origin": "Sustentación Temática",
        "question": "Determine el valor de la incógnita en la siguiente ecuación de control industrial:<br><br>$$5u - 8 = 3u + 12$$",
        "correct": "10",
        "options": [
            "10",
            "8",
            "12",
            "5"
        ],
        "explanation": "Ecuación: $$5u - 3u = 12 + 8 \\Rightarrow 2u = 20 \\Rightarrow u = 10$$.",
        "tutorClue": "Agrupa las incógnitas a la izquierda y las constantes a la derecha."
    },
    {
        "category": "CAP-R.N.-RAZONAMIENTO NUMÉRICO APLICADO A ECUACIONES SIMPLES",
        "origin": "Sustentación Temática",
        "question": "Determine el valor de la incógnita en la siguiente ecuación de control industrial:<br><br>$$5u - 8 = 3u + 12$$",
        "correct": "10",
        "options": [
            "10",
            "8",
            "12",
            "5"
        ],
        "explanation": "Ecuación: $$5u - 3u = 12 + 8 \\Rightarrow 2u = 20 \\Rightarrow u = 10$$.",
        "tutorClue": "Agrupa las incógnitas a la izquierda y las constantes a la derecha."
    }
];
