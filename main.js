window.onload = function() {
    setInterval(function() {
        var date = new Date();
        var time = date.toLocaleTimeString();
        document.getElementById("time").innerHTML = time;
    }, 1000)
}