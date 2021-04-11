const circle = require('../circle');

describe("Tests for functions with circle", () => {
    test('1. The square of circle ~ 254.47 for radius = 9', () => {
        expect(circle.getCircleLength(22)).toBeCloseTo(138.2, 1);
    });

    test('2. The length of circle = 138.2 for radius = 22', () => {
        expect(circle.getCircleArea(9)).toBeCloseTo(254.47);
    });

    test('3. Testing both functions without handed arguments', () => {
        expect(circle.getCircleLength()).toBeNaN();
        expect(circle.getCircleArea()).toBeNaN();
    });
})