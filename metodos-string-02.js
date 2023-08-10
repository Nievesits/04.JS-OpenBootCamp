//Métodos de cadenas de texto 

let input = "Escorpio"
let db = "escorpio"

//toLowerCase() - toUpperCase()
console.log (input.toLowerCase())
console.log (input.toUpperCase())
console.log (input.toLocaleLowerCase () === db.toLowerCase ())

//Formas de concatenar dos cadenas de caracteres

let str_1 = "Hola soy la primera cadena "
let str_2 = "y yo soy la segunda cadena"

console.log (str_1.concat(str_2));
console.log (str_1 + str_2)
console.log (`${str_1}  ${str_2}`)

//Eliminar espacios al inicio y al final

let str_3 =  "   Hola soy un string con espacios al final.       "
console.log (str_3.length)
//metodo trim()
console.log (str_3.trim().length)
console.log (str_3.trimStart().length)
console.log (str_3.trimEnd().length)

//Obtener el caracter que hay en cierta posición

let str_4 = "Hola soy el string número 4" //["h", "o", "l", "a"....]

console.log(str_4.charAt(3))
console.log (str_4[3])

//Obtener la posición de una palabra dentro de una cadena de carácteres

let str_5 = "Hola soy Nieves y me gusta comer pizza, Nieves"
console.log (str_5.indexOf("Nieves"))
console.log (str_5.charAt(9))
console.log (str_5.lastIndexOf("Nieves"))

