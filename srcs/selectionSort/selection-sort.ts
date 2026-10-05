// const array = [64, 25, 12, 22, 11];
//[11, 12, 22, 25, 64]

//stept to solve selection sort algorithm 0(n^2)
// 1. Loop through the array from the first element to the last element
// 2. Assume the first element is the minimum and store its index
// 3. Loop through the remaining elements to find the actual minimum
// 4. If a smaller element is found, update the index of the minimum
// 5. After finding the minimum, swap it with the first element of the unsorted part of the array
// 6. Repeat this process for each element in the array until it is sorted


// Outer Loop (i) = The TARGET (Where to put the item)

// It points to the empty slot you are trying to fill next.

// It moves slowly, one spot at a time from left to right.

// Inner Loop (j) = The SCANNER (Where to look for the item)

// It starts right after the target (j = i + 1).

// It runs fast all the way to the end of the array, looking for the smallest value to put into slot i.

export default function selectionSort(array: number[]): number[] {
    for (let i = 0; i < array.length - 1; i++) {
        let index = i;
        //Outer loop (i): Locks down the current target spot (starts at the first slot, then moves to the second, third, etc.).
        for (let j = i +1; j < array.length; j++) {
            //Inner loop (j): Scans all remaining slots after i to find the smallest number
            if (array[j] < array[index]) {
                index = j;
            }
        }
        // Swap: Places that smallest number into the locked spot i
        [array[i], array[index]] = [array[index], array[i]];
    }
    return array;
}