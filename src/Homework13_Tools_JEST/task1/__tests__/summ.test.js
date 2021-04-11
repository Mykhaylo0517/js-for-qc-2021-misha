const summ = require('../summ'); // path
describe("Summa tests", () => {
    test('summa 0.1 by 0.2 is 0.3', () => {
        expect(summ(0.1, 0.2)).toBe(0.3);
    });
})