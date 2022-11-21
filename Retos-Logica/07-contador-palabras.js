/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

const text =
  "Contador de palabras y contador de caracteres es una herramienta que te permite contar la cantidad de palabras o de caracteres que posee un texto. Simplemente, debes posicionar el cursor dentro de la ventana y comenzar a escribir con el teclado. El sistema contará automáticamente la cantidad de palabras y caracteres que has ingresado. También es posible copiar y pegar un texto que hayas escrito fuera del sistema; automáticamente mostrará el recuento de palabras y caracteres del texto copiado. Además, Contador de palabras y contador de caracteres posee dos botones sobre la derecha de la pantalla, los cuales te permiten borrar y contar, respectivamente. Verás que uno de ellos posee un icono de una papelera con el que podrás borrar todo el contenido de la ventana. El otro, que posee el icono de una flecha, te permite contar palabras y caracteres de lo que hayas escrito. Saber el número de palabras o caracteres de un documento puede ser muy útil. Como ejemplo, si se le pide a un autor un mínimo o un máximo de palabras permitidas para escribir, el contador de palabras lo ayudará a saber si su artículo cumple con los requisitos. Además, el contador de palabras muestra automáticamente las diez palabras más utilizadas y la densidad de las mismas dentro del artículo que estás escribiendo. Esto te permite saber qué palabras utilizas con más frecuencia y en qué porcentaje las utilizas dentro del artículo. Esto te ayudará a evitar que utilices en exceso ciertas palabras en un texto y te permitirá asegurarte de que la distribución de las palabras clave coincide con lo que estás buscando obtener a partir del texto. El recuento de palabras también puede ser importante para definir las velocidades de lectura y escritura. El contador de palabras te ayudará a determinar ambas. Basta con establecer el cronómetro y comenzar a escribir. Cuando se acabe el tiempo, podrás saber de manera instantánea cuántas palabras has escrito durante ese período de tiempo.";
const reg = new RegExp("[.,/#!$%^&*;:{}=-_`~()”“…]", "g");
let textoLimpio = text.toLocaleLowerCase().replaceAll(reg, "");

textoLimpio = textoLimpio.split(" ");
//console.log(textoLimpio)

const contadorPalabras = (texto) => {
  const words = new Map();

  for (const word of texto) {
    if (words.has(word)) {
      words.set(word, words.get(word) + 1);
    } else {
      words.set(word, 1);
    }
  }
  console.table(words.entries());
};

contadorPalabras(textoLimpio);
