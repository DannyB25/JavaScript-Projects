function Ride_Function() { //providing name to a function
    var Height, Can_ride; //providing value to variable 
    Height = document.getElementById("Height").value; //providing method an id and also a command for variable
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //providing a command to a variable and a value to another 
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //give a method an ID and command 
}

function Vote_Function() { //providing name to a function
    var Age, Can_Vote; //providing value to variable
    Age = document.getElementById("Age").value; //providing method an id and also a command for variable
    Can_Vote = (Age < 18) ? "You are too young":"You are old enough"; //providing a command to a variable and a value to another 
    document.getElementById("Cast_Ballot").innerHTML = Can_Vote + " to vote."; //give a method an ID and command 
}

function Vehicle(Make, Model, Year, Color) { //providing a name to a function and parameters
    this.Vehicle_Make = Make; //providing a value to object
    this.Vehicle_Model = Model; //providing a value to object
    this.Vehicle_Year = Year; //providing a value to object
    this.Vehicle_Color = Color; //providing a value to object
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //providing values to variable/object
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); //providing values to variable/object
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard"); //providing values to variable/object
function myFunction() { //provide name for function 
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " //give a method an ID and command 
    + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " 
    + Erik.Vehicle_Year;

}

function Person(Profession, Married, Hometown, Kids) { //providing a name to a function and parameters
    this.Person_Profession = Profession; //providing a value to object
    this.Person_Married = Married; //providing a value to object
    this.Person_Hometown = Hometown; //providing a value to object
    this.Person_Kids = Kids; //providing a value to object
}
var Dan = new Person("Student", "No", "Portland", 0); //providing values to variable/object
var Percy = new Person("Architect", "Yes", "San Diego", 3); //providing values to variable/object
var Demetri = new Person("Veterinarian", "No", "Witchita", 8); //providing values to variable/object
function people_function() { //providing a name to a function 
    document.getElementById("New_and_This").innerHTML = "Percy is an " + Percy.Person_Profession  //give a method an ID and command
    + "." + Percy.Person_Married + " they are married, live in " + Percy.Person_Hometown + 
    " and have " + Percy.Person_Kids + " kids.";
}

function House(Materials, Time, Origin, Style) { //providing a name and parameters to a function
    this.House_Materials = Materials; //providing a value to object
    this.House_Time = Time; //providing a value to object
    this.House_Origin = Origin; //providing a value to object
    this.House_Style = Style; //providing a value to object
}
var Deco = new House("Rare/Expensive", "1910's", "Paris", "Color and Geometric Form"); //providing values to variable/object
var Tudor = new House("Half-Timbered", "1485", "England and Wales", "Perpendicular"); //providing values to variable/object
var Mar_Del_Plata = new House("Quartzite", "1935", "Argentina", "Monk and Nun Tiles"); //providing values to variable/object
    function house_Function() { //providing a name to a function 
        document.getElementById("Domicile").innerHTML = "Art Deco Features " + Deco.House_Materials  //give a method an ID and command 
        + " substances and " + Deco.House_Style + ". This architectural style began in the " 
        + Deco.House_Time + " in " + Deco.House_Origin + "."; 
}

function divide_Function() { //providing a name to a function 
    document.getElementById("Nested_Function").innerHTML= Count(); //providing a method an ID and a command 
    function Count() { //naming a function 
        var Starting_point= 900; //providing a variable a value 
        function divide_ten() {Starting_point /= 10;} //providing a function a name and a command 
        divide_ten(); //command 
        return Starting_point; //command 
    }
}



