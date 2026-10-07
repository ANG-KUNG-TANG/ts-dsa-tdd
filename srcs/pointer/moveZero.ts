
export default function moveZero(arr: number[]): number[]{
    if (arr.length <= 0){
        return arr
    }

    //declare variable
    let slow = 0;
    let fast = 0;

    //find no-zero and move
    while (fast < arr.length){
        if (arr[fast] !== 0){
            arr[slow] = arr[fast];
            slow++;
        }
        fast++;
    }

    //fill the remaining position
    while (slow < arr.length){
        arr[slow] = 0;
        slow ++
    }

    return arr
}

let arr = [0,3,5,0,2,0,3,5]
console.log(arr)
console.log(moveZero(arr))