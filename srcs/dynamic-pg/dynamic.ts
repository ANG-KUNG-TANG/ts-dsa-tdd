// FUNCTION rob(money):
//     IF there are no houses:
//         RETURN 0

//     IF there is only one house:
//         RETURN money[0]

//     CREATE dp array of size money.length

//     dp[0] = money[0]
//     dp[1] = maximum of money[0] and money[1]

//     FOR each house i, starting from index 2:
//         robCurrent = dp[i - 2] + money[i]
//         skipCurrent = dp[i - 1]

//         dp[i] = maximum of robCurrent and skipCurrent

//     RETURN dp[last index]FUNCTION rob(money):
//     IF there are no houses:
//         RETURN 0

//     IF there is only one house:
//         RETURN money[0]

//     CREATE dp array of size money.length

//     dp[0] = money[0]
//     dp[1] = maximum of money[0] and money[1]

//     FOR each house i, starting from index 2:
//         robCurrent = dp[i - 2] + money[i]
//         skipCurrent = dp[i - 1]

//         dp[i] = maximum of robCurrent and skipCurrent

//     RETURN dp[last index]

function rob(money : number[]): number {

    
    if ( money.length  === 0){
        return 0
    }

    if ( money.length === 1){
        return money[0]
    }

    const dp: number[] = new Array(money.length);
    dp[0] = money[0]
    dp[1] = Math.max(money[0], money[1])

    for (let i = 2; i < money.length; i++){
        const robCurrent = dp[i -2] + money[i]
        const skipCurrent = dp[i-1]

        dp[i] = Math.max(robCurrent, skipCurrent);    
    }
    return dp[money.length -1]

}

console.log(rob([2, 7, 9, 3, 1])); // 12
console.log(rob([5, 1, 5, 10]));   // 15
console.log(rob([]));  