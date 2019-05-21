console.log('connected');

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}


function decomp(n) {
    //find the factorial of n
    const valueFactorial = factorial(n);
    let primes = [];
    //find all prime numbers from 2 to n!
    for(let i = 2; i < valueFactorial; i++) {
        if(isPrime(i)) {
            primes.push(i);
        } 
    }

    const primesDecomp = []

    primes.forEach(num => {
        if(valueFactorial % num === 0) {
            primesDecomp.push(num);
        }
    })
    console.log(primesDecomp);

    let resultString = '';

    //divide valueFactorial by num assign to new var
    //divide new 
    primesDecomp.forEach(num => {
      const numCheck = Math.floor()
    })

    //divide n! by primes[i] 
        //


}

function divideNum(num) {
    const numCheck = num / 
} 


decomp(5);