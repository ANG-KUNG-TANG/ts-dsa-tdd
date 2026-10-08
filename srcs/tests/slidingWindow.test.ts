import { vitest, it, expect, describe } from "vitest";
import maxSubArraySum  from "../slidingWindow/slidingWindow";

describe("Fix Slding Window", () => {
    it("should return the maximum sum of a subarray of size k", () => {
    const arr = [2, 6, 9, 2, 1, 8, 5, 6, 3];
    const k = 3
        expect(maxSubArraySum(arr, k)).toEqual(19)
    });

    it('should return null if the array length is less than k', () => {
        const arr = [1, 2];
        expect(maxSubArraySum(arr, 3)).toBeNull();
    });

    it('should calculate correctly when the array contains negative numbers', () => {
    const arr = [-1, -2, 3, -4, 5, -1];
    // Subarrays of size 2: 
    // [-1, -2] = -3
    // [-2,  3] =  1
    // [ 3, -4] = -1
    // [-4,  5] =  1
    // [ 5, -1] =  4 (Maximum)
    expect(maxSubArraySum(arr, 2)).toBe(4);
    });

    it('should return the sum of the entire array if k equals array length', () => {
        const arr = [10, 20, 30];
        expect(maxSubArraySum(arr, 3)).toBe(60);
    });

})