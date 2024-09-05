//Test function has two parameters first parameter is string and second argument is a callback function(write our implementation)

import { sum } from "../sum";

test("Sum function will give us sum of two numbers as a result", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
