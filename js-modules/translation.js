// Reversing key and value in morsecodedictionary and storing it in a new object => "alphabet,numbers and punctuation" : morsecode
export const alphabetAndNum = (dictObject) => {
    return Object.entries(dictObject).reduce((object, [key, value]) => {
        object[value] = key;
        return object;
    }, {});
};

export const englishToMorseCode = (english, dictObject) => {
    return english
        .toLowerCase()
        .split("")
        .map((letter) => {
            return dictObject[letter];
        })
        .join(" ");
};

export const morsecodeToEnglish = (morsecode, dictObject) => {
    return morsecode
        .trim()
        .split("/")
        .map((morseCodeWord) => {
            let morseCodeLetter = morseCodeWord
                .trim()
                .split(" ")
                .map((dotDash) => {
                    if (dotDash === "") {
                        return "";
                    }
                    const letter = Object.entries(dictObject).find(
                        (key) => key[0] === dotDash
                    );
                    return letter ? letter[1] : "Invalid Input";
                });
            return morseCodeLetter.join("");
        })
        .join(" ")
        .toUpperCase();
};

export const clearAll = (english, morsecode) => {
    english.value = "";
    morsecode.value = "";
};
