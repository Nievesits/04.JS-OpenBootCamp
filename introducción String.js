//String (cadenas de carecteres)

let str_dbl = "Hola soy un texto con comillas dobles";
let str_sng ='Hola soy un texto con comillas simples';

console.log (str_dbl);
console.log (str_sng);

let str_comillas = "El otro día me dijo 've a sacar la basura'";
//usando la barra invertida
let str_comillas1 = "El otro día me dijo \"ve a sacar la basura\""; //usando la barra invertida
console.log(str_comillas);
console.log(str_comillas1);

/// Comillas invertidas (backticks) permite introducir variables en nuestro texto

let str_backticks = ` Esto es un string con backsticks`;
console.log (str_backticks);

let nombre = "Nieves";
let saludo = `Hola soy ${nombre}`
console.log (saludo);

//Plantillas HTML

let plantilla = `
<html>
<h1>pagina web de ${nombre}</h1>
</html>
`;
console.log (plantilla);

// Introducción de variables en html

let libros_favoritos = [ "El monje que vendió su ferrari", "El poder del ahora", "El club de las cinco de la mañana"];