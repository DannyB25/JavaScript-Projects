function displayType(guitars) {
    var guitarType= guitars.getAttribute("data-guitar-type");
    alert(guitars.innerHTML + " is made by the " + guitarType + " Guitar Company!");
}