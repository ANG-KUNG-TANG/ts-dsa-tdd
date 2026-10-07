import { vitest, it, describe, expect } from "vitest";
import removeDuplicate from "../pointer/removeDuplicate";

describe("Remove duplicate", () => {
    it('should return the list number', () => {
    const arr = [1, 1, 2, 2, 3, 3, 4];
    expect(removeDuplicate(arr)).toBe(4)
    });

    it("should return the number of unique elements", () => {
        const arr = [1, 1, 2, 2, 3, 3, 4];

        expect(removeDuplicate(arr)).toBe(4);
    });

    it("should return 0 for an empty array", () => {
        const arr: number[] = [];

        expect(removeDuplicate(arr)).toBe(0);
    });

    it("should return 1 when all elements are the same", () => {
        const arr = [5, 5, 5, 5];

        expect(removeDuplicate(arr)).toBe(1);
    });

    it("should return the length when there are no duplicates", () => {
        const arr = [1, 2, 3, 4, 5];

        expect(removeDuplicate(arr)).toBe(5);
    });
    
})