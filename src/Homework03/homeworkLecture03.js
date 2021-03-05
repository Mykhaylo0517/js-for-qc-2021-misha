// *********** Practical task (Lecture 03)  *****************

// ********************  Task 1 **************************

// by for
let arrNew = [2,3,4,5];
let multiplFor = 1;
for (let i = 0; i < arrNew.length; i++) {
    multiplFor = multiplFor * arrNew[i]; 
}
console.log("Result by FOR = ", multiplFor);  //  Result = 120

// by while
let multiplWhile = 1;
let j = 0;
do { 
    multiplWhile = multiplWhile * arrNew[j];
    j++;
} while (j < arrNew.length) 
console.log("Result by WHILE = ", multiplWhile);  //  Result = 120

// ********************  Task 2 **************************

for (let i = 0; i <= 15; i++) {
    if ((i % 2) == 0) {
        console.log(i + " is even" );
        } else { 
            console.log(i + " is odd" );
            }
}

// ********************  Task 3 **************************

function randArray(x) {
    let min = 1;
    let max = 500;
    let randArr = [];
    for (let i = 0; i < x; i++) {
        temp = min + Math.random() * (max + 1 - min);
        randArr [i] = Number(temp.toFixed(0));
        // console.log(randArr [i]); 
    }
    console.log(randArr);
}
randArray(5);

// the same task, but using RETURN                
function randArrayNew(x) {
    let min1 = 1;
    let max1 = 500;
    let randA = [];
    for (let i = 0; i < x; i++) {
        temp = min1 + Math.random() * (max1 + 1 - min1);
        randA [i] = Number(temp.toFixed(0));
    }
    return console.log(randA);
}
randArrayNew(8);

// ********************  Task 4 **************************

function raiseToDegree(x,y) {
    let result = x ** y;
    return result;
}
let a;
let b;
// input positive number
a = Number(prompt("Enter the FIRST positive number:", ""));
while ((!Number.isInteger(a)) || (a < 0)) {
    a = Number(prompt("try again (first number):", ""));
}
b = Number(prompt("Enter the SECOND positive number:", ""));
while ((!Number.isInteger(b)) || (b < 0)) {
    b = Number(prompt("try again (second number):", ""));
}
// rai33seToDegree(a, b);   - why this result is UNDEFINE?
console.log(a + " ** " + b + " = " + raiseToDegree(a,b));

// ********************  Task 5 **************************


// ********************  Task 6 **************************


// ********************  Task 7 **************************


// ********************  Task 8 **************************


// The solution of tasks for the Lecture-03 is completed
