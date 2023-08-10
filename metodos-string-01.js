//Métodos más utilizados con cadenas de caracteres
//cómo obtener la longitud de un string
let str = "hola soy un string";
console.log (str.length);

//Obtener partes de cadenas de caracteres
//slice () substring () substr ()
let slice_str = str.slice(0, 10);
console.log (slice_str);

let substring_str = str.substring (5, 10);
console.log (substring_str);

let substr_str = str.substr (5, 10);
console.log (substr_str);

//Reemplazar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es Nieves";
console.log (cadena);
console.log (cadena.replace ('Nieves','María')); // al utilizar string sólo reemplaza la primera instancia

let texto_largo ="Narración es la manera de contar una secuencia o una serie de acciones realizadas por unos personajes determinados a lo largo de un intervalo de tiempo determinado, es decir, se refiere lingüística o visualmente a una sucesión. Tanto las acciones, como personajes y lugar, pueden ser reales o imaginarios.";

//Al utilizar string sólo reemplaza la primera instancia
console.log (texto_largo.replace('es','cinco'));

//Al utilizar la expresión regular /g (global), reemplaza todas las instancias
console.log (texto_largo.replace(/es/g,'cinco'));

