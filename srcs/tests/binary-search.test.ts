import { describe, expect, it } from "vitest";
import binaySearch from '../binarySearch/binary-search';

describe('Binary Search', () => {
    it('should return the index to the target value if it exists in the array',() => { 
        const arr = [1, 3, 5, 7, 9, 11, 13];
        const target = 9;
        const result = binaySearch(arr, target);
        expect(result).toBe(4);
    } );

    it('should return =1 if the target value does not exist in the array', () => {
        const arr = [1, 3, 5, 7, 9, 11, 13];
        const target = 10;
        const result = binaySearch(arr, target);
        expect(result).toBe(-1);
    });

    it('should return -1 if the array is empty', () => {
        const arr: number[] = [];
        const target = 1;
        const result = binaySearch(arr, target);
        expect(result).toBe(-1);
    });

    it('should return the index of the first element if the target value is the first element in the array', () => {
        const arr = [1, 3, 5, 7, 9, 11, 13];
        const target = 1;
        const result = binaySearch(arr, target);
        expect(result).toBe(0);
    });

    it('should return the index of the last element if the target value is the last element in the array', () => {
        const arr = [1, 3, 5, 7, 9, 11, 13];
        const target = 13;
        const result = binaySearch(arr, target);
        expect(result).toBe(6);
    });
    
    it('should returh -1 if the target vlaue is smaller thant every elements', () => {
        const arr = [1, 3, 5, 7, 9, 11, 13];
        const target = 0;
        const result = binaySearch(arr, target);
        expect(result).toBe(-1);
    })
    
})


//case 1: target is the index of the target value if it exists in the array
//[1,3,5,7,9,11,13], target = 9 expected output: 4

//case 2: target is not present in the array
//[1,3,5,7,9,11,13], target = 10 expected output: -1

//case 3: array is empty
//[], target = 1 expected output: -1

//case 4: target is the first element of the array      
//[1,3,5,7,9,11,13], target = 1 expected output: 0

//case 5: target is the last element of the array
//[1,3,5,7,9,11,13], target = 13 expected output: 6

//case 6: target is smaller than every element in the array
//[1,3,5,7,9,11,13], target = 0 expected output: -1