/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

const esPrimo=(num)=>{
    if(num%2===0 || num===1) return false;
    for(let i=3; i<=num; i+=2){
        if(num!==i && num%i===0) return false;
    }

    return true
}

for(let i=1; i<=100; i++){
    if(esPrimo(i)) console.log(i)
}
