// *********** Practical task (Lecture 04)  *****************

// ********************  Task 1 **************************

function calcRectangleArea(widthFun, heightFun) {
    let square;
    // check the entered values  --- the values are numbers, not NaN or not negative
    console.log(typeof Number(widthFun) =="number", typeof Number(heightFun) =="number", 
            !(Number.isNaN(widthFun)), !(Number.isNaN(heightFun)),
            (Number(widthFun) * Number(heightFun)) > 0);
    if (typeof Number(widthFun) =="number" && typeof Number(heightFun) =="number" 
     && !(Number.isNaN(widthFun)) && !(Number.isNaN(heightFun)) 
     && (Number(widthFun) * Number(heightFun)) > 0)  {
        square = Number(widthFun) * Number(heightFun);
    } else {
        alert (" - " + "The one or two of the values are not numbers or positive!");
        throw new Error("The one or two of the values are not numbers or positive!");
    }
    return square;
    }
    
// input two values for calculation of the square of ​​the rectangle
let width;
let height;
width = Number(prompt("Input the width of the rectangle: ", ""));
height = Number(prompt("Input the width of the rectangle: ", ""));
        
console.log("Calculation of the square of ​​the rectangle for ", width,
        " ** ", height, " = ", calcRectangleArea(width, height));

// ********************  Task 2 **************************

function checkAge() {
    let age1 = prompt("Enter your age :", "");
    let age = Number(age1);
    if (age1.length == 0) {
        alert("The field is empty! Please enter your age.");
        throw new Error("The field is empty! Please enter your age.");
    } else if (age <= 14) {
        alert("Your age is less than 14 years!");
        throw new Error("Your age is less than 14 years!");
    } else if (Number.isNaN(age)) {
        alert("You have entered a non-numeric value.");
        throw new Error("You have entered a non-numeric value.");
    }
    return age;
    }

try {
    let accessFilm = checkAge();
    alert("You have to access to this film.");
    console.log("You have to access to this film.");
} catch (exception) {
    console.log(exception.name);
    console.log(exception.message);
    console.log(exception.stack);
} 

// ********************  Task 3 **************************



// ********************  Task 4 **************************





// The solution of tasks for the Lecture-04 is completed
