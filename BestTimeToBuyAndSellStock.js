/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let profit = 0
    let minimum = prices[0]
    for(let i = 1; i < prices.length; i++){
        minimum = Math.min(minimum, prices[i-1])
        profit = Math.max(prices[i]-minimum, profit)
    }
    return profit
};



/*

- We initialize the profit to 0.
- We set the min to the first element of the prices array.
- We loop through the prices array starting from the second element.
- We set the min to the minimum of the current element and the current min.


*/