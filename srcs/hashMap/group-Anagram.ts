
/**
 * Steps to solve Group Anagrams
 *
 * @param words - An array of strings
 * @returns Groups of words that are anagrams
 *
 * 1. Create an empty Map.
 *    - Key: sorted letters of a word.
 *    - Value: array of words sharing those letters.
 *
 * 2. Loop through every word.
 *
 * 3. Convert the current word into an array of characters.
 *
 * 4. Sort the characters alphabetically and join them into a string.
 *    - This becomes the Map key.
 *
 * 5. Check whether the Map already contains this key.
 *
 * 6. If the key exists:
 *    - Add the current word to its existing group.
 *
 * 7. If the key does not exist:
 *    - Create a new group containing the current word.
 *
 * 8. After processing all words:
 *    - Return all the groups stored in the Map.
 */

export default function groupAnagrams(arr: string[]): string[][]{
    const map = new Map<string, string[]>();

    for ( const current of arr){
        const key = current
            .toLowerCase()
            .split("")
            .sort()
            .join("");

        if (map.has(key)){
            const group = map.get(key)
            
            if (group !== undefined){
                group.push(current);
            }
        } else {
            map.set(key, [current])
        }
    }
    return Array.from(map.values())

}

let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
let arr1 = ['eat'];

console.log(arr);
console.log(groupAnagrams(arr));
console.log(groupAnagrams(arr1))