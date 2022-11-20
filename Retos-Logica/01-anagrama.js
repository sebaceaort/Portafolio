/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

const isAnagrama =(word1, word2)=>{
    if(word1.localeCompare(word2)===0) return false
    else if(word1.length!==word2.length) return false
    let arrword1=word1.split("").sort()
    let arrword2=word2.split("").sort()
    for(let i=0;i<arrword1.length;i++){
        if(arrword1[i]!==arrword2[i]) return false
    }
    return true
}

console.log(isAnagrama("delira","lidera"))
console.log(isAnagrama("ana","anana"))
console.log(isAnagrama("ana","ana"))
console.log(isAnagrama("armo","ramo"))
console.log(isAnagrama("España","anaAna"))