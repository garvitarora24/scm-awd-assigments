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
    document.getElementById("chitkara").innerHTML = " chitkara university";
    }
// change text on single click
function change_text(){
    document.getElementById("single").innerHTML = "chitkara";
}
function change_text_1(){
    document.getElementById("single").innerHTML = "chitkara university";
}
function image(){
    document.getElementById("image").innerHTML="sher";
}

// function imagefun() {
//     var Image_Id = document.getElementById('image');
//     if (Image_Id.src.match("a.jpg")) {
//         Image_Id.src = "b.jpg";
//     }
//     else {
//         Image_Id.src = "a.jpg";
//     }
// }  
function myFunction() {
    document.getElementById("myImg").src = "https://th.bing.com/th/id/OIP.zIcQsRdYxlxMASOZtyYMIAHaH9?w=185&h=199&c=7&r=0&o=5&dpr=1.5&pid=1.7";
}
function myjod() {
    document.getElementById("myImg").src = "https://th.bing.com/th/id/OIP.PajQ3LoFOe3JNJdHVIAWzQHaEo?w=266&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7";

}