function currentTimes () {
    let date = new Date();
    let currentHour = date.getHours();
    let result = "";
    switch (true) {
        case (currentHour > 5 && currentHour <= 11): 
            result = "Good morning, ";
            break;
        case (currentHour > 11 && currentHour <= 17): 
            result = "Good day, ";
            break;
        case (currentHour > 17 && currentHour <= 23): 
            result = "Good evening, ";
            break;
        default: 
            result = "Good night, ";
        }
    return result;
    }

let abs = currentTimes();
module.exports = { abs };
