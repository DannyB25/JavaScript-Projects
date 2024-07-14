function comprehensive(){ //named function 
    var part_1= "I am using ";  //provide value to variable 
    var part_2= "the concat method "; //provide value to variable 
    var part_3= "to put these sentences "; //provide value to variable 
    var part_4= "together. "; //provide value to variable 
    var part_5= "Pretty cool, right?"; //provide value to variable 
    var complete= part_1.concat(part_2, part_3, part_4, part_5); //provide variable a command/instructions
    document.getElementById("link").innerHTML= complete; //provide method an id and return value 
}

function slice_Method(){ //named function  
    var Sentence = "In the town where I was born, lived a man who sailed the sea."; //provide value to variable 
    var Section = Sentence.slice(24,28); //provide value to variable 
    document.getElementById("Slice").innerHTML=Section; //provide method an id and return value
}

function capitalize_Method() { //named function 
    let text = document.getElementById("Raise").innerHTML; //provide value to variable/id to method
    document.getElementById("Raise").innerHTML = text.toUpperCase(); //provide id to method and return value
}
function search_Method() { //named function 
    let text = "Mean Mr. Mustard sleeps in the dark, shaves in the park, tries to save paper." //provide value to variable 
    let position = text.search("Mustard"); //provide value to variable 
    document.getElementById("search").innerHTML= position; //provide id to method and return value 
}

function string_Method() { //named function
    var X = 2000000000;  //provide value to variable 
    document.getElementById("Numbers_to_string").innerHTML = X.toString(); //provide id to method and return value 
}

function precision_Method() { //named function
    var Y = 233.225688;
    document.getElementById("Precision").innerHTML=Y.toPrecision(7);
} 
function fixed_Method() { //named function
    let num=340.53434; //provide value to variable 
    let n = num.toFixed(3); //provide value/method to variable 
    document.getElementById("shrink").innerHTML=n; //provide id and return value to method 
}
function value_Method(){ //named function
    let num= 3434 //provide value to variable 
    let d= num.valueOf();  //provide value/method to variable 
    document.getElementById("Primitive").innerHTML = d; //provide id and return value to method 
}
