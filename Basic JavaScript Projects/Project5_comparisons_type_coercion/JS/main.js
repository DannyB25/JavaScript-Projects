document.write("five" + 5); //concatenating two variables
document.write(9 + "Bob's"); //concatenating two variables
document.write(10E50404); //Demonstrating how to return an infinite number
document.write(-59E4905); //Demonstrating how to return a negative infinite number 

function my_Function() { //giving function a name 
    document.getElementById("number_test").innerHTML= 0/0 //Returning a NaN (Not a number)
}

function my_Function_2() { //giving function a name 
    document.getElementById("true").innerHTML = isNaN('This a number?'); //Returning true, not a number
}

function my_Function_3() { //giving function a name 
    document.getElementById("false").innerHTML = isNaN('0550505'); //Returning a false, as this is a number
}

function my_Function_4() { //giving function a name 
    var huge = 10E49999; //giving variable a value 
    document.getElementById("infinity").innerHTML = huge; //Returning infinity through a function
}

function my_Function_5() { //giving function a name 
    var less_than_huge = -48895E737493; //giving variable a value 
    document.getElementById("negative_infinity").innerHTML = less_than_huge; //returning negative infintiy through a function
}

document.write(1100 > 1); //Boolean logic, returns true

document.write(20 <= 5); //Boolean logic, returns false

console.log(5 * 5); //returning solution through console located in dev tools 
console.log(10 > 5000); //returning solution through console located in dev tools 

document.write(5 == (3+2)); //Boolean logic, returns true as they are equal
document.write(30 == 100); //Boolean logic, returns false as they aren't equal

a = "six"; //giving variable a value 
b = "six"; //giving variable a value 
document.write(a === b); //Boolean logic, returns true as they are equal in data type and value 

c = 8; //giving variable a value 
d = "job"; //giving variable a value 
document.write(c === d); //Boolean logic, returns false as they aren't equal in data type and value 

e = "ten"; //giving variable a value 
f = 10; //giving variable a value 
document.write(e === f); //Boolean logic, returns false as they are equal in value but not data type 

g = 3 //giving variable a value 
h = 4 //giving variable a value 
document.write(g === h);//Boolean logic, returns false as they are equal in data type but not value 

document.write(2 > 1 && 1 < 3); //Boolean logic; using AND operator; true
document.write(2 > 20 && 1 < 3); //Boolean logic; using AND operator; false

document.write(5 < 4 || 3 > 2); //Boolean logic; using OR operator; true
document.write(20 > 40 || 30 < 15); //Boolean logic; using OR operator; false

function not_function() { //giving a function a name 
    document.getElementById("not").innerHTML = !(30 > 20); //NOT operator; returns false 
}

function not_function_2() { //giving a function a name
    document.getElementById("not2").innerHTML = !(20 > 30); //NOT operator; returns true 
}
