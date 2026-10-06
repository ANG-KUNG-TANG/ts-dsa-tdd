import { vitest, it, expect, describe} from 'vitest'
import reverseArray from '../pointer/reverseArray'

describe("Reverse Array", () => {
    it("it should return reverse array", ()=> {
        const arr = [1,2,3,4,5];
        expect(reverseArray(arr)).toEqual([5,4,3,2,1])
    });

    it("it should return reverse array", ()=> {
        const arr: number[] = [ ];
        expect(reverseArray(arr)).toEqual([])
    });

    it('should reverse ascending', () => {
        const arr = [5,4,3,2,1];
        expect(reverseArray(arr)).toEqual([1,2,3,4,5])
    });

    it("should return the same array for one element", () => { 
        const arr = [1]; 
        expect(reverseArray(arr)).toEqual([1]);
     });
    
})

//case 1: it should rever when the array]
//array = [1,2,3,4,5], [5,4,3,2,1]

//csse 2: it should return emplty array
//array = [], []

//case 3: it should return ascending
//array= [5,4,3,2,1] => [1,2,3,4,5]

//case 4; it  shoould return the same array 
//array =[5], [5]