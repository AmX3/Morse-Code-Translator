// Reversing key and value in morsecodedictionary and storing it in a new object => "alphabet,numbers and punctuation" : morsecode
export const alphabetAndNum = (dictObject) => {
    return Object.entries(dictObject).reduce((object, [key, value]) => {
        object[value] = key;
        return object;
    }, {});
};

export const englishToMorseCode = (dictObject, textToTranslate) => {
    return textToTranslate
        .toLowerCase()
        .replace(/\s{1,}/g, "/")
        .split("/")
        .map((word) => {
            return word
                .split("")
                .map((letter) => {
                    return Object.entries(dictObject).find(
                        (key) => key[0] === letter
                    )[1];
                })
                .join(" ");
        })
        .join("/");
};

export const morsecodeToEnglish = (dictObject, textToTranslate) => {
    return textToTranslate
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
