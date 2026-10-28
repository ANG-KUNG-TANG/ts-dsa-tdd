// FUNCTION coinChange(coins, amount)

//     CREATE dp array of size amount + 1
//     FILL dp with Infinity

//     SET dp[0] = 0

//     FOR each value x from 1 to amount:

//         FOR each coin in coins:

//             IF x >= coin:

//                 CHECK the minimum coins needed
//                 by using this coin

//                 UPDATE dp[x] if this option is better

//     IF dp[amount] is still Infinity:
//         RETURN -1

//     RETURN dp[amount]

function coinchange(money: number[], amount: number): number{
    const dp : number[] = new Array(amount + 1).fill(Infinity)

    dp[0] = 0;
    for ( let x =1; x <= amount; x++){
        for ( const coin of money){
            if ( x >= coin){
                let min = Math.min(dp[x], dp[x - coin] + 1)

                dp[x] = min
            }
        }
    }

    if (dp[amount] === Infinity){
        return -1
    }

    return dp[amount]

}

console.log(coinchange([2], 3));
