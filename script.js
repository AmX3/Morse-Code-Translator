// // Import functions
// import { mcToEng } from "./morsecode.js";
// import { engToMc } from "./morsecode.js";

// selecting both of my tests
const input = document.querySelector("#morseInput");
const output = document.querySelector("#morseOutput");
const switchModes = document.querySelector("#switchModes");
const resetBtn = document.querySelector("#resetBtn");

// DUE ON TUESDAY 5th of APRIL
// ### MVP:
// Challenge 1: Morse Code Project
// 1. Create a user interface that allows the user to either input some English text or some Morse Code
// 1. Create JS functions that would allow the user to translate their English text into Morse Code or Morse Code into English text
// 1. Make sure to handle spaces properly (ie. there is 1 space between English words, but one space between Morse Code characters)
// I will give a deadline tomorrow once all the calculator have been submitted but if you are already done with the calculator you can start working on this

// Have two functions that one morse to english and the other way around
// Translate Object Example
const buttonClicked = () => {
    !input.disabled
        ? ((input.disabled = true), (output.disabled = false))
        : ((input.disabled = false), (output.disabled = true));
};

switchModes.addEventListener("click", buttonClicked);

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
    " ": " ",
};

// Reversing key and value in morsecodedictionary and storing it in a new object => morsecode : "alphabet,numbers and punctuation"
const morsecode = Object.entries(morseCodeDictionary).reduce(
    (object, [key, value]) => {
        object[value] = key;
        return object;
    },
    {}
);
console.log(morsecode);

// match input.value to our constant morsecode and we return that into our output.value
// split word into seperate letter, map each letter to its specific key in the morsecode depending on the letter, and return its value
// key:value = {[0],[1]}
const englishToMorseCode = () => {
    // got the alphabets stuck together
    const engToMc = input.value
        .toLowerCase()
        .split("")
        .map((letter) => {
            return Object.entries(morsecode).find(
                (key) => key[0] === letter
            )[1];
        })
        .join(" ");
    console.log(engToMc);
    output.value = engToMc;
};
console.log(englishToMorseCode());

input.addEventListener("input", englishToMorseCode);

const morsecodeToEnglish = () => {
    const mcToEng = output.value
        .toLowerCase()
        .split("")
        .map((letter) => {
            return Object.entries(morseCodeDictionary).find(
                (key) => key[0] === letter
            )[1];
        })
        .join(" ");
    console.log(mcToEng);
    input.value = mcToEng;
};
output.addEventListener("input", morsecodeToEnglish);

// CLEAR INPUT FIELDS
const clearAll = () => {
    input.value = "";
    output.value = "";
};

resetBtn.addEventListener("click", clearAll);
