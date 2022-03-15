document.getElementById("you").addEventListener("mouseover", function() {
    document.getElementById("you").style.backgroundColor = "red";
});
document.getElementById("you").addEventListener("mouseout", function() {
    document.getElementById("you").style.backgroundColor = "white";
});
    
document.getElementById("are").addEventListener("mouseout", function() {
    document.getElementById("are").style.backgroundColor = "green";
});
// document.getElementById("are").addEventListener("mouseout", function() {
//     document.getElementById("are").style.backgroundColor = "white";
// });
document.getElementById("g29").addEventListener("mouseout", function() {
    document.getElementById("g29").innerHTML="g28";
});
// double click
function fun() {
    document.getElementById("chitkara").innerHTML = " picasso";
    }
// change text on single click
function change_text(){
    document.getElementById("single").innerHTML = "chitkara";
}