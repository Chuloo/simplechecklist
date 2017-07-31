$(document).ready(function () {
    console.log("Hello World")
    function displayDate() {
        return Date()
    }
    let date = document.getElementById('date');
    date.innerHTML = displayDate()
})