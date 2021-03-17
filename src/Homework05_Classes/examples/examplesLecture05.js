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


// CLASSES...
class MyClass {
    // методы класса
    constructor() { valuee1, value2 }
    method1() { code1 }
    method2() { code2 }
    method3() { code3 }
    code4;
}
// 
class Student {
    constructor(name) {
      this.name = name;
    }
}
let student = new Student("Sam");
student;


// CLASS and method
class Student {
    constructor(name) {
      this.name = name;
    }
    showName() {
      alert(this.name);
    }
}
// Using:
let student = new Student("Sam");
student.showName();  // Sam
  

// Classes. Before ECMAScript2015 (the same as above)
function Student(name) {
    this.name = name;
}
    Student.prototype.showName = function()
{
   alert(this.name); // Sam
}
var student = new Student("Sam");
student.showName();
 

// Static methods
class Book {
    constructor(author) {
      this.bookname = author;
    }
    static readBook() {
      return "You reading new book!";
    }
};  
let newbook = new Book("Dumas");
console.log(newbook.readBook());  // Error
console.log(Book.readBook());     // "You reading new book!"
  
// Static properties
class Book {
    static publishingYear = 2015;
}
console.log(Book.publishingYear); // 2015


// Getters and Setters
class User {
    constructor(name) {    
      this._name = name;
    }
    get name() {
      return this._name;
    }
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short");
        return;
      }
      this._name = value;
    }
}
let user = new User("Garry");
alert(user.name); // Garry call getter
let user2 = new User("David"); 
user2.name = "Bob"; //call setter: Name is too short


// Classes. Inheritance
class Animal {
       constructor(kind) {            
           this.kind = kind;
       }
       run() {            
           alert(this.kind + " runs!");
       }
    }
// Inherit from Animal specifying "extends Animal" 
class Leopard extends Animal {
    jump() {
        alert(this.kind + " jumps!");
    }
}
let leopard = new Leopard("Spotted leopard");
leopard.jump(); //  Spotted leopard jumps!
leopard.run(); //  Spotted leopard runs!
    

// Classes. Keyword super
class Animal {
    constructor(kind, weight) {
        this.kind = kind;
        this.weight = weight;
    }
    run() {
        alert(this.kind + " runs!");
    }
}
class Leopard extends Animal {
    constructor(kind, weight, speed) {
        super(kind, weight);
        this.speed = speed;
    }
    jump() {
        alert(this.kind + " jumps!");
    }
}
let leopard = new Leopard("Spotted leopard",40,60);
alert(leopard.weight); //  40
alert(leopard.speed);  //  60


// Classes. Polymorphism. Overriding a method
class Animal {
    constructor(kind, weight) {
        this.kind = kind;
        this.weight = weight;
    }
    run() {
        alert(this.kind + " runs!");
    }
}
class Leopard extends Animal {
    constructor(kind, weight, speed) {
        super(kind, weight);
        this.speed = speed;
    }
    run() {
        alert(this.kind + " runs!"); // super.run();
        alert(this.kind + " getting ready to jump");
    }
    jump() {
        alert(this.kind + " jumps!");
    }
}
let leopard = new Leopard("Spotted leopard",40,60);
leopard.run(); // Spotted leopard runs! // Spotted leopard getting ready to jump


// Classes. Encapsulation. Protected properties
class CoffeeMachine {
    waterAmount = 0; // the amount of water	inside
    constructor(power) {
        this.power = power;
        alert(`Created a coffee-machine, power: ${power}` );
    }
}
// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);
// add water
coffeeMachine.waterAmount = 200;

class CoffeeMachine {
    _waterAmount = 0;
    set waterAmount(value) {
        if (value < 0) throw new Error("Negative water");
        this._waterAmount = value;
    }
    get waterAmount() {
        return this._waterAmount;
    }
    constructor(power) {
        this._power = power;
    }
}
let coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmount = -10; // Error: 					Negative water




// Classes. Encapsulation. Private properties
class CoffeeMachine {
    #waterLimit = 200;
    checkWater(value) {
        if (value < 0) throw new Error("Negative water");
        if (value > this.#waterLimit) throw new Error("Too much water");
    }
}
let coffeeMachine = new CoffeeMachine();
coffeeMachine.checkWater(); 
// can't access privates from outside of the class
coffeeMachine.#waterLimit = 1000; // Error



class CoffeeMachine {
    #waterLimit = 200;
    get waterLimit() {    
        return this.#waterLimit; }
    set waterLimit(value) {    
        this.#waterLimit = value; }
    checkWater(value) {
        if (value < 0) throw new Error("Negative water");
        if (value > this.#waterLimit) throw new Error("Too much water");
    }
}
let coffeeMachine = new CoffeeMachine();
coffeeMachine.checkWater(); 
// can't access privates from outside of the class
coffeeMachine.waterLimit = 1200; 
