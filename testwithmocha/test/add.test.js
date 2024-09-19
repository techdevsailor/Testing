import add from "../add.js";
import { expect } from "chai";

describe('Operations', function() {
  it('should return 5 when adding 2 and 3', function() {
    const result = add(2, 3);
    expect(result).to.equal(5);
  });

  it('should return a negative number when adding -1 and -4', function() {
    const result = add(-1, -4);
    expect(result).to.equal(-5);
  });

  it('should return 0 when adding 0 and 0', function() {
    const result = add(0, 0);
    expect(result).to.equal(0);
  });
}); // this is a last changed and last change
