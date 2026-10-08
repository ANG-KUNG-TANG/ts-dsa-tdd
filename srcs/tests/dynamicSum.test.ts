import { vitest, it, expect, describe } from "vitest";
import minSubArrayLen from "../slidingWindow/dynamicWindow";


describe('Dynamic Sliding Window: minSubArrayLen', () => {

  // Test 1: Standard case (Multiple elements make up the target)
  it('should find the minimum length of a contiguous subarray meeting the target', () => {
    // The target is 7. The smallest subarray is [4, 3] which has a length of 2.
    expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2);
  });

  // Test 2: Window size of 1 (An element itself is enough)
  it('should return 1 if a single element is greater than or equal to the target', () => {
    // The target is 4. The number 4 is in the array, so the smallest length is 1.
    expect(minSubArrayLen(4, [1, 4, 4])).toBe(1);
  });

  // Test 3: Impossible target (Edge case)
  it('should return 0 if no subarray meets the target', () => {
    // The target is 11, but the entire array only sums to 7. 
    expect(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1])).toBe(0);
  });

  // Test 4: The entire array is required (Maximum window size)
  it('should return the length of the whole array if all elements are needed to reach the target', () => {
    // The target is 15. The sum of 1+2+3+4+5 is exactly 15, so it requires all 5 elements.
    expect(minSubArrayLen(15, [1, 2, 3, 4, 5])).toBe(5);
  });

});