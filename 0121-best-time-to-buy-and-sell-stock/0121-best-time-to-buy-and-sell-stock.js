/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];
    
    for(let i = 0; i < prices.length; i++){
        minPrice = Math.min(minPrice, prices[i]);
        let currentPrice = prices[i] - minPrice;
        maxProfit = Math.max(currentPrice, maxProfit);
    }
    return maxProfit;
};