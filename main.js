const morse =
    {
        ".-": "A",
        "-...": "B",
        "-.-.": "C",
        "-..": "D",
        ".": "E",
        "..-.": "F",
        "--.": "G",
        "....": "H",
        "..": "I",
        ".---": "J",
        "-.-": "K",
        ".-..": "L",
        "--": "M",
        "-.": "N",
        "---": "O",
        ".--.": "P",
        "--.-": "Q",
        ".-.": "R",
        "...": "S",
        "-": "T",
        "..-": "U",
        "...-": "V",
        ".--": "W",
        "-..-": "X",
        "-.--": "Y",
        "--..": "Z",
        "-----": "0",
        ".----": "1",
        "..---": "2",
        "...--": "3",
        "....-": "4",
        ".....": "5",
        "-....": "6",
        "--...": "7",
        "---..": "8",
        "----.": "9"
    };


//    const convert = morseObject[0][morseValue];

//get input from html and put as input to function with array
//

const translate = (morseObject, toTranslate) => {

    const stringArray = toTranslate.split("");
    
    // const convert = letter => {
    //     return Object.keys(morseObject).find(key => morseObject[key]===letter);
    // }
 
        const morseArray = Object.entries(morseObject);

    const testArray = value => {
        
        const checkInside = value.filter(newValue => newValue.includes("P"));
        console.log(checkInside);
        
        return checkInside;
    };
    

    const getBoth = morseArray.filter(testArray);
    
    
}

translate(morse, "PETER");
