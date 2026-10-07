// ① function
// ② left/right
// ③ maxArea
// ④ while
// ⑤ width
// ⑥ height
// ⑦ area
// ⑧ maxArea update
// ⑨ pointer movement
// ⑩ return

export default function container(arr: number[]): number{

    
    let left = 0;
    let right = arr.length - 1;
    let maxArea = 0;

    while (left < right) {
        const width = right - left;

        const heigh = Math.min(arr[left], arr[right]);
        let area = width * heigh

        if (area > maxArea) {
            maxArea = area
        }

        if (arr[left] < arr[right]){
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}


let arr = [1,2,7,3,5,9,6]
console.log(arr);
console.log(container(arr));

