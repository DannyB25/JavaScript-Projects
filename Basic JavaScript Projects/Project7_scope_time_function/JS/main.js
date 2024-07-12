var global = 100; //Assigning variable a global value 
function subtract_numbers_1(){ //Assigning function a name
    document.write(450 - global + "<br>"); //command 
}
function subtract_numbers_2(){ //Assigning function a name
    document.write(global - 200 + "<br>"); //command 
}
subtract_numbers_1(); //command 
subtract_numbers_2(); //command 

function multiply_numbers_1(){ //Assigning function a name
    var X = 10; //Assigning variable a "local" value 
    document.write(20 * X + "<br>"); //command 
}
multiply_numbers_1(); //command 

function add_numbers_1(){ //Assigning function a name
    var Y = 1; //Assigning variable a "local" value 
    console.log(2 + Y + "<br>"); //command 
}
function add_numbers_2(){ //Assigning function a name
    console.log(9 + Y + "<br>") //command 
}
add_numbers_1(); //calling function
add_numbers_2(); //calling function 

function say_hello(){ //Assigning function a name
    if (new Date().getHours() < 12) { //setting parameters for if 
        document.getElementById("hola").innerHTML= "Bonjour!"; //providing id and return value 
    }
}

function what_year(){ //Assigning function a name
    if (new Date().getFullYear() > 1999) { //setting parameters for if 
        document.getElementById("era").innerHTML= "It is the 21st century!"; //proving id and return value 
    }
}

function sleep_function() { //Assigning function a name
    clock = document.getElementById("clock").value; //providing variable with id and return value 
    if (clock >= 2200) { //setting parameters for if
        sleep = "go to sleep!"; //providing possible value if parameters are met
    }
    else {
        sleep = "you can stay up"; //providing possible value if parameters are not met
    }
    document.getElementById("what_hour_?").innerHTML = sleep; //providing id and return value 
}

function Time_function() { //Assigning function a name
    var Time = new Date().getHours(); //providing time variable values 
    var Reply;//setting variable name 
    if(Time < 12 == Time > 0) { //setting parameters for if 
        Reply="It is morning time!"; //providing possible value if parameters are met
    }
    else if (Time >= 12 == Time < 18) { //setting parameters for else if 
        Reply = "It is afternoon."; //providing possible value if parameters are met
    }
    else { //identifying else 
        Reply= "It is evening time."; //providing possible value if parameters are not met for if/elseif
    }
document.getElementById("Time_of_day").innerHTML=Reply; //providing id and return value 
}