// FUNCTION dailyTemperatures(temperatures):

//     CREATE result array filled with 0
//     CREATE empty stack

//     FOR each index i:
//         WHILE stack is not empty
//               AND temperatures[i] > temperature at stack top:

//             previousIndex = REMOVE stack top
//             result[previousIndex] = i - previousIndex

//         PUSH i onto stack

//     RETURN result


export default function dailyTemperature(tempeartures: number[]): number[] {
    let result = Array(tempeartures.length).fill(0);
    let stack: number[] = [];

    for (let i = 0; i < tempeartures.length; i++) {
        while (
            stack.length > 0 &&
            tempeartures[i] > tempeartures[stack[stack.length - 1]]
        ) {
            const previousIndex = stack.pop();
            result[previousIndex] = i - previousIndex;
        }
        stack.push(i);
    }

    return result;
}

let temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
console.log(temperatures)
console.log(dailyTemperature(temperatures))