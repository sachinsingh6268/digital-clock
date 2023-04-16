
function time() {
    let formatValue = document.getElementById("format").value;

    let date = new Date();

    let day = date.getDate();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;

    if (day < 10) {
        day = "0" + day;
    }

    if (month < 10) {
        month = "0" + month;
    }
    // console.log(day, month, year);

    document.getElementById("date").innerHTML = `  ${day} \\ ${month} \\ ${year}`;

    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();

    if (formatValue === "12") {
        hour -= 12;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }

    if (minute < 10) {
        minute = "0" + minute;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("time").innerHTML = `${hour} : ${minute} : ${seconds}`;
}

setInterval(time, 1000);