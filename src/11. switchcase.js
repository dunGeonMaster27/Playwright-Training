//switch case

let browser = 'chrome';
switch (browser) { //-----------------> this is where decision is made
    case 'chrome':
        console.log('launch chrome');
        break;
    case 'firefox':
        console.log('launch firefox');
        break;
    default:
        console.log('Invalid browser');
        break;
}



// a e i o u - vowels

let ch = 'i';
switch (ch) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(`${ch} is a vowel`);
        break;

    default:
        console.log(`${ch} is not a vowel`);
        break;
}



