import { describe, it, expect } from "vitest";
import Stack from "./stack";

describe("Stack", () => {
  it("should push values and pop the last pushed value", () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  it("should return undefined when popping an empty stack", () => {
    const stack = new Stack();

    expect(stack.pop()).toBeUndefined();
  });

  it("should return the top value without removing it", () => {
    const stack = new Stack();

    stack.push(10);
    stack.push(20);

    expect(stack.peek()).toBe(20);
    expect(stack.peek()).toBe(20);
  });

  it("should correctly check whether the stack is empty", () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toBe(true);

    stack.push(5);
    expect(stack.isEmpty()).toBe(false);

    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });
});