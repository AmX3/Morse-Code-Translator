import {
    englishToMorseCode,
    morsecodeToEnglish,
    alphabetAndNum,
    clearAll,
} from "./translation.js";

import { morseCodeDictionary } from "./dictionary.js";

// DOM INTERACTION
const english = document.querySelector("#morseInput");
const morsecode = document.querySelector("#morseOutput");
const switchModes = document.querySelector("#switchModes");
const resetBtn = document.querySelector("#resetBtn");

// BUTTON THAT SHOULD DISABLE THE OTHER TEXT AREA
const buttonClicked = () => {
    !morsecode.disabled
        ? (morsecode.disabled = true) && (english.disabled = false)
        : (morsecode.disabled = false) || (english.disabled = true);
};
switchModes.addEventListener("click", buttonClicked);
// on window load, our buttonClicked function is applied
window.addEventListener("load", buttonClicked);

// English to MorseCode
english.addEventListener("input", () => {
    morsecode.value = englishToMorseCode(
        english.value,
        alphabetAndNum(morseCodeDictionary)
    );
});

// MorseCode to English
morsecode.addEventListener(
    "input",
    () =>
        (english.value = morsecodeToEnglish(
            morsecode.value,
            morseCodeDictionary
        ))
);

// CLEAR INPUT FIELDS
resetBtn.addEventListener("click", () => clearAll(english, morsecode));
