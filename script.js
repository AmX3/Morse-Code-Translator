// Import functions
import { mcToEng } from "./morsecode.js";
import { engToMc } from "./morsecode.js";

// selecting both of my tests
const input = document.querySelector("#morseInput");
console.log(input);
const output = document.querySelector("#morseOutput");
console.log(output);

const typeWriter = (letter) => {
    // retrieving the element that triggered a specific event
    output.textContent = letter.target.value;
};
input.addEventListener("input", typeWriter);

console.log(input.addEventListener("input", typeWriter));

// const typeWriter = (letter) => {
//     let inputText = input.textContent;
//     let outputText = output.textContent;
//     if (outputText.length < inputText.length) {
//         output.textContent += input.textContent.charAt(letter);
//         letter++;
//         setTimeout(typeWriter, 100);
//     }
// };

// export const typeWriter = async () => {
//     const text = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let i = input.textContent;
//             let inputText = input.textContent;
//             let outputText = output.textContent;
//             if (outputText.length < inputText.length) {
//                 output.textContent += input.textContent.charAt(i);
//                 resolve(i++);
//             } else {
//                 reject("Invalid Input");
//             }
//         }, 100);
//     });

//     const asyncPromise = await text;
//     console.log(asyncPromise);
// };
