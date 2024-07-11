function my_dictionary(){ //giving a name to the function
    var The_Band = {    //defining a variable
        Organ:"Garth Hudson",   //providing a value/KVP to variable The_Band
        Drummer:"Levon Helm",   //providing a value/KVP to variable The_Band
        Guitarist: "Robbie Robertson", //providing a value/KVP to variable The_Band
        Pianist:"Richard Manuel", //providing a value/KVP to variable The_Band
        Bassist:"Rick Danko", //providing a value/KVP to variable The_Band
        Singer:"Richard Manuel", //providing a value/KVP to variable The_Band
        Singer:"Levon Helm" //providing a value/KVP to variable The_Band
    };
    delete The_Band.Singer; //command the removal of a value for our variable 
    document.getElementById("Dictionary").innerHTML=The_Band.Singer; //provide an id to our method and a value to return 
}