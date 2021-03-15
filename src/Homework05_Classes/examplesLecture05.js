// ************************************************************
// Here are examples of code from a classroom lecture N-05)
// ************************************************************

// Classes. Access to properties
let employee = {
    firstName: "Peter",	
    lastName: "Peterson",
    position: "developer",	
    experience : 4  						
}
employee.firstName;        // "Peter"
// or the same access to the same element in the object
employee ["firstName"];    // "Peter"

// add new property in the same object
employee.salary = 2000;
console.log(employee);


// Methods 
let employee = {
    firstName: "Peter",	
    lastName: "Peterson",
    position: "developer",	
    experience : 4,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}
employee.fullName();

// this keyword
// case 2
let a = this;
console.log(a);  // Window
// case 3
function userFunction() {
    return this;	 // Window 	
}
// case 4 - this in a Function (Strict)   --- Cтрогий режим ("use strict") 
"use strict";
function userFunction() {
    return this; // undefined
}
// case 5
<button onclick="this.style.display='none'">
    Click to Remove Me!	 
</button> 

// 2. JavaScript Objects. Creating
let employee = new Object(); // Creates an empty object
employee.firstName = "Peter";
employee.lastName = "Peterson";
employee.position = "developer";
employee.fullName = function() {
    return this.firstName + " " + this.lastName; 
}
console.log(employee);

// 3. JavaScript Objects. Creating by constructor  -->  Using the object constructor function 
function Employee(firstName, lastName, position){
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
        }
    }
let devPeterPeterson = new Employee("Peter", "Peterson", "dev");
let testerJohnJohnson = new Employee("John", "Johnson", "tester");
let testerJohnJohnson3 = new Employee("John3", "Johnson3", "tester3");


// JavaScript Objects. hasOwnProperty()
let myObj = {  // create an object
       myProperty: 1000,
       myProperty2: function() { console.log( "hello" ); }
};
// check whether the object contains the specified own (not inherited) 
// property, or the method
console.log( myObj.hasOwnProperty("myProperty") );    // true
console.log( myObj.hasOwnProperty("myProperty2") );   // true
console.log( myObj.hasOwnProperty("myProperty3") );   // false




