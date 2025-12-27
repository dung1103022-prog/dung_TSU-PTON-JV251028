function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function showPrimeNumbers() {
    let count = 0;
    let number = 2;
    let result = "";

    while (count < 20) {
        if (isPrime(number)) {
            result += number + " ";
            count++;
        }
        number++;
    }

    document.getElementById("output").innerText = result;
}

document.getElementById("btnShow").addEventListener("click", showPrimeNumbers);