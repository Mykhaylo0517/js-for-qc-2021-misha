const product = require('../product'); // path
describe("Multiply tests", () => {
    test('multiply 2 by 3 is 6', () => {
        expect(product(2, 3)).toBe(6);
    });
})