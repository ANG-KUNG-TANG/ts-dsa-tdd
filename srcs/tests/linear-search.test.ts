import { describe, expect, it } from "vitest";
import linearSearch  from "../linear/linear-search";


describe("linearSearch", () =>{
    it("should return the index of the target elements if found else return -1", () => {
        const arr = [1, 2, 3, 4, 5];
        const target = 3;
        const result = linearSearch(arr, target);
        expect(result).toBe(2);
    });

    it("should return -1 if the target element is not found in the array", () => {
        const arr = [1, 2, 3, 4, 5];
        const target = 6;
        const result = linearSearch(arr, target);
        expect(result).toBe(-1);
    });

    it("should return -1 if the array is empty", () => {
        const arr: number[] = [];
        const target = 1;
        const result = linearSearch(arr, target);
        expect(result).toBe(-1);
    });

    it("should return the index of the first occurrence of the target element if there are duplicates in the array", () => {
        const arr = [1, 2, 3, 4, 5, 3];
        const target = 3;
        const result = linearSearch(arr, target);
        expect(result).toBe(2);
    });

    it("should return the index of the target element if it is the first element in the array", () => {
        const arr = [1, 2, 3, 4, 5];
        const target = 1;
        const result = linearSearch(arr, target);
        expect(result).toBe(0);
    });

    it("should return the index of the target element if it is the last element in the array", () => {
        const arr = [1, 2, 3, 4, 5];
        const target = 5;
        const result = linearSearch(arr, target);
        expect(result).toBe(4);
    });
});

//case 1: target is the first element of the array
//[1,2,3,4,5], target = 1 expected output: 0

//case 2: target is the last element of the arrray
//[1,2,3,4,5], target = 5 expected output: 4

//case 3: target is not present in the array
//[1,2,3,4,5], target = 6 expected output: -1

//case 4: array is duplicated and target is present in the array
//[1,2,3,4,5,3], target = 3 expected output: 2

//case 5: array is empty
//[], target = 1 expected output: -1

//case 6: array has only one element and target is present in the array
//[1], target = 1 expected output: 0


