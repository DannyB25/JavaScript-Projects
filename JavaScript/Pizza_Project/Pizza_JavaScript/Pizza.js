function getReceipt() {
    //This initializes our string so it can get passed from
    //function to function, growing line by line into a full receipt 
    var text1 = "<h3>You Ordered:</h3>"; //providing value for variable
    var runningTotal = 0; //providing value for variable
    var sizeTotal = 0; //providing value for variable
    var sizeArray = document.getElementsByClassName("size"); //providing value for variable
    for (var i = 0; i < sizeArray.length; i++) { //for loop parameters follow
        if (sizeArray[i].checked) { //code to be executed if condition is true
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Slice Pizza") { //code to be executed if condition is true 
        sizeTotal = 2;
    }else if (selectedSize === "Personal Pizza") { //code to be executed if previous condition is not true
        sizeTotal = 6;
    }else if (selectedSize === "Medium Pizza") { //code to be executed if previous condition is not true
        sizeTotal = 10;
    }else if (selectedSize === "Large Pizza") { //code to be executed if previous condition is not true
        sizeTotal = 14;
    }else if (selectedSize === "Extra Large Pizza") { //code to be executed if previous condition is not true
        sizeTotal = 16;
    }
    runningTotal = sizeTotal; //providing variable a value 
    console.log(selectedSize+" = $"+sizeTotal+".00"); //message to console 
    console.log("size text1: "+text1); //message to console 
    console.log("subtotal: $"+runningTotal+".00"); //message to console 
    //these variables will get passed on to each function
    getTopping(runningTotal,text1);
};

function getTopping(runningTotal,text1) { //naming function and giving it a value/variables 
    var toppingTotal = 0; //providing variable a value 
    var selectedTopping = []; //providing variable a value 
    var toppingArray = document.getElementsByClassName("toppings"); //providing variable a value
    for (var j = 0; j < toppingArray.length; j++) { //for loop parameters
        if (toppingArray[j].checked) { //code to be executed if first condition isn't met 
            selectedTopping.push(toppingArray[j].value); 
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount= selectedTopping.length; //providing value to a variable 
    if (toppingCount > 1) { //code to be executed if condition is true 
        toppingTotal = (toppingCount - 1);
    }else { //code to be executed if condition is false 
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount); //message to console
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00"); //message to console
    console.log("topping text1: "+text1); //message to console
    console.log("Purchase Total: "+"$"+runningTotal+".00"); //message to console
    document.getElementById("showText").innerHTML=text1; //method providing element a specified value 
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>"; //method providing element a specified value 
};