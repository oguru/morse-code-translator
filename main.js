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


//    const convert = morseObject[0][morseValue];

//get input from html and split into string array for each letter
//

const translate = (morseObject, toTranslate) => {

    const stringArray = toTranslate.split(""); //split input into array of arrays
    console.log(stringArray);
    
    // const convert = letter => {
    //     return Object.keys(morseObject).find(key => morseObject[key]===letter);
    // }

    const convert = keyAndValue => {
        return keyAndValue.hasOwnProperty(keyAndValue);
    }

    const converted = morseObject.map(convert);
    
    console.log(converted);
    
    // const getBoth = morseArray.filter(testArray);
    
    
}

translate(morseCode, "PETER");
