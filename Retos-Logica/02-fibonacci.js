/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

const Fibonacci=(tope)=>{
    let fib=[0,1]
    console.log(fib[0])
    console.log(fib[1])
    for(let i=2;i<=tope;i++){
        fib[i]=fib[i-1]+fib[i-2]
        console.log(fib[i])
      }
}

const FibonacciRecursivo=(tope)=>{
    switch (tope) {
        case 0:return 0

        case 1: return 1
    
        default:
            return FibonacciRecursivo(tope-1)+ FibonacciRecursivo(tope-2);
    }
}
Fibonacci(1000)
//console.log(FibonacciRecursivo(40))

