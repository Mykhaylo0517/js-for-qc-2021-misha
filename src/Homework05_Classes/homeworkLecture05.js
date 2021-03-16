// *********** Practical task (Lecture 05)  *****************

// ********************  Task 1 **************************
function propsCount(currentObject) {
    let propsCount = 0;
    propsCount = Object.keys(currentObject).length;
    return propsCount;
}

let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};    
console.log(propsCount(mentor));

let mentorBig = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development",
    id4: 4,
    id5: 5, 
    age: "33"
};
console.log(propsCount(mentorBig));

let mentorEmpty = {};
console.log(propsCount(mentorEmpty));

// ********************  Task 2 **************************
function showProps(obj) {
    console.log(Object.keys(obj));
    let newId = Object.keys(obj);
    let j = Object.keys(obj).length;
    let ids;
    let newAr = [];
    for (let i = 0; i < j; i++) {
        ids = newId[i];
        newAr[i] = obj[ids];
    }
    console.log(newAr);
}

let obj1 = { 
    id1: "JS fundamental", 
    id2: 3,
    id3: true,
    id4: NaN,
    id5: null, 
};
showProps(obj1);

let obj2 = {};
showProps(obj2);

let obj3 = { 
    id1: "JS fundamental", 
    id3: 3,
    id4: true,
    id5: NaN,
    id2: null, 
    id_7: 777
};
showProps(obj3);

// ********************  Task 3 **************************
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName () {
    showFullName = this.surname + " " + this.name;
    }
}
class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    showCourse() {
        let date = new Date();
        let yearCurrent = date.getFullYear();
        let course = yearCurrent - this.year + 1;
        return course;
    }            
    showFullName (midleName) {
        let s = this.surname + " " + this.name + " " + midleName;
        return s;
    }
}
let stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych"));         // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 5

// ********************  Task 4 **************************


// ********************  Task 5 **************************


// ********************  Task 6 **************************


// ********************  Task 7 **************************


// ********************  Task 8 **************************


// The solution of tasks for the Lecture-05 is completed
