// Ejercicio 1: Determina si el estudiante ha aprobado en función de su nota
function ejercicio1() {
    let nota = parseFloat(prompt("Ingrese su nota para el ejercicio 1")); // Solicita la nota del usuario
    let mensaje = "";

    // Verifica en qué rango de nota se encuentra y asigna el mensaje correspondiente
    if (nota < 75) {
        mensaje = "Usted Necesita Mejorar"; // Nota baja
    } else if (nota < 80) {
        mensaje = "Bueno"; // Nota aceptable
    } else if (nota < 91) {
        mensaje = "Muy Bueno"; // Nota buena
    } else if (nota <= 100) {
        mensaje = "Usted está en Excelencia Académica"; // Nota excelente
    } else {
        mensaje = "Ingrese un valor válido"; // Valor fuera de rango
    }

    alert(mensaje); // Muestra el mensaje al usuario
}

// Ejercicio 2: Calcula el área de un triángulo dado su base y altura
function ejercicio2() {
    let base = parseFloat(prompt("Ingrese la base del triángulo:")); // Solicita la base
    let altura = parseFloat(prompt("Ingrese la altura del triángulo:")); // Solicita la altura
    let area = (base * altura) / 2; // Fórmula del área de un triángulo
    alert("El área del triángulo es: " + area); // Muestra el resultado
}

// Ejercicio 3: Calcula el promedio de 4 calificaciones
function ejercicio3() {
    // Solicita 4 calificaciones del usuario
    const nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    const nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    const nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
    const nota4 = parseFloat(prompt("Ingrese la cuarta nota:"));
    
    // Calcula el promedio
    const promedio = Math.round((nota1 + nota2 + nota3 + nota4) / 4);
    
    alert("El promedio de las 4 notas es de: " + promedio); // Muestra el promedio
}

// Ejercicio 4: Calcula el descuento en el ticket según la edad del usuario
function ejercicio4() {
    let precio = parseFloat(prompt("Ingrese el precio del ticket")); // Solicita el precio
    let edad = parseFloat(prompt("Ingrese su edad para saber si tiene descuento")); // Solicita la edad
    let mensaje = "";

    // Calcula el descuento según la edad del usuario
    if (edad <= 12) {
        let descuento = precio * 0.40; // Descuento del 40%
        mensaje = "Descuento del 40%. Debe pagar " + (precio - descuento) + "$";
    } else if (edad <= 21) {
        let estudiante = prompt("¿Usted es un estudiante? (si/no)").toLowerCase(); // Verifica si es estudiante
        if (estudiante === "si") {
            let descuento = precio * 0.30; // Descuento del 30% para estudiantes
            mensaje = "Descuento del 30%. Debe pagar " + (precio - descuento) + "$";
        } else {
            mensaje = "No tiene descuento. Debe pagar " + precio + "$";
        }
    } else if (edad >= 60) {
        let descuento = precio * 0.60; // Descuento del 60% para personas mayores
        mensaje = "Descuento del 60%. Debe pagar " + (precio - descuento) + "$";
    } else {
        mensaje = "No tiene descuento. Debe pagar " + precio + "$";
    }

    alert(mensaje); // Muestra el mensaje con el precio final
}

// Ejercicio 5: Calcula el área de un cuadrado dado el valor del lado
function ejercicio5() {
    let lado = parseFloat(prompt("Ingrese el lado del cuadrado:")); // Solicita el valor del lado
    let area = lado * lado; // Calcula el área (lado al cuadrado)
    alert("El área del cuadrado es: " + area); // Muestra el área
}

// Ejercicio 6: Calcula el perímetro de un rectángulo con base y altura
function ejercicio6() {
    let base = parseFloat(prompt("Ingrese la base del rectángulo:")); // Solicita la base
    let altura = parseFloat(prompt("Ingrese la altura del rectángulo:")); // Solicita la altura
    let perimetro = 2 * (base + altura); // Fórmula del perímetro de un rectángulo
    alert("El perímetro del rectángulo es: " + perimetro); // Muestra el perímetro
}

// Ejercicio 7: Verifica si el usuario es mayor o menor de edad
function ejercicio7() {
    let edad = parseFloat(prompt("Ingrese su edad:")); // Solicita la edad
    let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad"; // Verifica si es mayor o menor de edad
    alert(mensaje); // Muestra el resultado
}

// Ejercicio 8: Verifica si el usuario ha cumplido con la asistencia mínima requerida (75%)
function ejercicio8() {
    let asistencias = parseFloat(prompt("Ingrese el número de asistencias:")); // Solicita el número de asistencias
    let totalClases = parseFloat(prompt("Ingrese el número total de clases:")); // Solicita el número total de clases
    let porcentaje = (asistencias / totalClases) * 100; // Calcula el porcentaje de asistencia
    let mensaje = porcentaje >= 75 ? "Has asistido lo suficiente" : "No has asistido lo suficiente"; // Verifica si cumple
    alert(mensaje); // Muestra el resultado
}

// Ejercicio 9: Calcula el área de un trapecio con base mayor, base menor y altura
function ejercicio9() {
    let base1 = parseFloat(prompt("Ingrese la base mayor del trapecio:")); // Solicita la base mayor
    let base2 = parseFloat(prompt("Ingrese la base menor del trapecio:")); // Solicita la base menor
    let altura = parseFloat(prompt("Ingrese la altura del trapecio:")); // Solicita la altura
    let area = ((base1 + base2) * altura) / 2; // Fórmula del área de un trapecio
    alert("El área del trapecio es: " + area); // Muestra el área
}

// Ejercicio 10: Convierte dólares a lempiras usando una tasa de cambio
function ejercicio10() {
    let dolares = parseFloat(prompt("Ingrese la cantidad en dólares:")); // Solicita la cantidad en dólares
    let tasaCambio = parseFloat(prompt("Ingrese la tasa de cambio a lempiras:")); // Solicita la tasa de cambio
    let lempiras = dolares * tasaCambio; // Realiza la conversión
    alert("La cantidad en lempiras es: " + lempiras); // Muestra el resultado
}

// Ejercicio 11: Convierte lempiras a dólares usando una tasa de cambio
function ejercicio11() {
    let lempiras = parseFloat(prompt("Ingrese la cantidad en lempiras:")); // Solicita la cantidad en lempiras
    let tasaCambio = parseFloat(prompt("Ingrese la tasa de cambio a dólares:")); // Solicita la tasa de cambio
    let dolares = lempiras / tasaCambio; // Realiza la conversión
    alert("La cantidad en dólares es: " + dolares); // Muestra el resultado
}

// Ejercicio 12: Convierte grados Celsius a Fahrenheit
function ejercicio12() {
    let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:")); // Solicita la temperatura en Celsius
    let fahrenheit = (celsius * 9 / 5) + 32; // Fórmula de conversión de Celsius a Fahrenheit
    alert("La temperatura en grados Fahrenheit es: " + fahrenheit); // Muestra la temperatura en Fahrenheit
}

// Ejercicio 13: Calcula el área de un círculo dado su radio
function ejercicio13() {
    let radio = parseFloat(prompt("Ingrese el radio del círculo:")); // Solicita el radio
    let area = Math.PI * Math.pow(radio, 2); // Fórmula del área del círculo (π * radio^2)
    alert("El área del círculo es: " + area); // Muestra el área
}

// Ejercicio 14: Calcula el perímetro de un círculo dado su radio
function ejercicio14() {
    let radio = parseFloat(prompt("Ingrese el radio del círculo:")); // Solicita el radio
    let perimetro = 2 * Math.PI * radio; // Fórmula del perímetro del círculo (2π * radio)
    alert("El perímetro del círculo es: " + perimetro); // Muestra el perímetro
}

// Ejercicio 15: Convierte una distancia de metros a centímetros
function ejercicio15() {
    let metros = parseFloat(prompt("Ingrese la distancia en metros:")); // Solicita la distancia en metros
    let centimetros = metros * 100; // Conversión de metros a centímetros
    alert("La distancia en centímetros es: " + centimetros); // Muestra la distancia en centímetros
}