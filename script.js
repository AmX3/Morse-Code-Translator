"use strict";

// DOM INTERACTION
const english = document.querySelector("#morseInput");
const morsecode = document.querySelector("#morseOutput");
const switchModes = document.querySelector("#switchModes");
const resetBtn = document.querySelector("#resetBtn");

// BUTTON THAT SHOULD DISABLE THE OTHER TEXT AREA
const buttonClicked = () => {
    !morsecode.disabled
        ? (morsecode.disabled = true)((english.disabled = false))
        : (morsecode.disabled = false)((english.disabled = true));
};
switchModes.addEventListener("click", buttonClicked);
// on window load, our buttonClicked function is applied
window.addEventListener("load", buttonClicked);

const morseCodeDictionary = {
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
    ".-.-.-": ".",
    "--..--": ",",
    "..--..": "?",
    "-.-.--": "!",
    "-....-": "-",
    "-..-.": "/",
    ".--.-.": "@",
    "-.--.": "(",
    "-.--.-": ")",
    "---...": ":",
    ".----.": "'",
    ".-.-.": "+",
    ".--.-.": "@",
    "-...-": "=",
    " ": " ",
};

// Reversing key and value in morsecodedictionary and storing it in a new object => "alphabet,numbers and punctuation" : morsecode
const alphabetAndNum = Object.entries(morseCodeDictionary).reduce(
    (object, [key, value]) => {
        object[value] = key;
        return object;
    },
    {}
);
console.log(alphabetAndNum);

// Have two functions => convert english to morse / convert morse to english => attach to seperate eventListeners

// key:value = {[0],[1]}

/* 
thought process =>
- input.value converted to lowercase to match our keys 
- replace space using regex with a / => "Hello There" = /......-...-..---/-......-../
- split the string into individual arrays by / => /......-...-..---/-......-../ = ['hello', 'there']
- Map through each word and split it into individual letters => ['hello', 'there'] = ['h', 'e', 'l', 'l', 'o']
 ['t', 'h', 'e', 'r', 'e']
- Map through each letter and return the matching morsecode based on its key => ['hello', 'there'] = ['h', 'e', 'l', 'l', 'o']['t', 'h', 'e', 'r', 'e'] => ['....', '.', '.-..', '.-..', '---'] ['-', '....', '.', '.-.', '.']
- Join the letters together to make a single word =>  ['......-...-..---', '-......-..',]
- Join the words together with a /
*/

export const englishToMorseCode = () => {
    const engToMc = english.value
        .toLowerCase()
        .replace(/\s{1,}/g, "/")
        .split("/")
        .map((word) => {
            return word
                .split("")
                .map((letter) => {
                    return Object.entries(alphabetAndNum).find(
                        (key) => key[0] === letter
                    )[1];
                })
                .join("");
        })
        .join("/");
    morsecode.value = engToMc;
};

english.addEventListener("input", englishToMorseCode);

// THERE IS A SPACE BETWEEN MORSE DOTS/DASHES FOR EACH LETTER
/* 
thought process =>
- split the morse code by its / => (Hello there) .... . .-.. .-.. --- / - .... . .-. . = ['.... . .-.. .-.. --- ', ' - .... . .-. .']
- Map through each morsecodeword, trim leading spaces before and after the word and then split the word into each individual morsecode letter => ['....', '.', '.-..', '.-..', '---'] ['-', '....', '.', '.-.', '.'] = ['....', '.', '.-..', '.-..', '---'] ['-', '....', '.', '.-.', '.']
- Map through each letter and return the matching alphabet/num/punctuation based on its key = ['....', '.', '.-..', '.-..', '---'] ['-', '....', '.', '.-.', '.'] = ['h', 'e', 'l', 'l', 'o'] ['t', 'h', 'e', 'r', 'e']
- if letter is empty return an empty string otherwise if the morsecode input does not register a similar key, the value will return as "X"
- Join the letters together => ['hello', 'there']
- Join the words together => Hello There
*/

export const morsecodeToEnglish = () => {
    const mcToEng = morsecode.value
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
                    const letter = Object.entries(morseCodeDictionary).find(
                        (key) => key[0] === dotDash
                    );
                    console.log(letter);
                    return letter ? letter[1] : "X";
                });
            console.log(morseCodeLetter);
            return morseCodeLetter.join("");
        })
        .join(" ")
        .toUpperCase();
    console.log(mcToEng);
    english.value = mcToEng;
};

morsecode.addEventListener("input", morsecodeToEnglish);

// CLEAR INPUT FIELDS
export const clearAll = () => {
    english.value = "";
    morsecode.value = "";
};

resetBtn.addEventListener("click", clearAll);
