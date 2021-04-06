// *********** Practical task (Lecture 02)  *****************

// ********************  Task 1 **************************
// Допишіть код, щоб в консолі браузера з'явилися рядки, 
// які написані в коментарях, оперуючи при цьому змінними х і у.

let x = 1;
let y = 2;
let res1 = x + "" + y;
console.log("res1 = ", res1);      // "12"
console.log(typeof res1);          // "string"

let res2 = (x == x) + "" + y;
console.log("res2 = ", res2);      // "true2"
console.log(typeof res2);          // "string"

let res3 = (x != y);
console.log("res3 = ", res3);      // true
console.log(typeof res3);          // "boolean"

let res4 = (x + "any string") * y;
// or OTHER VERSION from teacher
// let res4 = parseFloat(Boolean(x));
console.log("res4 = ", res4);      // NaN
console.log(typeof res4);          // "number"

// ********************  Task 2 **************************

let cNum = prompt("Enter any number below to verify:", "");
    if ((cNum > 0) && ((cNum % 2) == 0) && ((cNum % 7) == 0)) {
        console.log("This number is a positive and a multiple of 2 and 7");
        } else {
            if ((cNum % 7) == 0) {
                console.log("This number is a multiple of 7");
                } else {
                    if ((cNum > 0) && ((cNum % 2) == 0)) {
                        console.log("This number is a positive and a multiple of 2");
                        } else {                        
                            console.log("You have entered an incorrect verification number"); 
                            }
                    }
            }

// ********************  Task 3 **************************

// array initialization
let arrNew = [];
arrNew[0] = 5;
arrNew[1] = "any line";
arrNew[2] = true;
arrNew[3] = null;
document.writeln("Q-ty elements is : ", arrNew.length); 
console.log("Q-ty elements is : ", arrNew.length, arrNew);

// add the fifth element
let arrElem = prompt("for array enter any new element (number/boolean/string or null):", "");
arrNew[4] = arrElem;
document.writeln("New fifth element of the array is : ", arrNew[4]); 

// delete the first element
arrNew.shift(1);
document.writeln("Updated array is : ", arrNew);
console.log("New array is : ", arrNew.length, arrNew);  

// ********************  Task 3 (FROM THE TEACHER) **************************
let arr = [];
arr.push(12, "java", true, null);
console.log(arr.length);
arr[4] = prompt("Choose a value");
console.log(arr[4]);
arr.shift();
console.log(arr);

// ********************  Task 4 **************************

let cities = ["Rome", "Lviv", "Warsaw"];
tmpValue = cities[0];
tmpValue = tmpValue + "*" + cities[1];
tmpValue = tmpValue + "*" + cities[2];
document.writeln("result is : ", tmpValue);
console.log("result is : ", tmpValue, typeof tmpValue);
console.log("new value is : ", typeof tmpValue);

// ********************  Task 4 (FROM THE TEACHER) **************************
// Var.1 (used methos JOIN)
let cities = ["Rome", "Lviv", "Warsaw"];
cities = cities.join(" * ");
console.log(cities);

// Var.2
let cities = ["Rome", "Lviv", "Warsaw"];
let res = [];
res = cities.reduce(function(sum, i) {
    return [sum + "*" + i];
    })
console.log(res);

// ********************  Task 5 **************************

let isAdult = prompt("Enter your age as a number:", "0..10, 11..18, 19..99");
    if (isAdult >= 18) {
        console.log("You have reached the age of majority and your age is :", isAdult);
        } else {
                if ((isAdult > 10) && (isAdult < 18)) {
                    console.log("You are a teenager.");
                    } else {
                            console.log("You are still too young."); 
                        }
    }
// ********************  Task 5 (FROM THE TEACHER) **************************            
let isAdult = Number(prompt("What is your age?"));
if (isAdult >= 18) {
    alert("You are an adult!");
} else if (isAdult < 18) {
    alert("You are too young!");
} else {
    alert("Wrong value!!!");
}

// ********************  Task 6 **************************

let squareTrangle;
let perimeterTriangle;
let sideA = prompt("enter the length of the A side of the triangle:", "");
let sideB = prompt("enter the length of the B side of the triangle:", "");
let sideC = prompt("enter the length of the C side of the triangle:", "");
sideA = Number(sideA);
sideB = Number(sideB);
sideC = Number(sideC);
console.log("Sides are: ", sideA, sideB, sideC, typeof sideA, typeof sideB, typeof sideC);
if (sideA+sideB>=sideC && sideB+sideC>=sideA && sideA+sideC>=sideB && sideA>0 && sideB>0 && sideC>0) {
    console.log("The triangle is exist"); 
    perimeterTriangle = (sideA+sideB+sideC)/2;
    squareTrangle = perimeterTriangle*(perimeterTriangle-sideA)*(perimeterTriangle-sideB)*(perimeterTriangle-sideC);
    squareTrangle = squareTrangle ** (1/2);
    console.log("The square of the triangle is : ", squareTrangle.toFixed(3));
    if (sideA*sideA+sideB*sideB == sideC*sideC || sideA*sideA+sideC*sideC == sideB*sideB || sideC*sideC+sideB*sideB == sideA*sideA) {
        console.log("The triangle is right-angled.");
        } else {
            console.log("The triangle is NOT right-angled.");
        }   
    } 
    else {
        console.log("Incorrect data.");
        }    

// ********************  Task 6 (FROM THE TEACHER) **************************
let a = Number(prompt("Set a value for first side")); 
let b = Number(prompt("Set a value for Second side"));
let c = Number(prompt("Set a value for THIRD side"));
// calculating area
if (a>0 && b>0 && c>0) {
    let p = (a+b+c)/2;
    let triangleArea = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    console.log("Triangle area is = " + triangleArea.toFixed(3));
}
else {
    alert("incorrect data!'");
}
// Checking whether the triangle is right-angled
if ((a*a + b*b === c*c) || (b*b+c*c === a*a) || (c*c+a*a === b*b)) {
    console.log("Triangle is right-angeled");
}
else {
    console.log("Triangle is NOT right-angeled");
}

// ********************  Task 7 **************************

// Option 1. Initialization of the value of the variable by the user
let dayTime1 = prompt("enter the time as number from 0 to 24:", "");
// Option 2. Initialization of the value of the variable in real time
var currDay = new Date();
let dayTime2 = currDay.getHours();

dayTime = dayTime1; // or   let dayTime = dayTime2;

// First method.
if ((dayTime >= 0 && dayTime <= 5) || (dayTime > 23 && dayTime <= 24)) {
    console.log("First method. Good night.");
} else if (dayTime > 5 && dayTime <= 11) {
        console.log("First method. Good morning.");
        }
        else if (dayTime > 11 && dayTime <= 17) {
            console.log("First method. Good day.");
            }
            else if (dayTime > 17 && dayTime <= 23) {
                console.log("First method. Good evening.");
                }

// Second method. 
let x = 0;
if (dayTime > 5 && dayTime <= 11) { 
    x = 1;
}   else if (dayTime > 11 && dayTime <= 17) {
    x = 2;
}   else if (dayTime > 17 && dayTime <= 23) {
    x = 3;
}
switch (x) {
    case 1: 
        console.log("Second method. Good morning.");
        break;
    case 2: 
        console.log("Second method. Good day.");
        break;
    case 3: 
        console.log("Second method. Good evening.");
        break;
    default: 
    console.log("Second method. Good night.");
}

// third method. 
switch (true) {
    case (dayTime > 5 && dayTime <= 11): 
        console.log("Third method. Good morning.");
        break;
    case (dayTime > 11 && dayTime <= 17): 
        console.log("Third method. Good day.");
        break;
    case (dayTime > 17 && dayTime <= 23): 
        console.log("Third method. Good evening.");
        break;
    default: 
    console.log("Third method. Good night.");
}

// ********************  Task 7 (FROM THE TEACHER) **************************
// method-1
let date = new Date();
let currentHour = date.getHours();
if (currentHour >= 23 && currentHour <= 5) {
    alert ("Good night, ");
} else if (currentHour > 5 && currentHour <= 11) {
    alert ("Good morning, ");
} else if (currentHour > 11 && currentHour <= 17) {
    alert ("Good day, ");
} else if (currentHour > 17 && currentHour < 23) {
    alert ("Good morning, ");
}
// method-2
let date = new Date();
let currentHour = date.getHours();
switch (true) {
    case (currentHour > 5 && currentHour <= 11): 
        alert ("Good morning.");
        break;
    case (currentHour > 11 && currentHour <= 17): 
        alert ("Good day.");
        break;
    case (currentHour > 17 && currentHour <= 23): 
        alert ("Good evening.");
        break;
    default: 
    alert ("Good night.");
}

// The solution of tasks for the Lecture-02 is completed
