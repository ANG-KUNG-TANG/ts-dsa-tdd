import { vitest, it, describe, expect,  } from "vitest";
import moveZero from "../pointer/moveZero";


describe("Move Zero", () => {
    it('Should retun the the list contian zero to the end and ',() =>{
        const arr = [0,3,5,0,2,0,3,5];
        expect(moveZero(arr)).toEqual([3,5,2,3,5,0,0,0])
    });

    it('should return array when empty', () => {
        const arr: number[] = [];
        expect(moveZero(arr)).toBe(arr)
    });

    it('shoud return the value when one element', ()=> {
        const arr = [0];
        expect(moveZero(arr)).toEqual([0])
    });

})