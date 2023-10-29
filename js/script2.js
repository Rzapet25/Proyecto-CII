function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modalImage");
    modalImage.src = imageSrc;
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
 }
 function showModal(modalId, delay) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
    setTimeout(() => {
        modal.style.display = "none";
    }, delay);
}

const GruposDePreguntas = [
    {
        nombre: "Ejercicio 1  ",
        preguntas: [
            {
                nivel: "Facil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/SEjercicio1/Paso_1/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/SEjercicio1/Paso_1/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/SEjercicio1/Paso_1/Incorrecta2.png", 
                "Images/Ejercicios/SEjercicio1/Paso_1/Incorrecta1.png"],
                consejo: "Identifica correctamente u para la sustitución."
            },
            {
                nivel: "Facil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/SEjercicio1/Paso_2/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/SEjercicio1/Paso_2/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/SEjercicio1/Paso_2/Incorrecta2.png", 
                "Images/Ejercicios/SEjercicio1/Paso_2/Incorrecta1.png"],
                consejo: "Recuerda derivar correctamente con respecto de x."
            },
            {
                nivel: "Facil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/SEjercicio1/Paso_3/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/SEjercicio1/Paso_3/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/SEjercicio1/Paso_3/Incorrecta2.png", 
                "Images/Ejercicios/SEjercicio1/Paso_3/Incorrecta1.png"],
                consejo: "Haz la sustitucion por u y du."
            },
            {
                nivel: "Facil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/SEjercicio1/Paso_4/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/SEjercicio1/Paso_4/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/SEjercicio1/Paso_4/Incorrecta2.png", 
                "Images/Ejercicios/SEjercicio1/Paso_4/Incorrecta1.png"],
                consejo: "Esta es una integral directa puedes echarle un vistazo al formulario."
            },
           
        ]
    },
    {
        nombre: "Ejercicio 2 ",
        preguntas: [
            {
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/SEjercicio2/Paso_1/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/SEjercicio2/Paso_1/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/SEjercicio2/Paso_1/Incorrecta1.png",
                 "Images/Ejercicios/SEjercicio2/Paso_1/Incorrecta2.png"],
                consejo: "Identifica correctamente u para la sustitución"
            },

            {   
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/SEjercicio2/Paso_2/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/SEjercicio2/Paso_2/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/SEjercicio2/Paso_2/Incorrecta1.png",
                 "Images/Ejercicios/SEjercicio2/Paso_2/Incorrecta2.png"],
                consejo: "Recuerda derivar correctamente con respecto de x."
            },
            {
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/SEjercicio2/Paso_3/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/SEjercicio2/Paso_3/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/SEjercicio2/Paso_3/Incorrecta1.png",
                 "Images/Ejercicios/SEjercicio2/Paso_3/Incorrecta2.png"],
                consejo: "Haz la sustitucion por u y du"
            },

            {   
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/SEjercicio2/Paso_4/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/SEjercicio2/Paso_4/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/SEjercicio2/Paso_4/Incorrecta1.png",
                 "Images/Ejercicios/SEjercicio2/Paso_4/Incorrecta2.png"],
                consejo: "Esta es una integral directa puedes echarle un vistazo al formulario.."
            },
            {   
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/SEjercicio2/Paso_5/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/SEjercicio2/Paso_5/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/SEjercicio2/Paso_5/Incorrecta1.png",
                 "Images/Ejercicios/SEjercicio2/Paso_5/Incorrecta2.png"],
                consejo: "Vuelve a sustituir por el valor que tiene u."
            },
        ]
    },
    {
        nombre: "Ejercicio 3",
        preguntas: [
            {
                /* nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.", */
                imagenProblema: "Images/Ejercicios/SEjercicio3/Paso_1/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/SEjercicio3/Paso_1/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/SEjercicio3/Paso_1/Incorrecta1.png",
                 "Images/Ejercicios/SEjercicio3/Paso_1/Incorrecta2.png"],
                consejo: "Identifica correctamente u para la sustitución."
            },
            {
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/SEjercicio3/Paso_2/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/SEjercicio3/Paso_2/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/SEjercicio3/Paso_2/Incorrecta1.png",
                 "Images/Ejercicios/SEjercicio3/Paso_2/Incorrecta2.png"],
                consejo: " Recuerda derivar correctamente con respecto de x."
            },
            {
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/SEjercicio3/Paso_3/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/SEjercicio3/Paso_3/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/SEjercicio3/Paso_3/Incorrecta1.png", 
                "Images/Ejercicios/SEjercicio3/Paso_3/Incorrecta2.png"],
                consejo: "Haz la sustitucion por u y du."
            },
            {
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/SEjercicio3/Paso_4/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/SEjercicio3/Paso_4/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/SEjercicio3/Paso_4/Incorrecta1.png",
                 "Images/Ejercicios/SEjercicio3/Paso_4/Incorrecta2.png"],
                consejo: "Aplica las reglas básicas de las integrales si no te recuerdas puedes consultar en la sección de formularios."
            },
            {
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/SEjercicio3/Paso_5/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/SEjercicio3/Paso_5/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/SEjercicio3/Paso_5/Incorrecta1.png", 
                "Images/Ejercicios/SEjercicio3/Paso_5/Incorrecta2.png"],
                consejo: "Sustituye el valor de u."
            },
        ]
    },
    {
        nombre: "Ejercicio 4",
        preguntas: [
            {
                /* nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.", */
                imagenProblema: "Images/Ejercicios/SEjercicio4/Paso_1/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/SEjercicio4/Paso_1/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/SEjercicio4/Paso_1/Incorrecta1.png",
                 "Images/Ejercicios/SEjercicio4/Paso_1/Incorrecta2.png"],
                consejo: "Identifica correctamente u para la sustitución."
            },
            {
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/SEjercicio4/Paso_2/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/SEjercicio4/Paso_2/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/SEjercicio4/Paso_2/Incorrecta1.png", 
                "Images/Ejercicios/SEjercicio4/Paso_2/Incorrecta2.png"],
                consejo: "Recuerda derivar correctamente con respecto de x."
            },
            {
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/SEjercicio4/Paso_3/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/SEjercicio4/Paso_3/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/SEjercicio4/Paso_3/Incorrecta1.png", 
                "Images/Ejercicios/SEjercicio4/Paso_3/Incorrecta2.png"],
                consejo: "Haz la sustitucion por u y du."
            },
            {
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/SEjercicio4/Paso_4/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/SEjercicio4/Paso_4/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/SEjercicio4/Paso_4/Incorrecta1.png", 
                "Images/Ejercicios/SEjercicio4/Paso_4/Incorrecta2.png"],
                consejo: "Aplica la formulas basicas de integración."
            },
            
        ]
    },
    {
        nombre: "Ejercicio 5",
        preguntas: [
            {
                /* nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.", */
                imagenProblema: "Images/Ejercicios/SEjercicio5/Paso_1/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/SEjercicio5/Paso_1/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/SEjercicio5/Paso_1/Incorrecta1.png", 
                "Images/Ejercicios/SEjercicio5/Paso_1/Incorrecta2.png"],
                consejo: "Identifica correctamente u para la sustitución. y deriva"
            },
            {
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/SEjercicio5/Paso_2/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/SEjercicio5/Paso_2/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/SEjercicio5/Paso_2/Incorrecta1.png", 
                "Images/Ejercicios/SEjercicio5/Paso_2/Incorrecta2.png"],
                consejo: "Haz la sustitución por u y du"
            },
            {
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/SEjercicio5/Paso_3/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/SEjercicio5/Paso_3/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/SEjercicio5/Paso_3/Incorrecta1.png", 
                "Images/Ejercicios/SEjercicio5/Paso_3/Incorrecta2.png"],
                consejo: "Haz la sustitucion por u y du."
            },
            {
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/SEjercicio5/Paso_4/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/SEjercicio5/Paso_4/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/SEjercicio5/Paso_4/Incorrecta1.png", 
                "Images/Ejercicios/SEjercicio5/Paso_4/Incorrecta2.png"],
                consejo: "Pasa al lado de arriba u recuerda que cuando subes una variable esta subirá con signo negativo."
            },
            {
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/SEjercicio5/Paso_5/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/SEjercicio5/Paso_5/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/SEjercicio5/Paso_5/Incorrecta1.png", 
                "Images/Ejercicios/SEjercicio5/Paso_5/Incorrecta2.png"],
                consejo: "sustituye el valor de u."
            },
            
        ]
    },
   
];

let currentGroupIndex = 0;
let currentProblemIndex = 0;
let imagesDisabled = false;
let correctAnswers = [];
let mixedImages = [];

function initializeQuiz() {
    imagesDisabled = false;
    const group = GruposDePreguntas[currentGroupIndex];
    const problem = group.preguntas[currentProblemIndex];
    document.getElementById("group-name").textContent = `Integrales Por Sustitución: ${group.nombre}`;
    document.getElementById("main-image").src = problem.imagenProblema;
    document.getElementById("image-container").innerHTML = "";
    document.getElementById("answer-container").style.display = "none";
    document.getElementById("answer-message").textContent = problem.mensaje;

    mixedImages = [problem.respuestaCorrecta, ...problem.respuestaIncorrectas].sort(() => Math.random() - 0.5);

    for (const imgSrc of mixedImages) {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.onclick = () => checkAnswer(imgSrc);
        document.getElementById("image-container").appendChild(img);
    }

    document.getElementById("next-button").style.display = "none";
}

function onGroupComplete() {
    // Mostrar el modal "Grupo Completado" durante 3 segundos
    showModal("group-complete-modal", 3000);
}

function onGameComplete() {
    // Mostrar el modal "Juego Terminado" durante 3 segundos
    showModal("game-complete-modal", 3000);
}

function nextQuestion() {
    currentProblemIndex++;

    if (currentProblemIndex < GruposDePreguntas[currentGroupIndex].preguntas.length) {
        initializeQuiz();
        imagesDisabled = false;
        document.getElementById("next-button").style.display = "none";
        document.getElementById("restart-button").style.display = "none";
    } else {
        const group = GruposDePreguntas[currentGroupIndex];
        const numCorrectAnswers = correctAnswers.filter(answer => group.preguntas.some(problem => problem.respuestaCorrecta === answer)).length;

        if (numCorrectAnswers === group.preguntas.length) {
            if (currentGroupIndex < GruposDePreguntas.length - 1) {
                // Al completar un grupo, muestra el modal "Grupo Completado" durante 3 segundos
                onGroupComplete();
                // Luego, pasa al siguiente grupo después de 3 segundos
                setTimeout(() => {
                    currentGroupIndex++;
                    currentProblemIndex = 0;
                    correctAnswers = [];
                    initializeQuiz();
                    document.getElementById("correct-images-container").innerHTML = "";
                    document.getElementById("next-button").style.display = "none";
                }, 3000);
            } else {
                // Al completar el juego, muestra el modal "Juego Terminado" durante 3 segundos
                onGameComplete();
                // Luego, regresa al menú principal después de 3 segundos (puedes ajustar esto)
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            }
        } else {
            document.getElementById("restart-button").style.display = "block";
        }
    }
}

function checkAnswer(selectedImage) {
    if (imagesDisabled) return;

    const group = GruposDePreguntas[currentGroupIndex];
    const problem = group.preguntas[currentProblemIndex];
    imagesDisabled = true;

    if (selectedImage === problem.respuestaCorrecta) {
        document.getElementById("answer-message").textContent = "¡Respuesta correcta!";
        correctAnswers.push(problem.respuestaCorrecta);

        document.getElementById("correct-images-container").innerHTML = "";

        for (const correctImageSrc of correctAnswers) {
            const correctImageWrapper = document.createElement("div");
            correctImageWrapper.className = "correct-image-wrapper";
            const correctImage = document.createElement("img");
            correctImage.src = correctImageSrc;
            correctImageWrapper.appendChild(correctImage);
            document.getElementById("correct-images-container").appendChild(correctImageWrapper);
        }

        if (correctAnswers.length === currentProblemIndex + 1) {
            document.getElementById("next-button").style.display = "block";
        } else {
            document.getElementById("next-button").style.display = "none";
        }
    } else {
        document.getElementById("answer-message").textContent = `Respuesta incorrecta: ${problem.consejo}`;
        document.getElementById("restart-button").style.display = "block";
        for (const img of document.getElementById("image-container").getElementsByTagName("img")) {
            img.style.pointerEvents = "none";
        }
    }

    document.getElementById("answer-container").style.display = "block";
}

function restartQuiz() {
    imagesDisabled = false;
    document.getElementById("next-button").style.display = "none";
    document.getElementById("restart-button").style.display = "none";
    document.getElementById("correct-images-container").innerHTML = "";
    currentProblemIndex = 0;
    correctAnswers = [];
    initializeQuiz();
}

initializeQuiz();

if (localStorage.getItem('scrollPosition')) {
    // Si hay una posición almacenada, recuperarla y desplazarse a esa posición
    window.scrollTo(0, localStorage.getItem('scrollPosition'));
  }
  
  // Escuchar el evento de desplazamiento y guardar la posición actual en localStorage
  window.addEventListener('scroll', function () {
    localStorage.setItem('scrollPosition', window.scrollY);
  });
