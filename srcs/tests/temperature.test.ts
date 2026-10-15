import { describe, it, expect } from "vitest";
import dailyTemperature from "../hashMap/temperature";

describe("dailyTemperature", () => {
    it("returns the number of days until a warmer temperature", () => {
        expect(
            dailyTemperature([73, 74, 75, 71, 69, 72, 76, 73])
        ).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
    });

    it("handles an empty array", () => {
        expect(dailyTemperature([])).toEqual([]);
    });

    it("returns zeros when no warmer day exists", () => {
        expect(dailyTemperature([80, 75, 70])).toEqual([0, 0, 0]);
    });

    it("handles equal temperatures", () => {
        expect(dailyTemperature([70, 70, 70])).toEqual([0, 0, 0]);
    });
});