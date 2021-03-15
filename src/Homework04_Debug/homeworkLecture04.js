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


// ********************  Task 1 (FROM THE TEACHER) **************************
function calcRectangleArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
        throw "Parameter is not a number!";
    }
    return width * height;
}

try {
    alert(calcRectangleArea(3, "a"));
}
catch(e) {
    console.log(e);
}

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
// ********************  Task 2 (FROM THE TEACHER) **************************
function checkAge() {
    try {
        const age = prompt("You have to access to this film.", "");    
        if (age === "")
        // if (age === null || age.trim() === "")
            throw new Error ("The field is empty! Please enter your age.");
        else if (isNaN(parseInt(age)))
            throw new Error ("Please enter number")
        else if (age < 14)
            throw new Error ("Sorry, but you are too young for this movie.")
        alert ("Enjoy the movie!");
    } 
    catch (e) {
            alert(e.name + " ... " + e.message)
    }
}
checkAge();

// ********************  Task 3 **************************
// ********************  Task 3 (FROM THE TEACHER) **************************
class MonthException {
    constructor(message) {
        this.message = message;
        this.name = "MonthException";
    }
}

function showMonthName(month){
    month = month -1;  // array numeration
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (months[month] !== undefined) {
        return months[month];
    } else {
        throw new MonthException ('Incorrect month number');
    }
}

try {
    let myMonth = 14;
    let montName = showMonthName(myMonth);
    console.log(montName);
} catch (e) {
    monthName = 'unknown';
    console.log(e.name, e.message); // pass the exeption object to the error handler
}

// ********************  Task 4 **************************
// ********************  Task 4 (FROM THE TEACHER) **************************

function showUser(id) {
    if (id < 0) {
        throw new Error ('ID must not be negative: ' + id);
    }
    return {id: id};
}
function showUsers(ids) {
    let result =[];
    ids.forEach(function (id) {
        try {
            let person = showUser(id);
            result.push(person);
        } catch (exception) {
            console.log(exception.message);
        }
    });
    return result;
}
showUsers([7, -12, 44, 22]);

// The solution of tasks for the Lecture-04 is completed