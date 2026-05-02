//https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true

function birthdayCakeCandles(candles) {
    let cont = 0;
    let number = 0;

    for (let value of candles){
        if (value > number){
            number = value;
        }
    }

    for(let value of candles){
        if (number === value){
            cont++
        }
    }

    return cont;
}

birthdayCakeCandles([3, 2, 1, 3])