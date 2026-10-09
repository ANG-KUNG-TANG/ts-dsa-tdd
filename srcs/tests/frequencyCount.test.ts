
import { it, describe, expect } from "vitest";
import frequencyCount from "../hashMap/frequencyCount";

describe("Frequency count", () => {
    it("should return the correct frequencies", () => {
        const result = frequencyCount([1, 2, 4, 2, 5, 2, 1]);

        // Check that 1 appears twice.
        // Check that 2 appears three times.
        // Check that 4 appears once.
        // Check that 5 appears once.
        expect(result.get(1)).toBe(2);
        expect(result.get(2)).toBe(3)
    });

    it("should count unique elements", () => {
        const result = frequencyCount([1, 2, 3, 4, 5]);

        // Check that the Map contains five distinct keys.
        // Check that each number has frequency 1.
        expect(result.size).toBe(5)
    });

    it("should return an empty Map for an empty array", () => {
        const result = frequencyCount([]);

        // Check that the Map has zero keys.
        expect(result.size).toBe(0)
    });

    it("should handle a single element", () => {
        const result = frequencyCount([5]);

        // Check that 5 has frequency 1.
        // Check that the Map has one key.
        expect(result.get(5)).toBe(1)
    });
});

