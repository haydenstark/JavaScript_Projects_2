function cerealF() {
    var cerealOutput;
    var cereal = document.getElementById("cerealChoice").value;
    var cerealStr = " is such a good cereal!";
    var cerealStrPlural = " are the best!";
    var cerealWrong = " is hardly a good choice, try again.";
    switch(cereal) {
        case "Capn Crunch":
            cerealOutput = "Capn Crunch" +cerealStr;
            break;
        case "Reese's Puffs":
            cerealOutput = "Reese's Puffs" +cerealStrPlural;
            break;
        case "Cinnamon Toast Crunch":
            cerealOutput = "Cinnamon Toast Crunch" +cerealStr;
            break;
        case "Lucky Charms":
            cerealOutput = "Lucky Charms" +cerealStrPlural;
            break;
        case "Life":
            cerealOutput = "Life" +cerealStr;
            break;
        case "Cheerios":
            cerealOutput = "Cheerios" +cerealStrPlural;
            break;
        case "Raisin Bran":
            cerealOutput = "Raisin Bran" +cerealWrong;
            break;
        default:
            cerealOutput = "Please enter a cereal as written above.";
    }
    document.getElementById("output").innerHTML = cerealOutput;
}

function changeF() {
    var a = document.getElementsByClassName("click");
    a[0].style.color="blue";
}

var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");

var gradient = ctx.createLinearGradient(0,0,200,0);
gradient.addColorStop(0, "lavender");
gradient.addColorStop(1, "white");

ctx.fillStyle = gradient;
ctx.fillRect(0,0,200,200);

ctx.font = "30px Arial";
ctx.fillStyle = "black";
ctx.fillText("Boujee", 15, 175);

ctx.moveTo(0,0);
ctx.lineTo(200,200);
ctx.stroke();

ctx.beginPath();
ctx.arc(95,50,40,0, 2*Math.PI);
ctx.stroke()
