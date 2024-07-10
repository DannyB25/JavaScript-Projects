function math_function() { //gave function a name 
    var addition = 10 + 10; //gave variable a value 
    document.getElementById("math").innerHTML= "10 + 10 = " + addition; //provided method id label and instruction/command
}

function subtract_function() { //gave function a name
    let subtraction = 4 - 3; //gave variable a value 
    document.getElementById("math2").innerHTML = "4 - 3 = " + subtraction; //provided method id label and instruction/command
}

function multiply_function() { //gave function a name
    const times = 12 * 2; //gave variable a value 
    document.getElementById("math3").innerHTML = "12 X 2 =" + times; //provided method id label and instruction/command
}

function divide_function() { //gave function a name
    var divide = 10 / 5; //gave variable a value 
    document.getElementById("math4").innerHTML = "10 / 5 = " + divide; //provided method id label and instruction/command
}

function multiple_math_function() { //gave function a name
    var simple_math = 5 + (2-1) * 2 / 2; //gave variable a value 
    document.getElementById("math5").innerHTML = "2 minus 1, multiplied by 2, divided by two and then plus 5 =" + simple_math; //provided method id label and instruction/command
}

function modulus_function() { //gave function a name
    var remainder = 10 % 3; //gave variable a value 
    document.getElementById("math6").innerHTML = "the remainder of 10 divided by 3 is " + remainder; //provided method id label and instruction/command
}

function negative_unary() { //gave function a name
    let x = 10; //gave variable a value 
    document.getElementById("math7").innerHTML = -x; //provided method id label and instruction/command
}

var y = 25; //gave variable a value 
y++; //command to increase y by 1
document.write(y); //command to write out result of y 

var z = 11; //gave variable a value 
z--; //command to decrease z by 1 
document.write(z); //command to wirte out result of z 

window.alert(Math.random()); //command alert to provide random number 
window.alert(Math.random() * 100000); //command alert to provide number between 0-100,000

function getting_pi() { //gave function a name
    document.getElementById("pi").innerHTML = Math.PI; //provided method id label and instruction/command
}

function round_down() { //gave function a name
    document.getElementById("reduce").innerHTML = Math.floor(18.6); //provided method id label and instruction/command
}