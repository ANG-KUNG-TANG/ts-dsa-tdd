import { vitest, it, describe, expect } from "vitest";
import isPalindrome from "../pointer/isPlaindrome";


describe("isPalindrome", () => {
    it("should return true is the text is", () => {
        const text = 'racecar';
        expect(isPalindrome(text)).toBe(true)
    });

    it("should return false is the text is", () => {
        const text = 'hello';
        expect(isPalindrome(text)).toBe(false)
    });

    it("should return false if empley string", () => {
        const text = " ";
        expect(isPalindrome(text)).toBe(true)
    });

    it("should return fals single element", () => {
        const text = 'r';
        expect(isPalindrome(text)).toBe(true)
    });


})