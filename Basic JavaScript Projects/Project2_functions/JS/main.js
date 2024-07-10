function helloThere(){ //assigning  a name to function
    var hi= "what is going on?"; //giving variable a name and value 
    document.getElementById("Button_Sentence").innerHTML = hi;  //gave the method an id value and entered the 
                                                                //variable we gave a value into innerhtml element
}

function destination() { //gave function a name 
    var wow = "here"; //gave variable a name and a value 
    document.getElementById("bob").innerHTML = wow; //gave method elementbyid method and id
                                                    //and gave innerhtml a variable 
}

function myFunction() { //gave function a name 
    var sentence = "I am using concatenate"; //gave variable a name and sentence 
    sentence += " to attach both parts of this sentence!"; //concatenated variable with additional sentence value 
    document.getElementById("Concatenate").innerHTML = sentence; //gave method an id and gave innerHTML a variable 
}