// 1. Two sum
// using Hash Map
function twoSum(nums, target) {
  const seen = {};  // value -> index

  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];

    if (seen[need] !== undefined) {
      return [seen[need], i];
    }

    seen[nums[i]] = i;
  }
// return [nums[seen[need]], nums[i]];
  return []; // if no pair
}

twoSum([2, 7, 11, 15], 9); // [0, 1]
// ---------
//Using For loop
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
        //return [nums[seen[need]], nums[i]];
      }
    }
  }
  return [];
}

twoSum([2, 7, 11, 15], 9); // [0, 1]

// ==============
// 2.contains duplicate in an array
const hasDuplicates = arr => new Set(arr).size !== arr.length;
hasDuplicates([1, 2, 3]);      // false
hasDuplicates([1, 2, 2, 3]);   // true

const duplicates = arr => [...new Set(arr.filter((v, i) => arr.indexOf(v) !== i))];

duplicates([1, 2, 2, 3, 3, 4]);  // [2, 3]

// using for loop

function findDuplicates(arr) {
  const dups = []; //option if true / false

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !dups.includes(arr[i])) {
        dups.push(arr[i]);
        // return true;
      }
    }
  }
  // return false;
  return dups;
}

findDuplicates([1, 2, 2, 3, 3, 4]); // [2, 3]

////


/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    if (prices.length < 2) return 0;

    let minPrice = prices[0];        // cheapest price seen so far
    let maxProfit = 0;
    //let bestBuy = prices[0];
    // let bestSell =null;

    for (let i = 1; i < prices.length; i++) {
      const currentPrice = prices[i];
        if (currentPrice < minPrice) {
            minPrice = prices[i];     // new potential buy point
        } 
        
        //else {
            const currentProfit = prices[i] - minPrice;
            if (currentProfit > maxProfit) {
                maxProfit = currentProfit;
                bestBuy = minPrice;
                bestSell = currentPrice;
            }
        //}
    }

    // if no profit was possible
    // if(maxProfit === 0) {
    // return { profit: 0, buyPrice: null, sellPrice: null }; 
    // }
  // return {
  //   profit: maxProfit,
  //       buyPrice: bestBuy,
  //       sellPrice: bestSell
  // }

    return maxProfit;
}

// Even cleaner version (very popular style)
function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (const price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }

    return maxProfit;
}
