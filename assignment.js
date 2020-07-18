// const someArray = [2, 3, 5, 7, 9, 11];

// console.log(someArray.filter(num => num > 5));
// console.log(someArray.map(n => ({ num: n })));
// console.log(someArray.reduce((prevValue, curValue) => prevValue * curValue, 1));

// const findMax = (args) => {
//   const minValue = Math.min(...args);
//   const maxValue = Math.max(...args);
//   return [minValue, maxValue];
// }

// const values = [1, 2, 5];
// const [min, max] = findMax(values);
// console.log(min, max);

// const set = new Set([1, 2, 3, 4, 5, 4, 4]);
// console.log(Array.from(set));
const numbers = [1, 2, 100, 4, 5, 6];
function findMax(...nums) {
  let curMax = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
  }
  return curMax;
}

console.log(findMax(...numbers));

function findMinMax(...nums) {
  let curMax = nums[0];
  let curMin = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }
  return [curMin, curMax];
}

const [min, max] = findMinMax(...numbers);
console.log(min, max);

const userIds = new Set();
userIds.add(10);
userIds.add(-5);
userIds.add(-5);

console.log(userIds);