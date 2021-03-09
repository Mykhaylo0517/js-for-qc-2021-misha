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
    
// input two positive numbers
let width;
let height;
width = Number(prompt("Input the width of the rectangle: ", ""));
height = Number(prompt("Input the width of the rectangle: ", ""));
        
console.log("Calculation of the square of ​​the rectangle for ", width,
        " ** ", height, " = ", calcRectangleArea(width, height));

// ********************  Task 2 **************************


// ********************  Task 3 **************************


// ********************  Task 4 **************************


// ********************  Task 5 **************************


// ********************  Task 6 **************************


// ********************  Task 7 **************************


// ********************  Task 8 **************************


// The solution of tasks for the Lecture-04 is completed
