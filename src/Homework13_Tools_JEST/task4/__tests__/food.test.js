const foodSort = require('../food.js');

const food = [
    { kind: 'potato', price: 10 },
    { kind: 'bred', price: 16 },
    { kind: 'pepper', price: 27 },
    { kind: 'banana', price: 32 },
    { kind: 'lemon', price: 50 }
];

describe("Foods sorted - tests.", () => {
        const minF = 15;
        const maxF = 40;
        const filteredFoods = foodSort.filterFoodPrice(food, minF, maxF);

        test('1-6. Test function with 2 arguments for a given FOOD-array.', () => {
            expect(filteredFoods).toHaveLength(3);
            expect(filteredFoods).toContainEqual({ kind: 'pepper', price: 27 });
            expect(filteredFoods).toEqual([{ kind: 'bred', price: 16 }, { kind: 'pepper', price: 27 }, { kind: 'banana', price: 32 }]);
            expect(filteredFoods[0].price).toBeGreaterThanOrEqual(minF);
            expect(filteredFoods[2].price).toBeLessThanOrEqual(maxF);
            expect(filteredFoods).not.toContainEqual({ kind: 'lemon', price: 50 });
        });

        test('7-9. My statements for function and array', () => {
            expect(filteredFoods[0].kind).toBe("bred");      // Значення kind 1-го елемента відсортованого масиву є "bred"
            expect(filteredFoods[3]).toBeUndefined();        // 4-го елементу відсортованого масиву не має
            expect(filteredFoods[2].kind).toBeTruthy();      // Значення kind 3-го - any value exсept: false, null, undefined, 0, NaN
        });
})
