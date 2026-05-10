function extraLongFactorial (n){ 
    if(n >= 1 && n <= 100){
        let result = 1;
    
        for (let i = n; i >= 1; i-- ){
            result *= i; 
        }
        return result;
    }else {
        return 'coloca un  numero entre 1 y 100'
    }
}

console.log(extraLongFactorial(25));