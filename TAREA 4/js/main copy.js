//CONDICIONES
//EJERCICIO 1
function ParImpar() {
    let numero = parseInt(document.getElementById("numero").value);
    let resultadoDiv = document.getElementById("resultado");

    if (!isNaN(numero)) {
        let mensaje;
        if (numero % 2 === 0) {
            mensaje = numero + " es Par";
        } else {
            mensaje = numero + " es Impar";
        }

        resultadoDiv.innerHTML = "<h5>Resultado:</h5><p>" + mensaje + "</p>";
    } else {
        alert("Por favor ingrese un número válido.");
    }
}

//EJERCICIO 2

function mayorEdad() {
    let edad = parseInt(document.getElementById("edad").value);
    let resultadoDiv = document.getElementById("resultado");

    if (!isNaN(edad)) {
        let mensaje;
        if (edad >= 18) {
            mensaje = "Eres mayor de edad";
        } else {
            mensaje = "Eres menor de edad";
        }

        resultadoDiv.innerHTML = "<h5>Resultado:</h5><p>" + mensaje + "</p>";
    } else {
        alert("Por favor ingrese una edad válida.");
    }
}
//EJERCICIO 3

function positivoNegativo() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let mensaje;
    if (numero1 > 0) {
        mensaje = numero1 + " es positivo";
    } else if (numero1 < 0) {
        mensaje = numero1 + " es negativo";
    } else {
        mensaje = numero1 + " es cero";
    }
    mostrarResultado(mensaje);
}
function mostrarResultado(mensaje) {
    let resultadoDiv = document.getElementById("resultado1");
    resultadoDiv.innerHTML = "<h5>Resultado:</h5><p>" + mensaje + "</p>";
}

//EJERCICIO 4

function esBisiesto() {
    let año = parseInt(document.getElementById("año").value);
    let mensaje;
    if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
        mensaje = año + " es un año bisiesto";
    } else {
        mensaje = año + " no es un año bisiesto";
    }
    mostrarResultado(mensaje);
}

function mostrarResultado(mensaje) {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h5>Resultado:</h5><p>" + mensaje + "</p>";
}

//EJERCICIO 5

function determinarMayor() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let mensaje;

    if (numero1 > numero2) {
        mensaje = numero1 + " es mayor que " + numero2;
    } else if (numero2 > numero1) {
        mensaje = numero2 + " es mayor que " + numero1;
    } else {
        mensaje = "Ambos números son iguales";
    }

    mostrarResultado(mensaje);
}

function mostrarResultado(mensaje) {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h5>Resultado:</h5><p>" + mensaje + "</p>";
}
// BUCLES FOR-WHILE
// EJERCICIO 1
function presentarPares() {
    let n = parseInt(document.getElementById("numeroN").value);

    if (n > 0) {
        let resultado = "";

        for (let i = 1; i <= n; i++) {
            if (i % 2 === 0) {
                resultado += i + " es par<br>";
            }
        }

        mostrarResultadoPares(resultado);
    } else {
        alert("Por favor ingrese un número entero positivo.");
    }
}

function mostrarResultadoPares(resultado) {
    let resultadoDiv = document.getElementById("resultadoPares");
    resultadoDiv.innerHTML = "<h5>Números pares:</h5>" + resultado;
}

// EJERCICIO 2
function mostrarDivisores() {
    let numero = parseInt(document.getElementById("numero").value);
    let resultadoDiv = document.getElementById("resultado");

    if (numero > 0) {
        let resultado = "<h5>Divisores:</h5><ul>";
        
        for (let i = 1; i <= numero; i++) {
            if (numero % i === 0) {
                resultado += "<li>" + i + " es un divisor de " + numero + "</li>";
            }
        }

        resultado += "</ul>";
        resultadoDiv.innerHTML = resultado;
    } else {
        alert("Por favor ingrese un número entero positivo mayor que 0.");
    }
}

// EJERCICIO 3
function verificarNumeroPerfecto() {
    let numero = parseInt(document.getElementById("numero").value);
    let suma = 0;

    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            suma += i;
        }
    }

    let mensaje = (suma === numero) ? `${numero} es un número perfecto` : `${numero} no es un número perfecto`;
    mostrarResultado(mensaje);
}

function mostrarResultado(mensaje) {
    document.getElementById("resultado").innerHTML = `<h5>Resultado:</h5><p>${mensaje}</p>`;
}

//EJERCICIO 4

function verificarNumeroPrimo() {
    let numero = parseInt(document.getElementById("numero").value);
    let resultadoDiv = document.getElementById("resultado");

    if (numero <= 1) {
        resultadoDiv.innerHTML = `<h5>Resultado:</h5><p>${numero} no es un número primo</p>`;
        return;
    }

    let esPrimo = true;

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }

    let mensaje = esPrimo ? `${numero} es un número primo` : `${numero} no es un número primo`;

    resultadoDiv.innerHTML = `<h5>Resultado:</h5><p>${mensaje}</p>`;
}

//EJERCICIO 5

function invertirNumero() {
    let numero = parseInt(document.getElementById("numero").value);
    let numeroInvertido = 0;
    let resto;
    let numeroOriginal = numero;

    while (numeroOriginal > 0) {
        resto = numeroOriginal % 10;
        numeroInvertido = numeroInvertido * 10 + resto;
        numeroOriginal = Math.floor(numeroOriginal / 10);
    }

    mostrarResultado(numeroInvertido);
}

function mostrarResultado(resultado) {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h5>Número invertido:</h5><p>" + resultado + "</p>";
}

//  EJERCICIO 6

function multiplicacionPorSumas() {
    let primerNumero = parseInt(document.getElementById("primerNumero").value);
    let segundoNumero = parseInt(document.getElementById("segundoNumero").value);
    let resultado = 0;

    for (let i = 0; i < segundoNumero; i++) {
        resultado += primerNumero;
    }

    mostrarResultadoMultiplicacion(primerNumero, segundoNumero, resultado);
}

function mostrarResultadoMultiplicacion(primerNumero, segundoNumero, resultado) {
    let resultadoDiv = document.getElementById("resultadoMultiplicacion");
    resultadoDiv.innerHTML = `<h5>Resultado de ${primerNumero} * ${segundoNumero}:</h5><p>${resultado}</p>`;
}

//EJERCICIO 7

function divisionPorRestas() {
    let dividendo = parseInt(document.getElementById("dividendo").value);
    let divisor = parseInt(document.getElementById("divisor").value);
    let cociente = 0;

    while (dividendo >= divisor) {
        dividendo -= divisor;
        cociente++;
    }

    mostrarResultadoDivision(dividendo, divisor, cociente);
}

function mostrarResultadoDivision(resto, divisor, cociente) {
    let resultadoDiv = document.getElementById("resultadoDivision");
    resultadoDiv.innerHTML = `<h5>Resultado de la división:</h5>
                               <p>Cociente: ${cociente}</p>
                               <p>Resto: ${resto}</p>`;
}

//EJERCICIO 8

function generarFibonacci() {
    let n = parseInt(document.getElementById("numeroN").value);

    if (n <= 0) {
        alert("Por favor, ingrese un número entero positivo mayor que 0.");
        return;
    }

    let resultado = "";
    let a = 0;
    let b = 1;

    resultado += a + "<br>";
    resultado += b + "<br>";

    for (let i = 2; i < n; i++) {
        let c = a + b;
        resultado += c + "<br>";
        a = b;
        b = c;
    }

    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    document.getElementById("resultado").innerHTML = "<h3>Serie de Fibonacci:</h3>" + resultado;
}

// EJERCICIO 9
function encontrarMultiplosDe5() {
    let numerosIngresados = document.getElementById("numerosIngresados").value;
    let arregloNumeros = numerosIngresados.split(",").map(num => parseInt(num.trim()));
    let resultadoMultiples5 = "";

    for (let i = 0; i < arregloNumeros.length; i++) {
        if (arregloNumeros[i] % 5 === 0) {
            resultadoMultiples5 += arregloNumeros[i] + " es múltiplo de 5<br>";
        }
    }

    mostrarResultadoMultiples5(resultadoMultiples5);
}

function mostrarResultadoMultiples5(resultado) {
    document.getElementById("resultadoMultiples5").innerHTML = "<h3>Resultados:</h3>" + resultado;
}

//EJERCICIO 10

function calcularPromedio() {
    let numerosIngresados = document.getElementById("numerosPromedio").value;
    let arregloNumeros = numerosIngresados.split(",").map(num => parseFloat(num.trim()));
    let sumaTotal = 0;
    let cantidadNumeros = arregloNumeros.length;

    for (let i = 0; i < cantidadNumeros; i++) {
        sumaTotal += arregloNumeros[i];
    }

    let promedio = sumaTotal / cantidadNumeros;
    mostrarResultadoPromedio("El promedio es: " + promedio);
}

function mostrarResultadoPromedio(resultado) {
    document.getElementById("resultadoPromedio").innerHTML = "<h3>Resultado:</h3><p>" + resultado + "</p>";
}

// EJERCICIO 11

function encontrarMayor() {
    let numerosIngresados = document.getElementById("numerosMayor").value;
    let arregloNumeros = numerosIngresados.split(",").map(num => parseFloat(num.trim()));
    let mayor = arregloNumeros[0];

    for (let i = 1; i < arregloNumeros.length; i++) {
        if (arregloNumeros[i] > mayor) {
            mayor = arregloNumeros[i];
        }
    }

    mostrarResultadoMayor("El mayor número es: " + mayor);
}

function mostrarResultadoMayor(resultado) {
    document.getElementById("resultadoMayor").innerHTML = "<h3>Resultado:</h3><p>" + resultado + "</p>";
}

// EJERCICIO 12

function filtrarNombres() {
    let nombresIngresados = document.getElementById("nombres").value;
    let arregloNombres = nombresIngresados.split(",").map(nombre => nombre.trim());
    let nombresFiltrados = [];

    for (let i = 0; i < arregloNombres.length; i++) {
        if (arregloNombres[i].toLowerCase() !== "ana") {
            nombresFiltrados.push(arregloNombres[i]);
        }
    }

    mostrarResultadoNombres("Los nombres que no son 'Ana' son: " + nombresFiltrados.join(", "));
}

function mostrarResultadoNombres(resultado) {
    document.getElementById("resultadoNombres").innerHTML = "<h3>Resultado:</h3><p>" + resultado + "</p>";
}

//EJERCICIO 13

function filtrarParesInverso() {
    let numerosIngresados = document.getElementById("numeros").value;
    let arregloNumeros = numerosIngresados.split(",").map(numero => parseInt(numero.trim()));
    let numerosParesInverso = [];

    for (let i = arregloNumeros.length - 1; i >= 0; i--) {
        if (arregloNumeros[i] % 2 === 0) {
            numerosParesInverso.push(arregloNumeros[i]);
        }
    }

    mostrarResultadoPares("Los números pares en orden inverso son: " + numerosParesInverso.join(", "));
}

function mostrarResultadoPares(resultado) {
    document.getElementById("resultadoPares").innerHTML = "<h3>Resultado:</h3><p>" + resultado + "</p>";
}

// CADENAS

// EJERCICIO 13.5

function imprimirCaracteres() {
    // Obtener el valor del input con la cadena
    let cadenaEntrada = document.getElementById("cadenaEntrada").value;

    // Recorrer la cadena e imprimir cada carácter
    let caracteres = "";
    for (let i = 0; i < cadenaEntrada.length; i++) {
        caracteres += cadenaEntrada.charAt(i) + "<br>";
    }

    // Mostrar el resultado en el div correspondiente
    mostrarCaracteres(caracteres);
}

function mostrarCaracteres(caracteres) {
    document.getElementById("resultadoCaracteres").innerHTML = "<h3>Caracteres de la Cadena:</h3>" + caracteres;
}

//EJERCICIO 14

function presentarVocales() {
    let frase = document.getElementById("frase").value.toLowerCase();
    let resultadoVocales = [];

    for (let i = 0; i < frase.length; i++) {
        let char = frase[i];
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            resultadoVocales.push(char);
        }
    }

    mostrarResultadoVocales("Las vocales en la frase son: " + resultadoVocales.join(", "));
}

function mostrarResultadoVocales(resultado) {
    document.getElementById("resultadoVocales").innerHTML = "<h3>Resultado:</h3><p>" + resultado + "</p>";
}

// EJERCICIO 14.5

function contarVocales() {
    let inputTexto = document.getElementById("inputTexto").value.toLowerCase(); // Convertir a minúsculas
    let listaVocales = "aeiouAEIOU";  // Incluyendo las vocales con y sin tilde
    let conteo = 0;

    // Recorrer cada caracter del texto
    for (let i = 0; i < inputTexto.length; i++) {
        let caracter = inputTexto[i];
        
        // Verificar si el caracter es una vocal
        if (esVocal(caracter, listaVocales)) {
            conteo++;
        }
    }

    // Mostrar el resultado
    mostrarConteoVocales(conteo);
}

// Función para verificar si un carácter es una vocal
function esVocal(caracter, listaVocales) {
    // Convertir el caracter a minúscula (para comparación)
    caracter = caracter.toLowerCase();

    // Verificar si el carácter está en la lista de vocales
    for (let j = 0; j < listaVocales.length; j++) {
        if (caracter === listaVocales[j]) {
            return true;
        }
    }
    return false;
}

function mostrarConteoVocales(conteo) {
    let conteoVocalesDiv = document.getElementById("conteoVocales");
    conteoVocalesDiv.innerHTML = "<h3>Conteo de Vocales:</h3>";
    conteoVocalesDiv.innerHTML += "<p>Número de vocales encontradas: " + conteo + "</p>";
}

// EJERCICIO 15

function presentarPalabras() {
    let frase = document.getElementById("frase").value;
    let palabras = frase.split(" ");

    let resultado = "<h3>Palabras:</h3><ul>";
    for (let i = 0; i < palabras.length; i++) {
        resultado += "<li>" + palabras[i] + "</li>";
    }
    resultado += "</ul>";

    document.getElementById("resultadoPalabras").innerHTML = resultado;
}

// EJERCICIO 15.5

function invertirCadena() {
    let inputTexto = document.getElementById("inputTexto").value;
    let cadenaInvertida = "";

    for (let i = inputTexto.length - 1; i >= 0; i--) {
        cadenaInvertida += inputTexto[i];
    }

    mostrarCadenaInvertida(cadenaInvertida);
}

function mostrarCadenaInvertida(cadenaInvertida) {
    let resultadoDiv = document.getElementById("resultadoInvertido");
    resultadoDiv.innerHTML = "<h3>Cadena Invertida:</h3>";
    resultadoDiv.innerHTML += "<p>" + cadenaInvertida + "</p>";
}
// EJERCICIO 16.0 
function contarPalabrasPersonalizado() {
    let textoPersonalizado = document.getElementById("textoPersonalizado").value;
    let contadorPalabras = 0;
    let enPalabraActual = false;  // Bandera para indicar si estamos dentro de una palabra

    // Recorrer cada carácter de la cadena
    for (let i = 0; i < textoPersonalizado.length; i++) {
        // Si el carácter actual no es un espacio y no estamos en una palabra,
        // incrementamos el contador de palabras y cambiamos la bandera a true
        if (textoPersonalizado[i] !== ' ' && !enPalabraActual) {
            contadorPalabras++;
            enPalabraActual = true;
        } else if (textoPersonalizado[i] === ' ') {
            // Si encontramos un espacio, cambiamos la bandera a false
            enPalabraActual = false;
        }
    }

    mostrarResultadoPersonalizado(contadorPalabras);
}

function mostrarResultadoPersonalizado(contadorPalabras) {
    let resultadoConteo = document.getElementById("resultadoConteo");
    resultadoConteo.innerHTML = "<h3>Conteo de Palabras:</h3>";
    resultadoConteo.innerHTML += "<p>En el texto ingresado hay " + contadorPalabras + " palabras.</p>";
}
//EJERCICIO 16

function copiarSinDigitos() {
    let fraseOriginal = document.getElementById("fraseOriginal").value;
    let fraseSinDigitos = "";

    for (let i = 0; i < fraseOriginal.length; i++) {
        let char = fraseOriginal[i];
        if (!(char >= '0' && char <= '9')) {
            fraseSinDigitos += char;
        }
    }

    mostrarResultadoFrase(fraseSinDigitos);
}

function mostrarResultadoFrase(resultado) {
    document.getElementById("resultadoFrase").innerHTML = "<h3>Resultado:</h3><p>" + resultado + "</p>";
}

//EJERCICIO 17  

function contarConsonantes() {
    let frase = document.getElementById("frase").value.toLowerCase() // Convertir a minúsculas
    let conteo = 0

    // Lista de consonantes en español
    let consonantes = "bcdfghjklmnñpqrstvwxyz";

    for (let i = 0; i < frase.length; i++) {
        let caracter = frase.charAt(i)
        // Verificar si el carácter es una consonante
        if (esConsonante(caracter, consonantes)) {
            conteo++;
        }
    }

    mostrarResultado(conteo);
}

// Función para verificar si un carácter es una consonante
function esConsonante(caracter, consonantes) {
    // Convertir el carácter a minúscula (para comparación)
    caracter = caracter.toLowerCase();
    // Verificar si el carácter está en la lista de consonantes
    return consonantes.indexOf(caracter) !== -1
}

function mostrarResultado(conteo) {
    let resultadoDiv = document.getElementById("resultado")
    resultadoDiv.innerHTML = "<h3>Conteo de Consonantes:</h3>"
    resultadoDiv.innerHTML += "<p>En la frase ingresada hay " + conteo + " consonantes.</p>"
}

//EJERCICIO CADENA Reemplazar espacios con guiones

function reemplazarEspacios() {
    let cadena = document.getElementById("cadena").value;
    let cadenaModificada = "";

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === " ") {
            cadenaModificada += "-";
        } else {
            cadenaModificada += cadena[i];
        }
    }

    mostrarResultado(cadenaModificada);
}

function mostrarResultado(cadenaModificada) {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h3>Cadena Modificada:</h3>";
    resultadoDiv.innerHTML += "<p>" + cadenaModificada + "</p>";
}

// EJERCICIO CONTAR CARACTER ESPECIFICO

function contarCaracterEspecifico() {
    let cadenaEn = document.getElementById("cadenaEntrada").value;
    let caracterBus = document.getElementById("caracterBuscar").value; // Obtener el valor como cadena
    let contador = 0;

    for (let i = 0; i < cadenaEn.length; i++) {
        if (cadenaEn[i] === caracterBus) {
            contador++;
        }
    }

    mostrarResultado(contador, caracterBus, "resultado")
}

function mostrarResultado(contador, caracterBus, idResultado) {
    let resultadoDiv = document.getElementById(idResultado)
    resultadoDiv.innerHTML = "<h3>Conteo de caracteres específicos:</h3>"
    resultadoDiv.innerHTML += `<p>El carácter '${caracterBus}' aparece ${contador} veces.</p>`
}
// EJERCICIO Eliminar caracteres específicos

function eliminarCaracterEspecifico() {
    let cadenaEntrada = document.getElementById("cadenaEntrada").value
    let caracterEliminar = document.getElementById("caracterEliminar").value // Obtener el valor como cadena

    let nuevaCadena = ""
    for (let i = 0; i < cadenaEntrada.length; i++) {
        if (cadenaEntrada[i] !== caracterEliminar) {
            nuevaCadena += cadenaEntrada[i]
        }
    }

    mostrarResultado(nuevaCadena) // Mostrar la cadena resultante sin el caracter especificado
}

function mostrarResultado(cadenaModificada) {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h3>Cadena sin Caracteres Específicos:</h3>";
    resultadoDiv.innerHTML += `<p>${cadenaModificada}</p>`;
}

// EJERCICIO Convertir mayúsculas a minúsculas y viceversa

function convertirMayusculasMinusculas() {
    let cadenaEntrada = document.getElementById("cadenaEntrada").value
    let nuevaCadena = ""

    for (let i = 0; i < cadenaEntrada.length; i++) {
        let char = cadenaEntrada[i]

        if (char >= 'a' && char <= 'z') {
            nuevaCadena += String.fromCharCode(char.charCodeAt(0) - 32) // Convertir a mayúscula
        } else if (char >= 'A' && char <= 'Z') {
            nuevaCadena += String.fromCharCode(char.charCodeAt(0) + 32) // Convertir a minúscula
        } else {
            nuevaCadena += char // Conservar caracteres que no son letras
        }
    }

    mostrarResultado(nuevaCadena)
}

function mostrarResultado(cadenaConvertida) {
    let resultadoDiv = document.getElementById("resultado")
    resultadoDiv.innerHTML = "<h3>Cadena Convertida:</h3>"
    resultadoDiv.innerHTML += `<p>${cadenaConvertida}</p>`
}

//EJERCICIO Eliminar espacios 

function eliminarEspacios() {
    let cadenaEntrada = document.getElementById("cadenaEntrada").value
    let nuevaCadena = ""
    
    for (let i = 0; i < cadenaEntrada.length; i++) {
        if (cadenaEntrada[i] !== " ") {
            nuevaCadena += cadenaEntrada[i]
        }
    }

    mostrarResultado(nuevaCadena)
}

function mostrarResultado(cadenaSinEspacios) {
    let resultadoDiv = document.getElementById("resultado")
    resultadoDiv.innerHTML = "<h3>Cadena sin Espacios:</h3>"
    resultadoDiv.innerHTML += `<p>${cadenaSinEspacios}</p>`
}

// EJERCICIO Contar la longitud de la palabra más larga

function longitudPalabraMasLarga() {
    let cadena = document.getElementById("cadena").value
    let palabraActual = ""
    let longitudMaxima = 0

    
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === " " || i === cadena.length - 1) { 
            if (i === cadena.length - 1) { 
                palabraActual += cadena[i]
            }
            
            if (palabraActual.length > longitudMaxima) {
                longitudMaxima = palabraActual.length
            }
            palabraActual = ""
        } else {
            palabraActual += cadena[i]
        }
    }

    mostrarResultado(longitudMaxima)
}

function mostrarResultado(longitudMaxima) {
    let resultadoDiv = document.getElementById("resultado")
    resultadoDiv.innerHTML = "<h3>Respuesta:</h3>"
    resultadoDiv.innerHTML += `<p>${longitudMaxima}</p>`
}
