describe("Testing morseCode()", () => {
    const negParm = new Error("Your number should be a positive number");

    it("Should return an error if one of the arguments is negative", () => {
        expect(() => morseCode(-1)).toThrow(negParm);
        expect(() => morseCode(-1, -2, -3)).toThrow(negParm);
        expect(() => morseCode(-8, -9, -4, -8)).toThrow(negParm);
    });

    it("should return the right results with valid arguments", () => {
        expect(morseCode(".-")).toBe("A", "a");
        expect(morseCode("-..", ".-", ".-.", "-..").toBe("card"));
        expect(morseCode("apple").toBe(".-", ".--.", ".--.", ".-..", "."));
    });
});
