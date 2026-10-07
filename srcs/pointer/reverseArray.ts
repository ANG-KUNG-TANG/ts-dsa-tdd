//tip for reverse array
//if let, right is important
//when lef is lessen than right swap the value of left and right with
//left++ and right-- then return the array;

export default function reverseArray(arr :number[]): number[]{
    let left = 0;
    let right = arr.length -   1;

    if ( arr.length <= 0){
        return arr
    }

    while (left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++;
        right--;
    }
    return arr
}

let arr = [1,2,3,4,5,]
console.log(arr)
console.log(reverseArray(arr))