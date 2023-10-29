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
                imagenProblema: "Images/Ejercicios/BEjercicio1/Paso_1/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/BEjercicio1/Paso_1/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/BEjercicio1/Paso_1/Incorrecta2.png", 
                "Images/Ejercicios/BEjercicio1/Paso_1/Incorrecta1.png"],
                consejo: "Recuerda la Regla de las constante para las integrales."
            },
           
        ]
    },
    {
        nombre: "Ejercicio 2 ",
        preguntas: [
            {
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/BEjercicio2/Paso_1/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/BEjercicio2/Paso_1/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/BEjercicio2/Paso_1/Incorrecta1.png",
                 "Images/Ejercicios/BEjercicio2/Paso_1/Incorrecta2.png"],
                consejo: "Recuerde las propiedades de las potencias y los radicales"
            },

            {   
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/BEjercicio2/Paso_2/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/BEjercicio2/Paso_2/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/BEjercicio2/Paso_2/Incorrecta1.png",
                 "Images/Ejercicios/BEjercicio2/Paso_2/Incorrecta2.png"],
                consejo: "Recuerda las reglas de las integrales básicas."
            },
        ]
    },
    {
        nombre: "Ejercicio 3",
        preguntas: [
            {
                /* nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.", */
                imagenProblema: "Images/Ejercicios/BEjercicio3/Paso_1/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/BEjercicio3/Paso_1/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/BEjercicio3/Paso_1/Incorrecta1.png",
                 "Images/Ejercicios/BEjercicio3/Paso_1/Incorrecta2.png"],
                consejo: "Multiplique el termino de afuera por cada uno de los que se encuentran dentro del párentesis."
            },
            {
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/BEjercicio3/Paso_2/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/BEjercicio3/Paso_2/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/BEjercicio3/Paso_2/Incorrecta1.png",
                 "Images/Ejercicios/BEjercicio3/Paso_2/Incorrecta2.png"],
                consejo: "Aplica las reglas básicas de las integrales si no te recuerdas puedes consultar en la sección de formularios."
            },
            {
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/BEjercicio3/Paso_3/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/BEjercicio3/Paso_3/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/BEjercicio3/Paso_3/Incorrecta1.png", 
                "Images/Ejercicios/BEjercicio3/Paso_3/Incorrecta2.png"],
                consejo: "Consejo para la cuarta pregunta."
            },
        ]
    },
    {
        nombre: "Ejercicio 4",
        preguntas: [
            {
                /* nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.", */
                imagenProblema: "Images/Ejercicios/BEjercicio4/Paso_1/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/BEjercicio4/Paso_1/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/BEjercicio4/Paso_1/Incorrecta1.png",
                 "Images/Ejercicios/BEjercicio4/Paso_1/Incorrecta2.png"],
                consejo: "Aplica la fórmula de los productos notables."
            },
            {
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/BEjercicio4/Paso_2/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/BEjercicio4/Paso_2/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/BEjercicio4/Paso_2/Incorrecta1.png", 
                "Images/Ejercicios/BEjercicio4/Paso_2/Incorrecta2.png"],
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
                imagenProblema: "Images/Ejercicios/BEjercicio5/Paso_1/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/BEjercicio5/Paso_1/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/BEjercicio5/Paso_1/Incorrecta1.png", 
                "Images/Ejercicios/BEjercicio5/Paso_1/Incorrecta2.png"],
                consejo: "Aplica la formula de los productos notables."
            },
            {
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/BEjercicio5/Paso_2/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/BEjercicio5/Paso_2/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/BEjercicio5/Paso_2/Incorrecta1.png", 
                "Images/Ejercicios/BEjercicio5/Paso_2/Incorrecta2.png"],
                consejo: "Divide el denominador entre cada uno de los numeradores."
            },
            {
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/BEjercicio5/Paso_3/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/BEjercicio5/Paso_3/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/BEjercicio5/Paso_3/Incorrecta1.png", 
                "Images/Ejercicios/BEjercicio5/Paso_3/Incorrecta2.png"],
                consejo: "Haz las operaciones recuerda la propiedad de dvision de potencias."
            },
            {
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/BEjercicio5/Paso_4/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/BEjercicio5/Paso_4/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/BEjercicio5/Paso_4/Incorrecta1.png", 
                "Images/Ejercicios/BEjercicio5/Paso_4/Incorrecta2.png"],
                consejo: "Aplica la formula de integrales básicas."
            },
            {
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/BEjercicio5/Paso_5/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/BEjercicio5/Paso_5/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/BEjercicio5/Paso_5/Incorrecta1.png",
                 "Images/Ejercicios/BEjercicio5/Paso_5/Incorrecta2.png"],
                consejo: "Consejo para la cuarta pregunta."
            },
        ]
    },
    {
        nombre: "Ejercicio 6",
        preguntas: [
            {
                /* nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.", */
                imagenProblema: "Images/Ejercicios/BEjercicio6/Paso_1/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/BEjercicio6/Paso_1/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/BEjercicio6/Paso_1/Incorrecta1.png",
                 "Images/Ejercicios/BEjercicio6/Paso_1/Incorrecta2.png"],
                consejo: "Recuerda las identidades trigonometricas."
            },
            {
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/BEjercicio6/Paso_2/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/BEjercicio6/Paso_2/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/BEjercicio6/Paso_2/Incorrecta1.png", 
                "Images/Ejercicios/BEjercicio6/Paso_2/Incorrecta2.png"],
                consejo: "Separa la Integral en 2 partes."
            },
            {
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/BEjercicio6/Paso_3/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/BEjercicio6/Paso_3/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/BEjercicio6/Paso_2/Incorrecta1.png", 
                "Images/Ejercicios/BEjercicio6/Paso_3/Incorrecta2.png"],
                consejo: "Aplica una formula directa de las integrales."
            },
            
        ]
    },
    {
        nombre: "Ejercicio 7",
        preguntas: [
            {
                /* nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.", */
                imagenProblema: "Images/Ejercicios/BEjercicio7/Paso_1/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/BEjercicio7/Paso_1/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/BEjercicio7/Paso_1/Incorrecta1.png",
                 "Images/Ejercicios/BEjercicio7/Paso_1/Incorrecta2.png"],
                consejo: "Un consejo diferente para la tercera pregunta."
            },
            {
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/BEjercicio7/Paso_2/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/BEjercicio7/Paso_2/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/BEjercicio7/Paso_2/Incorrecta1.png", 
                "Images/Ejercicios/BEjercicio7/Paso_2/Incorrecta2.png"],
                consejo: "Consejo para la cuarta pregunta."
            },
            {
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/BEjercicio7/Paso_3/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/BEjercicio7/Paso_3/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/BEjercicio7/Paso_3/Incorrecta1.png", 
                "Images/Ejercicios/BEjercicio7/Paso_3/Incorrecta2.png"],
                consejo: "Consejo para la cuarta pregunta."
            },
            
        ]
    },
    {
        nombre: "Ejercicio 8",
        preguntas: [
            {
                /* nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.", */
                imagenProblema: "Images/Ejercicios/BEjercicio8/Paso_1/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/BEjercicio8/Paso_1/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/BEjercicio8/Paso_1/Incorrecta1.png",
                 "Images/Ejercicios/BEjercicio8/Paso_1/Incorrecta2.png"],
                consejo: "Aplica las propiedades de las potencias."
            },
            {
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/BEjercicio8/Paso_2/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/BEjercicio8/Paso_2/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/BEjercicio8/Paso_2/Incorrecta1.png", 
                "Images/Ejercicios/BEjercicio8/Paso_2/Incorrecta2.png"],
                consejo: "Aplica la formula de las integrales básicas."
            },
            {
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/BEjercicio8/Paso_3/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/BEjercicio8/Paso_3/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/BEjercicio8/Paso_3/Incorrecta1.png", 
                "Images/Ejercicios/BEjercicio8/Paso_3/Incorrecta2.png"],
                consejo: "Simplifica."
            },
            
        ]
    },
    {
        nombre: "Ejercicio 9",
        preguntas: [
            {
                /* nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.", */
                imagenProblema: "Images/Ejercicios/BEjercicio9/Paso_1/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/BEjercicio9/Paso_1/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/BEjercicio9/Paso_1/Incorrecta1.png",
                 "Images/Ejercicios/BEjercicio9/Paso_1/Incorrecta2.png"],
                consejo: "Opera el denominador utilizando las reglas de la potenciacion."
            },
            {
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/BEjercicio9/Paso_2/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/BEjercicio9/Paso_2/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/BEjercicio9/Paso_2/Incorrecta1.png", 
                "Images/Ejercicios/BEjercicio9/Paso_2/Incorrecta2.png"],
                consejo: "Saca la constante de la integral."
            },
            {
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/BEjercicio9/Paso_3/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/BEjercicio9/Paso_3/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/BEjercicio9/Paso_3/Incorrecta1.png", 
                "Images/Ejercicios/BEjercicio9/Paso_3/Incorrecta2.png"],
                consejo: "Olvidate por un momento de la constante divide los numeradores dentro del denominador."
            },
            {
                /* nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.", */
                imagenProblema: "Images/Ejercicios/BEjercicio9/Paso_4/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/BEjercicio9/Paso_4/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/BEjercicio9/Paso_4/Incorrecta1.png",
                 "Images/Ejercicios/BEjercicio9/Paso_4/Incorrecta2.png"],
                consejo: "Haz las operaciones recuerda las propiedades de las potencias."
            },
            {
                /* nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.", */
                imagenProblema: "Images/Ejercicios/BEjercicio9/Paso_5/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/BEjercicio9/Paso_5/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/BEjercicio9/Paso_5/Incorrecta1.png",
                 "Images/Ejercicios/BEjercicio9/Paso_5/Incorrecta2.png"],
                consejo: "Aplica las formulas basicas de las integrales."
            },
            {
                /* nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.", */
                imagenProblema: "Images/Ejercicios/BEjercicio9/Paso_6/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/BEjercicio9/Paso_6/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/BEjercicio9/Paso_6/Incorrecta1.png",
                 "Images/Ejercicios/BEjercicio9/Paso_6/Incorrecta2.png"],
                consejo: "Trata de simplicar lo mas que puedas."
            },
        ]
    },
    {
        nombre: "Ejercicio 10",
        preguntas: [
            {
                /* nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.", */
                imagenProblema: "Images/Ejercicios/BEjercicio10/Paso_1/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/BEjercicio10/Paso_1/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/BEjercicio10/Paso_1/Incorrecta1.png",
                 "Images/Ejercicios/BEjercicio10/Paso_1/Incorrecta2.png"],
                consejo: "Aplica la formula de integracion ."
            },
            {
                nivel: "Dificil",
                mensaje: "Selecciona la imagen correcta.",
                imagenProblema: "Images/Ejercicios/BEjercicio10/Paso_2/ejercicio.png",
                respuestaCorrecta: "Images/Ejercicios/BEjercicio10/Paso_2/Correcta.png",
                respuestaIncorrectas: ["Images/Ejercicios/BEjercicio10/Paso_2/Incorrecta1.png", 
                "Images/Ejercicios/BEjercicio10/Paso_2/Incorrecta2.png"],
                consejo: "Simplifica."
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
    document.getElementById("group-name").textContent = `Integrales Básicas: ${group.nombre}`;
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


/*document.getElementById("menuOption1").addEventListener("click", function() {
    showView("view1");
});

document.getElementById("menuOption2").addEventListener("click", function() {
    showView("view2");
});

document.getElementById("menuOption3").addEventListener("click", function() {
    showView("view3");
});

function showView(viewId) {
    const views = document.querySelectorAll(".view");
    views.forEach(view => view.classList.remove("active"));
    document.getElementById(viewId).classList.add("active");
}

document.getElementById("returnToMenu1").addEventListener("click", function() {
    showView("welcomeView");
});

document.getElementById("returnToMenu2").addEventListener("click", function() {
    showView("welcomeView");
});

document.getElementById("returnToMenu3").addEventListener("click", function() {
    showView("welcomeView");
});

document.getElementById("startActivity1").addEventListener("click", function() {
    alert("Actividad 1 iniciada");
});

document.getElementById("startActivity2").addEventListener("click", function() {
    alert("Actividad 2 iniciada");
});

document.getElementById("startActivity3").addEventListener("click", function() {
    alert("Actividad 3 iniciada");
});

// Mostrar la vista de bienvenida al inicio
showView("welcomeView");

 */