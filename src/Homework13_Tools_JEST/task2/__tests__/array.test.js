const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2'];

describe("Testing a given array", () => {	
    test('1. In an array there is an item "admin"', () => {
        expect(userList).toContain("admin");
    });

	test('2. The first item in the  array is "Nick"', () => {
        expect(userList[0]).toMatch(/Nick/);
    });

	test('3. The last item in an array is "new_user_2"', () => {

        expect(userList[(userList.length-1)]).toMatch(/new_user_2/);
    });

	test('4. The length of the array is equal to 5', () => {
        // expect(userList).toHaveLength(5);
        expect(['Nick', 'Kate', 'quest123', 'admin', 'new_user_2']).toHaveLength(5);
    });

	test('5. The 3rd element of the array has a string type', () => {
        expect(userList[2]).toBeTruthy(); // any value exсept: false, null, undefined, 0, NaN
    });

	test('6. The 8th element of the array does not exist', () => {
        expect(userList[7]).toBeUndefined();
    });


})