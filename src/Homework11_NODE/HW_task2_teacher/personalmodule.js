let currentDate = new Date();
module.exports.date = currentDate;

module.exports.showMessage = function (name){
    let hour = currentDate.getHours();

    if ( (hour > 5) && (hour < 11) ) 
            return `Good morning, ${name}`;
    else if ( (hour > 11) && (hour < 17) )
        return `Good day, ${name}`;
    else if ( (hour > 18) && (hour < 24) )
        return `Good evening, ${name}`;
    else
        return `Good night, , ${name}`;
}