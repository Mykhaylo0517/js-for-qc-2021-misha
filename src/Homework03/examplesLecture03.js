// ************************************************************
// Here are examples of code from a classroom lecture N-03)
// ************************************************************

while (condition) {
    // code
    // also called
}

let i=0;
while (i<3){ // print 0, then 1, then 2
    alert (i);
    i++;
}

let i=0;
do {
    alert(i);
    i++;
} while (i<3)

for(let count = 0; count <10; count++) {
    console.log("Current Count : " + count)
}

let str="Message";
let a;
for (a of str) {
    document.write(a+"<br>");  // <br> -  next line
}

let k=1;
while(true){
    if(k==4){
        break;
    }
    console.log(k);
    k++;
}

function senMessage(){
    alert("Some message");
}
sendMessage(); // functional call

