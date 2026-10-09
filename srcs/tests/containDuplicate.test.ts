import { vitest, it, expect, describe } from "vitest";
import containDuplicate from "../hashMap/continDuplicate";


describe("Contain Duplicate", () => {
    it("Should should return true when duplicate conatin", () => {
        expect(containDuplicate([2, 3, 2, 5, 3, 2])).toBe(true);
    });

    it("should reatutn false when non-duplicate elements", ()=> {
        expect(containDuplicate([1,2,3,4,5])).toBe(false);
    })

    it('should return false when empty array', () => {
        expect(containDuplicate([])).toBe(false);
    });

    it("should return false when single element", () => {
        expect(containDuplicate([5])).toBe(false)
    });

})