
import { it, expect, describe } from "vitest";
import groupAnagrams from "../hashMap/group-Anagram";

describe("Group Anagrams", () => {
    it("should group words that are anagrams", () => {
        const arr = ["eat", "tea", "tan", "ate", "nat", "bat"];

        expect(groupAnagrams(arr)).toEqual([
            ["eat", "tea", "ate"],
            ["tan", "nat"],
            ["bat"],
        ]);
    });

    it("should return an empty array for empty input", () => {
        expect(groupAnagrams([])).toEqual([]);
    });

    it("should group a single word", () => {
        expect(groupAnagrams(["hello"])).toEqual([["hello"]]);
    });

    it("should group words with identical letters", () => {
        expect(groupAnagrams(["abc", "bca", "cab"])).toEqual([
            ["abc", "bca", "cab"],
        ]);
    });

    it("should handle duplicate words", () => {
        expect(groupAnagrams(["eat", "eat", "tea"])).toEqual([
            ["eat", "eat", "tea"],
        ]);
    });

    it("should group words with different lengths separately", () => {
        expect(groupAnagrams(["a", "ab", "ba", "abc", "cab"])).toEqual([
            ["a"],
            ["ab", "ba"],
            ["abc", "cab"],
        ]);
    });
});
