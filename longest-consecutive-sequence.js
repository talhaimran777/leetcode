/*
 * Algorithm
 *
 * First turn the input into a set of numbers.That takes O(n) and then we can ask
 * in O(1) whether we have a certain number. Then go through the numbers.If the
 * number x is the start of a streak(i.e., x - 1 is not in the set), then test y =
 * x + 1, x + 2, x + 3, ... and stop at the first number y not in the set.The
 * length of the streak is then simply y - x and we update our global best with
 * that.Since we check each streak only once, this is overall O(n).This ran in 44
 * ms on the OJ, one of the fastest Python submissions.
 */

/**
 * nums: [100, 4, 200, 1, 3, 2]
 *
 * set: 1, 2, 3, 4, 100, 200
 *
 */
const longestConsecutiveSequence = (nums) => {
  let set = new Set(nums);
  let best = 0;

  nums.forEach((num) => {
    const isStartOfStreak = !set.has(num - 1);

    if (isStartOfStreak) {
      let current = num + 1;
      let currentBest = 1;

      while (set.has(current)) {
        current += 1;
        currentBest += 1;
      }

      best = Math.max(best, currentBest);
    }
  });

  return best;
};

console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])); // 4
