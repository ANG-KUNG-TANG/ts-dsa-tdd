import { vitest , expect, it, describe} from "vitest";
import selectionSort from "../selectionSort/selection-sort";

describe("selectionSort", () => {
    it("should sort the array in ascending order", () => {
        const array = [64, 25, 12, 22, 11];
        const sortedArray = selectionSort(array);
        expect(sortedArray).toEqual([11, 12, 22, 25, 64]);
    });

    it("should return an empty array if the input array is empty", () => {
        const array: number[] = [];
        const sortedArray = selectionSort(array);
        expect(sortedArray).toEqual([]);
    });

    it("should return the same array if it contains only one element", () => {
        const array = [42];
        const sortedArray = selectionSort(array);
        expect(sortedArray).toEqual([42]);
    });

    it("should sort an array with duplicate elements", () => {
        const array = [5, 3, 8, 3, 1];
        const sortedArray = selectionSort(array);
        expect(sortedArray).toEqual([1, 3, 3, 5, 8]);
    });

    it("should sort an already sorted array", () => {
        const array = [1, 2, 3, 4, 5];
        const sortedArray = selectionSort(array);
        expect(sortedArray).toEqual([1, 2, 3, 4, 5]);
    });
    
    it("should sort an array with negative numbers", () => {    
        const array = [3, -1, 4, -2, 0];
        const sortedArray = selectionSort(array);
        expect(sortedArray).toEqual([-2, -1, 0, 3, 4]);
    });

});


//case 1: array is empty
//[], expected output: []

//case 2: array has only one element
//[42], expected output: [42]

//case 3: array has duplicate elements
//[5, 3, 8, 3, 1], expected output: [1, 3, 3, 5, 8]

//case 4: array is already sorted
//[1, 2, 3, 4, 5], expected output: [1, 2, 3, 4, 5]

//case 5: array has negative numbers
//[3, -1, 4, -2, 0], expected output: [-2, -1, 0, 3, 4]         

//case 6: array has all elements the same
//[7, 7, 7, 7], expected output: [7, 7, 7, 7]