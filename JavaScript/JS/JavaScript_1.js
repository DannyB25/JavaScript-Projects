function guitar_Function() {
    var guitar_Output;
    var guitar = document.getElementById("guitar_choice").value;
    var return_string = " is a rad guitar!!!";
    switch(guitar) {
        case "Les Paul":
            guitar_Output = "Les Paul" + return_string;
        break;
        case "Stratocaster":
            guitar_Output = "Stratocaster" + return_string;
        break;
        case "Telecaster":
            guitar_Output = "Telecaster" + return_string;
        break;
        case "Firebird":
            guitar_Output = "Firebird" + return_string;
        break;
        case "Flying V":
            guitar_Output = "Flying V" + return_string;
        break;
        case "Explorer":
            guitar_Output = "Explorer" + return_string;
        break;
        default:
            guitar_Output = "Please write in a guitar mentioned on the list as stated.";
        }  
        document.getElementById("favorite").innerHTML=guitar_Output;
}

function by_class() {
    var change = document.getElementsByClassName("Click");
    change[1].innerHTML= "The text has changed!";
}

var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");

//create gradient
var grd= ctx.createRadialGradient(100,80,20,100,399,343);
grd.addColorStop(0,"purple");
grd.addColorStop(1,"green");

//fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(4, 5, 200, 300);

var d= document.getElementById("second_Canvas");
var dtx= d.getContext("2d");

//create gradient 
var grade= dtx.createLinearGradient(3,34,343,565);
grade.addColorStop(0, "black");
grade.addColorStop(0.5, "red");
grade.addColorStop(1, "white");

//fill rectangle
dtx.fillStyle=grade;
dtx.fillRect(20,20,4000,300);