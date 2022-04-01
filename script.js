// // Import functions
// import { mcToEng } from "./morsecode.js";
// import { engToMc } from "./morsecode.js";

// selecting both of my tests
const input = document.querySelector("#morseInput");
const output = document.querySelector("#morseOutput");

// DUE ON TUESDAY 5th of APRIL
// ### MVP:
// Challenge 1: Morse Code Project
// 1. Create a user interface that allows the user to either input some English text or some Morse Code
// 1. Create JS functions that would allow the user to translate their English text into Morse Code or Morse Code into English text
// 1. Make sure to handle spaces properly (ie. there is 1 space between English words, but one space between Morse Code characters)
// I will give a deadline tomorrow once all the calculator have been submitted but if you are already done with the calculator you can start working on this

// Have two functions that one morse to english and the other way around
// Translate Object Example

// MORSE CODE DICTIONARY
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
};

const alphabetAndNum = () => {
    const mc = Object.entries(morseCodeDictionary)
        .map((key) =>
            key[0]
                .split(",")
                .map((value) => morseCodeDictionary[value])
                .join("")
        )
        .join("");
    return mc;
};
console.log(alphabetAndNum(""));

// REVERSAL OF KEY AND VALUE AND STORE THEM IN A NEW OBJECT
const morsecode = () => {
    const reversedArr = Object.entries(morseCodeDictionary).reduce(
        (object, [key, value]) => {
            object[value] = key;
            return object;
        },
        {}
    );
    const mc = Object.entries(reversedArr)
        .map((key) =>
            key[0]
                .split(",")
                .map((value) => reversedArr[value])
                .join("")
        )
        .join(",");
    console.log(mc);
    return mc;
};
console.log(morsecode("card"));

const typeWriter = (letter) => {
    // retrieving the element that triggered a specific event
    output.textContent = letter.target.value;
};
// input.addEventListener("input", typeWriter);
input.addEventListener("input", morsecode);
input.addEventListener("input", alphabetAndNum);
