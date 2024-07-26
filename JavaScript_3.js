function displayType(guitars) {
    var guitarType= guitars.getAttribute("data-guitar-type");
    alert(guitars.innerHTML + " is made by the " + guitarType + " Guitar Company!");
}

function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    let y = document.forms["myForm"]["number"].value;
    if (y == "") {
        alert("Number must be filled out");
        return false;
    }
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


