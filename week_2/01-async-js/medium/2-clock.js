// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can    you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function clock() {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
    const status = hours < 12 ? "am" : "pm";
    hours = hours % 12;
    hours = hours > 0 ? String(hours) : "12";
    const time12 = `${hours.padStart(2, '0')}:${minutes}:${seconds}   ${status} `
    console.log(time12);



}
clock();
setInterval(clock, 1000);
