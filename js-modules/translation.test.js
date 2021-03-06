import { describe } from "@jest/globals";
import {
    englishToMorseCode,
    morsecodeToEnglish,
    alphabetAndNum,
} from "./translation";
import { morseCodeDictionary } from "./dictionary";

describe("Testing englishToMorseCode() that translates english to morsecode", () => {
    it("Should handle special characters and punctuation", () => {
        expect(
            englishToMorseCode("!", alphabetAndNum(morseCodeDictionary))
        ).toBe("-.-.--");
        expect(
            englishToMorseCode(".", alphabetAndNum(morseCodeDictionary))
        ).toBe(".-.-.-");
        expect(
            englishToMorseCode("/", alphabetAndNum(morseCodeDictionary))
        ).toBe("-..-.");
        expect(
            englishToMorseCode("@", alphabetAndNum(morseCodeDictionary))
        ).toBe(".--.-.");
    });

    it("Should handle spaces correctly", () => {
        expect(
            englishToMorseCode(" ", alphabetAndNum(morseCodeDictionary))
        ).toBe("/");
    });

    it("Should translate single characters", () => {
        expect(
            englishToMorseCode("a", alphabetAndNum(morseCodeDictionary))
        ).toBe(".-");
        expect(
            englishToMorseCode("e", alphabetAndNum(morseCodeDictionary))
        ).toBe(".");
        expect(
            englishToMorseCode("D", alphabetAndNum(morseCodeDictionary))
        ).toBe("-..");
        expect(
            englishToMorseCode("Z", alphabetAndNum(morseCodeDictionary))
        ).toBe("--..");
    });

    it("Should handle numbers", () => {
        expect(
            englishToMorseCode("0", alphabetAndNum(morseCodeDictionary))
        ).toBe("-----");
        expect(
            englishToMorseCode("5", alphabetAndNum(morseCodeDictionary))
        ).toBe(".....");
        expect(
            englishToMorseCode("9", alphabetAndNum(morseCodeDictionary))
        ).toBe("----.");
        expect(
            englishToMorseCode("8", alphabetAndNum(morseCodeDictionary))
        ).toBe("---..");
    });

    it("Should handle a mix of uppercase and lowercase characters and symbols", () => {
        expect(
            englishToMorseCode("H3ll0!", alphabetAndNum(morseCodeDictionary))
        ).toBe(".... ...-- .-.. .-.. ----- -.-.--");
        expect(
            englishToMorseCode("k1R1b@Ti", alphabetAndNum(morseCodeDictionary))
        ).toBe("-.- .---- .-. .---- -... .--.-. - ..");
    });
});

describe("Testing MorseCode translation to English, ()", () => {
    it("Should translate single characters", () => {
        expect(morsecodeToEnglish(".-", morseCodeDictionary)).toBe("A");
        expect(morsecodeToEnglish(".", morseCodeDictionary)).toBe("E");
        expect(morsecodeToEnglish("-..", morseCodeDictionary)).toBe("D");
        expect(morsecodeToEnglish("--.", morseCodeDictionary)).toBe("G");
    });

    it("Should translate words and spaces correctly", () => {
        expect(
            morsecodeToEnglish(".... . .-.. .-.. ---", morseCodeDictionary)
        ).toBe("HELLO");
        expect(
            morsecodeToEnglish("-- -.--/-. .- -- ./.. ...", morseCodeDictionary)
        ).toBe("MY NAME IS");
    });

    it("Should translate and return invalid Morse Characters as invalid input", () => {
        expect(morsecodeToEnglish("....... ", morseCodeDictionary)).toBe(
            "INVALID INPUT"
        );
        expect(morsecodeToEnglish(".----- ", morseCodeDictionary)).toBe(
            "INVALID INPUT"
        );
    });
});
