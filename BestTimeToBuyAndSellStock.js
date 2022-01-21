/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let profit = 0
    let minimum = prices[0]
    for(let i = 1; i < prices.length; i++){
        minimum = Math.min(minimum, prices[i-1])
    }
};
