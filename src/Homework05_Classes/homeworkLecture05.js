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

// ********************  Task 1 (FROM THE TEACHER)  **************************=======
const mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development"
};
function propsCount(currentObject) {
    let osize = 0, key;
    for (key in currentObject) {
        if (currentObject.hasOwnProperty(key)) osize++;
    }
    return osize;
}
console.log("Count of properties of the current object: " + propsCount(mentor));

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
// ********************  Task 2 (FROM THE TEACHER)  **************************
function showProps(obj) {
    let props = [];
    for (let key in obj) {
        props.push(key);
    }
    for (let key in obj) {
        props.push(obj[key]);
    }
    return props;
}
console.log(showProps({Alex: 1982, John: 1994, Sam: 1997, Frank: 1990, Andrew: 1988}));

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

// ********************  Task 3 (FROM THE  TEACHER)   **************************
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName () {
        return this.surname + " " + this.name;
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
        return yearCurrent - this.year + 1;
    }            
    showFullName (midleName) {
        return super.showFullName() + " " + midleName;
    }
}
let stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych"));         // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 7
let stud2 = new Student("Ivan", "Ivanennko", 2017);
console.log(stud2.showFullName("Ivanovych"));         
console.log("Current course: " + stud2.showCourse()); //Current course: 5

// ********************  Task 4 **************************

// ********************  Task 4 (FROM THE TEACHER)    **************************
class Worker {
    #experience = 1.2;
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    showSalary() {
        console.log(`${this.fullName}  salary: ${this.dayRate * this.workingDays}`);
    }
    showSalaryWithExperience() {
        console.log(`${this.fullName}  salary: ${this.dayRate * this.workingDays * this.#experience}`);
    }
    showSalaryWorker() {
        return `${this.dayRate * this.workingDays * this.#experience}`;
    }
    get showExp() { 
        return this.#experience;
    }
    set setExp(experience) { 
        // if (experience <= this.#experience) throw new Error("the experience value didn't change...");
        this.#experience = experience; 
    }
    
    sortSalaries(wokerArray) {  // static
        let sortedSalary = workersArray.sort(function(a,b) {
            return a.showSalaryWorker() - b.showSalaryWorker();            
        })
        // console.log(sortedSalary);
        for (let i = 0; i < sortedSalary.length; i++) {
            console.log(sortedSalary[i].fullName + ": " + sortedSalary[i].showSalaryWorker());
        }
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
console.log(" ---------------------");

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);                 
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
console.log(" ---------------------");

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);                 
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
console.log(" ---------------------");

let workersArray = [worker1, worker2, worker3];
worker3.sortSalaries(workersArray);

// ********************  Task 5 **************************


// ********************  Task 6 **************************


// ********************  Task 7 **************************


// ********************  Task 8 **************************


// The solution of tasks for the Lecture-05 is completed
