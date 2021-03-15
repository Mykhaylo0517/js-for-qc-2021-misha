// *********** Practical task (Lecture 03)  *****************

// ********************  Task 1 **************************

// by for
let arrNew = [2,3,4,5];
let multiplFor = 1;
for (let i = 0; i < arrNew.length; i++) {
    multiplFor = multiplFor * arrNew[i]; 
}
console.log("Result by FOR = ", multiplFor);  //  Result = 120

// by do-while
let multiplWhile = 1;
let j = 0;
do { 
    multiplWhile = multiplWhile * arrNew[j];
    j++;
} while (j < arrNew.length) 
console.log("Result by DO-WHILE = ", multiplWhile);  //  Result = 120

// by while
let j = 0;
let result3 = 1;
while (j < arr.lenght) {
    result3 *= arr[j];
    j++;
}
console.log("Result by WHILE = ", result3);  //  Result = 120

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

// ********************  Task 3 (FROM THE TEACHER) **************************
function randArray(k) {
    let arr = [];
    for (let i = 0; i < k; i++) {
        arr [i] = Math.floor(Math.random() * 500) +1; 
    }
    console.log(arr);
}
randArray(5);


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

// ********************  Task 4 (FROM THE TEACHER) **************************
function raiseToDegree(a, b) {
    let result = a;
    for (let i = 1; i < b; i++) {
        result *=a;
    }
    return result;
}
let a = prompt("a?", '');
let b = prompt("b?", '');
if (b , 1) {
    console.log("Degree ${b} not supported, please use natural number");    
} else {
    console.log(raiseToDegree(a, b));
}

// ********************  Task 5 **************************

function findMin() {
    let min = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
         if (min > arguments[i]) {
            min = arguments[i];
        } 
    }
    return min;
}
console.log("Case 0. Minimum value for this array = " + findMin(12, 14, 4, -4, 0.2));
console.log("Case 1. Minimum value for this array = " + findMin(12, 14, 4, -4, 
    0.2, -34, -36, 100, 0.24));
console.log("Case 2. Minimum value for this array = " + findMin(12, 0.24));
console.log("Case 3. Minimum value for this array = " + findMin(4));
console.log("Case 4. Minimum value for this array = " + findMin(4,  true, "fff"));
console.log("Case 5. Minimum value for this array = " + findMin("BA", "b", "a",
   "A", "c", 0, "Bf"));
console.log("Case 6. Minimum value for this array = " + findMin(undefined, NaN, true, 0, "A"));

// ********************  Task 6 **************************

function findUnique(arr) {
    let unique = true;
    let i = arr.lenght;
    for (let i = 0; i < (arr.length); i++) {
        for (let j = (i + 1); j < arr.length; j++){
            if (arr[i] == arr[j]) {
                unique = false;
            }
        } 
    }
    return unique;
}
let arr1 = [1, 2, 3, 5, 3];
let arr2 = [1, 2, 3, 5, 11];
console.log(arr1 + " array contains only uniques elements -- " + findUnique(arr1));
console.log(arr2 + " array contains only uniques elements -- " + findUnique(arr2));

// ********************  Task 6 (FROM THE TEACHER) **************************
function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = (i + 1); j < arr.length; j++){
            if (arr[i] === arr[j]) {
                return false;
            }
        }
    }
    return true;
}
console.log(findUnique([1, 2, 3, 5, 3]));

// ********************  Task 7 **************************

function showFewValues(arr, b = 1) {
    let arrRes = [];
    let lengF;
    let temp = b - arr.length; 
    if (temp >= 0) {
        lengF = arr.length + 0;
        } else {
            lengF = b + 0;
            }
    
    let j = 0;
    for (let i = ((arr.length) - lengF); i < arr.length; i++) {
        arrRes [j] = arr [i]; 
        j++;
        }
    return arrRes;
}
let a;         
let arr1 = [3, 4, 10, -5];
console.log("We see next elements of array : " , showFewValues(arr1));
a = 2;
console.log("We see next elements of array : ", showFewValues(arr1, a));
a = 8;
console.log("We see next elements of array : ", showFewValues(arr1, a));
// a = 16;
// console.log("We see next elements of array : ", showFewValues(arr1, a));

// ********************  Task 7 (FROM THE TEACHER) **************************
function lastElem(arr, count) {
    if (count == null) {
        console.log(arr.pop())
        } 
        else {
            console.log(arr.slice(-count));
        }
    }
console.log( lastElem([3, 4, 10, -5]) );
console.log( lastElem([3, 4, 10, -5], 2));
console.log( lastElem([3, 4, 10, -5], 8));

// ********************  Task 8 **************************

function convertFun(s) {
    if (!s) return s;
    let newStr = ""+ s[0].toUpperCase();
    let temp;
    let lengStr = s.length; 
    for (i=0; i < s.length - 1; i++) {
        if ((s[i] == " ") && (s[i+1] != " " )) {
            temp = "" + s[i+1].toUpperCase();
            newStr = newStr + temp;                    
        } else {
            newStr = newStr + s[i+1];
        }
    }               
    return newStr;
}

let strStart;
strStart = "i love java script";
console.log("The first text : ", strStart);
console.log("The text after convertation is : ", convertFun(strStart));
strStart = " ";
console.log("The first text : ", strStart);
console.log("The text after convertation is : ", convertFun(strStart));
strStart = "i love java s  ";
console.log("The first text : ", strStart);
console.log("The text after convertation is : ", convertFun(strStart));
strStart = "i       love java script ";
console.log("The first text : ", strStart);
console.log("The text after convertation is : ", convertFun(strStart));
strStart = "i       love5454 4556 java script";
console.log("The first text : ", strStart);
console.log("The text after convertation is : ", convertFun(strStart));

// ********************  Task 8 (FROM THE TEACHER) **************************
function bigFirstLetter(str) {
    let arr = str.split(" ");
    let newarr = [];
    for (let i = 0; i <arr.length; i++) {
        newarr.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
    }
    return newarr.join(" ");
    }
    console.log(bigFirstLetter("i love java script"));

// The solution of tasks for the Lecture-03 is completed
