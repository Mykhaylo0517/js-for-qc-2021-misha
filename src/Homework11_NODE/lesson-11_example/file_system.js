const fs = require("fs");

// fs.readFile(`info.txt`, 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// console.log("asynchronous testing");

// const content = fs.readFileSync(`info2.txt`, "utf8");
// console.log(content);

// console.log("asynchronous testing2");

fs.writeFile(`newfile.txt`, "Hellllo!!!", (err) => {
    if (err) {
        console.log(err);
    }
});