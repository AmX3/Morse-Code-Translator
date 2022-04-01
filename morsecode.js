// DUE ON TUESDAY 5th of APRIL
// ### MVP:
// Challenge 1: Morse Code Project
// 1. Create a user interface that allows the user to either input some English text or some Morse Code
// 1. Create JS functions that would allow the user to translate their English text into Morse Code or Morse Code into English text
// 1. Make sure to handle spaces properly (ie. there is 1 space between English words, but one space between Morse Code characters)
// I will give a deadline tomorrow once all the calculator have been submitted but if you are already done with the calculator you can start working on this

// Have two functions that one morse to english and the other way around
// Translate Object Example

// GLOBAL VARIABLE
const morseCode = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
};

export const mcToEng = (phrase) => {
    const mc = Object.entries(morseCode)
        .map((singleKey) =>
            singleKey[0]
                .split(",")
                .map((b) => morseCode[b])
                .join(" ")
        )
        .join("");
    return mc;
};
console.log(mcToEng(" .-- --- .-. -..   .-- --- .-. -.."));

// REVERSAL OF KEY AND VALUE AND STORE THEM IN A NEW OBJECT
export const engToMc = Object.entries(morseCode).reduce(
    (object, [key, value]) => {
        object[value] = key;
        return object;
    },
    {}
);
console.log(engToMc);
