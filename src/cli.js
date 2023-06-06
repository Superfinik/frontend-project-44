import readlineSync from 'readline-sync';

function greeting () {

    let userName = readlineSync.question('May I have your name? ');
    return ('Hello, ' + userName + '!');

};

export {greeting};