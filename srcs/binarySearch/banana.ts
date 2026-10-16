// . Understand the problem
// Koko has several piles of bananas. She has h hours to eat them.
// - She chooses an eating speed of k bananas per hour.
// - Each hour, she chooses one pile and eats up to k bananas from it.
// - If the pile has fewer than k bananas, she finishes that pile but cannot use the remaining time in that hour on another pile.
// - She wants to finish all piles within h hours.
// - Find the minimum possible integer speed k.

// FUNCTION minEatingSpeed(piles, h):

//     left = 1
//     right = maximum pile size

//     WHILE left < right:
//         mid = middle of left and right
//         hours = total hours needed at speed mid

//         IF hours <= h:
//             right = mid
//         ELSE:
//             left = mid + 1

//     RETURN left

function minEatingSpeed(piles: number[], hour: number): number {
    let left = 1;
    let right = piles.length ;

    while (left < right){
        let mid = Math.floor((left + right)/2)
        let hours = 0;

        if (hours <= hour){
            right = mid 
        } else {
            left = mid + 1
        }
    }
    return left
}

let banana = [3,6,7,4];
let hour = 8
console.log(banana);
console.log(minEatingSpeed(banana, hour));