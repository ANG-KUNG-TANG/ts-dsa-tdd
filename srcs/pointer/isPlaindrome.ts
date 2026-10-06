
//isPalindrome



export default function isPalindrome(text: string): boolean{

    let left = 0;
    let right = text.length - 1;

    while (left < right) {
        if ( text[left] === text[right]){
            left++;
            right--;
        } else {
            return false
        }
    }
    return true
}

// let t = 'racecar'
// console.log(t);
// let r = "hello"
// console.log(r)
// console.log(isPalindrome(t))
// console.log(isPalindrome(r))