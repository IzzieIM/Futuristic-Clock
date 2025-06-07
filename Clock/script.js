
const time = document.getElementById("time");
const date = document.getElementById("date");

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decemvber"];


setInterval(() => {
    const now = new Date();
    let year = now.getFullYear()
    let month = now.getMonth();
    let day = now.getDay();
    let dayOfMonth = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    //   const milliseconds = now.getMilliseconds();

    

    let setday = days[day];
    let setmonth = months[month];
    time.innerHTML = ` ${hours} : ${minutes} : ${seconds}`;
    date.innerHTML = ` ${setday} , ${setmonth} ${dayOfMonth} ${year} `;

}, 100);

