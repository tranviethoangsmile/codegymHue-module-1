function colorNew() {
    var red = document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;
    document.getElementById("colorTest").style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    document.getElementById("r").innerHTML = red;
    document.getElementById("g").innerHTML = green;
    document.getElementById("b").innerHTML = blue;
}