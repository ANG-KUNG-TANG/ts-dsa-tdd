import { vitest, it, describe, expect } from "vitest";
import nonRepeating from "../hashMap/nonRepeatno";

describe(" No Repeat Number", () => {
    it("should return the count frequency", () => {
        expect(nonRepeating([4, 2, 4, 9])).toBe(2);
    })

    it("should return null when repted no", () => {
        expect(nonRepeating([2,2,3,3])).toBe(null)
    })

    it('shoudl retnt the element when single element', () => {
        expect(nonRepeating([6])).toEqual(6)
    })

    it("Should return null when empty array", () => {
        expect(nonRepeating([])).toBe(null)
    })
})