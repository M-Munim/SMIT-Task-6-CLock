// let a;
// let date;
// let time;
// const options = {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
// };

// setInterval(() => {
//     a = new Date();
//     date = a.toLocaleDateString(undefined, options);
//     time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
//     document.getElementById("time").innerHTML = time + "<br>on " + date;
//     document.getElementById("year").innerHTML = a.getFullYear();
// }, 1000);

setInterval(() => {
    const a = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = a.toLocaleDateString(undefined, options);

    let hours = a.getHours();
    // console.log(hours)
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    // console.log(hours)
    hours = hours ? hours : 12; // Set 12 for midnight

    const time = hours + ":" + (a.getMinutes() < 10 ? '0' : '') + a.getMinutes() + ":" + (a.getSeconds() < 10 ? '0' : '') + a.getSeconds() + ' ' + ampm;

    document.getElementById("time").innerHTML = time + "<br> <br> <br><br>on " + date;
    document.getElementById("year").innerHTML = a.getFullYear();
}, 1000);
