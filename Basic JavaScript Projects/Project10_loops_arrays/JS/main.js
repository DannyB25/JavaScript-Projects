function Call_Loop() { //giving a function a name (this is a "while loop" function)
    var number= ""; //giving a variable a value 
    var X = 1; //giving a variable a value 
    while (X < 100) {  //while subfunction, setting parameters
        number += "<br>" + X; //command 
        X++; //command 
    }
    document.getElementById("Loop").innerHTML = number; //providing id and return value to method 
}

let text = "How long is this string?" //giving variable a value 
let length = text.length; //giving variable a value 
document.getElementById("characters").innerHTML=length; //giving a method an id and return value 

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = ""; //giving a variable a value 
var Y; //naming a variable 
function for_Loop() { //naming a function
    for (Y=0; Y < Instruments.length; Y++) { //conditions 
        Content += Instruments[Y] + "<br>"; //command 
    }
    document.getElementById("List_of_Instruments").innerHTML = Content; //providing method an id and return value 
}

function array_Function(){ //naming a function
    var Errand= []; //giving a variable a value 
    Errand[0]= "going to the grocery store"; //providing value to variable iteration
    Errand[1]= "going to the hardware store";  //providing value to variable iteration
    Errand[2]= "going to the doctor"; //providing value to variable iteration
    Errand[3]= "going to the pet store"; //providing value to variable iteration
    document.getElementById("Array").innerHTML= "The second errand I have to run is " + Errand[3] + "."; //providing id and return value 
}

function constant_function(){ //naming a function
    const work_out = {venue:"24 Hour Fitness", action:"basketball", type:"anaerobic"}; //providing constant a name w/ values 
    work_out.venue= "Multnomah Athletic Club"; //providing another value outside original group
    work_out.team= "with friends"; //providing another value outside original group
    document.getElementById("Constant").innerHTML= "I was at " + work_out.venue + " playing " + 
    work_out.action + " for " + work_out.type + " exercise " + work_out.team + "."; //providing id and return values to method 

}

function calling_Variable(){ //naming a function
    {
        let t = 454; //giving a variable a value 
        document.getElementById("print").innerHTML =t; //providing id and return value to method 
    }
}

function return_Statement(){ //naming a function
    return Math.PI; //providing command for function 
}
document.getElementById("get").innerHTML = return_Statement();

let Norm = { //naming a function and leading to parameters 
    species: "Canine ", //giving a variable a value 
    breed: "Golden Retriever ", //giving a variable a value 
    born: "2023 ", //giving a variable a value 
    personality: "silly ", //giving a variable a value 
    description: function(){ //beginning subfunction 
        return "Norm is a " + this.species + " " + this.breed + " born in " + this.born + " who is very "
        + this.personality + "."; //return values for subfunction 
    }
};
document.getElementById("my_Dog").innerHTML = Norm.description(); //providing id and return value for method 

let  age= ""; //giving a variable a value 
for (let year = 0; year < 50; year++) {  //parameters for for statement 
    if (year === 36) {break} //condition
    if (year === 25) { continue; } //condition
    age += "I was once " + year + "<br>"; //command  
}
document.getElementById("life").innerHTML=age; //providing id and return value to method 

