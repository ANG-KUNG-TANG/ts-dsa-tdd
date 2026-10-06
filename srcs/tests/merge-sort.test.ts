import { vitest,it, expect, describe } from 'vitest';
import mergeSort from '../mergeSort/merge-sort';

describe('Merge Sort', () => {
  it('should sort an array of numbers in ascending order', () => {
    const input = [38, 27, 43, 3, 9, 82, 10];
    const expectedOutput = [3, 9, 10, 27, 38, 43, 82];
    expect(mergeSort(input)).toEqual(expectedOutput);
  });

  it('should return an empty array when given an empty array', () => {
    const input: number[] = [];
    const expectedOutput: number[] = [];
    expect(mergeSort(input)).toEqual(expectedOutput);
  });
  
  it('should return the same array when given a single-element array', () => {
    const input = [42];
    const expectedOutput = [42];
    expect(mergeSort(input)).toEqual(expectedOutput);
  });
  
  it('should sort an array with negative numbers', () => { 
    const input = [-3, -1, -4, -1, -5, -9, -2, -6, -5];
    const expectedOutput = [-9, -6, -5, -5, -4, -3, -2, -1, -1];
    expect(mergeSort(input)).toEqual(expectedOutput);
  });
});


//case 1: should sort an array of numbers in ascending order
//[38, 27, 43, 3, 9, 82, 10] expected output: [3, 9, 10, 27, 38, 43, 82]

//case 2: should return an empty array when given an empty array
//[] expected output: []

//case 3: should return the same array when given a single-element array
//[42] expected output: [42]

//case 4: should sort an array with negative numbers
//[-3, -1, -4, -1, -5, -9, -2, -6, -5] expected output: [-9, -6, -5, -5, -4, -3, -2, -1, -1]

