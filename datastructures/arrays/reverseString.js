// reverse a string

function reverse(str) {
    if (!str || typeof str !== 'string') {
        console.log(`Invalid parameter. Expected string, received ${typeof str}`)
        return str
    } else if (str.length < 2) {
        console.log("Received input with one element. No action needed.")
        return str
    } else {
        let stringCharsInReverse = [];
        for (i = str.length - 1; i >= 0; i--) {
            stringCharsInReverse.push(str[i]);
        };
        const stringInReverse = stringCharsInReverse.join('');
        return stringInReverse
    }
}

// or

function reverse2(str) {
    return str.split('').reverse().join('');
}

// or

const reverse3 = str => str.split('').reverse().join('');
