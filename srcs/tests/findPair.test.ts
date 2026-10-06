import { vitest, it, describe, expect } from "vitest";
import findPair from "../pointer/findPair";

describe("finPpair", ()=> {
    it('Shoud return the pair number', ()=>{
        const nums = [1, 2, 4, 5, 6];
        const target = 10;
        expect(findPair(nums, target)).toEqual([4,6])
    })

    it("should return null if exceed target", () => {
        const arr = [1,2,3,4,5,6];
        const target = 30;
        expect(findPair(arr, target)).toEqual(null)
    });

    it("should return empty if empty array", () => {
        const arr: number[] = [];
        const target = 10;
        expect(findPair(arr, target)).toEqual(null)
    })

    it("should return one element is the arry is singlle", () => {
        const arr = [5];
        const target = 5;
        expect(findPair(arr, target)).toEqual(null)
    });

    it("shoutl return parit of both ends", ()=>{
        const arr = [1,2,3,4,5,6,7,8,9]
        const target = 10;
        expect(findPair(arr, target)).toEqual([1,9])
    })
});


//case1: it should return the pair number
//[1,2,3,4,5,6] -> target 10 => [4,6]


//case 2: it shoudl return null ifs exceed target
//[1,2,3,4,5,6,] => target 30 => null


//case 3: it should reitn eampot if the empty array
//arr: nums[] => targt 10 => null

//case 4: it should return null if one element
//arr; [5] => target 5 => null

//case 5: it should return the first and last
//arr: [1,2,3,4,5,6,7,8,9], target= 10 => [1,9]