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
    9: '____.'
};

// separate words to strings
// function to filter words into morse with spaces between letters
// join words together with spaces between

const morseTranslator = () => {

    const getInput = document.getElementById("input").value.toLowerCase().split(" ");

    const convertWord = word => {

        const changeLetter = letter => {
            const getMorse = morseCode[letter].split("");
            
            const addCharSpace = getMorse.map(morseChar => morseChar + "&nbsp");
            
            const morseLetterWithSpaces = addCharSpace.join("") + "&nbsp" + "&nbsp" + "&nbsp";
            return morseLetterWithSpaces;
        }

        let changeWord = word.split("").map(changeLetter) ;
        
        return changeWord.join("")+ "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp";
    }

    let changeToMorse = getInput.map(convertWord);

    document.getElementById("output").innerHTML = changeToMorse.join("");
      
}
