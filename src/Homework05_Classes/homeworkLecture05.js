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

// ********************  Task 3 **************************


// ********************  Task 4 **************************


// ********************  Task 5 **************************


// ********************  Task 6 **************************


// ********************  Task 7 **************************


// ********************  Task 8 **************************


// The solution of tasks for the Lecture-05 is completed
