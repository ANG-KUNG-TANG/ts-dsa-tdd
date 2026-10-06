import { vitest, describe, it, expect } from 'vitest';
import pointer from '../pointer/pointer';


describe('pointer', () => {
    it('should return true if there are two numbers that sum to the target', () => {
        const nums = [1, 2, 4, 6, 8, 9, 14];
        const target = 13;
        expect(pointer(nums, target)).toBe(true);
    });

    it('should return false if there are no two numbers that sum to the target', () => {
        const nums = [1, 2, 4, 6, 8, 9, 14];
        const target = 30;
        expect(pointer(nums, target)).toBe(false);
    });
    
    it('should return false for an empty array', () => {
        const num:number[] = [];
        const target = 5;
        expect(pointer(num, target)).toBe(false);
    });

    it('should return false for an array with one element', () => {
        const num = [5];
        const target = 5;
        expect(pointer(num, target)).toBe(false);
    });
});


//case1: should return true if there are two numbers that sum to the target
//[1, 2, 4, 6, 8, 9, 14], target: 13 expected output: true

//case2: should return false if there are no two numbers that sum to the target
//[1, 2, 4, 6, 8, 9, 14], target: 20 expected output: false

//case3: should return false for an empty array
//[], target: 5 expected output: false

//case4: should return false for an array with one element
//[5], target: 5 expected output: false 

