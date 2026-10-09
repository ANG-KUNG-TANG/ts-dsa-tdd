
import { describe, it, expect } from "vitest";
import  hashMap from "../hashMap/hashMap";

describe("twoSum", () => {
    it("should return the indexes of two numbers that add up to the target", () => {
        expect(hashMap([11, 2, 15, 7], 9)).toEqual([1, 3]);
    });

    it("should handle duplicate numbers", () => {
        expect(hashMap([3, 3], 6)).toEqual([0, 1]);
    });

    it("should return null when no pair exists", () => {
        expect(hashMap([1, 2, 3], 10)).toBeNull();
    });

    it("should handle an empty array", () => {
        expect(hashMap([], 5)).toBeNull();
    });

    it("should handle an array with one element", () => {
        expect(hashMap([5], 10)).toBeNull();
    });

    it("should handle negative numbers", () => {
        expect(hashMap([-3, 4, 3, 90], 0)).toEqual([0, 2]);
    });

    it("should not reuse the same element twice", () => {
        expect(hashMap([5], 10)).toBeNull();
    });

    it("should find a pair at the beginning of the array", () => {
        expect(hashMap([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    it("should find a pair at the end of the array", () => {
        expect(hashMap([1, 4, 6, 8], 14)).toEqual([2, 3]);
    });
});

