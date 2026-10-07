import { it, expect, describe } from "vitest";
import container from "../pointer/container";


describe("Container Water leve", () => {
    it("Should return the count number ", () => {
        const arr  = [1,2,7,3,5,9,6];
        expect(container(arr)).toBe(24)
    });

    it('should return the emply list when empty element', () => {
        const arr: number[] = [];
        expect(container(arr)).toBe(0)
    });

    it("should return the single array if single element", () => {
        const arr = [5];
        expect(container(arr)).toBe(0)
    })

    it("should calculate area using the two ends", () => {
    const arr = [5, 1, 1, 1, 5];

    expect(container(arr)).toBe(20);
});
})