// slow = 0
// fast = 1

// while fast < array.length

//     if array[fast] !== array[slow]

//         slow++
//         array[slow] = array[fast]

//     fast++

// return slow + 1


export default function removeDuplicate(arr: number[]): number{

    if (arr.length ===0){
        return 0;
    }

    let slow = 0;
    let fast = 1;

    while (fast < arr.length){
        if ( arr[fast] !== arr[slow]){
            slow++;
            arr[slow] = arr[fast]
        } 
        fast++;
    }
    return slow + 1;
}

let arr = [1,2,1,3,3,4,5,4]
console.log(arr)
console.log(removeDuplicate(arr))