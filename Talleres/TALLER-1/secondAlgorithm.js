//https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true
// escalera n = 4
//   #
//  ##
// ###
//####


function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let space = '';
        let num = '';

        for (let j = 0; j < n - i; j++) {
            space += ' ';
        }
        for (let k = 0; k < i; k++) {
            num += '#';
        }

        console.log(space + num);
    }
}

staircase(4)