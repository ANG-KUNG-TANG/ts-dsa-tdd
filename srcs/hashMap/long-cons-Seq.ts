// 1. Create a Set containing all numbers.
// 2. Set longest = 0.

// 3. For each current number:
//    a. If current - 1 does NOT exist in the Set:
//       - Start a sequence at current.
//       - Set length = 1.
//       - While current + 1 exists:
//           Move to the next number.
//           Increase length.
//       - Update longest if length is larger.

// 4. Return longest.


function longConsecutive(arr: number[]): number {
    let set = new Set<number>(arr)
    let longest = 0;

    for ( const  current of arr){
        if (!set.has(current -1 )){
            let num = current;
            let length = 1;
            while ( set.has(num + 1)){
                num++;
                length+=1
            }
            longest = Math.max(longest, length)
        }
    }
    return longest
}

let arr = [100, 4, 200, 1, 3, 2];
console.log(arr);
console.log(longConsecutive(arr));
console.log()
