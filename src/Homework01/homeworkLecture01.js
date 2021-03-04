//************ Practical task (Lecture 01)  *****************

//*********************  Task 1  **************************
// Write a script inside the HTML document that displays your name using the alert () function.

// Version 1. (only alert)
alert("Mykhaylo!");

// Version 2. (by button)
{/* <button onclick="alert('Hello Mykhaylo! How are you?')">Click here, please!</button> */}
// .......... Question! ........
// We used " and ' in the same script. ==> Error!

// Version 3. (by JavaScript file)
<script src="task011.js"></script>
// file "task011.js" contains:
document.write("Your first name:"); 
alert("Mykhaylo");

//*********************  Task 2  **************************
// Write a script in an external file that displays your last name in the console.  
// Attach the created file to an HTML document.

<script src="task012.js"></script>
// file "task012.js" contains:
console.log("Tlumak");

//*********************  Task 3  **************************
    // a) declare two variables;
    // b) write in the variable any values;
    // c) display the values ​​of variables;
    // d) copy the value of one variable to another;
    // e) display the values ​​of the variables.

<script src="task013.js"></script>
// file "task013.js" contains:
let variab01;
var variab02;
variab01=50;
variab02=12345;
console.log("variab01=", variab01);
console.log("variab02=", variab02);
variab01=variab02;
console.log("variab01=", variab01);
console.log("variab02=", variab02);

//*********************  Task 4  **************************
 // Create an object with the following 5 properties: 
 // "String", "Number", "Boolean", "Undefined", "Null". 
 // The value of each property must correspond 
 // to the corresponding primitive data type.

<script src="task014.js"></script>
// file "task014.js" contains:
let xNumber = 50;
let xString = "Mykhaylo, Tlumak";
let xBoolean = true;
let xUndefined;
let xNull= null;
let xObj = {
    years: xNumber,
    yourName: xString,
    male: xBoolean,
    married: xUndefined,
    salary: xNull
}; 
console.log("Print data for object's items: ", xObj);

//*********************  Task 5  **************************
  // Using the confirm() function, ask the user whether 
  // they have reached the age of majority. 
  // Write the result in the variable isAdult and display it in the console.

<script src="task015.js"></script>
// file "task015.js" contains:
let isAdult = confirm("Have you reached adulthood?");
console.log("You have reached the age of majority:", isAdult);


//*********************  Task 6  **************************

<script src="task016.js"></script>
// file "task016.js" contains:
let youFirstName = "Mykhaylo";
let youLastName = "Tlumak";
let youGroup = "JS for QC 2021";
let youOld = 50;
let youMarried = true;
console.log(typeof youFirstName);
console.log(typeof youLastName);
console.log(typeof youGroup);
console.log(typeof youOld);
console.log(typeof youMarried);
console.log(youOld, youMarried, youFirstName, youLastName, youGroup);
let youNull= null;
let youUndefined;
console.log(youNull, youUndefined);

//*********************  Task 7  **************************
  // За допомогою функції prompt() напишіть скріпт, який послідовно запитує в користувача 
  // логін, емейл та пароль, і виводить на екран повідомлення із введеними даними. 
  // Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.

<script src="task017.js"></script>
//file "task017.js" contains:
let zUser = prompt("Enter your Login: ", "your LOGIN must be entered here" );
let zUsermale = prompt("Enter your e-mail: ", "your EMAIL must be entered here");
let zPassword = prompt("Enter your password: ", "your PASSWORD must be entered here");
console.log("Dear ", zUser, ", your e-mail is ", zUsermale, ", your password is ", zPassword);
document.write("Dear ", zUser, ", your e-mail is ", zUsermale, ", your password is ", zPassword);

//*********************  Task 7  ************************** 
  // Напишіть скріпт, який вираховує кількість секунд в годині, в добі, в місяці, 
  // записує результати в відповідні змінні, і виводить їх значення на екран.

<script src="task018.js"></script>
// file "task018.js" contains:
const oneSecond = 1;
const qSecondsHour = 60 * oneSecond;
const qSecondsDay = 24 * qSecondsHour;
const qSecondsMonth = 30 * qSecondsDay;
document.writeln("There are ", qSecondsHour, " seconds in a hour");
document.writeln("There are ", qSecondsDay, " seconds in a day");
document.writeln("There are ", qSecondsMonth, " seconds in a month");


// The solution of tasks for the Lecture-01 is completed
