var pierwszaLiczba = 10;
var drugaLiczba = 9;
function add(a, b ) {
    var suma = a+b;
    return suma;
};
var suma = add(pierwszaLiczba, drugaLiczba);
document.getElementById("wyniki").innerHTML = suma;
