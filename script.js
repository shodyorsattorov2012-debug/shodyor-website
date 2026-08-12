const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function () {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.innerHTML = "🌙";
    } else {
        themeBtn.innerHTML = "☀️";
    }

};
