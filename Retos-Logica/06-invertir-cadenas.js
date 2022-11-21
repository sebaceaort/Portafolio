/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

const invertirCadena=(palabra)=>{
    let arr=palabra.split("");
    let invertido=""
    for(let i=1; i<=arr.length;i++){
        invertido+=(arr[arr.length-i])
    }
    console.log(invertido)
}
const invertirCadena2=(palabra)=>{
    let invertido=""
    for(let i=1; i<=palabra.length;i++){
        invertido+=palabra.charAt(palabra.length-i)
    }
    console.log(invertido)
}

invertirCadena("Hola mundo")
invertirCadena2("Hola mundo")