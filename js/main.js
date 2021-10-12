function generateTime() {
    let timeNow = new Date();

    let hours = timeNow.getHours().toString().length < 2 ? "0" + timeNow.getHours() : timeNow.getHours();
    let minutes = timeNow.getMinutes().toString().length < 2 ? "0" + timeNow.getMinutes() : timeNow.getMinutes();

    let mainTime = `${hours} : ${minutes}`;
    document.getElementById("hora").innerHTML = mainTime;
}

setInterval(() => {
    generateTime();
}, 1000);

///------------------------------------------///

let date = new Date();
let days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let mainDays = `${days[date.getDay()]} ${date.getDate()} de ${months[date.getMonth()]}`;
document.getElementById("dia").innerHTML = mainDays;

///------------------------------------------///

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");

closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
});

function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}