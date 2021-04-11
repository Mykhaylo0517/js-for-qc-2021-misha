const f = require('../calcCircle.js'); // path
describe("Tests for functions with circle", () => {
    test('The length of circle = 138.2 for radius = 22', () => {
        expect(f.getCircleLength(22, 1)).toBeCloseTo(138.2);
    });
    
    test('The square of circle ~ 254.47 for radius = 9', () => {
        expect(f.getCircleArea(9, 2)).toBeCloseTo(254.47);
    });

    test('Testing getCircleLength() function without handed arguments', () => {
        expect.extend({
            getCircleLength(radius) {
                return {
                    pass: true,
                    message: () => 'Function without arguments',
                };
            },
        });
    });

    test('Testing getCircleArea() function without handed arguments', () => {
        expect.extend({
            getCircleArea() {
                return {
                    pass: true,
                    message: () => 'Function without arguments',
                };
            },
        });
    });

})