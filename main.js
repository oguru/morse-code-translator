const morseCode = {
    a: '._',
    b: '_...',
    c: '_._.',
    d: '_..',
    e: '.',
    f: '.._.',
    g: '__.',
    h: '....',
    i: '..',
    j: '.___',
    k: '_._',
    l: '._..',
    m: '__',
    n: '_.',
    o: '___',
    p: '.__.',
    q: '__._',
    r: '._.',
    s: '...',
    t: '_',
    u: '.._',
    v: '..._',
    w: '.__',
    x: '_.._',
    y: '_.__',
    z: '__..',
    0: '_____',
    1: '.____',
    2: '..___',
    3: '...__',
    4: '...._',
    5: '.....',
    6: '_....',
    7: '__...',
    8: '___..',
    9: '____.',
    "&nbsp": "/"
};

//get morse value of letter, split to add spaces and return
const changeLetter = letter => {
    const getMorse = morseCode[letter].split("");
    const morseLetterWithSpaces = getMorse.join("") + "&nbsp";
    return morseLetterWithSpaces;
}

//splits word to individual letters, runs a function to change each letter, joins the result back together with spaces and returns it
const convertWord = word => {
    let changeWord = word.split("").map(changeLetter);
    return changeWord.join("") + "/" + "&nbsp";
}

//change dashes to underscore
const changeDash = char => char === "-" ? "_" : char;

//change from morse to letters
const changeToWords = morseLetter => {
    let fixedFormat = morseLetter.split("").map(changeDash).join("");
    return Object.keys(morseCode).find(key => morseCode[key] === fixedFormat);
}

const removeInitText = () => {
    document.getElementById("init-text").innerHTML = "";
}

//translation parent function
const translateInput = () => {
    removeInitText();
    document.getElementById("output").innerHTML = "";

    //split input separated by spaces into an array
    const getInput = document.getElementById("input").value.toLowerCase().split(" ");

    //check to see if input is morse. If so run function to translate,
    if (getInput[0].includes(".") || (getInput[0].includes("_")) || (getInput[0].includes("-"))) {
        const convertedMorse = getInput.map(changeToWords);
        document.getElementById("output").innerHTML = convertedMorse.join("");
    }

    //else translate from words to morse
    else {
        let changeToMorse = getInput.map(convertWord);
        changeToMorse = changeToMorse.join("");
        changeToMorse = changeToMorse.substring(0, changeToMorse.length - 11);
        document.getElementById("output").innerHTML = changeToMorse;
    }
}
