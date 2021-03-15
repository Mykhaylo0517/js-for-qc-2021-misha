// ************************************************************
// Here are examples of code from a classroom lecture N-04)
// ************************************************************

{/* <script type = "text/javascript">
    <!--
        window.print(;
    //-->
</script> */}

<script type = "text/javascript">
    {/* <!-- */}
        printMe();
    {/* //--> */}
</script>

try {
    console.log('Try block start');  
    // ... Code without  errors
    console.log('Try block end');   
} catch(error) {
    console.log('Catch is ignored, because there are no errors'); 
}
console.log('Code after try..catch');


try {
    console.log('Try block start');  
    c = a + b; // some logic in code
    console.log('Try block end');   
} catch(error) {
    console.log('Error has occurred!'); 
}
console.log('Code after try..catch');


try {
    console.log('Some text here');
    c = a+ b;
} catch(exception) {
    console.log('try..catch does not work, the code is incorrect');
}


// Handling exeptions. Error objects (3 types)
try {
    getUser();
} catch (exception) {
    console.log(exception.name); // "ReferenceError"
    console.log(exception.message); // "User is not defined"
    console.log(exception.stack); // "ReferenceError:User is not defined at example.html:42 "
}


// Own errors
let message = "ha-ha-ha";
let error1 = new SyntaxError(message); 
let error2 = new ReferenceError(message);
console.log(error1);
console.log(error2);

// example
function enterPIN() {
    let pin = prompt("Enter PIN-number (max length 4):", "");
    if (pin.length > 4) {
         throw new Error("Line length greater than 4 characters");
    }
    return pin;
}
try {
    let result = enterPIN();
    console.log(result);
} catch (exception) {
    console.log(exception.name);
    console.log(exception.message);
    console.log(exception.stack);
}

// Handling exceptions. Rethrowing (прокидування помилки)
function func() {
    try {
       someVar;
    } catch (error) {
       if (error.name === "TypeError") {    // if (error.name === "ReferenceError") {
          console.log("Error handling TypeError type");  // console.log("Error handling ReferenceError type");
          console.log(error.message);
       } else {
          throw error;
       }
    }
}
try {
    func();
} catch (error) {
    console.log("Error handling of any type");
    console.log(error.message);
}


// 
function func() {
    try {
       someVar;
    } catch (error) {
       if (error.name === "ReferenceError") {
          console.log("Error handling ReferenceError type");
          console.log(error.message);
       } else {
          throw error;
       }
    }
}
try {
    func();
} catch (error) {
    console.log("Error handling of any type");
    console.log(error.message);
}


//  with finally
try {
    console.log("Section try");
    count = count + 1;
 } catch (error) {
    console.log("Section catch");
    console.log(error.message);
 } finally {
    console.log("Section finally");
 }
 

try {
    console.log("Section try");
    let count;
    count = count + 1;
} catch (error) {
    console.log("Section catch");
    console.log(error.message);
} finally {
    console.log("Section finally");
}


function func() {
    try {
       return 1;
    } catch (error) {
       console.log("Section catch");
    } finally {
       console.log("Section finally");
    }
}
let result = func(); // "Section finally"
console.log(result); // 1

